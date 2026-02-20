import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const videoPath = path.join(process.cwd(), "public/NavoVideo.mp4");
    const stats = await fs.promises.stat(videoPath);
    const fileSize = stats.size;
    const range = req.headers.get("range");
    
    // Smaller chunks (512KB) for faster initial playback
    const CHUNK_SIZE = 512 * 1024; // 512KB
    
    let start = 0;
    let end = fileSize - 1;
    let status = 206;
    let headers: Headers;
    let file;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      start = parseInt(parts[0], 10);
      // For the first request, send a larger initial chunk
      if (start === 0) {
        end = Math.min(start + (2 * CHUNK_SIZE) - 1, fileSize - 1);
      } else {
        end = parts[1] ? parseInt(parts[1], 10) : Math.min(start + CHUNK_SIZE - 1, fileSize - 1);
      }
    } else {
      // For initial request without range, send first 2MB for quick start
      end = Math.min(2 * CHUNK_SIZE - 1, fileSize - 1);
    }

    const chunkSize = end - start + 1;
    // Larger highWaterMark for better streaming performance
    file = fs.createReadStream(videoPath, { start, end, highWaterMark: 256 * 1024 });

    headers = new Headers({
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize.toString(),
      "Content-Type": "video/mp4",
      // Aggressive caching
      "Cache-Control": "public, max-age=31536000, immutable",
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Connection": "keep-alive"
    });

    return new Response(file as any, { status, headers });
  } catch (error) {
    console.error("Video stream error:", error);
    return new Response("Error streaming video", { status: 500 });
  }
}
