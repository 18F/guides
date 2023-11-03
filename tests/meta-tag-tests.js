const chai = require('chai');
const utils = require("./utils.js");
const {
  redirects,
  GUIDE_NAMES,
  REPLATFORMED_GUIDE_NAMES,
  REDIRECTED_GUIDE_NAMES,
  runEleventy,
  getDomForGuide
} = utils;
const expect = chai.expect;
const assert = chai.assert;



describe("Redirection and indexing tests", () => {
  describe("In a production environment", () => {
    before(async() => {
      await runEleventy('production');
      console.log(process.env.NODE_ENV);
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
});
