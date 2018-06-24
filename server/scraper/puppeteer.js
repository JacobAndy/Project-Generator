require("dotenv").config();
const puppeteer = require("puppeteer");

const scraper = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.github.com");
  await page.click(
    "body > div.position-relative.js-header-wrapper > header > div > div.d-flex.flex-justify-between.flex-items-center > button"
  );
  await page.waitFor(3000);
  await page.click(
    "body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--bright.d-lg-flex.flex-justify-between.flex-auto > div > span > div > a:nth-child(1)"
  );
  await page.waitFor(2000);
  await page.type("#login_field", process.env.USER_LOGIN);
  await page.type("#password", process.env.USER_PASSWORD);
  await page.waitFor(200);
  await page.click(
    "#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block"
  );
  await page.waitFor(10000);
  await page.type(
    "body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.d-flex.flex-justify-between.flex-auto > div:nth-child(1) > div > div > div > form > label > input.form-control.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus",
    "Project-Generator"
  );
  await page.waitFor(5000);
  await page.click("#jump-to-results li:nth-child(2)");
  await page.waitFor(2000);
  await page.click(
    "#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.file-wrap > table > tbody > tr:nth-child(4) > .content > span > a"
  );
  await page.waitFor(2000);
  await page.click(
    "#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.file-wrap > table > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > span > a"
  );
  await page.waitFor(10000);
  await page.click(
    "#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.file > div.file-header > div.file-actions > form.inline-form.js-update-url-with-hash > button"
  );
  //   await page.waitFor(10000);
  await page.type(
    "#new_blob > div.file.js-code-editor.container-preview.show-code > div.commit-create > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code > div:nth-child(11) > div",
    "test"
  );
};
scraper();
module.exports = { scraper };
