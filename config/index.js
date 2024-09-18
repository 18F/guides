const path = require('path');
const Image = require('@11ty/eleventy-img');

async function imageData(src) {
  const ext = path.extname(src);
  const fileType = ext.replace('.', '');

  const metadata = await Image(src, {
    formats: [fileType],
    outputDir: './_site/img/',
  });

  const data = metadata[fileType] ? metadata[fileType][0] : metadata.jpeg[0];
  return data;
}

function getPathPrefix() {
  let pathPrefix = '';

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }
  return pathPrefix;
}

async function imageUrl(src) {
  const pathPrefix = getPathPrefix();
  const data = await imageData(src);
  return `${pathPrefix}${data.url}`;
}

async function imageWithClassShortcode(
  src,
  cls,
  alt,
) {
  const url = await imageUrl(src);
  return `<img src="${url}" class="${cls}" alt="${alt}" loading="lazy" decoding="async">`;
}

async function imageShortcode(src, alt) {
  return await imageWithClassShortcode(src, '', alt);
}

module.exports = {
  imageWithClassShortcode,
  imageShortcode,
  imageUrl,
};
