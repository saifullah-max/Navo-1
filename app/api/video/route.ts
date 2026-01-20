import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // video file ka path
    const videoPath = path.join(process.cwd(), "public/NavoVideo.mp4");

    // file ka size nikal lo
    const stats = fs.statSync(videoPath);
    const fileSize = stats.size;

    // range header (partial load ke liye)
    const range = req.headers.get("range");

    // Always support range requests for chunked video delivery
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
      "Cache-Control": "public, max-age=31536000, immutable",
    });

    return new Response(file as any, { status, headers });
  } catch (error) {
    console.error("Video stream error:", error);
    return new Response("Error streaming video", { status: 500 });
  }
}
