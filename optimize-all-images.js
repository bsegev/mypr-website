const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function optimizeImages() {
  const imageDir = "public/images";
  const files = fs.readdirSync(imageDir);
  const imageFiles = files.filter(f => /\.(png|jpe?g)$/i.test(f));

  for (const image of imageFiles) {
    const inputPath = path.join(imageDir, image);
    const outputPath = path.join(imageDir, `optimized_${image}`);
    const isPNG = /\.png$/i.test(image);
    
    try {
      if (isPNG) {
        await sharp(inputPath)
          .png({ quality: 90, compressionLevel: 9 })
          .toFile(outputPath);
      } else {
        await sharp(inputPath)
          .jpeg({ quality: 85, mozjpeg: true })
          .toFile(outputPath);
      }
      
      fs.renameSync(outputPath, inputPath);
      console.log(`✓ Optimized ${image}`);
    } catch (err) {
      console.error(`✗ Failed to optimize ${image}:`, err.message);
    }
  }
}

optimizeImages().catch(console.error);