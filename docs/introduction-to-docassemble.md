---
slug: introduction-to-docassemble
title: Introduction to Docassemble
sidebar_label: Introduction to Docassemble
---

## What is Docassemble?

[Docassemble](https://docassemble.org) describes itself as a free, [open-source](https://en.wikipedia.org/wiki/Open_source) [expert system](https://en.wikipedia.org/wiki/Expert_system) for guided interviews and [document assembly](https://en.wikipedia.org/wiki/Document_automation), based on [Python](https://www.python.org/), [YAML](https://en.wikipedia.org/wiki/YAML), and [Markdown](https://en.wikipedia.org/wiki/Markdown).

Another way to say this is that Docassemble is a [web framework](https://en.wikipedia.org/wiki/Web_framework) that can be easily customized to create a wide variety of interactive applications with a (usually linear) question/answer format that might:

1. Deliver tailored information or advice
1. Fill out a template with information gathered from a user or client
1. Place information into an electronic database

For example, a Docassemble interview could ask for something like the user's name and address and use those to add the user's signature to a letter to Congress. A more complex example could ask for facts that underly a complaint and create tailored pleadings: and even electronically file them on PACER.

These applications are usually called _interviews_. A server running Docassemble can run many interviews at once.

An interview author can use Docassemble to create one of these interviews without having to focus on many of the details of running or configuring a web application. At the same time, Docassemble offers a great deal of flexibility to customize and add advanced features without needing to switch to a different platform.

## Comparable applications

If you are reading this in the United States, you have probably used TurboTax or a competitor for filing your taxes. Docassemble allows the creation of very similar applications. Direct competitors to Docassemble's functionality include:

1. [HotDocs](https://hotdocs.com)
1. [A2J Author](https://a2jauthor.org)
1. [Neota Logic](https://www.neotalogic.com/)
1. [Contract Express](https://legal.thomsonreuters.com/en/products/contract-express)
1. [Odyssey Guide and File](https://www.tylertech.com/products/odyssey/guide-file)

Notable apps in the same space but with different functionality include:

1. [QnAMarkup](https://qnamarkup.org)

Docassemble has also inspired two user-friendly low-code frontends: [Afterpattern](https://afterpattern.com/) (previously Community Lawyer) and [Documate](https://www.documate.org/).

## How does Docassemble work?

Docassemble runs on a web server. This could be a desktop or laptop computer, but most commonly, it's a computer in "the cloud," such as Amazon Web Services (AWS).

You typically access Docassemble from a web browser, either on a desktop or a mobile device. Docassemble can also be accessed by SMS text messaging, voice control, or by API.

Interview authors need to think about three key components when creating a Docassemble interview:

1. The _interview_ questions (and their sequence, and logic controlling that sequence)
1. The _template_ or final output, and any logic internal to the template that decides whether certain sections are shown or hidden.
1. The _underlying logic_ of the problem that the application is addressing. For example, a legal rule that exists in the real world. A name for these that is useful in many domains is _business rules._

### Interview Files
Interview files are written in plain text, using a combination of the [YAML](yaml.md) file format, [Markdown](markdown.md), and [Mako](mako.md).

### Templates
Templates are normally one of three choices, each with different systems of logic:

1. A plain text template, using the same [Markdown](markdown.md) and [Mako](mako.md) syntax as is used to write interviews.
1. Microsoft Word (.docx) files, using [Jinja2](jinja2.md) syntax
1. Adobe PDF formatted documents, using Acrobat's field editor

The plain text format can be downloaded by the end user as an RTF, Word or PDF file, and Microsoft Word templates can be downloaded as Word files or automatically converted to PDFs.

### Logic
Docassemble runs on Python, a popular and easy to use computer programming logic. It's typical to write business rules in Python. There are slight variations on Python used for logic inside templates.

There's no one place that you absolutely must put this logic. It can live in the template file. It could be embedded into your interview file. Or it can live in separate Python modules.

However, it's recommended to keep most of the logic representing substantive rules in separate Python modules. This keeps templates and interview files neat and readable. It also helps you be able to view all of your business rules in one place to validate, check for errors, and even run automated tests. For example, you could use short functions like this:

```python
def test_rule_against_perpetuities(person, vesting_time):
    return person.is_alive or (person.death_date.plus(vesting_time) < 21)
```

for each rule that your interview makes use of. It's even possible to share these rules with other authors and avoid having to go through the difficult process of turning legal rules into computer code when unnecessary.

## Special features
Docassemble has a number of special features that make it powerful for representing complex legal applications.

1. Ability to schedule interaction after the user's session has ended
1. Integration with email and SMS to automate reminders, follow-up interviews, and more
1. Ability to call external APIs to integrate third-party applications (such as payment platforms, maps, and databases)
1. Ability to customize every aspect of screens with JavaScript, CSS, and Python code