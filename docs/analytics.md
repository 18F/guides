---
permalink: false
eleventyExcludeFromCollections: true
---

# Analytics

**Resources linked in this section may only be accessible to 18F team members.**

## Background

The 18F team uses analytics to demonstrate the reach and impact of the 18F Guides. [This working document](https://docs.google.com/document/d/1I_xWyU46fL_3nQMQNWDivXKaduyUEb8Z4h4UAHoxalI/edit?tab=t.0) contains results for the 2024 fiscal year.

This documentation and the linked [Google Analytics exploration](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/analysis/p393249053/edit/M4DQeEDfR8GKg6bBSojjqw) record the data that the team collected, how, and why.

The purpose of these numbers is to be illustrative and persuasive of the 18F Guides’ reach and value to readers, rather than fully accurate or granular.


## Metrics and source data

| Metric | Intent | Source | Notes |
|--|--|--|--|
| Total guide page views | Illustrate the overall volume of use of the 18F guides. | [Google Analytics](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/analysis/p393249053/edit/M4DQeEDfR8GKg6bBSojjqw) | |
| Method card page views | Show the reach of the design methods guide specifically. | [Google Analytics](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/analysis/p393249053/edit/M4DQeEDfR8GKg6bBSojjqw) | |
| PDF downloads | Show that readers download guide content for print or email circulation. | [Google Analytics](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/analysis/p393249053/edit/M4DQeEDfR8GKg6bBSojjqw) | Download the CSV results from the linked Google Analytics exploration and manually filter the documents you want to include in your count. <br/><br/> Only the de-risking guide is available in a PDF edition for download. <br/><br/> Other guide pages can be printed as a PDF. In particular, method cards include a “Print this card” button. However, our Google Analytics data doesn’t currently track this action. |
| Number of countries visitors are from | Show the geographic breadth of the guides’ reach. | [Google Analytics](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/analysis/p393249053/edit/M4DQeEDfR8GKg6bBSojjqw) | |
| Number of guides published | Indicate the breadth of information and experience that 18F shares. | https://18f.gsa.gov/guides/ | Count the number of guides listed on 18F’s landing page. |
| Number of updates to guide contents | Demonstrate that the guides are frequently updated, living documents. | [GitHub pull request search](https://github.com/18F/guides/pulls?q=is%3Apr+-author%3Aapp%2Fdependabot+merged%3A%3E%3D2023-09-01+) | The count of PRs we’ve merged into the Guides site and deployed to production is a reasonable and easily countable metric for the number of content changes we’ve made within a time frame. <br/><br/> The link includes these search criteria: <br/><br/> - Include only PRs merged since a date in YYYY-MM-DD format (update it with the date you’d like to use) <br/> - Exclude PRs opened by Dependabot, an automated tool for patching security vulnerabilities |

## Using Google Analytics

### Getting started

18F uses Digital.gov’s [Digital Analytics Program](https://digital.gov/guides/dap/#content-start) (DAP) to collect user analytics. DAP is built on Google Analytics 360, which is the enterprise version of Google Analytics 4 (GA4). You may see the system referred to by any of those names.

If you don’t yet have access, follow the instructions on DAP’s [Get started](https://digital.gov/guides/dap/get-started-with-dap/#content-start) page to request a registration form via email. As stated on that page, “All federal employees and contractors who work for a participating agency can register for access to DAP”.

### Retrieving 18F Guides data

You can find the Google Analytics data points above in this [custom exploration](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/analysis/p393249053/edit/M4DQeEDfR8GKg6bBSojjqw).

To retrieve similar 18F Guides data for a different time period, you can open that exploration and modify the date range, or use its settings as a model for a new custom exploration.

To use the exploration to pull data for a time interval, do the following:

* Adjust the start and end dates in the page’s left nav. Note that user data is only reliably available after 24 hours and is only available for the past 12 months.
* Each of the four queries below is available as a tab within the exploration. When you open a tab or reset the time window, use the dropdown menu in the upper right of the page to switch the data quality from “Faster results” to “More detailed results”.
* From each tab, download the data in CSV format via the button in the upper right of the page, particularly if you want to work with the row-level data. The Google Analytics UI doesn’t always show all rows and reloading the page can reset your data quality options.
* The exploration generally uses sampled user event data, which is inexact. This is fine for most of our purposes, but when you’re interested in the full breadth of values for a metric — for example, the total number of countries that site visitors are from — selecting “Request unsampled results” from the data quality menu will provide a more complete data range. (The number of unsampled result requests per day is limited for the GSA account, so use this option sparingly.)
