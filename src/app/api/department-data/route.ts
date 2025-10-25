import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertDepartmentDataSchema } from "@/lib/schema";

// ✅ Run at the edge for low latency
export const runtime = "edge";

// ✅ Get all department data (cached by Vercel Edge)
export async function GET() {
  try {
    const rows = await storage.getAllDepartmentData();

    return NextResponse.json(rows, {
      headers: {
        // Cache 1h, serve stale 1min while revalidating
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("GET all error:", error);
    return NextResponse.json(
      { error: "Failed to fetch department data" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

// ✅ Create new section data (secured via admin cookie)
export async function POST(req: NextRequest) {
  try {
    // ✅ Check admin cookie instead of Authorization header
    const token = req.cookies.get("admin_auth")?.value;
    if (token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const validated = insertDepartmentDataSchema.parse(body);

    const created = await storage.createDepartmentData(validated);

    // ✅ Revalidate edge cache (optional)
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/api/department-data`,
        { headers: { Authorization: `Bearer ${process.env.REVALIDATE_SECRET}` } }
      );
    } catch (e) {
      console.warn("Revalidation trigger failed:", e);
    }

    return NextResponse.json(created, {
      status: 201,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
  }
}
