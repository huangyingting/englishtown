import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { active: false },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );
  response.cookies.set("english_town_access", "", {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    maxAge: 0,
  });
  return response;
}
