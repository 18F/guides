# 18F Guides

18F’s guides equip 18F teams, our partners, other practitioners, lawmakers, and the public with tools and practices to improve public services. They affirm experiences, build confidence, and empower exceptional digital experiences.

Since [18F guides launched in 2015](https://18f.gsa.gov/2015/05/28/18F-guides/), they are: 
- **Referenced and replicated broadly.** A review of traffic in 2022 found the guides were accessed more than 660,000 times across 217 countries, and guides have been printed, bound, and distributed within the United States Senate to help spread the word and make more data-driven decisions. This review found 454 GitHub forks across all the 18F Guides + Methods (our guides were previously maintained as separate products, and were consolidated in 2023).
- **Widely cited and used,** including in onboarding materials for organizations both public and private, as resources of best practices by programs like [Digital.gov](https://digital.gov/resources/), and with 18F’s agency partners. Agency partners continually highlight that the guides inform new ways of working even outside of teams building software, like adopting retrospectives within new acquisiton process reviews. In one project, an agency partner highlighted the guides empowered staff to introduce and demonstrate the value of usability testing, which resulted in a 90% reduction in engineering rework on their product.
- **Bettering delivery, within 18F and beyond.** The 18F Guides help us do our work well and consistently. They are a resource to 18F staff for orienting and onboarding, reference, partner support, knowledge management, training, continuity, and more. These best practices are cultivated over time through our open source process and enable us to share and apply knowledge across projects, allowing incremental improvement as our experience grows. As our projects benefit from this knowledge sharing, so do our partners and the people they serve.
- **Bringing new skilled technologists to government service.** The guides are cited as the way that current employees discovered, became attracted to, and ultimately applied to 18F. A review of 18F staff departures in 2023 found that 85% of people leaving 18F exited for another government technology position.

## I’d like to make a contribution, how do I update this content?

18F Guides aim to serve as the repository for best practices across 18F project teams. All team members are encouraged to suggest improvements that benefit the rest of the organization, particularly future new hires. 

Though these guides carry the 18F brand, the intention is to spread the use and cultivation of the material throughout the broader digital services community. As new digital service teams launch across government and agencies and existing teams seek to improve their current practices, the guides provide a government-centered vehicle for knowledge sharing and skills acquisition. The guides complement the [Digital Services Playbook](https://playbook.cio.gov/) by providing teams detailed, practical advice on how to implement the plays. Though these other teams are welcome to fork their own copies and maintain them, we hope the innovations these other teams develop will find their way into the guides, to the benefit of all government teams using them.

By developing this material in the open, we hope to encourage expert review and contributions from members of the tech community outside of government, furthering our goal of improving how government works through increased civic engagement of tech specialists. We hope this material and the means by which it is developed will attract new recruits to government technology positions, but for those who are not inclined to do so, helping cultivate the guides is a potentially high-visibility, high-impact contribution to government work that doesn’t require a major life change.

The [CODEOWNERS file](.github/CODEOWNERS) keeps track of who is in review & approver roles for content in the guides — if you’re not receiving a timely (within two weeks) review or notice the list is outdated, reach out to 18F’s Chief of Delivery for assistance. These reviewers will be automatically tagged appropriately when opening pull requests. Read [CONTRIBUTING](CONTRIBUTING.md) for more information.

## Development
The re-platformed sites use 11ty. If you could run Jekyll, you should be able to run 11ty! There are two approaches to working with the guides: [Local installation](#local-installation) and [Codespaces](#codespaces).


Ensure that you have the latest version of [Node](https://nodejs.org/en/download) installed. 

To run the site locally:

1. Clone this repo
2. From the repo directory, run:
   ```sh
   npm install
   npm run dev
   ```
3. Open http://localhost:8080

For more information on testing and repo configurations, read our in-depth [development docs](/docs/development.md).

### Codespaces
[Codespaces](https://github.com/features/codespaces) allows you to set up a development environment easily and without dependencies on a local machine.

#### Start a GitHub Codespace
1. From this repo, Click "Code" and then the "Codespaces" tab.
2. Click the "+" icon, agree to the terms.
3. You should then see the repo interface. At the bottom, check the branch you are currently viewing or create a new one.

#### Start the application and preview the site
1. Give this a few minutes to warm up. At first, it will have a message "Welcome to Codespaces."  If you wait a bit, you'll see it recognize the environment and start to install libraries for you.
2. Once it finishes installing the libraries, click on the "terminal" and type ```npm start```. 
3. It will think for 10 - 20 seconds and then you should see a message pop up on the right side that the site is available.  Click "open in the browser.

#### Make changes, preview them
1. Select a file from the file explorer that you want to edit.  Make some changes!  You should be able to refresh the preview tab to see them immediately. If you will be making changes to styles, you will need to restart the server via ```npm run dev``` for those to be reflected.

#### Commit your changes
1. When you’re happy with how things look, switch on the left-hand menu to the "sourcecode" view. It will show you any changes you have made. Click the file name (on the left) to view things you've removed/added to that file.
2. This is a good time to create a new branch if you haven't already started on one!  Click the three dots at the top of that menu, then "Branch" then "Create Branch".  Give it a name like "design-update" or "cool-new-footer" and hit enter.
3. You will need to stage each file that you want to be committed. Once that's done, it's time to commit and push!  You can click "commit" and then "publish" or you can use the arrow to select "commit & push".
4. On the lower right, it will ask you if you want to create a pull request.  If it's too soon, don't click this.  Otherwise, feel free!

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in
[CONTRIBUTING](https://handbook.tts.gsa.gov/contributing/):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the
> [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
