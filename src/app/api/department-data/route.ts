// app/api/department-data/route.ts
import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { z } from "zod";
import { insertDepartmentDataSchema } from "../../../lib/schema";

const sql = neon(process.env.DATABASE_URL!);

// ✅ Get all department data
export async function GET() {
  try {
    const rows = await sql`SELECT * FROM department_data`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("GET all error:", error);
    return NextResponse.json({ error: "Failed to fetch department data" }, { status: 500 });
  }
}

// ✅ Create new section data
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = insertDepartmentDataSchema.parse(body);

    const [created] = await sql`
      INSERT INTO department_data (section, data)
      VALUES (${validated.section}, ${validated.data})
      RETURNING *;
    `;

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
  }
}
