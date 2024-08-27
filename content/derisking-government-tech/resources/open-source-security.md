---
title: Best practices for open source software security
permalink: /derisking-government-tech/resources/open-source-security/
layout: layouts/page
tags: derisking-government-tech
description: High-level explanation for keeping data, static assets, secrets, and code safe in an open source project.
eleventyNavigation:
  parent: derisking-government-tech-resources-open-source-security
  key: open-source-security
  order: 1
  title: Open source security
sidenav: true
sticky_sidenav: true
subnav:
- text: Keep data safe
  href: '#keep-data-safe'
- text: Keep static assets safe
  href: '#keep-static-assets-safe'
- text: Keep secrets safe
  href: '#keep-secrets-safe'
- text: Keep code safe
  href: '#keep-code-safe'
---

This is a high-level explanation for keeping data, static assets, secrets, and code safe in an open source project. Always work with your security team to make sure your project aligns with your agency’s requirements.

Learn more about secure implementation of open source software in the [DoD Open Source Software FAQ]({{ "https://dodcio.defense.gov/Open-Source-Software-FAQ/" | url }}).

---

## Keep data safe

* Keep data, such as page content or form responses, in a database.
* Ensure data is not shared when source code is published.
    * To do that, don’t hard-code data into the code and use a database or API for data retrieval.
* Databases need to be encrypted at rest and enable necessary logging.
* Manage your databases by routinely checking on access permission and logs.
* Make sure necessary data is backed up.

---

## Keep static assets safe

**Static assets** are information that is kept in files, such as media uploaded by site administrators or configuration files copied from the code base. To keep them safe:

* Separate private files from public files.
* Require access keys to read or write to secret files.
* Automatically rotate credentials, log access records, and audit permissions and access.
* For public files, there will be publicly viewable assets, but they should never have public write permissions.

---

## Keep secrets safe

Secrets like passwords, database configuration, connection, or account information should never go into a code base. To keep these safe:

* Store secrets and passwords for production in your hosting environment with configuration tools that encrypt secrets. This prevents the hosting service and malicious actors from getting access to them.
* As part of change control tooling, developers should use tools that check for common patterns of secrets in code in their local environment so they don’t become public.
* CI/CD tooling should not write out any secrets in its build output so anyone with access to the build logs won't be able to see that data.

---

## Keep code safe 

In this context, “code” refers to the program instructions that make the application run that aren’t covered in the above categories. These include:

* Basic configuration that should be the same across environments
* The instructions and rules for your application
* Which modules to install
* Themes and templates (css, html, etc.)
* Images like logos and favicons
* Tickets and nonsensitive discussions about code

To keep code safe:

* Keep private information and files out of the codebase and with your secure data and assets, as described above.
* Carefully review third-party packages.
* Use alerts for software updates and promptly apply security patches.
* Discuss potential security vulnerabilities in a private setting.
