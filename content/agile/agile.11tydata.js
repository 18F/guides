const guideNameFromPermalink = (permalink) => {
  const url = permalink.toString();
  const pathParts = url.split("/").filter((str) => str !== "");
  return pathParts[0];
};

const formatRedirectUrl = (data, host = null) => {
  const guideName = guideNameFromPermalink(data.permalink);
  let fullHost = `https://${guideName}.18f.gov`;
  if (host) {
    fullHost = `https://${host}`;
  }
  const trimmedUrl = data.permalink
    .toString()
    .replace(`/${guideName}`, fullHost);
  return trimmedUrl;
};

module.exports = {
  eleventyComputed: {
    redirect: true,
    redirectURL: (data) => formatRedirectUrl(data),
  },
  test: "the test worked!",
};
