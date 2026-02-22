/**
 * Video Optimization Script
 * 
 * This script checks and optimizes your video for web streaming.
 * It ensures the moov atom (metadata) is at the beginning of the file
 * so the video can start playing immediately.
 * 
 * Usage: node optimize-video.js
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const VIDEO_INPUT = path.join(__dirname, 'public', 'NavoVideo.mp4');
const VIDEO_OUTPUT = path.join(__dirname, 'public', 'NavoVideo-optimized.mp4');

console.log('🎬 Video Optimization Script for Web Streaming');
console.log('===============================================\n');

// Check if video exists
if (!fs.existsSync(VIDEO_INPUT)) {
  console.error('❌ Error: NavoVideo.mp4 not found in public folder');
  process.exit(1);
}

// Check if FFmpeg is installed
exec('ffmpeg -version', (error) => {
  if (error) {
    console.error('❌ FFmpeg not installed');
    console.error('\nThis optimization requires FFmpeg.');
    console.error('Install it from: https://ffmpeg.org/download.html\n');
    process.exit(1);
  }

  console.log('✅ FFmpeg found');
  console.log('📹 Analyzing video...\n');

  // Optimize video for web streaming
  // -movflags faststart moves moov atom to beginning
  // -preset fast for quick encoding
  // -crf 23 maintains good quality
  const command = `ffmpeg -i "${VIDEO_INPUT}" -c:v libx264 -preset fast -crf 23 -c:a aac -b:a 128k -movflags +faststart "${VIDEO_OUTPUT}" -y`;

  console.log('🔄 Optimizing video for instant streaming...');
  console.log('   This may take a few minutes...\n');

  const ffmpegProcess = exec(command);

  let dots = 0;
  const progressInterval = setInterval(() => {
    process.stdout.write('\r   Processing' + '.'.repeat(dots % 4) + '   ');
    dots++;
  }, 500);

  ffmpegProcess.on('close', (code) => {
    clearInterval(progressInterval);
    process.stdout.write('\r                    \r');

    if (code === 0) {
      const inputStats = fs.statSync(VIDEO_INPUT);
      const outputStats = fs.statSync(VIDEO_OUTPUT);
      const inputSizeMB = (inputStats.size / (1024 * 1024)).toFixed(2);
      const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);

      console.log('\n✅ Video optimized successfully!\n');
      console.log('📊 Results:');
      console.log(`   Original: ${inputSizeMB} MB`);
      console.log(`   Optimized: ${outputSizeMB} MB`);
      console.log(`   Reduction: ${((1 - outputStats.size / inputStats.size) * 100).toFixed(1)}%\n`);

      console.log('📁 Files:');
      console.log(`   Original: ${VIDEO_INPUT}`);
      console.log(`   Optimized: ${VIDEO_OUTPUT}\n`);

      console.log('🚀 Next steps:');
      console.log('   1. Backup your original video');
      console.log('   2. Replace NavoVideo.mp4 with NavoVideo-optimized.mp4');
      console.log('   3. Clear browser cache');
      console.log('   4. Reload your site - video should play INSTANTLY!\n');

      console.log('💡 Command to replace:');
      if (process.platform === 'win32') {
        console.log(`   move "${VIDEO_INPUT}" "${VIDEO_INPUT}.backup"`);
        console.log(`   move "${VIDEO_OUTPUT}" "${VIDEO_INPUT}"\n`);
      } else {
        console.log(`   mv "${VIDEO_INPUT}" "${VIDEO_INPUT}.backup"`);
        console.log(`   mv "${VIDEO_OUTPUT}" "${VIDEO_INPUT}"\n`);
      }

    } else {
      console.error(`\n❌ Optimization failed with code ${code}`);
      process.exit(1);
    }
  });
});
