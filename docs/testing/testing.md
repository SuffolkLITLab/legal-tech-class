---
slug: testing
title: Testing
sidebar_label: Testing 
---

Quinten Steenhuis, updated August 2022

## Why test?

The word "testing" can encompass many overlapping goals, including:

* Discovery - learning what product to create, and what features it should have
* Identifying usability problems in your tool
* Verifying the correctness of your tool

## Forms of testing

### Focus groups

A focus group typically includes:

- A moderator
- A group of 3-5 representative potential users of the product you intend to
  build
- A series of questions designed to learn what the users value and desire, and
  their particular needs
- A session that can be between 1 and 2 hours long

Focus groups are most effective early in your product design process, before you
have actual wireframes or code that they can interact with. Once you have a real
product, one on one usability tests may be more effective.

Before holding a focus group, come up with a few key goals that you hope it will
achieve. Then, think of 10-20 questions, with follow-ups, that help explore your
big themes.

You should expect to pay focus group participants. Typical honorariums range
from $25 to $200.

It's a good idea to record your focus group sessions, but you should also take
notes. If you have multiple observers, have each observer write down 3 key
takeaways. After the focus group session is complete, compare notes and discuss
the main points you can use to drive your product's direction.

Without focus groups, it can be hard to know if the product that you are
planning to build will actually meet the needs of your users. But it's important
to remember: you are asking your users to guess what they want, but they may not
be able to accurately state what that is.

### Usability tests

Usability tests also involve talking about your product with real users. They
are not the same as focus groups. Usability tests:

- Involve a single user at a time
- Require a series of tasks that you will observe the user attempt, not
  questions for them to answer
- Involve a moderator who will be in the "room" (camera on) with the user
- Should have multiple observers who can be camera off, and will be looking for
  the key usability problems that the test surfaces

Usability tests are critical to producing a product that your user can actually
use without difficulty. If you don't have an actual product to test yet, you can
actually run usability tests on your competitor's products! You can learn a lot
about how to design your tool "right" by seeing what your competitor or
benchmark site does "wrong."

When designing a user test, your first goal is to come up with a series of
tasks. Tasks should be somewhat open-ended. Assigning an open-ended task to
guided interviews can be tricky as guided interviews tend to be linear, but you
can always start the task on the landing page. Even very simple guided
interviews do tend to involve some branching logic, however. And you can also
assign tasks such as changing an answer, downloading a form, or viewing
instructions that require the user to select among many possible menu items
visible on the screen.

For example: get a child support plan as part of your restraining order.

Start off the usability test by reassuring the user that you are testing the
product, not the user. Warm the user up with a few general questions. Ask for
their general impressions of the site, and then move into observing the user
attempting your tasks.

This script from [the US government agency
18F](https://methods.18f.gov/usability-test-script/) is a great place to start.

Some other key things to remember during the usability test:

- Have your user narrate what they are thinking out loud.
- While observing your user, be careful not to offer help. You can answer
  questions at the end.

Below is a video demonstrating a model usability test from start to finish:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1UCDUOB_aS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You should expect to pay usability test participants. Typical honorariums range
from $25 to $200.

It's a good idea to record your usability tests, but you should also take notes.
If you have multiple observers, have each observer write down 3 key takeaways.
After the usability session is complete, compare notes and discuss the highest
priority usability issues that you can fix.

Keep usability tests simple so that you can conduct them regularly. A good
cadence is once a month.

### Testing for correctness

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

## Further reading

* [Unit tests](https://www.guru99.com/unit-testing-guide.html)
* [End to end tests](https://circleci.com/blog/what-is-end-to-end-testing/)
* [Usability test script](https://methods.18f.gov/usability-test-script/)
* Jonathan Pyle, [Ensuring
  Quality](https://docassemble.org/docs/development.html#quality)