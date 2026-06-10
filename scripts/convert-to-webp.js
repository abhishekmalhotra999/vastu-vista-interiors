#!/usr/bin/env node
/**
 * convert-to-webp.js
 * Converts all JPG/JPEG/PNG images in public/ to WebP alongside the originals.
 * Run: node scripts/convert-to-webp.js
 *
 * The originals are kept so <img src="...jpg"> still works as a fallback.
 * Apache .htaccess serves .webp automatically when the browser supports it.
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "../public");
const EXTENSIONS = [".jpg", ".jpeg", ".png"];

function walkDir(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (EXTENSIONS.includes(path.extname(item).toLowerCase())) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function convertToWebP(filePath) {
  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  // Skip if WebP already exists and is newer
  if (fs.existsSync(webpPath)) {
    const srcMtime = fs.statSync(filePath).mtimeMs;
    const webpMtime = fs.statSync(webpPath).mtimeMs;
    if (webpMtime >= srcMtime) {
      return { skipped: true, file: webpPath };
    }
  }

  const originalSize = fs.statSync(filePath).size;

  await sharp(filePath)
    .webp({ quality: 82, effort: 4 }) // quality 82 = excellent visual at ~40% smaller
    .toFile(webpPath);

  const newSize = fs.statSync(webpPath).size;
  const saving = Math.round((1 - newSize / originalSize) * 100);

  return { skipped: false, file: webpPath, originalSize, newSize, saving };
}

async function main() {
  console.log("🔍 Scanning public/ for images...\n");
  const files = walkDir(PUBLIC_DIR);
  console.log(`Found ${files.length} images to process.\n`);

  let converted = 0;
  let skipped = 0;
  let totalSaved = 0;

  for (const file of files) {
    const rel = path.relative(PUBLIC_DIR, file);
    try {
      const result = await convertToWebP(file);
      if (result.skipped) {
        skipped++;
        console.log(`  ⏭  Skipped (up to date): ${rel}`);
      } else {
        converted++;
        totalSaved += result.originalSize - result.newSize;
        const origKB = Math.round(result.originalSize / 1024);
        const newKB = Math.round(result.newSize / 1024);
        console.log(
          `  ✅ ${rel}`
          + `\n     ${origKB}KB → ${newKB}KB  (${result.saving}% smaller)`
        );
      }
    } catch (err) {
      console.error(`  ❌ Failed: ${rel}\n     ${err.message}`);
    }
  }

  console.log(`\n${"─".repeat(55)}`);
  console.log(`✅ Converted: ${converted}   ⏭  Skipped: ${skipped}`);
  console.log(`💾 Total saved: ${Math.round(totalSaved / 1024)}KB`);
  console.log(`\nDone! Apache will now serve .webp automatically via .htaccess.`);
}

main().catch(console.error);
