/**
 * Video Splitter Script
 * 
 * This script automatically creates a 5-second intro video from your main video
 * using FFmpeg. Run this script after ensuring FFmpeg is installed on your system.
 * 
 * Usage:
 *   node split-video.js
 * 
 * Requirements:
 *   - FFmpeg installed (https://ffmpeg.org/download.html)
 *   - NavoVideo.mp4 in the public folder
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const VIDEO_INPUT = path.join(__dirname, 'public', 'NavoVideo.mp4');
const VIDEO_OUTPUT = path.join(__dirname, 'public', 'navo-intro.mp4');
const INTRO_DURATION = 5; // seconds

console.log('🎬 Video Splitter Script');
console.log('========================\n');

// Check if input video exists
if (!fs.existsSync(VIDEO_INPUT)) {
  console.error('❌ Error: NavoVideo.mp4 not found in public folder');
  console.error('   Please ensure your main video is at: public/NavoVideo.mp4');
  process.exit(1);
}

// Check if output already exists
if (fs.existsSync(VIDEO_OUTPUT)) {
  console.log('⚠️  Warning: navo-intro.mp4 already exists');
  console.log('   It will be overwritten...\n');
}

// Check if FFmpeg is installed
exec('ffmpeg -version', (error) => {
  if (error) {
    console.error('❌ Error: FFmpeg is not installed or not in PATH');
    console.error('\nPlease install FFmpeg:');
    console.error('  • Windows: Download from https://ffmpeg.org/download.html');
    console.error('  • Mac: brew install ffmpeg');
    console.error('  • Linux: sudo apt install ffmpeg\n');
    process.exit(1);
  }

  console.log('✅ FFmpeg found');
  console.log(`📹 Input: ${VIDEO_INPUT}`);
  console.log(`🎯 Output: ${VIDEO_OUTPUT}`);
  console.log(`⏱️  Duration: ${INTRO_DURATION} seconds\n`);
  console.log('🔄 Creating intro video... This may take a moment.\n');

  // FFmpeg command to create optimized 5-second intro
  const command = `ffmpeg -i "${VIDEO_INPUT}" -t ${INTRO_DURATION} -c:v libx264 -preset fast -crf 23 -c:a aac -b:a 128k -movflags +faststart "${VIDEO_OUTPUT}" -y`;

  const ffmpegProcess = exec(command);

  // Show progress
  let dots = 0;
  const progressInterval = setInterval(() => {
    process.stdout.write('\r   Processing' + '.'.repeat(dots % 4) + '   ');
    dots++;
  }, 500);

  ffmpegProcess.stderr.on('data', (data) => {
    // FFmpeg outputs to stderr, we can ignore most of it
    // unless you want to show detailed progress
  });

  ffmpegProcess.on('close', (code) => {
    clearInterval(progressInterval);
    process.stdout.write('\r                    \r'); // Clear progress line

    if (code === 0) {
      // Check file size
      const stats = fs.statSync(VIDEO_OUTPUT);
      const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

      console.log('\n✅ Success! Intro video created successfully!\n');
      console.log(`📊 File size: ${fileSizeInMB} MB`);
      console.log(`📁 Location: ${VIDEO_OUTPUT}\n`);

      if (parseFloat(fileSizeInMB) > 3) {
        console.log('⚠️  Note: File size is larger than recommended (>3MB)');
        console.log('   Consider using a lower CRF value (higher = smaller file)');
        console.log('   Example: Add "-crf 28" instead of "-crf 23" to the command\n');
      } else {
        console.log('✨ Perfect! File size is optimal for fast loading.\n');
      }

      console.log('🚀 Next steps:');
      console.log('   1. Clear your browser cache');
      console.log('   2. Refresh your website');
      console.log('   3. The video should now load instantly!\n');
    } else {
      console.error(`\n❌ Error: FFmpeg exited with code ${code}`);
      console.error('   Check the error messages above for details\n');
      process.exit(1);
    }
  });
});
