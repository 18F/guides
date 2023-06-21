const { DateTime } = require('luxon');
const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const yaml = require("js-yaml");
const svgSprite = require("eleventy-plugin-svg-sprite");
const { imageShortcode, imageWithClassShortcode } = require('./config');

module.exports = function (config) {
  // Set pathPrefix for site
  let pathPrefix = '/';

  // Copy the `admin` folders to the output
  config.addPassthroughCopy('admin');

  // Copy USWDS init JS so we can load it in HEAD to prevent banner flashing
  config.addPassthroughCopy({'./node_modules/@uswds/uswds/dist/js/uswds-init.js': 'assets/js/uswds-init.js'});

  // Add plugins
  config.addPlugin(pluginRss);
  config.addPlugin(pluginNavigation);

  //// SVG Sprite Plugin for USWDS USWDS icons
  config.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/uswds-icons",
    svgSpriteShortcode: 'uswds_icons_sprite',
    svgShortcode: 'uswds_icons'
  });

  //// SVG Sprite Plugin for USWDS USA icons
  config.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/usa-icons",
    svgSpriteShortcode: 'usa_icons_sprite',
    svgShortcode: 'usa_icons'
  });

  // Allow yaml to be used in the _data dir
  config.addDataExtension("yaml", contents => yaml.load(contents));

  config.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  config.addFilter('head', (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  config.addFilter('min', (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1
    );
  }

  config.addFilter('filterTagList', filterTagList);

  // Create an array of all tags
  config.addCollection('tagList', function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      class: 'direct-link',
      symbol: '#',
      level: [1, 2, 3, 4],
    }),
    slugify: config.getFilter('slug'),
  });
  config.setLibrary('md', markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('_site/404/index.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  // Set image shortcodes
  config.addLiquidShortcode('image', imageShortcode);
  config.addLiquidShortcode('image_with_class', imageWithClassShortcode);
  config.addLiquidShortcode("uswds_icon", function (name) {
    return `
    <svg class="usa-icon" aria-hidden="true" role="img">
      <use xlink:href="#svg-${name}"></use>
    </svg>`;
  });

  // If BASEURL env variable exists, update pathPrefix to the BASEURL
  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL
  }

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // Pre-process *.md files with: (default: `liquid`)
    // Other template engines are available
    // See https://www.11ty.dev/docs/languages/ for other engines.
    markdownTemplateEngine: 'liquid',

    // Pre-process *.html files with: (default: `liquid`)
    // Other template engines are available
    // See https://www.11ty.dev/docs/languages/ for other engines.
    htmlTemplateEngine: 'liquid',

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: pathPrefix,
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
