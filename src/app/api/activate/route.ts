import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const code = typeof body?.code === "string" ? body.code.trim() : "";
    if (!code) {
      return NextResponse.json(
        { error: { message: "请输入邀请码" } },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    const expectedCode = process.env.INVITE_CODE?.trim();
    if (expectedCode && code !== expectedCode) {
      return NextResponse.json(
        { error: { message: "邀请码无效或已过期，请核对后重试" } },
        { status: 401, headers: { "Cache-Control": "no-store" } }
      );
    }

    const response = NextResponse.json(
      { active: true },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
    response.cookies.set("english_town_access", "1", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
    return response;
  } catch {
    return NextResponse.json(
      { error: { message: "验证失败，请稍后重试" } },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
