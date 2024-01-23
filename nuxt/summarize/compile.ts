import puppeteer = require("puppeteer");
import fs = require("fs");
import { fromBuffer } from "pdf2pic";

async function generatePDF(url: string, path: string, filename: string) {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForNavigation();

  const pdf = await page.pdf({
    margin: {
      top: "0.525in",
      bottom: "0.525in",
      left: "0.6in",
      right: "0.6in",
    },
    printBackground: true,
  });

  const pdfFullPath = path + filename + ".pdf";

  fs.writeFile(pdfFullPath, pdf, () =>
    console.log("PDF Exported Successfully to '" + pdfFullPath + "'"),
  );

  await browser.close();

  //  await fromBuffer(pdf, {
  //    density: 800,
  //    preserveAspectRatio: true,
  //    saveFilename: filename,
  //    savePath: path,
  //  }).bulk(-1, { responseType: "image" });
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
