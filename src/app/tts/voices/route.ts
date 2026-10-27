import { NextResponse } from "next/server";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export async function GET() {
  if (process.platform === "darwin") {
    try {
      const { stdout } = await execFileAsync("say", ["-v", "?"], {
        timeout: 5000,
      });
      if (stdout && stdout.trim()) {
        return new NextResponse(stdout, {
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          },
        });
      }
    } catch {
      // Fall back to browser speechSynthesis
    }
  }
  return NextResponse.json(
    { error: { message: "线上版使用浏览器朗读" } },
    { status: 404, headers: { "Cache-Control": "no-store" } }
  );
}
