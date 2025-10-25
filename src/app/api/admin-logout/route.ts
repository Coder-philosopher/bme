import { NextResponse } from "next/server";

export const runtime = "edge";

// ✅ Simple logout endpoint — no DB hit needed
export async function POST() {
  try {
    // (Optional) Add token blacklist or session invalidation logic later
    return NextResponse.json(
      { message: "Logged out successfully" },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
