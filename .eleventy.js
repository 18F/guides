const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItFootnote = require('markdown-it-footnote');
const { readableDate, htmlDateString, head, min, filterTagList } = require("./config/filters");
const { headingLinks } = require("./config/headingLinks");
const { contrastRatio, humanReadableContrastRatio } = require("./config/wcagColorContrast");
const privateLinks = require ('./config/privateLinksList.js');
const svgSprite = require("eleventy-plugin-svg-sprite");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const yaml = require("js-yaml");

const { imageShortcode, imageWithClassShortcode } = require('./config');

module.exports = function (config) {
  // Set pathPrefix for site
  let pathPrefix = '/';

  // Copy the `admin` folders to the output
  config.addPassthroughCopy('admin');

  // Copy USWDS init JS so we can load it in HEAD to prevent banner flashing
  config.addPassthroughCopy({'./node_modules/@uswds/uswds/dist/js/uswds-init.js': 'assets/js/uswds-init.js'});

  // Specific scripts to guides
  config.addPassthroughCopy("./assets/_common/js/*");
  config.addPassthroughCopy("./assets/**/js/*");

  config.addPassthroughCopy({'./assets/_common/_img/favicons/favicon.ico': './favicon.ico' });
  config.addPassthroughCopy({'./assets/_common/_img/favicons': './img/favicons' });

  // Set download paths
  // Place files for download in assets/{guide}/dist/{filename.ext}
  config.addPassthroughCopy("./assets/**/dist/*");

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

  // Plugin to style code blocks
  config.addPlugin(syntaxHighlight);

  // Allow yaml to be used in the _data dir
  config.addDataExtension("yaml", contents => yaml.load(contents));

  // Filters
  // Add filter function defintions to config/filters.js, then add the functions
  // to the import statement above and define like the other filters.
  config.addFilter('readableDate', readableDate);
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  config.addFilter('htmlDateString', htmlDateString);
  config.addFilter('head', head); // Get the first `n` elements of a collection.
  config.addFilter('min', min); // Return the smallest number argument
  config.addFilter('filterTagList', filterTagList);
  // Color contrast checkers for the color matrix in the Brand guide
  config.addFilter('contrastRatio', contrastRatio);
  config.addFilter('humanReadableContrastRatio', humanReadableContrastRatio);

  // Create an array of all tags
  config.addCollection('tagList', function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Customize Markdown library and settings
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: false,
  }).use(markdownItAnchor, {
    permalink: headingLinks,
    slugify: config.getFilter('slugify'),
  }).use(markdownItAttrs).use(markdownItFootnote);
  config.setLibrary('md', markdownLibrary);

  // Override Footnote opener
  markdownLibrary.renderer.rules.footnote_block_open = () => (
  '<section class="footnotes">\n' +
  '<ol class="footnotes-list">\n'
  );

  // Add icons for links with locked resources and external links
  // https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md
  // Token methods:  https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L125
  const openDefaultRender = markdownLibrary.renderer.rules.link_open ||
    function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  markdownLibrary.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    let prefixIcon = '';
    if (privateLinks.some((link) => token.attrGet('href').indexOf(link) >= 0)) {
      prefixIcon = '<span class="usa-sr-only"> 18F only, </span>' +
                   '<svg class="usa-icon margin-top-2px margin-right-2px top-2px"' +
                   'aria-hidden="true" role="img">' +
                   '<use xlink:href="#svg-lock_outline"></use>' +
                   '</svg>'
    }

    // Check for external URLs
    const baseURL = new URL('https://guides.18f.gov/');
    const hrefValue = token.attrGet('href');

    if (!(new URL(hrefValue, baseURL).hostname === baseURL.hostname)) {
      // Add the external link class if it hasn't been added yet
      if (!(token.attrGet('class')) || !(token.attrGet('class').includes('usa-link--external'))) {
        token.attrJoin('class', 'usa-link usa-link--external');
      }

      // Set rel=noreferrer if it hasn't been set yet
      if (!(token.attrGet('rel')) || !(token.attrGet('rel').includes('noreferrer'))) {
        token.attrJoin('rel', 'noreferrer');
      }
    }

    return openDefaultRender(tokens, idx, options, env, self) + `${prefixIcon}`;
  };

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
