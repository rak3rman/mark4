import puppeteer = require("puppeteer");
import fs = require("fs");

async function generatePDF(url: string, path: string, filename: string) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-web-security",
      "--disable-features=VizDisplayCompositor",
    ],
  });

  const page = await browser.newPage();

  // Wait for the page to load
  await page.goto(url, { waitUntil: "networkidle0" });

  // Wait for fonts to load by checking document.fonts.ready
  await page.evaluate(() => {
    return document.fonts.ready;
  });

  // Additional wait to ensure all fonts are rendered
  await page.waitForFunction(() => document.fonts.status === "loaded", {
    timeout: 10000,
  });

  // Wait a bit more to ensure rendering is complete
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const pdf = await page.pdf({
    margin: {
      top: "0.525in",
      bottom: "0.525in",
      left: "0.6in",
      right: "0.6in",
    },
    printBackground: true,
    preferCSSPageSize: true,
  });

  const pdfFullPath = path + filename + ".pdf";

  fs.writeFile(pdfFullPath, pdf, () =>
    console.log("PDF Exported Successfully to '" + pdfFullPath + "'"),
  );

  await browser.close();
}

generatePDF(
  "http://localhost:3000/resume",
  "../public/",
  "radison-akerman-resume",
).then(() => console.log("Resume Done!"));

generatePDF(
  "http://localhost:3000/cv",
  "../public/",
  "radison-akerman-cv",
).then(() => console.log("CV Done!"));
