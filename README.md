# 18F approaches

A work in progress repository for consolidating the 18F Guides and Methods

## How do I update this content?

The [CODEOWNERS file](.github/CODEOWNERS) keeps track of who is in review & approver roles for content in this repository — if you’re not receiving a timely (within two weeks) review or notice the list is outdated, reach out to 18F’s Chief of Delivery for assistance. These reviewers will be automatically tagged appropriately when opening pull requests. 

## Development

### Docker

1. Clone this repo
2. Run `docker compose up`
3. Open http://localhost:8080

### Not Docker

To run the site locally:

1. Clone this repo
2. Run `npm install`
3. From the repo directory, run:
   ```sh
   npm install
   npm run dev
   ```
4. Open http://localhost:8080

### Accessiblity Scanning
We use `pa11y-ci` is used to scan for accessibility issues. The scan runs as part of
our CI setup (see the [pull-request.yml workflow](.github/workflows/pull-request.yml))
on every pull request, but it can also be run locally. To run locally, type:

```
npm run test:pa11y-ci
```

Note that running `pa11y-ci` inside the docker container may not always work.

## Contributing

If you are interested in contributing to this repository, you can read more at
[CONTRIBUTING](CONTRIBUTING.md).

## Replatforming 
Documentation on the replatforming effort can be found in [/docs/replatforming.md](/docs/replatforming.md)

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in
[CONTRIBUTING](https://handbook.tts.gsa.gov/contributing/):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the
> [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
