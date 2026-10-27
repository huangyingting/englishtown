import { NextRequest, NextResponse } from "next/server";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readFile, unlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomUUID } from "node:crypto";

const execFileAsync = promisify(execFile);

export async function POST(request: NextRequest) {
  if (process.platform === "darwin") {
    const tmpFile = join(tmpdir(), `et-tts-${randomUUID()}.m4a`);
    try {
      const body = await request.json();
      const text = typeof body?.text === "string" ? body.text.trim() : "";
      const voice = typeof body?.voice === "string" ? body.voice.trim() : "";
      const rate = typeof body?.rate === "number" ? body.rate : 1;
      if (!text) {
        return NextResponse.json(
          { error: { message: "Missing text" } },
          { status: 400 }
        );
      }
      const wpm = String(Math.round(Math.max(0.5, Math.min(2, rate)) * 180));
      const args = ["-o", tmpFile, "--data-format=aac", "-r", wpm];
      if (voice) args.push("-v", voice);
      args.push(text);
      await execFileAsync("say", args, { timeout: 15000 });
      const audioBuffer = await readFile(tmpFile);
      return new NextResponse(audioBuffer, {
        status: 200,
        headers: {
          "Content-Type": "audio/mp4",
          "Cache-Control": "no-store",
        },
      });
    } catch {
      // Fall through to 404
    } finally {
      await unlink(tmpFile).catch(() => {});
    }
  }
  return NextResponse.json(
    { error: { message: "线上版使用浏览器朗读" } },
    { status: 404, headers: { "Cache-Control": "no-store" } }
  );
}
