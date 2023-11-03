const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const Eleventy = require('@11ty/eleventy');
const chai = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const expect = chai.expect;
const assert = chai.assert;

const REDIRECTS_FILE = path.resolve(__dirname, "..", "_data", "redirect_bases.yaml");
const redirectsData = fs.readFileSync(REDIRECTS_FILE, "utf8");
const redirects = yaml.load(redirectsData);
const GUIDE_NAMES = fs.readdirSync(path.resolve(__dirname, "..", "content"), {withFileTypes: true})
      .filter(entry => entry.isDirectory())
      .map(dirEntry => dirEntry.name);
const REDIRECTED_GUIDE_NAMES = Object.keys(redirects);
const REPLATFORMED_GUIDE_NAMES = GUIDE_NAMES.filter(name => !REDIRECTED_GUIDE_NAMES.includes(name));

const runEleventy = async (envName="") => {
  process.env.NODE_ENV = envName;
  let eleventy = new Eleventy(".", "_site", {quietMode: true});
  await eleventy.write();
};

const getGuideIndexPath = (guideName) => {
  return path.resolve(__dirname, "..", "_site", guideName, "index.html");
};

const getDomForGuide = (guideName) => {
  const guidePath = getGuideIndexPath(guideName);
  const html = fs.readFileSync(guidePath, "utf8");
  return new JSDOM(html, {url: "https://localhost/", referrer: "https://localhost/"});
};

describe("Redirection and indexing tests", () => {
  describe("In a production environment", () => {
    before(async() => {
      await runEleventy('production');
    });
    describe("The replatformed guide named", () => {
      REPLATFORMED_GUIDE_NAMES.forEach(replatformedGuide => {
        let document;
        beforeEach(() => {
          const dom = getDomForGuide(replatformedGuide);
          document = dom.window.document;
        });

        describe(`${replatformedGuide}`, () => {
          it('does NOT have a robots meta tag', () => {
            const robotsMeta = document.querySelector('meta[name="robots"]');

            expect(robotsMeta).to.not.exist;
          });

          it('does NOT have a redirect tag', () => {
            const redirectMeta = document.querySelector('meta[http-equiv="refresh"]');

            expect(redirectMeta).to.not.exist;
          });
        });
      });
    });
    
    describe("The redirected guide named", () => {
      REDIRECTED_GUIDE_NAMES.forEach(redirectedGuide => {
        let document;
        beforeEach(() => {
          const dom = getDomForGuide(redirectedGuide);
          document = dom.window.document;
        });

        describe(`${redirectedGuide}`, () => {
          it('has a robots meta tag with noindex', () => {
            const robotMeta = document.querySelector('meta[name="robots"]');

            expect(robotMeta).to.exist;
            expect(robotMeta.getAttribute('content')).to.equal("noindex");
          });

          it(`has a meta redirect to the correct site`, () => {
            const redirectMeta = document.querySelector('meta[http-equiv="refresh"]');

            expect(redirectMeta).to.exist;

            const redirectUrl = redirects[redirectedGuide];
            const expectedContent = `0;URL='${redirectUrl}'`;

            expect(redirectMeta.getAttribute('content')).to.equal(expectedContent);
          });
        });
      });
    });
  });


  describe("In a non-production environment", () => {
    before(async() => {
      await runEleventy('dev');
    });

    after(() => {
        const sitePath = path.resolve(__dirname, "..", "_site");
        fs.rmSync(sitePath, {recursive: true});
    });
    
    describe("The replatformed guide", () => {
      REPLATFORMED_GUIDE_NAMES.forEach(replatformedGuide => {
        let document;
        beforeEach(() => {
          const dom = getDomForGuide(replatformedGuide);
          document = dom.window.document;
        });

        describe(`${replatformedGuide}`, () => {
          it('has a robots meta tag', () => {
            const robotsMeta = document.querySelector('meta[name="robots"]');

            expect(robotsMeta).to.exist;
          });
        });
      });
    });
  });
});
