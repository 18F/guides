# Guide to the Guides' front matter

Front matter is the set of key-value pairs you see at the top of many pages and posts. Front matter is written in YAML format and sets up some configuration for the page.

**title**: The title of the page, which will appear in both the body and the page as a header (H1 by default, see `page_title_tag`)
**page_title_tag**: When you need the title of the page to be something other than H1, use this. This takes the name of the tag only, like `h2` or `div` — don't set the full tag like `<h3>`.
**tags**: For this, we're just adding the slug of the Guide the page is in. This slug is also added as a class on the page title. (Normally an attribute like `tags` is used for classification metadata, and has multiple items.)
**sidenav**: Set to `true` if the page should have a sidenav.
**sticky_sidenav**: Set to `true` if the sidenav should stick the top of the window when scrolling.

See more about sidenav and navigation front matter in [/docs/replatforming].
