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

describe("In a non-production environment", () => {
  before(async() => {
    await runEleventy('dev');
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
