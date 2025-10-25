// app/api/admin-login/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set({
      name: "admin_auth",
      value: process.env.ADMIN_TOKEN || "",
      httpOnly: true, // prevents JS access
      secure: process.env.NODE_ENV === "production", // secure cookies in prod
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 2, // valid for 2 hours
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}