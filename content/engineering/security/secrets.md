---
title: Managing keys and secrets
sidenav: true
sticky_sidenav: true
permalink: /engineering/security/secrets/
tags: engineering
layout: layouts/page
eleventyNavigation:
  parent: engineering_security
  key: Managing keys and secrets
  order: 7
  title: Managing keys and secrets
subnav:
  - text: General best practices
    href: "#general-best-practices"
  - text: Framework guidance
    href: "#framework-guidance"
  - text: Deployment guidance
    href: "#deployment-guidance"
---

Developers use [sensitive information](https://handbook.tts.gsa.gov/general-information-and-resources/sensitive-information/#what-is-considered-sensitive), such as keys and secrets, throughout the lifecycle of an application from local development to production deployments. Keys are used to decrypt and encrypt information, while the term secret can be used for any sensitive values, like database passwords. If keys and secrets become compromised, your entire system and its data may be compromised as well.

The location of these secrets may be obvious, like in a configuration file that you created, or they may appear in less obvious places such as logs or generated manifests. Storing and using keys and secrets effectively and safely is critical for the security of your applications. Despite the importance of protecting this sensitive information, it is relatively common for them to be exposed.

## General best practices

### Practice the principle of least privilege

Limit the scope of your keys and secrets to particular environments and activities. A secret used with a development database should be different then the secret for the production database, and neither environment should have access or visibility into the secrets of the other.

Additionally, keys and secrets should be available only to the people and services that require access. This may require you to have multiple secrets for different levels of authorization.

### Protect secrets at all points

Keys and secrets should be protected at all times, whether at rest, in transit, or in use. Think through all the different locations your secrets could potentially show up – written in local config files, communicated between containers, stored in cloud key vaults, printed in logging, and more. Take steps to ensure they are secured at all points.

You cannot rely on obscurity to protect your keys and secrets. For example, just because a GitHub repository is "private" does not mean that it's a secure location for storing keys.

### Separate your secrets from your code

Architecting your application according to the principles of the [12 Factor App](https://12factor.net/config) with configuration injected into the running application via environment variables helps to encourage several good secrets practices.

- Secrets are not stored in the code base, which decreases the likelihood of accidentally checking them into source version control.
- The use of secrets in the code is decoupled from the actual secrets value, which encourages the use of separate non-production accounts for all supporting services.

### Double and triple check

Put guardrails in place to decrease the likelihood of accidentally exposing a secret or key. Separate out your secrets from configuration files and add the separate file to `.gitignore`. When committing your code, opening a PR, or doing code review, keep a wary eye out for anything that looks sensitive.

Don't just rely on yourself and your human coworkers! Use tooling to help you locate secrets at different stages of development. Pre-commit hooks can help you catch secrets and keys that might have otherwise been committed. Set up continuous integration (CI) tools to scan for secrets once you have pushed your code.

#### Before you commit

- [Cloud.gov caulking](https://github.com/cloud-gov/caulking)
- [trufflehog](https://github.com/trufflesecurity/trufflehog)
- [detect-secrets](https://github.com/Yelp/detect-secrets)

#### After you push

- [Snyk](https://snyk.io/)
- [GitLab secret detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/)
- [GitHub secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)

### Make a plan for changing secrets

Rotating your keys and changing your secrets should be done on a regular cadence, but you should also be prepared to change them quickly in an emergency. Make sure you are comfortable with the process and that your documentation is up to date so that you can follow the steps in a stressful situation.

Periodically audit your keys and secrets and remove and disable any that are no longer needed.

Regularly rotating your keys serves two purposes. First, the damage from an undetected secret exposure will be limited in time once the secret has been rotated. This is useful, but should not be a substitute for better monitoring to catch those circumstances earlier. The second reason is so that the team is practiced and ready to do a full secret rotation if and when an emergency occurs. Tabletop exercises will never prepare you to handle that situation as well as doing the rotation for real.

## Framework guidance

Web application frameworks often have built-in mechanisms and recommendations for managing credentials, secrets, and keys. Look for documentation across different stages of development to take advantage of their features.

### Ruby on Rails

Ruby on Rails stores secrets in the `config/credentials.yml.enc` file, which is encrypted with the `config/master.key` file or an environment variable. The encrypted credentials may be checked into source control, but the master.key may _not_. Store the key securely and share it only as needed with those people and systems that need to read the credentials.

[Read more about Ruby on Rail's custom credentials](https://guides.rubyonrails.org/security.html#environmental-security).

### Django

Django uses a `SECRET_KEY` variable for encrypting sessions, messages, and password reset tokens. It's typically found in your settings files. It should be kept secure and not committed to version control. When keys are rotated, your previous `SECRET_KEY` will be added to the `SECRET_KEY_FALLBACKS`. Both the `SECRET_KEY` and `SECRET_KEY_FALLBACKS` must be protected and shared securely with the people and systems who may need them.

Read more about Django's [SECRET_KEY](https://docs.djangoproject.com/en/5.0/ref/settings/#secret-key) and [cryptographic signing](https://docs.djangoproject.com/en/5.0/topics/signing/).

## Deployment guidance

Once we’re accessing our secrets from environment variables, we need a way to securely inject those secrets into the running environment. This is usually done by your CI/CD pipeline, though it may be worth looking into vaults or other secret manager stores if your application has many secrets to manage.

### CI / CD secrets

Source control and deployment tools such as GitHub, GitLab, and CircleCI provide environment variables that may be marked as sensitive, meaning they will be hidden from logging. __Note: Ensure that your CI/CD solution is authorized to at least the same level as your application before storing any secrets in it that can give access to production deployments.__

#### Resources for CI / CD secrets

- GitHub
  - [Using secrets in GitHub actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
  - [Security hardening for GitHub](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- GitLab
  - [Using external secrets in CI](https://docs.gitlab.com/ee/ci/secrets/)
  - [CI / CD variable security](https://docs.gitlab.com/ee/ci/variables/#cicd-variable-security)
- CircleCI
  - [Using secrets in CircleCI](https://circleci.com/docs/env-vars/#private-keys-and-secrets)

### Vaults, stores, and secret managers

Use services which secure the storage and access to secrets, such as secret managers, key vaults, and stores once managing secrets becomes unwieldy within CI/CD. These services can be used with CI / CD pipelines or on their own with the running application being granted access to the secret manager. There are many options depending on how your application is being hosted.

#### Resources / Options
- Cloud.gov
  - [User-provided services](https://cloud.gov/docs/services/intro/#when-to-use-a-user-provided-service)
- AWS
  - [AWS SSM Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)
  - [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)
  - [AWS Credentials Configuration for GitHub Actions](https://github.com/aws-actions/configure-aws-credentials)
- Google Cloud
  - [GCP Secret Manager](https://cloud.google.com/secret-manager)
- Other providers / use cases
  - [Hashicorp Vault](https://www.vaultproject.io/)
  - [aws-vault](https://github.com/99designs/aws-vault) - Uses OS key vault to protect AWS credentials for local use such as terraform state credentials.
