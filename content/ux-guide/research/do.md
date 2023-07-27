---
title: Do
description: "After planning, doing research involves engaging with previously agreed upon knowledge, participants, and data."
permalink: /ux-guide/research/do/
layout: layouts/page
tags: ux-guide
eleventyNavigation: 
    parent: ux-guide-research
    key: ux-guide-do
    order: 4
    title: Do
sidenav: true
sticky_sidenav: true
subnav:
  - text: Reviewing what’s already known
    href: "#reviewing-what's-already-known"
  - text: Designing your research sessions
    href: '#designing-your-research-sessions'
  - text: Doing a practice session
    href: '#doing-a-practice-session'
  - text: Corresponding with participants
    href: '#corresponding-with-participants'
  - text: Moderating research sessions
    href: '#moderating-research-sessions'
  - text: Debriefing
    href: '#debriefing'
  - text: Additional reading
    href: '#additional-reading'
---

[Planning]({{site.baseurl}}/research/plan) research helps you identify the team’s goals, methods, etc. for its research. Doing research involves engaging with previously agreed upon knowledge, participants, and data.
This article covers tasks agreed to and implied during research planning such as:

- Reviewing what’s already known
- Designing your research sessions
- Running a pilot
- Corresponding with participants
- Facilitating research sessions
- Debriefing

## Reviewing what’s already known

Reviewing what’s already known helps your team draw connections and contribute new, original thought. The most fundamental technique for identifying what's already known (such as relevant business, technology, user, and content considerations) is in-depth interviews with stakeholders. It’s also generally helpful to review the current product or service, including its existing content or training materials.

A knowledge inventory session helps capture what your team, including your agency partners, already knows about your research questions. To facilitate this session, you might bring the team together and ask everyone to independently make a mind map of what they know relative to the team’s research questions. Alternatively, you might ask the team to collaboratively create things like a swimlane diagram or a [journey map [18F design methods]](https://methods.18f.gov/decide/journey-mapping/).

Finally, ask your agency partners for any trusted sources, or proprietary information they’ve collected about your area of focus. You might also review:

- **Academic and statistical research** — Specialized academic search engines can help you find peer-reviewed publications and articles on your area of focus
- **Internal benchmarking** — If your research applies to existing programs, internal benchmarking can help you better understand which metrics matter to stakeholders
- **External benchmarking** — Identify any non-profits, journalists, etc. talking about or benchmarking programs related to your area of focus


## Designing your research sessions

Research sessions enable you to directly engage people in facilitated conversations about your area of focus. The design of your research sessions will need to account for participant context and encourage the broader team’s involvement.

### Describe participant context

Before designing your sessions, consider the context(s) of your [target groups]({{site.baseurl}}/research/plan/#participants-and-recruiting). You may be able to rely on your team, including your agency partners, or you may need to ask participants themselves during recruitment. Consider especially:

- Location(s) and norms
- Roles in and (expected) understanding of existing business processes
- Past participation in government-led outreach or educational efforts

For example, if your participants normally work in a [sensitive compartmentalized information facility (SCIF) [NIST.gov]](https://csrc.nist.gov/glossary/term/Sensitive_Compartmented_Information_Facility) it’s logistically easier to not require the use of screen sharing technology.

### Choose location(s) and times

Choose session location(s) and times that are most convenient for your participants. You can run research sessions in person (in labs, meeting rooms, public spaces, etc.) or remotely. Whatever location you choose, make sure it’s accessible so you don’t exclude participants with disabilities.

When choosing session times for lab-based and remote research:

- Plan for no more than five one-hour sessions a day
- Allow at least 15 minutes between sessions
- Allow time for people to eat lunch

For on-site research at your participants’ work or home:

- Plan for no more than four one-hour sessions a day
- Allow at least 30 minutes between sessions, plus traveling time between them
- Allow yourself a break for lunch

### Clarify team roles
Design your sessions to encourage as much team involvement as possible without being disruptive.

For sessions where you’ll interact with participants one-at-a-time, such as in-depth interviews and usability tests, clarify which team members will moderate, take notes, and observe:

- **Moderators** facilitate the session. Don’t let just anyone moderate; be honest about whether or not moderation will be difficult for someone. For example, the product owner may find it difficult to moderate without introducing [interviewer bias]({{site.baseurl}}/research/bias/#interviewer-bias)
- **Notetakers** document, usually word-for-word, what happens during the session. If you’re fortunate enough to have multiple notetakers, you might ask each notetaker to make notes about specific aspects of the session. For example, one notetaker might capture verbatim notes of what the participant says while another might capture what the participant does while interacting with a prototype.
- **Observers** pay attention during the session, and ask questions when given time by the moderator

Make time to meet with any team members who were not involved with designing the sessions but will help with research in order to explain the objectives of the research and review the structure of the sessions, session materials, etc. This helps observers contribute to the comfort level of the session and to correctly interpret interactions between moderators and participants. Consider passing along this one-pager about [assisting in research]({{ site.baseurl }}/research/assist) to people who are brand new to research.

### Preparing a workshop

When conducting small group activities, prepare an agenda and confirm access to any materials you will need, such as sticky notes, printed facilitation aids, etc.

Time moves fast in workshops, so be clear about what you want to accomplish and what you are willing to cut. Make sure to include time for tech checks and have a backup plan. The U.K. Government Digital Service (GDS) has some great additional tips for conducting [research in small group workshops [GOV.UK]](https://www.gov.uk/service-manual/user-research/research-small-group-workshops).

### Preparing a wireframe or prototype

Identify in your [research plan]({{site.baseurl}}/research/plan) if your sessions will require the creation or use of [wireframes [18F design methods]](https://methods.18f.gov/make/wireframing/) or [prototypes]({{site.baseurl}}/design/build-a-prototype). This helps manage the team’s expectations, and gives the people creating those artifacts time to prepare them.

In evaluative research such as [usability testing [18F design methods]](https://methods.18f.gov/validate/usability-testing/), prototypes often suggest how users might complete specific tasks. In this case:

1. **Clarify the tasks your sessions will investigate.** Tasks are often included in artifacts such as personas or user stories. If your team doesn’t yet have those artifacts, ask them to identify “the most essential things that people need to do” relative to your research area of focus. Then pick the top two or three tasks the prototype will need to depict.
2. **Prepare a scenario for each task.** Scenarios help your team create a more believable prototype; they also help moderators prepare research participants during the sessions themselves. If applicable, incorporate your scenarios into the guide you’ll use to moderate the session.
[Example usability test guide.]({{ site.baseurl }}/usability-test-script) ([Google Docs example usability test guide.](https://docs.google.com/document/d/1VimyVSt7qK3iKc2uZkobLWM0zuJuvO03vFk_R_EjhOU/)).
3. **Discuss with your team how and when you’ll share the prototype** (for example, sharing a link to an online prototype or sending a document).

Prototypes create dependencies in your research. When doing research involving prototypes, you will need to:

- Confirm that the prototype works from the research venue (see [“doing a practice session”](#doing-a-practice-session))
- Ensure your participants can access the prototype. Ask potential participants to confirm their firewall restrictions, screen resolutions, and browser preference in advance of the session (see [“corresponding with participants”](#corresponding-with-participants))

### Preparing an interview guide

An interview guide keeps sessions consistent, allows multiple people to moderate, and serves as an example for future research efforts.

Most 18F interview guides include these sections:

- Introductory preamble covers:
    - You are not testing them, and that there are no wrong answers
    - Explain whether their participation qualifies them for [compensation]({{site.baseurl}}/research/plan/#compensating-research-participants) (and if so discuss how/when they will receive it)
    - They are in control of their participation: they can tell you if they'd prefer not to answer a question, they can take a break any time, and they can decide at any point that they no longer want to participate. If they have been offered compensation, explain that they will receive compensation even if they don't answer a question or end their participation early.
- Consent for note-taking or recording explains:
    - How you’ll use the notes, who will have access to the notes, and for how long the notes will be kept
    - Whether you’ll attribute any quotes, and if so, how (by name or by role, for example)
    - Confirm that participants have read or signed a consent form; get verbal consent to proceed. (At GSA, verbal consent is sufficient.)
- Priority questions
- Potential follow-up questions
- Concluding thanks, questions, and opportunities to follow up
- Ask who else you should meet with (if appropriate)

For starting points, see this [example interview guide [18F design methods]](https://methods.18f.gov/interview-script/) ([Google Docs example interview guide](https://docs.google.com/document/d/1kju19eC5vjqAd6bZCprniLixr1_u1b4Qfs1zVwTn6UA/edit#)).

When interviewing stakeholders, ask about their work as it relates to your research area of focus. Ask about business processes in which they play a role, the information and tools they use, the things they produce or make, and the decisions they’re responsible for. Ask about the people they work with on a regular basis and any challenges they face.


## Doing a practice session

Practicing your session can help ensure everyone is on the same page and provide valuable feedback on:

- The timing of the session
- The order of the activities
- The phrasing of your questions
- The composition of your wireframes or prototypes (if applicable)

A practice session also allows you to confirm team members’ roles and test whether or not your documentation setup will provide the information you need for analysis. Be sure to send team members links to relevant documents (for example, notetaking docs for the note takers and a view-only version of the interview guide for observers) before the pilot.

It’s best to conduct a practice session a few days before your sessions with participants begin, because you will very likely find things you want to change.


## Corresponding with participants

Once you’ve designed your sessions, meet with your team to discuss and decide how participants will learn about, sign up for, and contribute to those sessions.

### Inviting participation

**Screening** is the activity of identifying or locating people who fit your target groups, while **recruiting** is the activity of establishing an agreement with the people you’ve screened about their participation in the research. Together, screening and recruiting invite people to participate in your research and collect their informed consent.

To invite people to participate, you will need to advertise your sessions in places where you are most likely to reach your desired participants. To do this:

1. Identify where potential participants are likely to be
2. Go to those places and get people interested in the research
3. Identify interested people and determine if they meet your recruitment criteria

Make a list of places where participants are likely to be, both on- and offline. Consider:

- Relevant community organizations
- Government-run events
- Government buildings ([Google Docs on doing pop-up research in GSA buildings](https://docs.google.com/document/d/1ph3fP2rGr0FeXSeueRD4YmIJYF3f-3yIoI-uDz6iwsI/edit#heading=h.ssdnqe2zdwhz))
- Personal and professional networks, social media, mailing lists, etc.
- The new or existing website

Next, go to those locations and get people interested in the research. This often involves the creation of an intercept (“research call-to-action”). For example, if you’re doing pop-up research in a GSA building, you might print your intercept on a poster; if you’re doing remote research, you might place a pop-up directly on the website itself using the GSA approved [Touchpoints tool](https://touchpoints.digital.gov/).

Note that while it can be tempting to include additional form fields on your intercept to help with screening, this can introduce a delay due to The Paperwork Reduction Act of 1995 (PRA). See [Legal]({{site.baseurl}}/research/legal) for more information. All you really need to collect from people is their contact information, which isn’t subject to PRA (per [this Office of Management and Budget memo [Archives.gov]](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/inforeg/SocialMediaGuidance_04072010.pdf)) if it’s collected on its own. A tweet-length intercept might read:

    “Help us improve the design of OPM.gov! Sign up to participate in a remote feedback session by emailing participate-18F@gsa.gov. Learn more about how we’ll protect your information at https://www.gsa.gov/reference/gsa-privacy-program/Privacy-act-statement-for-design-research”

You can find out more about what makes a good tweet-length intercept [here in our Legal article]({{site.baseurl}}/research/legal/#intercepts).

Here is a [template for introducing yourself]({{ site.baseurl }}/resources/email-templates/researcher-introduces-themselves)<br />([Google Docs template for introducing yourself](https://drive.google.com/open?id=1aiK07pszR331v1d1J2tT6HUQ5JGsSjKjeFBzOwCwHLg)) to potential participants.

The third and final step is identifying interested people and determine if they meet your recruitment criteria. Once you’ve got a list of interested people and their contact information, you can easily screen them by having brief, unstructured conversations with them. Once you’ve determined that someone is qualified to participate in the session, you’ll need to get their informed consent.


### Getting informed consent

18F must ensure that people participate in our research willingly and understand how the research will be conducted and that they have control over their participation. Tell them what you’d like to learn from them, and why them in particular so they understand how we value their experiences. 

Getting informed consent ensures that:

- Participants understand what they’re signing up for, making our sessions more effective
- The research is ethically sound (see [Ethics]({{site.baseurl}}/research/ethics))
- The research complies with The Privacy Act of 1974 (see [Privacy]({{site.baseurl}}/research/privacy))
- The research complies with The Antideficiency Act (see [Legal]({{site.baseurl}}/research/legal))

Copy and customize one of the participant agreements below to reflect your research design. This is the agreement you'll ask participants to sign before they participate.

- [Example design research participant agreement]({{ site.baseurl }}/participant-agreement)<br /> ([Google Docs Example design research participant agreement](https://docs.google.com/document/d/1EPElAVthOF2ojcoamRitDHSYK4lT9c5yFY8IBwbJNqE/edit))
- [Spanish version of participant agreement]({{ site.baseurl }}/participant-agreement-spanish)<br />  ([Google Docs Spanish version of participant agreement](https://docs.google.com/forms/d/13ra4T0BVWbjSPBfOuNj8zVclU5J4TquX_tFbHUQWUpc/edit))

Correspond with participants ahead of time to explain things that might otherwise get lost in the agreement-signing process. Provide participants with as much context as possible to avoid misleading them and to protect their privacy. In the event that a participant has not signed an agreement ahead of the interview, obtain their verbal consent. In order to give their informed consent, participants need to understand:

- Who is doing the research
- The purpose/goals of the research
- The duration of the research session
- What data you’ll collect, how you will use it and how long it will be kept
- What will happen during the research, including any reasonably foreseeable risks or discomforts to the participant
- How you will use the results of the research, and who you’ll share them with
- That they may decline to answer any question and can stop participating at any time, without penalty
- What their rights are and how they can complain

If a research topic might be emotionally difficult consider designing a pre-task – a small survey or activity for participants to complete before you meet them so they will be prepared for the topics that will be covered. 

You must also let participants know:

- Whether the session is being observed, and who’s watching
- Whether and how the session is being recorded
- If you will ask participants to share their screen (some organizations lack the technology or may have policies preventing screen sharing).

Here is a [template for passing along a participant agreement]({{ site.baseurl }}/resources/email-templates/researcher-sends-agreement)<br /> ([Google Doc template for passing along a participant agreement](https://docs.google.com/document/d/1t01t_eLYWJXuKdJkhiyBqkWf4Yr5XsFAbNv-BDAZqzE/edit))

Remember to cover the information listed above. Ask participants if they have any questions. Ensure they don’t feel pressure to participate in ways that make them uncomfortable and they understand that participation is 100% voluntary and there are no repercussions for opting out. If someone is uncomfortable with or prefers not to sign a participant agreement, consider offering them alternative opportunities to participate that don't involve you recording or taking notes. 

If your plans for keeping research-related records changes later, it’s your responsibility to communicate to participants about any changes in the use of their data.

### Scheduling

Aim to help participants arrive at your sessions well prepared, but with an open mind; be especially mindful of your ability to prime participants and introduce [bias]({{site.baseurl}}/research/bias).

Research participants are doing us a favor, so you should do everything you can to ensure that they have a good experience during their session. Before scheduling them for a session, make sure that you inform participants:

- How to get to the session itself (if it’s in-person)
- If they need to prepare anything ahead of time
- How they will access any session materials (for example, a link to a prototype)
- If you’ll need them to share their screen (some organizations lack the technology or may have policies preventing screen sharing)
- If they’ll need to use any software during the session that may be unfamiliar to them (such as Mural)

Also remember to:

- Make sure calendar invites are clear, both to participants and to your team. For PII protection, it can sometimes make sense to use separate team-facing and participant-facing invites and set appointments to “private” visibility. [Google Suite instructions for how to do change privacy settings](https://support.google.com/calendar/answer/34580?co=GENIE.Platform%3DDesktop&hl=en).
- Schedule a little more time than you think you’ll need — it can take a few minutes to get everyone on the line, or you may have to work through technical issues. An extra 15 minutes can keep it from feeling rushed.
- Your calendar’s appointment feature may help you cut down on the email correspondence when scheduling sessions with multiple participants. Google calendar instructions on appointment slots](https://support.google.com/calendar/answer/190998?hl=en). If you use this feature, note that you can’t set the appointments to be private beforehand; you’ll need to change the privacy after participants have signed up for a slot.
- Confirm with participants that they’ll be able to use conferencing, video, or screen sharing tools and test the setup ahead of your session; create a backup plan if they can’t.
- Consider including a “tech check” list of tasks directly in the meeting invite asking participants to:
    - Try connecting to the remote meeting
    - Make sure that their video and sound works
    - Download and install any necessary software (eg. Zoom if you are using Zoom for your sessions)
- If you conduct research sessions via Google Meet and initiate a screen recording, the video will be saved to the Google Drive of the person who created the meeting. A link to the video will be added to the calendar event after the meeting.

Your agency partners can often assist in the scheduling process, particularly when setting up sessions with stakeholders. Don’t hesitate to ask them for help! You can provide them with a tailored version of this [email where stakeholder introduces researcher]({{ site.baseurl }}/resources/email-templates/stakeholder-introduces-researcher). ([Google Docs email where stakeholder introduces researcher](https://docs.google.com/document/d/1AEq-h3wuOxl8CCR9Gg4RPO7NaHJnedC4UbXN0UFQ24Y/edit)).

## Moderating research sessions

Before each session, you should double-check:

- The date, time, and location of the session
- How you’ll get to and from the session
- How you’ll need to dress
- That you have a signed participant agreement or a plan for obtaining participants’ verbal consent
- Your primary documentation method
- That you have a backup documentation method (such as a notepad and a pen)

Moderating a research session can be nuanced, but we encourage all team members to be involved. Make sure participants are comfortable and that facilitators, notetakers, and other team members are prepared. We created [a checklist of best practices for interviews]({{ site.baseurl }}/interview-checklist). ([a checklist of best practices for interviews](https://docs.google.com/document/d/1zRA2EK9qZ5H_cM3Ki5xf6Gz72F6Ah6i0E87YpwHTC9A/edit)). The checklist includes:

- Keep an eye on the time. Decide beforehand which questions or activities you must cover and which ones you can cut if you run out of time.
- Be curious. Ask clarifying questions about the stories behind answers but don’t dig on unnecessary details beyond your project scope.
- Adapt your script as needed to make the participant comfortable and to be respectful of their time.
- Let participants be in control of the pacing of the interview and to signal if they need to pause.
- Remind them they can take a break or end the interview at any time.
- Give space for people to pause. When there is a silence, try counting to five in your head. It will feel like a long time but will establish that there’s not a rush and you’re there to hear what the person has to say.
- Allow time for notetakers or observers to ask follow-up questions. Leave time for the interviewee to ask questions of the team as well.

- If appropriate, ask if they know others who would be good for your team to talk to.

While UX Designers heavily utilize interviews, we also use a variety of other methods. Tips for moderating other methods can be found in the [18F Method Cards](https://methods.18f.gov). We’ve also created a breakdown of [usability test quality heuristics]({{ site.baseurl }}/usability-test-quality-heuristics/) ([Google Docs usability test quality heuristics](https://docs.google.com/document/d/1qfGp3H1pdOlNbMYuJNQGyBIkpOcQErduDAl0adv1X-w/edit)). For Technology Transformation Services staff interested in developing additional methods, the [Research guild (#g-research](https://gsa-tts.slack.com/messages/g-research)) is a great place to find collaborators.

### Moderating sensitive research sessions

- Take time to be informed about the topic so you don't make participants needlessly explain uncomfortable information.
  - Gov.UK advises when [researching emotionally sensitive subjects](https://www.gov.uk/service-manual/user-research/researching-emotionally-sensitive-subjects) to consult a subject matter expert who has insights into your audience of focus to ensure your questions are appropriate and the discussion will not harm your participant.
- Ask for consent on a granular basis, not just at the beginning of an interview.
 - Acknowledge the session might be difficult and note they can change their mind during the conversation or afterward with no penalty.
 - Don’t assume their experience was traumatizing. However, just because they agreed to talk with you doesn’t mean they knew what they were getting into or how it would feel in the moment. You don’t have to ask for consent for every question, but the first time you hit a topic that might bring up a stressful time, tell the person what you’d like to talk about, and ask if that’s ok. This sets up the dynamic that they can help steer the conversation. 
- Ask questions about sensitive subjects in a gentle manner
 - We can ask “would you mind telling me about…” or other phasing that is softer than “Tell me about…” when discussing sensitive subjects.
 - While researchers are supposed to be impartial, you should still act human and it's okay to acknowledge a difficult situation. Depending on the context you might say things like “That sounds really hard” or “I’m sorry you had to go through that.” Use your judgment. 
- Notice signs of distress such as a change in attitude or strong emotion
 - Check in to see how they are doing. Let them decide to take a break or not.
 - Don't center your discomfort rather, leave the power to stop the conversation with the person who’s upset. They are giving their time because they want to help the research. We need to maintain a respectful emotional distance so that we’re able to get good data. Giving advice or specific help would be irresponsible as we’re not trained helpers.

### Tips for remote research

Because our partner organizations often have national audiences and our teams are distributed, a large portion of the research we conduct is remote. Technology challenges can be frustrating for both the participant and the facilitator. Here are a few things to keep in mind when facilitating remote research:

- Make sure you’re familiar with the tools ahead of time. Test your call-in line, screen sharing tools, or video conference before your first session. If possible, have your participant(s) test that they’re able to join the video conference tool before the session as well.
- In the morning on the day of the interview, share with each scheduled participant any links or files they’ll need to participate, and reiterate any logistics their participation will require, such as screen sharing.
- Allow for buffer time for people to dial in and get comfortable.
- Introduce everyone on the call and their roles, e.g. lead interviewer, notetaker, observer, etc. This makes it less intimidating for the participant and less surprising if new voices speak up to ask questions.
- Have notetakers and observers introduce themselves and then mute their audio so the interviewee knows who is on the line, but isn’t overwhelmed.
- If you are asking participants to share their screen, double-check to make sure they still are able to and are okay with it.
- If the participant consents to sharing their screen, remind them to close, minimize or hide any windows or information they do not want to share.

Note: Remote-only research can exclude some people with visual or hearing impairments. Try to use a variety of approaches to make sure your [research is inclusive]({{site.baseurl}}/research/bias/#sampling-bias).

### Tips for in-person research

In-person research happens most often when we go on-site with an agency partner or meet participants in the field. At on-sites we often conduct workshops. They are a great time to conduct interviews as well. Regardless of the method, here a few things to keep in mind when facilitating in-person research:

- Try to get as much information about the room(s) you will be in and arrive early. Security at partner buildings can take time.
- Make sure the room is accessible for all of your participants.
- Take note of how the environment affects your participants. This may mean limiting the number of team members in the session.  
- Spend less effort on note taking and more effort on connecting with participants. Utilize photography and voice/video recording with permission. If it makes sense, try to involve participants and/or partners in capturing information.
- Make sure to document your thoughts as a team shortly after the session to fill in any gaps in your notes (see debriefing, below).

### Taking notes

Make sure that participants have explicitly consented to you taking notes before you write things down.

The most common type of notes taken by 18F’s UX team are **verbatim**. Write down everything participants say — to the best of your ability — during each session. The goal is to capture as much as possible during the precious time we have with our participants, and avoid introducing the cognitive biases that come into play when we are selective about what we write.

Taking verbatim notes also curbs the natural tendency to try to understand and analyze what’s being said in the moment. If you’re having trouble writing everything down, focus on capturing what participants say; you or the interviewer can always go back and clarify what questions were asked.

Another style of note taking we commonly use is **interaction notes:** when we write down all of the actions people take and the reactions they have. For example, capturing a note such as “scrolled to the top of the page, re-read the instructions, scrolled back down to the input field and typed in name” would be sufficient. If conducting usability testing, consider flagging bugs or usability issues.  

Note: If there are two notetakers available for a session, consider having one person take verbatim notes, and the other take interaction notes. In this case, it’s best to work in separate documents, as working too close to each other in the same file can be distracting.

Content audits frequently use **spreadsheet notes:** these are used to track insights and quality of existing content.

### Remote observer guidelines

Participating in research as an observer can be invaluable for understanding user needs and product requirements, whether you’re a product manager, engineer, or stakeholder. Before you take part, review the guidelines for how to participate in research as an observer.

#### Joining the call as an observer

- Try to show up a few minutes before the interview is scheduled to begin, so you don’t distract the participant(s)
- If your video call platform allows it, you may change your display name to be just your first or preferred name
- If you aren’t admitted directly:
 - Wait in the platform's waiting room while the moderator begins the session
 - If there are issues, the moderator should be in contact with you in a previously agreed upon communication channel (e.g., Slack, Teams)
- If the moderator’s prompts you, unmute your camera and microphone and briefly introduce yourself with:
  - Your first or preferred name, and optionally, your pronouns
  - Your role within GSA or partner agency
  - Or use the pattern that those before you have set, if different
- When that’s done:
  - Mute your microphone
  - Turn off your camera
  - Confine all messaging to the backchannel identified by the moderator for the session
  - Don’t message within the video conference app unless prompted by the moderator
  - Don’t expect the moderator to interact with you; many moderators will close distractions like chat or email while conducting a session
  - The moderator might give you time during the session to ask questions, in which case, you are welcome to ask follow-up questions to participants

#### How to be a good research observer

As an observer, you will play an important role in the research process. You should:

- Review the interview guide ahead of the call, if it was shared with you
- Create a safe, neutral, and distraction-free atmosphere for the moderator and participant
- Pay close attention to what happens during the session. Feel free to jot down notes for yourself in your own document (so as not to distract the notetaker).
- Join a debrief session and discuss what you observed
  - Prepare your top 3 takeaways, which are the top three items we should not forget, or surprises in each session
  - Write these down during your debrief, or share them in your team’s backchannel if you’re unable to attend the debrief

At this time, do not jump to solutions or interpret user behavior too much. Keep your observations focused on what the user said and did. Try to stay focused on the present session and understanding the participant’s reality.
- Example Observation (Good): “The participant typed ‘science fiction’ in the search box.”
- Example Inference (Bad): “The participant doesn’t like to use the navigation.”
- Example Opinion (Worse): “The navigation is not noticeable.”

Thank you for observing! Your team appreciates your participation.

## Debriefing

Debriefing is a useful way to discuss and capture what everyone took away from a session. It is important to debrief shortly after each session, while the details are still fresh in everyone’s minds. To mitigate [bias]({{ site.baseurl }}/research/bias) while debriefing, use your notes from the session to ensure you are not relying solely on recall to form your impressions and insights. Keep in mind, debriefing is not synthesis — unless you're doing continuous synthesis, it's good to keep it descriptive only and move assessment until later in the research process.

Here are a few high-level things to capture in a debrief:

- How did this session answer our research questions?
- What were the main themes of this session?
- Which questions or activities did the participant(s) have a lot (or very little) to say about?  
- What new questions do we have?
- Are there any new people we should talk to?

You may want to use this [example interview debrief worksheet]({{ site.baseurl }}/interview-debrief) ([Google Doc example interview debrief worksheet](https://docs.google.com/document/d/1axCpR-pqdDIDRAAktlpbDEe1LbDCTZB7WxH6S4owIrU/edit?usp=sharing)); feel free to modify it to your team’s needs. When determining which team members to include, default to a more diverse group. If a team member wasn’t part of the session, their role can be focused on asking questions and documenting.

### Make space for the team to process 

Debriefing is also a time for the team to discuss how a session might have impacted them in case the topic might have brought up difficult or complex feelings. Making space for the team to share and process how they are impacted by the research allows the team to be emotionally centered and know if/when they need a break. 

Reflect as a team:
- Did the session bring up anything difficult that you want to share with the team? 
- Does anyone need a break? 


## Additional reading
- [Tips from our blog on for capturing the best data from user interviews](https://18f.gsa.gov/2016/02/09/tips-for-capturing-the-best-data-from-user-interviews/)
