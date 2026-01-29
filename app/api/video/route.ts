import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const videoPath = path.join(process.cwd(), "public/NavoVideo.mp4");
    const stats = await fs.promises.stat(videoPath);
    const fileSize = stats.size;
    const range = req.headers.get("range");
    let start = 0;
    let end = fileSize - 1;
    let status = 200;
    let headers: Headers;
    let file;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      start = parseInt(parts[0], 10);
      end = parts[1] ? parseInt(parts[1], 10) : end;
      status = 206;
    }

    const chunkSize = end - start + 1;
    file = fs.createReadStream(videoPath, { start, end });

    headers = new Headers({
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize.toString(),
      "Content-Type": "video/mp4",
      // Aggressive cache and preload hints
      "Cache-Control": "public, max-age=31536000, immutable, s-maxage=31536000, must-revalidate, proxy-revalidate, stale-while-revalidate=60, stale-if-error=86400",
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Timing-Allow-Origin": "*",
      "X-Accel-Buffering": "no"
    });

    return new Response(file as any, { status, headers });
  } catch (error) {
    console.error("Video stream error:", error);
    return new Response("Error streaming video", { status: 500 });
  }
}
