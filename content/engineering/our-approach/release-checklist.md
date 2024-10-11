---
title: Release checklist
sidenav: true
sticky_sidenav: true
tags: engineering
permalink: /engineering/our-approach/release-checklist/
redirect_from:
  - engineering/release-checklist/
layout: layouts/page
eleventyNavigation:
  parent: engineering_approach
  key: Release checklist
  order: 10
  title: Release checklist
subnav:
  - text: What is a release checklist?
    href: "#what-is-a-release-checklist"
  - text: Why does having a release checklist matter?
    href: "#why-does-having-a-release-checklist-matter"
  - text: What should be included in the checklist?
    href: "#what-should-be-included-in-the-checklist"
  - text: Resources
    href: "#resources"
---
## What is a release checklist?

A release checklist is not just a procedural document; it is a critical component of ensuring that software releases are smooth, reliable, and meet the necessary quality standards and requirements. It helps in mitigating risks, improving collaboration, and ensuring consistency throughout the software development lifecycle.

## Why does having a release checklist matter?

A release checklist is crucial in software development for several reasons:

1. **Ensuring Quality Assurance**: The checklist helps ensure that all aspects of the software have been thoroughly tested and meet the required quality standards before release. It includes checks for functionality, performance, security, and usability among others.

2.  **Consistency and Compliance**: It ensures that the release process follows a consistent set of steps and adheres to organizational policies and compliance requirements. This helps in maintaining reliability and reduces the risk of overlooking critical steps.

3.  **Risk Mitigation**: By systematically checking off items on the checklist, teams can identify potential risks or issues early in the release process. This proactive approach allows for timely resolution of problems, reducing the likelihood of costly errors in production.

4.  **Communication and Collaboration**: The checklist serves as a communication tool between different teams involved in the release process (development, testing, operations, etc.). It helps in aligning everyone on what needs to be done and ensures that all stakeholders are on the same page.

5.  **Documentation**: It serves as a record of what has been tested and verified before the release. This documentation is valuable for audit purposes, troubleshooting post-release issues, and for future reference.

6.  **Improving Release Process**: Over time, the checklist can be refined and improved based on past experiences and lessons learned from previous releases. It becomes a valuable tool for continuous improvement in the software development lifecycle.

7.  **Confidence and Transparency**: A well-executed checklist instills confidence in stakeholders (both internal and external) about the reliability and stability of the released software. It demonstrates transparency in the release process, showing that due diligence has been applied.



## What should be included in the checklist?

A release checklist in software development is a structured list of tasks and checks that need to be completed before a software release is considered ready for deployment to production or to end-users. It serves as a systematic guide to ensure that all necessary steps have been taken and all quality criteria have been met before releasing the software. 

Here are some key components typically included in a release checklist:

1.  **Functional Testing**: Verify that all new features, enhancements, or bug fixes work as expected according to the defined requirements and specifications. This also includes user experience/user acceptance testing. 

2.  **Integration Testing**: Ensure that the software integrates correctly with other systems or components it interacts with, such as databases, APIs, or third-party services.

3.  **Performance Testing**: Check the software's performance metrics (e.g., response times, throughput) to ensure it meets performance requirements under expected load conditions.

4.  **Security Testing**: Validate that security measures (e.g., authentication, authorization, data encryption) are in place and functioning correctly to protect against vulnerabilities.

5.  **Deployment Readiness**: Ensure that deployment packages are prepared, deployment scripts are tested, and necessary configurations (e.g., environment variables, server settings) are set correctly for the production environment.

6.  **Documentation**: Confirm that user manuals, release notes, and any other relevant documentation are updated and accurate.

7.  **Backup and Rollback Plans**: Verify that backup procedures are in place and tested, and that rollback procedures are documented and ready to be executed if needed.

8.  **Compliance Checks**: Ensure that the release complies with legal, regulatory, and organizational policies (e.g., licensing, data protection). Your system may need a new ATO (Authority to Operate) or to be covered under an existing ATO. [Learn more about the ATO](https://digital.gov/resources/an-introduction-to-ato/).

9.  **Communication Plan**: Plan for communicating the release to stakeholders, end-users, and support teams, including notifications, release announcements, and support availability. Does your agency have a process to approve communications outside of your agency?

10.  **Post-release Monitoring**: Establish monitoring and logging to track the software's performance and user feedback after release, enabling quick detection and resolution of any issues that arise.


The following “columns” are strongly recommended in order to make information accurate and clear to track:

**Owner**: Who owns this item in the checklist?

**Date and Time**: What is expected for this to be completed? How long will it take to complete this?

**Explanation of Task**: What is expected of the task being completed in this?

**Status**: What is the status of this? It can be set to the following fields: Pending, Started/In Progress, Completed/Done, Blocked

**Notes**: Any notes that would like to be reviewed at a later time. This can be used for reflection meetings and to improve the checklist after the release for the next release.

**Examples**
| Date | Time | Owner | Status | Task | Comments |
| --- | --- | --- | --- | --- | --- |
| 04/12 | 9:30 am | Project Manager- Sam | In progress | Host launch meeting | All people who are part of launch should attend this |
| 04/12 | 9:50 am | Lead Developer- Jill | Completed | Redirect traffic to new site | |
| 04/12 | 9:55 am | Web Developer- Mark | In Progress | Monitor feedback of new site | |
| 04/12 | 10:30 am | User Experience- Ashley | Pending | Send Email | |


The release checklist is typically tailored to the specific needs and processes of the agency, the department, or project. It is often managed and maintained by a project manager, release manager or a release team to ensure consistency and thoroughness across releases. By following a release checklist, teams can reduce the risk of releasing faulty or incomplete software, improve communication and collaboration among team members, and enhance overall confidence in the software release process.

### Resources:
[18F Launch Preparation](https://docs.google.com/document/d/1gJcvQ-o0DMEUY3m19KGPw8y6qFPvdX7FWC6OSlURRmM/edit)

[Examples of other project release checklists](https://drive.google.com/drive/folders/1zpBpZ9OjfHDuCJIrF8Uqzuu7VsdZ1s8-)
