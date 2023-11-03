const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const Eleventy = require('@11ty/eleventy');
const jsdom = require('jsdom');
const childProcess = require('child_process');
const { JSDOM } = jsdom;

const REDIRECTS_FILE = path.resolve(__dirname, "..", "_data", "redirect_bases.yaml");
const redirectsData = fs.readFileSync(REDIRECTS_FILE, "utf8");
const redirects = yaml.load(redirectsData);
const GUIDE_NAMES = fs.readdirSync(path.resolve(__dirname, "..", "content"), {withFileTypes: true})
      .filter(entry => entry.isDirectory())
      .map(dirEntry => dirEntry.name);
const REDIRECTED_GUIDE_NAMES = Object.keys(redirects);
const REPLATFORMED_GUIDE_NAMES = GUIDE_NAMES.filter(name => !REDIRECTED_GUIDE_NAMES.includes(name));

const runEleventy = async (envName="") => {
  childProcess.execSync("npx @11ty/eleventy", {
    cwd: path.resolve(__dirname, ".."),
    timeout: 5000,
    env: Object.assign({}, process.env, {NODE_ENV: envName})
  });
  //let eleventy = new Eleventy(".", "_site", {quietMode: true});
  //await eleventy.write();
};

const getGuideIndexPath = (guideName) => {
  return path.resolve(__dirname, "..", "_site", guideName, "index.html");
};

const getDomForGuide = (guideName) => {
  const guidePath = getGuideIndexPath(guideName);
  const html = fs.readFileSync(guidePath, "utf8");
  return new JSDOM(html, {url: "https://localhost/", referrer: "https://localhost/"});
};

module.exports = {
  redirects,
  GUIDE_NAMES,
  REPLATFORMED_GUIDE_NAMES,
  REDIRECTED_GUIDE_NAMES,
  runEleventy,
  getDomForGuide
};
