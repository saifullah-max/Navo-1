import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const videoPath = path.join(process.cwd(), "public/NavoVideo.mp4");
    const stats = await fs.promises.stat(videoPath);
    const fileSize = stats.size;
    const range = req.headers.get("range");
    
    // Optimize chunk size for faster initial load (1MB chunks)
    const CHUNK_SIZE = 1 * 1024 * 1024; // 1MB
    
    let start = 0;
    let end = fileSize - 1;
    let status = 200;
    let headers: Headers;
    let file;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      start = parseInt(parts[0], 10);
      // Limit chunk size for faster streaming
      end = parts[1] ? parseInt(parts[1], 10) : Math.min(start + CHUNK_SIZE - 1, fileSize - 1);
      status = 206;
    } else {
      // For non-range requests, send first chunk
      end = Math.min(CHUNK_SIZE - 1, fileSize - 1);
      status = 206;
    }

    const chunkSize = end - start + 1;
    file = fs.createReadStream(videoPath, { start, end, highWaterMark: 64 * 1024 });

    headers = new Headers({
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize.toString(),
      "Content-Type": "video/mp4",
      // Optimized cache for background loading
      "Cache-Control": "public, max-age=31536000, immutable",
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Timing-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff"
    });

    return new Response(file as any, { status, headers });
  } catch (error) {
    console.error("Video stream error:", error);
    return new Response("Error streaming video", { status: 500 });
  }
}
