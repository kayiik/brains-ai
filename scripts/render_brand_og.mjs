import { writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const WIDTH = 1200;
const HEIGHT = 630;
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "brand/og/og-default.svg");
const canonical = resolve(root, "brand/og/og-default.png");
const projection = resolve(root, "site/assets/og-default.png");
const require = createRequire(resolve(root, "tests/e2e/package.json"));

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  throw new Error("Playwright is unavailable; run `npm --prefix tests/e2e ci` first");
}

const browser = await chromium.launch({
  headless: true,
  args: ["--force-color-profile=srgb"],
});

try {
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
    colorScheme: "light",
    locale: "en-US",
  });
  await page.goto(pathToFileURL(source).href, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);

  const svg = page.locator("svg");
  const box = await svg.boundingBox();
  if (!box || box.x !== 0 || box.y !== 0 || box.width !== WIDTH || box.height !== HEIGHT) {
    throw new Error(`SVG bounds must be ${WIDTH}x${HEIGHT} at 0,0`);
  }

  const png = await svg.screenshot({
    animations: "disabled",
    caret: "hide",
    scale: "css",
    type: "png",
  });
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (
    !png.subarray(0, 8).equals(signature) ||
    png.toString("ascii", 12, 16) !== "IHDR" ||
    png.readUInt32BE(16) !== WIDTH ||
    png.readUInt32BE(20) !== HEIGHT
  ) {
    throw new Error(`rendered PNG must be ${WIDTH}x${HEIGHT}`);
  }

  await Promise.all([writeFile(canonical, png), writeFile(projection, png)]);
  console.log(`Rendered ${WIDTH}x${HEIGHT} PNG to brand/og and site/assets`);
} finally {
  await browser.close();
}
