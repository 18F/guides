const { formatRedirectUrl } = require("../../utils/redirect-url.js");

module.exports = {
  eleventyComputed: {
    redirect: true,
    redirectURL: (data) => formatRedirectUrl(data),
  },
  test: "the test worked!",
};
