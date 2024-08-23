---
title: Sample Quality Assessment Surveillance Plan (QASP)
permalink: /derisking/qasp/
redirect_from:
  - derisking/state-field-guide/qasp/
layout: layouts/page
tags: derisking
redirect-url: /derisking-government-tech/resources/
description: Sample Quality Assurance Surveillance Plan (QASP), a vendor management tool for tracking, evaluating, and correcting performance.
---

{% include 'derisking/chapter_image.html' img_path: "assets/derisking/img/qasp-checks.svg" %}

Per [the "Require demos, not memos" best practice]({{ "/derisking/state-field-guide/budgeting-tech/#require-demos-not-memos" | url }}), here is a sample QASP, which should be incorporated into agile software RFPs.

| **Deliverable** | **Performance Standard(s)** | **Acceptable Quality Level** | **Method of Assessment** |
| --- | --- | --- | --- |
| **Tested Code** | Code delivered under the order must have substantial test code coverage and a clean code base<br>Version-controlled, public repository of code comprising the product, which will remain in the government domain | Minimum of 90% test coverage of all code | Combination of manual review and automated testing |
| **Properly Styled Code** | [GSA 18F Front-End Guide](https://frontend.18f.gov/) | 0 linting errors and 0 warnings | Combination of manual review and automated testing |
| **Accessibility** | Web Content Accessibility Guidelines 2.1 AA standards | 0 errors reported using an automated scanner, and 0 errors reported in manual testing | [Pa11y](https://github.com/pa11y/pa11y) |
| **Deployed** | Code must successfully build and deploy into staging environment | Successful build with a single command | Combination of manual review and automated testing |
| **Documented** | All dependencies are listed and the licenses are documented. Major functionality in the software/source code is documented. Individual methods are documented inline using comments that permit the use of documentation-generation tools such as [JSDoc](http://usejsdoc.org/). A system diagram is provided. | Combination of manual review and automated testing, if available | Manual review |
| **Security** | [OWASP Application Security Verification Standard 4.0, Level 2](https://www.owasp.org/images/d/d4/OWASP_Application_Security_Verification_Standard_4.0-en.pdf) | Code submitted must be free of medium- and high-level static and dynamic security vulnerabilities | Clean tests from a static testing SaaS (such as [npm audit](https://docs.npmjs.com/cli/audit)) and from [OWASP ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project), along with documentation explaining any false positives |
| **User research** | Usability testing and other user research methods must be conducted at regular intervals throughout the development process (not just at the beginning or end) | Artifacts from usability testing and/or other research methods with end users are available at the end of every applicable sprint, in accordance with the vendor’s research plan | Manual review |

{.qasp-table}
