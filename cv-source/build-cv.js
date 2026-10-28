// Renders cv-source/cv.html to assets/Muneeb_Ahmed_Butt_CV.pdf (A4, one page).
// Usage: node cv-source/build-cv.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'cv.html'));
  await page.pdf({
    path: path.join(__dirname, '..', 'assets', 'Muneeb_Ahmed_Butt_CV.pdf'),
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
  });
  await browser.close();
})();
