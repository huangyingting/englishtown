import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get("english_town_access")?.value;
  const defaultActive = process.env.DEFAULT_ACCESS_ACTIVE === "true";
  const active = defaultActive || Boolean(cookie && cookie !== "0" && cookie !== "false");
  return NextResponse.json(
    { active },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
