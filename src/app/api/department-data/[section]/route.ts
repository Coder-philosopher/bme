// app/api/department-data/[section]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";

export const runtime = "edge";

// ✅ Get specific section (edge cached)
export async function GET(_: NextRequest, context: { params: Promise<{ section: string }> }) {
  try {
    const { section } = await context.params;
    const row = await storage.getDepartmentData(section);

    if (!row)
      return NextResponse.json({ error: "Section not found" }, { status: 404 });

    return NextResponse.json(row, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("GET section error:", error);
    return NextResponse.json({ error: "Failed to fetch section" }, { status: 500 });
  }
}

// ✅ Update section data (secured via cookie)
export async function PUT(req: NextRequest, context: { params: Promise<{ section: string }> }) {
  try {
    const { section } = await context.params;
    const body = await req.json();

    // ✅ Read auth cookie
    const token = req.cookies.get("admin_auth")?.value;
    if (token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!body.data) {
      return NextResponse.json({ error: "Data is required" }, { status: 400 });
    }

    const updated = await storage.updateDepartmentData(section, body.data);

    // ✅ Revalidate cache for this section (optional)
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/api/department-data/${section}`,
        { headers: { Authorization: `Bearer ${process.env.REVALIDATE_SECRET}` } }
      );
    } catch (e) {
      console.warn("Revalidation trigger failed:", e);
    }

    return NextResponse.json(updated, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Failed to update section" }, { status: 500 });
  }
}
