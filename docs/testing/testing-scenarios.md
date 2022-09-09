---
slug: testing-scenarios
title: Testing for correctness
sidebar_label: Testing for correctness
---
## Testing for correctness

Testing for correctness usually means:

* Ensuring that your user can download a completed form, or otherwise reach an
  end screen
* Ensuring that invalid input (however you define it) is not submitted
* Ensuring that the user does not see an error screen
* Ensuring that your form is "legally" correct--that is, that the business rules
  of your form are correctly implemented

Testing for correctness is important throughout the form development process.
Errors can creep in at any stage. Errors may also be "regressions". A regression
is a bug that comes back after being fixed. A feature might be complete and work
one day, and a change that you make to seemingly unrelated code can reintroduce
an error. That means you will want a plan to run and re-run your tests multiple
times. Automated tests can help make the re-running step realistic.

Keep in mind that reaching the state of "zero" bugs is almost impossible.
Instead, think about testing the most common situations and provide a way for
your user to let you know about bugs you didn't discover in advance so that you
can quickly resolve them.

Software tests usually come in two varieties:

1. [Unit tests](https://www.guru99.com/unit-testing-guide.html), in which a
   specific function or method is tested in isolation
1. [End to end tests](https://circleci.com/blog/what-is-end-to-end-testing/), in
   which multiple full "paths" through your tool are tested to ensure that the
   different components work in combination.

Unit tests can be very helpful for testing Python code, but less useful in the
most common kinds of guided interviews which involve little code. Instead, you
will mostly rely on end-to-end tests of the entire form. End-to-end testing can
be tedious, but it's important to release software into the world that is
relatively free of bugs. Bugs will reduce user confidence in your tool.

The [ALKiln](https://github.com/suffolkLITLab/ALKiln) framework, developed by
the Document Assembly Line Project, provides a method for automating end-to-end
tests in a relatively flexible way. However, setting up an ALKiln test is still
an advanced task. Most users will get by with a series of manual end-to-end
tests that concentrate on getting good "coverage" of the most common paths
through your guided interview.

The next section discusses a simple manual method of conducting end-to-end tests
by developing realistic user scenarios.

## When is testing complete?

No software has finished testing before it is in the hand of real-world users.
Your users will find bugs that the most carefully planned testing will miss. You
need a plan to gather feedback from your app once it is released in order to
catch these late bugs.

## What is scenario-based testing?

The goal of testing is to validate that software works, and works correctly. In
scenario-based testing, we try to validate software by running through the
features or workflow of the software **as if** we were a real-world user of the
tool.

### Benefits and tradeoffs

The benefit of scenario-based testing is that if done correctly, you will
quickly identify the most important issues in your software with a relatively
small amount of work. The negative is that you will miss some bugs. On the other
hand, identifying all bugs in software is both logically
[impossible](https://en.wikipedia.org/wiki/Halting_problem) and an
inappropriate tradeoff of resources for most projects.

## Creating user scenarios

There are 5 basic steps to scenario-based testing:

1. Brainstorm the profiles of real users of your tool. Think about who they are
   and what goals they may have.
1. Ensure you generate profiles that will encounter multiple branches of your
   tool. For example: if your tool is for helping someone file for divorce, at
   least one profile might be for a user with children, and one without.
1. Now, think broadly about any fact patterns that your user profiles may have.
   Fact patterns are less about who the user is, and more about a temporary
   situation they are in. For example: a user profile might be for a tenant who
   lives in public housing. A fact pattern might be that they owe rent or are
   being evicted for violating their lease.
1. Reason about the combination of your profiles and fact patterns, and
   eliminate any that overlap. These become the scenarios that you will test.
   You want to test most logical branches of your interview with the combination
   of users and fact patterns.
1. Write a brief narrative prompt for your tester that describes each scenario.

For a typical short form, you should end up with 5-10 scenarios. A very long or
complex form may end up with many more. Try to think about how and whether you
can isolate different sections of the tool to avoid an impossibly large
combinatorial explosion of scenarios. If your tool produces some combination of
5 forms, for example, make sure to test your scenarios on each form, but not
necessarily each combination of possible forms, which would immediately increase
your scenarios by a factor of 25.

### What features should be tested, and in which combinations?

The goal of scenario-based testing is to approximate real-world use cases.

Yet it's also important to provide good coverage of the features that your tool has
and makes available, because a user may decide to make use of functionality that
you did not anticipate.

Make sure your testing scenarios cover:

1. Inputs that trigger a new branch of your form (showing or hiding a screen or
   follow-up question).
1. Inputs that trigger a new form.
1. Inputs that trigger computed values (as opposed to ones that are copied into
   the form literally, without being transformed in any way).
1. Inputs that trigger an addendum. These can generally all be tested at once.
1. Reason in advance about combinations of inputs that may interact. For
   example: code that triggers an addendum is probably independent of code that
   shows or hides follow-up questions. You may be able to safely test all of the
   addenda at once.

One way to do this might be to make a matrix. Only some of the overlapping
features will need to be tested in combination. Write down each field 
in the columns and rows of a table, and mark an x if you think that combination of
row and column needs a test.

Example:

&nbsp;      |Has 1 child | Has assets | Lives out of state
-------------|------------|------------|--------------------
Has 1 child | x           | x          | x
Has assets  | (dupe)      | x          |  (not relevant)
Lives out of state |(dupe)| (not relevant) | x

This matrix produced 5 combinations that our user scenarios should
test. If this list is too long, we may be able to remove even more
tests that are truly independent and don't need to be tested in 
combination. We can also combine some features into a single testing
scenario.

## Developing a testing strategy

You should now have between 5-10 scenarios to test. You should come up with at
least two independent testers who will each run each scenario, with a total of
10-20 runs of your tests.

## Running the tests

Your tester should now have a set of user scenarios as prompts for their
testing. The prompts will be narratives. For example, if the form is for an
eviction, the user scenario might be:

> Terry Tenant lives in public housing. She is being evicted for non-payment of
> rent. Her landlord didn't send her a notice to quit. Her goal is to file an
> Answer in her eviction case.

The tester should look at the scenario as they navigate your tool, and answer
all questions as best as they can to reflect the facts that the scenario
provides. They will enter random (but realistic) input as well as they can.

Because there will be multiple tests by different testers, the random input
will help catch more errors than a list of specific inputs for each field.

## Recording the results of your tests

As your tester navigates the tool, they should write down the answers that they
give on each screen. If they run into an issue, they should write down the issue
that they encounter.

It can help to provide your tester a spreadsheet to record their inputs. That
will help you reproduce the bugs and confirm that they are fixed. A narrative is
fine as well. Perhaps your tester just opens a Word document and writes down
their choices.

In some instances, a video recording may be useful. If your tester opens a Zoom
meeting session and shares their screen, they can record the testing session. If
they run into any bugs, the recording can be used to trace their steps.

You should also provide your tester with a place to record feedback. A Google
Form is a good place to do that. Each page of the interview should have a unique
ID that is visible and will help record feedback and errors in the right place.

### Sample tester instructions

```
Dear tester, thank you for agreeing to test my tool! Please read the list of
user-scenarios below. I would like you to run through the form following each
scenario. Please either record your screen on Zoom as you navigate the form, or
write down your inputs on each screen. Each screen has a unique ID shown in
red after the words "Page ID". Use this to identify the screen. If you run
into a bug, try to explain what you did to trigger it, and copy and paste any
error text you ran into.

You can use this form [INSERT LINK] to tell me about the bugs you found.
You can use this spreadsheet [INSERT LINK] to record the tests that you ran.

The scenario does not cover all of the facts. I would like you to imagine that
you are the user described in the scenario, and enter any choices that make
sense to you. Your exact choice is not important. What is most important is
that we get enough different choices from all of the testers to catch most of
the bugs.

For fields that allow a lot of text, you may want to use this 
Lorem Ipsum generator to see how the text input is handled.

https://suffolklitlab.org/legal-tech-class/docs/testing/lorem-ipsum

```

## Review your tests and iterate

Once you have finished a round of testing, look over the results and the
variety of inputs that were entered. You made an assumption about how well
the tests would cover the features of your tool.

1. How well did your tests cover the different logical branches of your tool?
1. Did your tests encounter edge cases that you can safely eliminate,
   simplifying the tool and reducing the scope for future tests? Sometimes the
   safest feature is one that doesn't exist! If your functionality is very
   hard to test, you may consider a simpler substitute for the functionality.
1. Did you notice any pattern of errors that would lead you to redesign either
   your tool or the testing scenarios?

Fix any bugs and confirm them by re-running the test with the facts that the
tester used.

Use the information you learned to decide if more tests need to be run, perhaps 
with new scenarios.

## Further reading

The links below describe some more details about what scenario-based testing is
and how to use it.

* [Unit tests](https://www.guru99.com/unit-testing-guide.html)
* [End to end tests](https://circleci.com/blog/what-is-end-to-end-testing/)
* Jonathan Pyle, [Ensuring
  Quality](https://docassemble.org/docs/development.html#quality)
1. [Wikipedia](https://en.wikipedia.org/wiki/Scenario_testing)
1. [Geeks for Geeks](https://www.geeksforgeeks.org/software-testing-scenario-testing/)
1. [Guru99](https://www.guru99.com/test-scenario.html)