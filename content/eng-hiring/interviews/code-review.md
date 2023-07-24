---
title: Code review interview guide
permalink: /eng-hiring/interviews/code-review/
layout: layouts/page
tags: eng-hiring
eleventyNavigation: 
  parent: eng-hiring-interviews
  key: eng-hiring-code-review-home
  order: 4
  title: Code review interview guide
sidenav: true
sticky_sidenav: true
subnav:
  - text: Purpose
    href: "#purpose"
  - text: Before the interview
    href: "#before-the-interview"
  - text: Conversation outline
    href: "#conversation-outline"
  - text: After the interview
    href: "#after-the-interview"
---

The goal of the code review interview is to explore the kind of code, thought processes, and choices that the candidate will make at 18F by examining a sample of their work.

{% include 'eng-hiring/unconscious-bias-warning.html' %}

## Purpose

The candidate [is instructed]({{ '../../debrief/' | url }}) to complete a coding exercise, or bring an existing code sample. As an interviewer, you'll receive that code at least a day before your interview with the candidate.

The focus of the interview should be on their code, how it works, why they made the choices they did, and so forth. Before the interview, you should plan to spend an hour or two reading the candidate's code, running it, and preparing follow-up questions to ask when you interview them.

- **Remember to be as pleasant and friendly as you can be!** You can deliver a demanding interview while being kind and empathetic.

- Whenever possible, ask these questions **exactly as they’re worded** to try to get consistency between multiple candidates.


## Before the interview

Before the interview, prepare by reviewing the code, trying to run it (and the tests), and review the list of what to look for and the questions.

**As you review, remember that candidate only spent about three hours on this code.** It doesn't need to be perfect. It should work, and solve the problem assigned, but minor issues, rough edges, and less-than-perfect parts are totally fine. A good way to think about this: you're looking for code that's about the same level as you might expect on an initial pull request. It might not be perfect yet, but that's what code review is for.

For the list of things to look for during code review, see [what to look for during code review](https://docs.google.com/document/d/1rP7_yYr_IbfDi-Tj-1troJG2rTDcfVRnI_iH7Ngrzds/edit#heading=h.6l09j457zrt).

<a class="usa-button usa-button-primary" href="https://docs.google.com/document/d/1rP7_yYr_IbfDi-Tj-1troJG2rTDcfVRnI_iH7Ngrzds/copy" >Make a copy for your notes</a>

## Conversation outline

{% include 'eng-hiring/notes-reminder.html' %}

Begin by introducing yourself by saying this or something similar to it:

> Hello! My name is \_\_\_, my pronouns are \_\_\_, and my role is \_\_\_.
>
> Thanks for interviewing with me today. The purpose of this interview is to explore the code you submitted to get a sense for how you think about coding problems. I’ll ask a series of questions about the code sample you’ve submitted, how it works, why you made the choices you did, and so on.
>
> My questions will take about 40 to 45 minutes or so, and then we’ll have the remaining time to answer any questions that you may have. Feel free to think for a moment before answering if that’s your style - you won’t be judged for it.
>
> There will be times when I ask for more information, or want to dig deeper into your answers. That’s normal: I want to make sure I understand what you did and why. I’ll be taking notes, please don’t let that distract you.
> 
> I’m excited you’re here - do you have any questions for me before we get started?

### Questions and follow-ups

In all of your questions, you should be trying to see that the candidate has a deep understanding of the code and the problem, and can explain it to you coherently. You don’t need to agree with all of the candidate’s choices, but they should be able to explain them clearly.

- "Walk me through how your code works."
- "How does this part (point to a tricky bit) work?"
- "What would you do differently if you got to do this over again? What would you keep?"
- "Where did you get stuck? How'd you get past it?"
- "What was your testing strategy for this code?"
    - "How effective do you think your test suite is? Are there any gaps?"
    - "When did you write tests in relation to when you wrote your code? (Before/During/After)"
    - "What would you do differently?"
- "I see you used Module X here. How would you solve this problem without
  Module X?"
- "What other programming languages would be appropriate to solve this problem with?"
    - "(Based on their answer) What would be different about the solution in Language X?"
- "(Where applicable) If your data file was several orders of magnitude larger
  (say, 1 TB), would this code still work? Why or why not? What would you
  do differently?"
- "What would you do differently if you had a whole week to work on this problem?"
- "I’ve asked all of the questions on my list, and the rest of the time is yours. What questions can I answer for you?"

For the list of things to look for, see [what to look for during the code review interview](https://docs.google.com/document/d/1rP7_yYr_IbfDi-Tj-1troJG2rTDcfVRnI_iH7Ngrzds/edit#heading=h.6l09j457zrt).

## After the interview

**Thank you for your focus!** Use your notes to fill out the feedback form linked in the calendar invitation, which will prepare you for the [debrief meeting]({{ '../../debrief' | url }}).
