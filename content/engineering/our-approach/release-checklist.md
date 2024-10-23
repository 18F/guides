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
  - text: Software launch checklist
    href: "#software-launch-checklist"
  - text: What should it look like?
    href: "#what-should-it-look-like"
  - text: Questions to consider
    href: "#questions-to-consider"
  - text: Resources
    href: "#resources"
---
## Software launch checklist

The release checklist is a list of tasks that need to be completed during a major release, like an initial site launch. 

The checklist helps ensure that all tasks are completed prior to a release, reducing risk, and helps with following up on what needs to be done once release is complete.  When people see all the tasks listed and who owns each item, it increases confidence that the release will be successful. 

Being transparent and communicating about what is going on is very important to the success of the release. We encourage people to follow and document everything on the checklist so it can be revisited after release and use that information to improve the checklist for the upcoming release. 

## What should it look like?

No matter what tool you use to create a release checklist, each item on the list should have the following fields associated with it:

>**Date and Time**: What is expected for this to be completed? How long will it take to complete this?

>**Owner**: Who owns this item in the checklist?

>**Status**: What is the status of this? It can be set to the following fields: Pending, Started/In Progress, Completed/Done, Blocked

>**Explanation of Task**: What is expected of the task being completed in this?

>**Notes**: Any notes that would like to be reviewed at a later time. This can be used for reflection meetings and to improve the checklist after the release for the next release.

**Examples**
| Date | Time | Owner | Status | Task | Comments |
| --- | --- | --- | --- | --- | --- |
| 04/12 | 9:30 am | Project Manager- Sam | In progress | Host launch meeting | All people who are part of launch should attend this |
| 04/12 | 9:50 am | Lead Developer- Jill | Completed | Redirect traffic to new site | |
| 04/12 | 9:55 am | Web Developer- Mark | In Progress | Monitor feedback of new site | |
| 04/12 | 10:30 am | User Experience- Ashley | Pending | Send Email update to stakeholder | Includes the updates of the status every three hours |



## Questions to consider
The release checklist should have all tasks that have impact on the release, as well as preparation and the checks after the release. 

Here are some questions to consider when creating your release checklist.

**Readiness plans**- *What could we do to get this release ready?*
- Are there any known bugs that need to be addressed and/or communicated? Are they considered blockers? What is the plan to handle these bugs? Will they affect users’ experience? What is the back up plan?
- Are there any errors or warnings logged during automated  CI/CD testing? Are they all documented as issues or tickets? Are any of them severe enough that the team should consider postponing release until they are addressed?  
- Was there manual testing done? Has testing been done in the production environment? 
- Which branch in code will we be used for release? Is a “code freeze” window needed? If the team uncovers a bug and needs to push a fix during code freeze, who would approve that exception? 


**Deployment plans**- *What needs to be done to make the release a success from a technical point of view?*
- What kind of network configuration is needed to ensure the traffic will go into the new release code? What about firewall rules? DNS configuration?
- Has the production environment been set up? What about configuration? What about environment variables? What about secret keys? 
- Are users set up with correct access? Administration access? User access? Are permissions set correctly? 

**Communication plans**- *What kind of communication needs to happen before, during, and after release? Think of different audiences, such as:*
- Stakeholders/Management- What kind of updates do you want to share with stakeholders? How much do they want to know?
- Internal staff- What will they expect? What kind of communication should they be prepared to communicate with customers? 
- Third party partner- Are there any partners that are dependencies for  making this a successful release? Do they know we are releasing? Do they have on-call support ready for us? For example: Cloud.gov and Login.gov.
- Customers- Will customers experience downtime during the launch? Login issues? Are they aware of the new changes? Do they have a way of reaching out for assistance after the release? Do we have any social media communications plan? Do we have a blog post?

**Testing plans**- *What kind of testing do we need to do to ensure the release is complete and successful?*
- Internal hand-on testing- What kind of testing do we need to do to complement automated tests? 
- External hand-on testing- Do we have someone that can help with testing the release? Will we be able to get their feedback when they do the testing? Is their access set correctly? How can our stakeholders try out the release -- how can we show them our work? 

**Monitor/Tracking plans**- *How can we monitor the health of the release?*
- Length of monitoring - How long should we monitor after the release? Do we need to do a daily report based on monitoring? 
- Monitoring tools- Where can we see monitoring? Cloud dashboard? Console logs?
- Logging - What logs does the software need to maintain? How does the team access the logs? What information is being logged? Is the flag set correctly for log (Debug vs Warning)?
- Traffic- How many hits are we seeing? Is there a certain area that is getting higher traffic than normal? Is it throwing any errors? Is the traffic volume within expected range? 
- Bandwidth- How much bandwidth is the application using? Any large files being uploaded or downloaded?
- CPU/RAM Utilization- Is there something that is using too much CPU? Do we have memory leaks? Is the utilization load stable?
- E-mail- Are we doing email blast communicating about the release? How many emails are going out each hour or day? How fast are they sending out? Are people opening links to the new site? 

**Documents plans**- *What can we do with this information to help us improve the process next time?*
- Do we have a place for people to share their comments and/or experience? What will we do with the feedback we get? 
- If things didn't go well, what can we do differently next time? Do we need to make any changes to the release checklist for the next release?


We hope this checklist and these questions will help make your release a successful one! 


### Resources:
[18F Launch Preparation](https://docs.google.com/document/d/1gJcvQ-o0DMEUY3m19KGPw8y6qFPvdX7FWC6OSlURRmM/edit)

[Examples of other project release checklists](https://drive.google.com/drive/folders/1zpBpZ9OjfHDuCJIrF8Uqzuu7VsdZ1s8-)
