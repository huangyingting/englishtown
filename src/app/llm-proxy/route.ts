import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const upstreamUrl = request.headers.get("x-upstream-url")?.trim();
  if (!upstreamUrl) {
    return NextResponse.json(
      { error: { message: "Missing x-upstream-url header" } },
      { status: 400 }
    );
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(upstreamUrl);
  } catch {
    return NextResponse.json(
      { error: { message: "Invalid x-upstream-url header" } },
      { status: 400 }
    );
  }

  const headers: Record<string, string> = {
    "content-type": "application/json",
  };

  const auth = request.headers.get("authorization");
  if (auth) {
    headers["authorization"] = auth;
  }

  const extraHeader = request.headers.get("x-upstream-extra");
  if (extraHeader) {
    try {
      const extra = JSON.parse(extraHeader);
      if (extra && typeof extra === "object") {
        for (const [k, v] of Object.entries(extra)) {
          if (typeof v === "string") {
            headers[k] = v;
          }
        }
      }
    } catch {
      // ignore malformed x-upstream-extra
    }
  }

  try {
    const bodyText = await request.text();
    const upstreamRes = await fetch(parsedUrl.toString(), {
      method: "POST",
      headers,
      body: bodyText,
    });
    const responseText = await upstreamRes.text();
    return new NextResponse(responseText, {
      status: upstreamRes.status,
      headers: {
        "content-type":
          upstreamRes.headers.get("content-type") || "application/json",
        "cache-control": "no-store",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Upstream request failed";
    return NextResponse.json({ error: { message } }, { status: 502 });
  }
}
