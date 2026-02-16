const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const assets = [
  {
    input: path.join(__dirname, "public", "favicon.ico"),
    output: path.join(__dirname, "public", "favicon-optimized.png"),
    width: 32,
    toFormat: "png", // sharp doesn't write ico easily without verifying headers, png is safer for favicon in modern browsers or I can just resize and save as jpg/png
  },
  {
    input: path.join(__dirname, "public", "assets", "background.jpg"),
    output: path.join(
      __dirname,
      "public",
      "assets",
      "background-optimized.jpg",
    ),
    width: 1920, // Resize to reasonable HD
    quality: 80,
  },
];

async function optimize() {
  console.log("Starting optimization...");

  // Handle background
  const bg = assets[1];
  if (fs.existsSync(bg.input)) {
    console.log("Optimizing background.jpg...");
    await sharp(bg.input)
      .resize({ width: bg.width, withoutEnlargement: true })
      .jpeg({ quality: bg.quality })
      .toFile(bg.output);

    // Replace original
    fs.unlinkSync(bg.input);
    fs.renameSync(bg.output, bg.input);
    console.log("background.jpg optimized.");
  } else {
    console.log("background.jpg not found.");
  }

  // Handle favicon - input is likely an ICO or just a large file named ico.
  // If it's a real ICO, sharp can read it but might fail on write.
  // Let's just create a standard size PNG and call it favicon.ico or keep it png.
  // Actually, the user's issue is size. 800KB favicon is huge.
  // Let's try to resize it.
  const fav = assets[0];
  if (fs.existsSync(fav.input)) {
    console.log("Optimizing favicon.ico...");
    try {
      // Attempt to read as image. If it fails, it might be a malformed ico or just not supported fully.
      // We 'll output as png, then rename to ico (browsers often handle this laxly) or just update the link in code.
      // Updating code is safer.
      await sharp(fav.input).resize(32, 32).png().toFile(fav.output);

      console.log("Created optimized favicon-optimized.png");

      // We won't overwrite the original favicon.ico immediately, simpler to change the code or let the user know.
      // Actually, for "clean" fix, let's just make sure the build doesn't choke.
      // Replacing the file is aggressive.
      // But the plan "Optimize Assets" implies changing them.
      // I'll replace it and rename it to .ico if possible, or just leave it as .png and update the reference?
      // The prompt says "Fixing Favicon Not Showing" was a previous task.
      // I'll stick to just resizing the background for now as it's 2MB.
      // For favicon, I'll resize it to a temp file and swap it if it worked.

      await sharp(fav.input)
        .resize(32, 32)
        .toFormat("png")
        .toFile(path.join(__dirname, "public", "favicon.png"));

      // Update the original file to be this small png, but named .ico? No, that's bad practice.
      // I will delete the huge favicon.ico and rename the new one to favicon.ico?
      // A PNG inside a .ico extension usually works in modern web, but let's just keep it as favicon.png and I might need to update the import in _app.tsx if I change the name.
      // For now, I will just REPLACE the content of favicon.ico with the resized PNG content. Most browsers utilize content-sniffing or don't care.
      // OR better, checking the file type.

      // Let's just do the background first, that's the biggest one. And maybe resize the favicon if it's really an image.
    } catch (e) {
      console.error("Failed to optimize favicon:", e);
    }
  }
}

optimize();
