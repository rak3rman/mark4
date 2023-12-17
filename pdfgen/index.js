const puppeteer = require("puppeteer");
const fs = require("fs");

async function generatePDF(url, path) {
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

  fs.writeFile(path, pdf, () =>
    console.log("PDF Exported Successfully to '" + path + "'")
  );

  await browser.close();
}

generatePDF(
  "http://localhost:3000/resume",
  "../public/radison-akerman-resume.pdf"
).then(() => console.log("Resume Done!"));

generatePDF(
  "http://localhost:3000/cv",
  "../public/radison-akerman-cv.pdf"
).then(() => console.log("CV Done!"));