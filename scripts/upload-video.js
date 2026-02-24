#!/usr/bin/env node

/**
 * Upload hero video to Vercel Blob Storage
 * 
 * SETUP STEPS:
 * 1. Install @vercel/blob: npm install @vercel/blob
 * 2. Get BLOB_READ_WRITE_TOKEN from Vercel dashboard
 * 3. Set as env var: export BLOB_READ_WRITE_TOKEN="your-token"
 * 4. Run: node scripts/upload-video.js
 * 
 * Output will be a CDN URL like:
 * https://abcd1234.public.blob.vercel-storage.com/NavoVideo.mp4
 */

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

async function uploadToVercelBlob() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (!token) {
    console.error("❌ BLOB_READ_WRITE_TOKEN not set!");
    console.error("   Get it from: https://vercel.com/dashboard");
    process.exit(1);
  }

  const videoPath = path.join(__dirname, "../public/NavoVideo.mp4");

  if (!fs.existsSync(videoPath)) {
    console.error(`❌ Video not found at ${videoPath}`);
    process.exit(1);
  }

  const fileBuffer = fs.readFileSync(videoPath);
  const fileSize = fileBuffer.length;

  console.log(`📤 Uploading NavoVideo.mp4 (${(fileSize / 1024 / 1024).toFixed(2)} MB)...`);

  try {
    const response = await fetch("https://blob.vercel-storage.com/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "video/mp4",
      },
      body: fileBuffer,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const result = await response.json();
    const cdnUrl = result.url;

    console.log("✅ Upload successful!");
    console.log(`\n📺 CDN URL:\n${cdnUrl}\n`);
    console.log("Update your app/page.tsx with:");
    console.log(`<source src="${cdnUrl}" type="video/mp4" />`);
  } catch (error) {
    console.error("❌ Upload error:", error.message);
    process.exit(1);
  }
}

uploadToVercelBlob();
