const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { execSync } = require("child_process");

const folder = path.join(__dirname, "src/assets");

// Function to compress JPG/PNG
async function compressImage(filePath) {
  try {
    const data = await sharp(filePath)
      .resize({ width: 1920 }) // Optional: max width
      .toBuffer();
    fs.writeFileSync(filePath, data);
    console.log("Compressed:", filePath);
  } catch (err) {
    console.log("Skipped (cannot open):", filePath);
  }
}

// Function to compress SVG
function compressSVG(filePath) {
  try {
    execSync(`npx svgo "${filePath}"`);
    console.log("Compressed SVG:", filePath);
  } catch (err) {
    console.log("Skipped SVG (cannot open):", filePath);
  }
}

// Read folder and process files
fs.readdirSync(folder).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const filePath = path.join(folder, file);

  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
    compressImage(filePath);
  } else if (ext === ".svg") {
    compressSVG(filePath);
  }
});

console.log("Compression attempt complete!");
