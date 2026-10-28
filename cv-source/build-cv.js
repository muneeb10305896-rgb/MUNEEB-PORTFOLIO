// Renders the CV sources to one-page A4 PDFs:
//   cv-source/cv.html    -> assets/Muneeb_Ahmed_Butt_CV.pdf     (English)
//   cv-source/cv-fi.html -> assets/Muneeb_Ahmed_Butt_CV_FI.pdf  (Finnish)
// Usage: node cv-source/build-cv.js
const path = require('path');
const { chromium } = require('playwright');

const CVS = [
  ['cv.html', 'Muneeb_Ahmed_Butt_CV.pdf'],
  ['cv-fi.html', 'Muneeb_Ahmed_Butt_CV_FI.pdf'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const [src, out] of CVS) {
    await page.goto('file://' + path.join(__dirname, src));
    await page.pdf({
      path: path.join(__dirname, '..', 'assets', out),
      format: 'A4',
      printBackground: true,
      pageRanges: '1',
    });
  }
  await browser.close();
})();
