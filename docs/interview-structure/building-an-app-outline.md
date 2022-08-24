---
slug: building-an-app-outline
title: Planning and building your first expert system
sidebar_label: Building your first expert system
---

Quinten Steenhuis, August 2021

When you read the outline below, you should have a better understanding of the
different phases of building a successful expert system or document assembly
app.

Read the below as a guide, not a set of rules. You may spend more or less 
time on any of the items discussed below on any given project.

## The planning phase

When you begin your app, you want to understand how your process will be 
completed in the world as it exists now, without your automation.

1. Identify the relevant legal authorities: statutes, regulations, or rules.
1. Locate the relevant forms, model advice letters, or model documents that your
   tool will be built around.
1. Read secondary sources or talk to practitioners to understand the context of
   how the form or model documents fit into a broader process.
1. Sketch out an outline of the entire process that someone needs to complete.
1. Ask yourself:
    - Who will be using this tool? Are they an attorney, pro se, or a paralegal
      or advocate?
    - What goals do they have?
    - Will they use this tool many times or will they typically be completing the
      process for the first time?
    - What part of the process is best suited to automation? What steps will a
      user need to complete either **before** or **after** they use your tool?

After running through the steps above, you might decide to select a different
part of the process to automate. However, even if your chosen document only
relates to a small piece of a process, you can solve some problems with clear
instructions about steps a user needs to complete before and after they use your
tool.

Read the forms and models carefully. Identify areas that are unclear, seem
contradictory, or need information that might be hard for the user of your tool
to locate. These will be questions you can forward on to a subject matter expert
to clarify.

When you automate a form it is common to find drafting errors. Automation is a
"stress test" of rules, statutes and forms and can often help locate edge
cases that the authors didn't consider.

Next, develop a draft list of:

1. Questions that someone might ask to complete the process.
1. Documents and information that your user will need to have in front of them
   to answer your questions.
1. Steps your user will need to take after they finish the process. For example:
    - Adding a "wet" or notarized signature.
    - Filing the document in court.
    - Completing follow-up documents by a deadline.

The "gold standard" is sitting down with a practitioner and having them ask you
the questions needed to complete the process. Also do your best to get
models of completed forms.

## Elements of a successful final product

Up until now, we have been talking about "apps" without defining what your final
product will look like. At a minimum, most useful legal apps include:

1. Context, so that before the user goes very far, they know what the app will
   do and what they need to have in front of them before they start answering
   questions.
1. Screening questions, which should come before user information is collected,
   to help users make sure that their situation is one that the tool can handle.
1. "Just-in-time" help and explanations of key concepts in the process that help
   users make appropriate selections in the tool.
1. Navigational elements, signposting, and other guidance that helps a user
   understand how long the app will take to use and where they are within it.
1. Implementation of "business rules" and basic calculations that the computer
   can do more accurately or easily than a person. For example, calculations
   relating to deadlines, eligibility, total income, and similar data points.
1. An accurately completed final recommendation or other output.
1. A clear set of "next steps" that your user can take with them to achieve
   their goal. These instructions will help your user complete the process that
   is not contained in your automation and better understand what will happen next.

Students often jump in to building a tool, which is actually a great way to
understand the remaining pieces. You may also pause the development process once
you get a runnable prototype and move on to getting a first round of feedback.
But most of your time as a student-developer or customer of a developer will be
thinking about the rest of this list.

If you are using the "[assembly
line](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/)"
process, you should follow the more specific guidance there about labeling your
form, running it through the Assembly Line Weaver, and customizing it in the
playground. Most of the steps written above will be refined in the Docassemble
playground, not in the Assembly Line Weaver or labeling process.

## Iteration and testing

> No plan survives contact with the enemy. - [Helmuth von Multke](https://en.wikiquote.org/wiki/Helmuth_von_Moltke_the_Elder)

As wonderful as the planning process might be, the truth is that there are many
questions that your subject matter expert will not be able to think of or answer
until they see a real, runnable draft of your tool. Therefore, it is important
to get that prototype in front of real users early on. It can be a tool
to help frame your first chat with a subject matter expert. You might, for example,
run a demo of your tool over Zoom while asking questions about the form and clarifying
your interpretation.

The Michigan Advocacy Program recently received a grant to develop a wonderful
[training
program](https://www.lsntap.org/node/332/map-x-gap-strategies-user-informed-legal-design)
in user testing and usability design. Here are a few useful principles to keep in mind:

1. You can learn the most from the first 4-5 testers of your tool. Having dozens
   of testers isn't necessary.
1. Observation is the gold standard for understanding usability. What this
   means: give your users a task to complete, and then watch as they use your
   tool. Write down notes on what seems easy to achieve and what doesn't make
   sense to the tester. Try not to interrupt with words like "oh, just click in
   the top corner here" or similar.
1. If you are collecting feedback asynchronously, encourage your testers to
   record themselves and narrate aloud as they use the tool. Zoom is very
   helpful for this task; they can start a Zoom session and record it without
   anyone else on the call.
1. Make it easy for your user to provide feedback on specific screens. We use
   unique page IDs that appear on-screen in test mode; we also embed a feedback
   link on each screen.

Once you get a round of feedback, you may feel overwhelmed! Your testers may have 
provided feedback that:

1. Applies to part of your tool that you cannot control.
1. Would add a significant amount of time to development.
1. Contradicts feedback that you received earlier or that another tester provided you.
1. Contradicts your own strong intuitions or lessons you have learned from
   experts in usability or readability.

Your task when collecting feedback is **not** to implement every idea. You need
to apply your own judgment to prioritize what can and should be implemented.
Defer to your subject matter expert where advice conflicts, but do not
jeopardize a deliverable product to implement a new tricky feature.

## Knowing when to stop

After you have drunk from the user feedback firehose, you may have an 
overwhelmingly long to-do list. Stop and review the 
[legal technology maturity model](legal-tech-overview/maturity-model.md).

Your goal as a developer is to release something **useful** into the world. Your
work can always be improved. Remember to stop and deliver what you have when it
is "useful enough". At the same time, do not neglect safety.

It can be helpful to think of different ways to help your user use your
tool correctly, arranged in order from simplest to hardest to achieve:

1. Written instructions.
1. Input validation.
1. Business rules and app logic that prevent incorrect choices.

Depending on the complexities and dangers of your tool, just writing down
instructions in your app can be the solution to a lot of complex logic that
you might want to eventually implement. Start simple, release what you have,
and add in features over time.

## Helping the next developer

A software project is never "done"--the coder just ran out of time or money to
keep enhancing the tool.

Your job as a software developer is to leave space for the next developer to
continue improving what you have built. To use the framing of the
[legal technology maturity model](legal-tech-overview/maturity-model.md),
help the next developer move your tool up the maturity scale.

1. Make a note of where you compromised for time or to save room for more
   important features, such as places validation or business rules could be
   implemented.
1. Write down user feedback that seemed useful but that you couldn't implement.
1. Write down feature ideas that you identified on your own.
1. Bring together the research that you conducted about the rest of the process
   so that a next developer could extend your tool.

For most developers, the best place to put these ideas is as issues in GitHub.
If you are using Trello, it could be a good place to store notes and research,
saving GitHub for actionable items.

## Further reading

* Lauritsen & Soudakoff, [Keys to a Successful Document Assembly
  Project](https://static1.squarespace.com/static/571acb59e707ebff3074f461/t/5946f745725e25bf7ad93c9b/1497823045990/keys.pdf)

  
