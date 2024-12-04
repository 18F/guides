---
title: Legal
description: "How 18F conducts qualitative research that complies with the Paperwork Reduction Act of 1995 (PRA)."
permalink: /ux-guide/research/legal/
layout: layouts/page
tags: ux-guide
eleventyNavigation: 
  parent: ux-guide-research
  key: ux-guide-legal
  order: 6
  title: Legal
sidenav: true
sticky_sidenav: true
subnav:
- text: Compensating research participants
  href: '#compensating-research-participants-and-participant-agreements'
- text: The Paperwork Reduction Act of 1995
  href: '#the-paperwork-reduction-act-of-1995'
- text: PRA clearance considerations
  href: '#pra-clearance-considerations'
- text: Additional questions
  href: '#additional-questions'
---

18F designs our research to account for the [The Paperwork Reduction Act of 1995 (PRA)](https://pra.digital.gov/), among other laws. This article summarizes what we’ve learned through conversations with [GSA’s Privacy Office [GSA.gov]](https://www.gsa.gov/reference/gsa-privacy-program) and [GSA’s Office of General Counsel [GSA.gov]](https://www.gsa.gov/about-us/organization/office-of-the-general-counsel-overview). 

*Disclaimer: This article is intended for internal use. It’s shared in the spirit of open source, to prompt conversations around design research as it relates to the law. GSA has no regulatory authority over any of the laws discussed in this article, so don’t just take our word for it.*


## Compensating research participants and participant agreements

See the [TTS handbook for requirements around compensating research participants.](https://handbook.tts.gsa.gov/18f/how-18f-works/research-guidelines/#compensating-user-research-participants)

Ask participants for signed or verbal confirmation of [informed consent]({{ '../../research/do/#getting-informed-consent' | url }}). Our [example design research participant agreement]({{ '/ux-guide/participant-agreement/' | url }}) is available in both English and Spanish. 

## The Paperwork Reduction Act of 1995

[The Paperwork Reduction Act [Digital.gov]](https://pra.digital.gov/) (PRA) is a law governing how federal agencies collect information from the American public. We want to be good stewards of the public’s time, and not overwhelm them with unnecessary or duplicative requests for information. We also want to make sure the data we collect is accurate, helpful, and a good fit for its proposed use. In general, the PRA applies whenever you are requesting the same information from ten or more people over a 12-month period. [Office of Information and Regulatory Affairs](https://www.whitehouse.gov/omb/information-regulatory-affairs/) (OIRA) within the [Office of Management and Budget](https://www.whitehouse.gov/omb/) (OMB) reviews and approves Government collections of information from the public under the PRA.

### Research methods and modes

In their [Flexibilities under the Paperwork Reduction Act](https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf) memo, OIRA says that (emphasis added) “OMB does not generally consider facts or opinions obtained through **direct observation** by an employee or agent of the sponsoring agency or through **non-standardized oral communications** in connection with such direct observations to be information under the PRA.”

18F UX designers generally comply with PRA by showing preference for qualitative research methods (such as semi-structured interviews and usability tests) and research modes that involve direct observation. Moreover, we often find that we reach saturation before speaking with ten or more people (though note that for structured information collections, a response of any kind counts towards the ten; even “no, thank you”). We work with our partner agency’s PRA desk officer whenever we want to collect structured information from ten or more people.

### Intercepts

18F designs our intercepts with the PRA in mind. [This OIRA memo](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/inforeg/SocialMediaGuidance_04072010.pdf) states that “Feedback requests: [...] an agency does not trigger the PRA’s requirements when it posts its email address or uses an application for brainstorming or idea generating on its website to enable the public to submit feedback”. Our intercepts don’t require PRA approval so long as they only ask for people’s contact information, such as their name, email address, mailing address, and phone number.

Our intercepts also generally do not ask people to disclose information about themselves as a consequence of their responding. For example, we wouldn’t say “Are you the parent of a 4th grader? We’d love your feedback on everykidinapark.gov,” because this is effectively a structured information collection (since anyone who responds is effectively saying “Yes, I’m the parent of a 4th grader”). To be on the safe side, our intercepts generally target either *everyone* or a *specific individual.*

Some tweet-length examples:

- **Good:** We’d love to hear your feedback on www.gsa.gov! Email [18F-research@gsa.gov](mailto:18F-research@gsa.gov) to participate in a usability test. Here’s how we’ll use the information we collect: [Link to [Privacy Act Statement for Design Research [GSA.gov]](https://www.gsa.gov/reference/gsa-privacy-program/privacy-act-statement-for-design-research)]
- **Good:** Hey @username, we’d love to hear your feedback on www.gsa.gov. Email [18F-research@gsa.gov](mailto:18F-research@gsa.gov) to participate in a usability test. Here’s how we’ll use the information we collect: [Link to [Privacy Act Statement for Design Research [GSA.gov]](https://www.gsa.gov/reference/gsa-privacy-program/privacy-act-statement-for-design-research)]
- **Bad:** Are you the parent of a 4th grader? We’d love your feedback on everykidinapark.gov! Email [18F-research@gsa.gov](mailto:18F-research@gsa.gov) to participate in a usability test. Here’s how we’ll use the information we collect: [Link to [Privacy Act Statement for Design Research [GSA.gov]](https://www.gsa.gov/reference/gsa-privacy-program/privacy-act-statement-for-design-research)]

## PRA clearance considerations

Detailed guidance on what needs PRA clearance is available on [pra.digital.gov](https://pra.digital.gov/). Note, not every request or collection falls under the PRA’s scope, and you may not need clearance at all. **Always ask about PRA** throughout a project’s lifecycle.

When figuring out if PRA clearance is needed, consider the following:

- What type of information are you collecting,
- Who are you collecting it from,
- How will you be collecting it, and
- Why you are collecting this information.

### Tactical considerations

Below are considerations for when clearance is needed and what type of clearance may be appropriate. Find out more about [types of clearances on PRA’s website](https://pra.digital.gov/clearance-types/). 

Keep in mind some activities **don’t** need PRA clearance. This includes 

- General requests for public input and comments.
- Information asked for or received in connection with a public hearing or meeting.
- Activities with fewer than 10 people. 
  - Caveat: unless they’re the whole group. For example, if your activity is to engage with the only nine people in the country who have specialized knowledge of a topic, then it will need to go through PRA.
- Activities with federal employees or military personnel as part of their role.
- Direct observation such as watching someone find things on a website. 

Visit the PRA website’s [Do I need a clearance page](https://pra.digital.gov/do-i-need-clearance/) for more information. 

What needs PRA clearance?

- Forms, such as the IRS 1040.
- Program evaluations, such as looking at the outcomes of a subsidized housing initiative for seniors.
- Applications for benefits and grant programs.
- Research studies and focus groups with a **set of the same questions or tasks** (very relevant to 18F!).

Note, **voluntary collections are not automatically exempt from PRA clearance**. [Contact your agency’s PRA contact](https://pra.digital.gov/contact/) to answer more in-depth questions.

### Full PRA

The full PRA process is outlined on the [PRA website](https://pra.digital.gov/clearance-process/). 

Using the PRA process, a new information collection request (ICR) can take an estimated 9 to 12 months to complete. 

### Exempt and fast-track process 
In addition to the full PRA process, there may be other approaches for 18F teams to consider depending on research method and scope. 

**PRA-exempt research methods.** These methods don’t require PRA and include:

- **Direct observation** — This could include observing how someone uses a website to test their abilities or knowledge.
- **Unstructured or non-standardized interviews** — This could include asking for information through an unstructured format that has clarifying  follow-up questions that change based on the conversation. (Note, whenever you are posing identical, structured questions or information requests to 10 or more people, this will normally require PRA approval.)
- Visit the PRA website’s [Do I need a clearance page](https://pra.digital.gov/do-i-need-clearance/) for more information.

**Fast-track research under agencies’ [generic clearances](https://pra.digital.gov/clearance-types/#generic-clearance).**
- 18F teams may use GSA’s generic clearances. 
  - **Consider first** — In 2022, GSA received a generic clearance specifically designed for customer experience (CX) or user experience (UX) work. 
    - The clearance is [A11-280](https://www.reginfo.gov/public/do/PRAViewICR?ref_nbr=202203-3090-003) (control number at GSA is 3090-0325), which is active until April 30, 2025. 
    - This has a much faster turnaround than other generic clearances. 
    - For research efforts that may fall under this GSA generic clearance, refer to an [outline of steps in Google Docs](https://docs.google.com/document/d/1r0-AQ6DChw3FoZEV9q6K9dnhEa05uwLyPcEzLAV74FI/edit).
    - See also these internal resources for examples: [sample PRA fast-track in Google Docs](https://drive.google.com/drive/folders/11fe_mlPZtEnW1TSA5-BG29IlHiiarpSj). 
  - **Additional consideration** — GSA also has a [generic clearance for fast-track qualitative service delivery](https://www.reginfo.gov/public/do/PRAViewICR?ref_nbr=202205-3090-001). 
    - This process goes through the standard officers. 
    - This [generic clearance](https://www.reginfo.gov/public/do/PRAViewICR?ref_nbr=202205-3090-001) is not as focused on CX/UX as A11-280. It is active until June 30, 2025. 
- If 18F is partnered on a project with another agency, teams may consider using GSA’s generic clearances or the partner’s agency clearances (if applicable) for the project. 
   - This approach may depend on the type of research and which clearance may apply. 
   - Reach out to [PRA contacts](https://pra.digital.gov/contact/) early in the process to see what’s possible.   

### PRA and multiple languages

Depending on the scope of the project, teams may also consider how to approach PRA when working in multiple languages. 

Considerations to keep in mind:

- You can submit PRA for multiple languages on the same form if the documents are a direct translation in each language.
- You can submit the translated versions as they become available. 
- If translating from English, anticipate and plan for the possibility of English language materials being cleared prior to receiving clearance for languages in other materials. Coordinate with your team and translation service on the desired timeline, and how to create the best forms with the fewest edits needed. 
- Once approved, minor updates can be made without re-approval, but must be made in all languages to match. The PRA reviewer has requested that a document file and a screenshot of the form be submitted for record keeping.
- You may need to translate legal PRA language.

Remember to plan ahead and always ask about PRA over the course of a project! Be sure to check with your PRA contact as soon as possible in the process. 

For more information, refer to the [PRA website](https://pra.digital.gov/).


## Additional questions

This article reflects our most current shared understanding between 18F, GSA’s Privacy Office, and GSA’s Office of General Counsel; however, this understanding might differ from the shared understanding at the agencies with which we partner. Whenever we have questions about actions that fall within their respective areas of legal interpretation and authority, we work with those people at our partner agencies.
