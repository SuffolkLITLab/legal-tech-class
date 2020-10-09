---
id: maturity-model
title: A maturity model for legal apps
sidebar_label: Legal App Maturity Model
---

# An overview of the maturity model

## What is the purpose of this model?

Legal apps that assemble documents or provide tailored information may have
a wide range of quality and capabilities. An app may simply fill in the blanks,
like Microsoft Word's mail merge functionality (and the functionality that
is built-in to many case management systems); or it can provide a true
end-to-end user experience, like using [Upsolve](https://upsolve.org) or
[gbls.org/MADE](https://gbls.org/MADE).

A maturity model can allow us to be more specific about what we mean when we
discuss legal apps. If we have the end-to-end user experience in mind, it can
help us choose an appropriate platform. Knowing that there are many useful
stages in between, meanwhile, can help us prevent "feature creep."

**For app developers**: We want to guide app developers about deliverable
milestones so that we get things out into the real world before they are
perfect. The labels should tell developers which features can be postponed and
which prioritized. We want a steady cadence of releases. Before moving on to a
feature in a future milestone, the app author should try a loose feature freeze
and polish the features in the designated milestone.

**For people providing feedback**: We want to educate reviewers, both experts
and partners, about what features are reasonable before we consider a form
"releasable" into the wild. We also want to offer assurance that the ideas can
make it into a future release without holding up the one they're offering input
on.

**For end-users**: We want users to have some expectation of the kind of help
the form can give them. For example, a level 1 or 1.5 form should be used with
the understanding that it is a similar experience to using a paper form without
any help at all.

**For students completing a project-based learning course**: the instructor
should provide clear guidance about the desired level of capability for the
project that their students are working on. Students can review this maturity
model to understand at what stage their work is releasable and should try to 
mentally organize work to meet milestones, and to have deliverable, testable
work at each milestone.

## What are the limits of a maturity model?

While milestones are helpful to guide development, some critical features
may move up in priority and some may drop in any particular project. A chart,
or in particular the detailed example from the MassAccess project below,
are only a rough guide for any given legal app.

## Quick summary

The table below gives a very high-level overview of the attributes which various
document-assembly or expert systems may include, and one framework for
breaking those features into "levels" of maturity.

Level | Purpose | User-visible features | Quality measures
------|---------|-----------------------|------------------
1 | Beat a blank form | Fillable, with logic to hide irrelevant questions | Reviewed for errors of law by an SME
1.5 | Beat a blank form, plus visible value add | Has undergone readability review | same
2 | True user-friendly but still basic app | App flows like an intake with a new legal aid employee | Close attention from an SME and testing for code errors
3 | User-friendly and highly polished app | App flows like an intake with an experienced employee, but still provides only basic features outside of what would happen in an intake | Limits of the basic app may be removed (e.g., provides for addenda rather than limiting character input). Thorough testing, including UX testing with users or experts
4 | Problem solving / solution oriented | Highly polished app that includes useful features beyond intake, such as reminders, videos, and training materials | Extensive testing and expert usability review


## Example: maturity model for the [MassAccess Project](https://massaccess.suffolklitlab.org)

Features vary quite a bit from project to project and from platform to platform. To make the model
above more complete, here is an illustration of the specific features that are targets for the
Suffolk University Law School's [MassAccess](https://massaccess.suffolklitlab.org) project.

### Level 1, Blank form+

#### User-facing features

* **The user can correctly fill in every field in the PDF or Docx**
* Basic branch logic to eliminate unneeded questions. 
* Each piece of information only needs to be typed once (like user's name), signature date, etc.

Platform features that author does not need to explicitly add:
* Digital signatures
* Text to speech
* Court lookup tool
* Advocate can help client remotely and send to client to sign
* Common, shared questions (like name, role) are in plain language

Optional features:
* Compound questions have been separated into individual questions.
* Cover page with next steps, if it is ready.
* Auto-generated review screen is turned on, but only if there are no dependent
  questions that break it. Otherwise hold off.

#### Quality protection measures

* The app has been reviewed for any dangerous errors or omissions by a subject
  matter expert. This may go beyond protections on the paper PDF.
* Character limits are in place if the form is a PDF (preferably generous limits
  with fixed line height and auto-sizing text).
* The form has at least some context to avoid misuse. E.g., link to
  masslegalhelp.org.

### Level 1.5, Blank form++

#### User-facing features

All features above, and:

* Compound questions have been separated into individual questions
* Developer has followed plain language checklist and used automated tools to
  review language readability

### Level 2, Basic form

#### User-facing features

All features above, and:

* The app flows like a natural-language intake with a new legal aid employee. 
* All questions are written to meet a 6th-8th grade reading level (FKGL).
* Branch logic eliminates unnecessary questions and provides a logical flow.
* Similar questions are combined and grouped together logically as appropriate.
* The computer does basic calculations it can do. (Math and text concatenation).
* We avoid compound questions. Instead, we use checkboxes to make each input answer one thing at a time.
* Optional features:
    * ~ One of the features below: 
    * Cover page with next steps, if it is ready.
    * Review screen with depends on to cover all screens of the interview.

#### Quality measures

* The app has received close attention from a subject matter expert to clarify
  legal information and avoid errors and omissions.
* The app has received close attention to plain language on all questions.
* Basic testing: we have identified logical user scenarios. Each scenario has
  been tested with random input at least 2-3 times, or has undergone more
  rigorous user or automated testing.

### Level 3, Advanced form

#### User-facing features

All features above, and:

* The experience is polished, like an intake with an experienced legal aid
  attorney.
* Cover page with clear next steps is provided to the user.
* We use lists and tables to simplify information entry where appropriate.
* We provide meaningful choices (lookup lists) where we can even if the space in
  the form was completely open-ended. Note: we always provide the user with the
  ability for free-text input.
* We make appropriate and humble use of input validation to guide users, while
  keeping in mind we don't want to be a source of errors by being over zealous.
* The app includes section labels that automatically advance to allow a user to
  see their progress.
* The app may do more advanced calculations. Also, it may carefully screen out
  scenarios that the user could put down on paper but that could then lead to a
  judge rejecting the completed form.
* The user has the ability to edit their answers through a review screen.
* We have implemented at least half of the user and expert suggestions that we
  agree with that improve the form beyond "basic" level, after resolving ones
  that contradict each other.
* The full app may be translated into one or more languages.
* Optional features:
    * ~ One of the features below.

#### Quality measures

* Addenda are in place for any fields that are likely to exceed the character limit.
* Automated tests are in place to prevent regressions on each user scenario
* Some user testing or testing with expert UX reviewers has taken place

### Level 4, Problem solver

All features above, and:
* While not providing legal advice, the experience is more like limited
  assistance representation by an attorney.
* User receives some guidance or automatic selection as to which form to use, or
  multiple forms are produced.
* The app includes pictures that provide context for locating information on
  each page where relevant. (E.g.: photo of summons showing where to copy
  plaintiff name).
* We provide a significant level of benefit beyond an intake, including one or
  more of:
    * Automated reminders
    * Filtered links to external help (like the appropriate DV resource for a user's
      city or county)
    * Videos, calculators, or other bespoke features
    * Translated into one or more languages other than English
    * We have implemented most of the user and expert suggestions that we agree
      improve the app after resolving suggestions that contradict each other

#### Quality measures

In addition to quality measures above, the app:

* has undergone extensive testing, including automated tests for regressions.
* has had expert usability review or testing with real users