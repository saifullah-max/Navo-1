/**
 * Image Compression Script
 * 
 * Compresses PNG/JPG images in the public folder to optimize load times
 * Requires: sharp (npm install sharp)
 * 
 * Usage: node compress-images.js
 */

const fs = require('fs');
const path = require('path');

console.log('🖼️  Image Compression Script');
console.log('===========================\n');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
  console.log('✅ Sharp is installed\n');
} catch (error) {
  console.error('❌ Sharp is not installed');
  console.error('\nPlease install it first:');
  console.error('  npm install sharp --save-dev\n');
  process.exit(1);
}

const PUBLIC_DIR = path.join(__dirname, 'public');
const imagesToCompress = [
  'sw1.png',
  'sw2.png',
  'sw3.png',
  'sw4.png',
  'sw5.png',
  'sw6.png'
];

async function compressImage(filename) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  const outputPath = path.join(PUBLIC_DIR, `${path.parse(filename).name}-compressed${path.parse(filename).ext}`);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  ${filename} not found, skipping...`);
    return;
  }

  const inputStats = fs.statSync(inputPath);
  const inputSizeKB = (inputStats.size / 1024).toFixed(2);

  try {
    await sharp(inputPath)
      .resize(840, 1000, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: 85,
        progressive: true
      })
      .toFile(outputPath.replace('.png', '.jpg'));

    const outputStats = fs.statSync(outputPath.replace('.png', '.jpg'));
    const outputSizeKB = (outputStats.size / 1024).toFixed(2);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✅ ${filename}`);
    console.log(`   Original: ${inputSizeKB} KB`);
    console.log(`   Compressed: ${outputSizeKB} KB`);
    console.log(`   Saved: ${reduction}%`);
    console.log(`   Output: ${path.basename(outputPath.replace('.png', '.jpg'))}\n`);
  } catch (error) {
    console.error(`❌ Failed to compress ${filename}:`, error.message, '\n');
  }
}

async function compressAll() {
  console.log('🔄 Starting compression...\n');
  
  for (const image of imagesToCompress) {
    await compressImage(image);
  }

  console.log('✨ Done!\n');
  console.log('📝 Next steps:');
  console.log('   1. Review the compressed images');
  console.log('   2. Update your code to use .jpg instead of .png');
  console.log('   3. Backup originals and replace them');
  console.log('   4. Clear browser cache and test\n');
  
  console.log('💡 To replace in code, update swiper-section.tsx:');
  console.log('   Change: image: "/sw1.png"');
  console.log('   To:     image: "/sw1.jpg"\n');
}

compressAll().catch(console.error);
