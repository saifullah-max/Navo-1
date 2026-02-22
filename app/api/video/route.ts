import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const videoPath = path.join(process.cwd(), "public/NavoVideo.mp4");
    const stats = await fs.promises.stat(videoPath);
    const fileSize = stats.size;
    const range = req.headers.get("range");
    
    // Optimized chunk sizes for instant playback
    const INITIAL_CHUNK = 3 * 1024 * 1024; // 3MB initial for moov atom + first frames
    const CHUNK_SIZE = 1 * 1024 * 1024; // 1MB subsequent chunks
    
    let start = 0;
    let end = fileSize - 1;
    let status = 206;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      start = parseInt(parts[0], 10);
      
      // First request gets large chunk to include video metadata
      if (start === 0) {
        end = Math.min(INITIAL_CHUNK - 1, fileSize - 1);
      } else {
        end = parts[1] 
          ? parseInt(parts[1], 10) 
          : Math.min(start + CHUNK_SIZE - 1, fileSize - 1);
      }
    } else {
      // Non-range request: send large initial chunk
      end = Math.min(INITIAL_CHUNK - 1, fileSize - 1);
    }

    const chunkSize = end - start + 1;
    
    // Stream with larger buffer for smoother playback
    const file = fs.createReadStream(videoPath, { 
      start, 
      end, 
      highWaterMark: 512 * 1024 // 512KB buffer
    });

    const headers = new Headers({
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize.toString(),
      "Content-Type": "video/mp4",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Connection": "keep-alive",
      "X-Content-Type-Options": "nosniff"
    });

    return new Response(file as any, { status, headers });
  } catch (error) {
    console.error("Video stream error:", error);
    return new Response("Error streaming video", { status: 500 });
  }
}
