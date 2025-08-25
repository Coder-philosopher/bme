// app/api/department-data/[section]/route.ts
import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// ✅ Get specific section
export async function GET(_: Request, context: { params: Promise<{ section: string }> }) {
  try {
    const { section } = await context.params; // 👈 await here
    const [row] = await sql`SELECT * FROM department_data WHERE section = ${section}`;
    
    if (!row) {
      return NextResponse.json({ error: "Section not found" }, { status: 404 });
    }
    return NextResponse.json(row);
  } catch (error) {
    console.error("GET section error:", error);
    return NextResponse.json({ error: "Failed to fetch section" }, { status: 500 });
  }
}

// ✅ Update section
export async function PUT(req: Request, context: { params: Promise<{ section: string }> }) {
  try {
    const { section } = await context.params; // 👈 await here
    const body = await req.json();
    
    if (!body.data) {
      return NextResponse.json({ error: "Data is required" }, { status: 400 });
    }

    const [updated] = await sql`
      INSERT INTO department_data (section, data)
      VALUES (${section}, ${body.data})
      ON CONFLICT (section) DO UPDATE SET data = ${body.data}
      RETURNING *;
    `;

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Failed to update section" }, { status: 500 });
  }
}
