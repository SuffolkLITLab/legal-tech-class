---
slug: assignment-creating-document
title: |
  Assignment 4: Creating a document
sidebar_label: Assignment 4
---

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.

<img alt="Man signing document" src={useBaseUrl('img/cytonn-photography-GJao3ZTX9gU-unsplash.jpg')} />

_Photo by Cytonn Photography on Unsplash_

## Something from Nothing: Assembling Your First Documents with Docassemble

We have already explored ways to show text to the user, from our very first
[Hello, World exercise](2020-law-smart-machines-assignment-1.md).

We can create documents using the same method. We need to learn about a new `specifier` first:
the `attachment` specifier. You can read more about `attachments` here, or check out the [official documentation](https://docassemble.org/docs/documents.html#oview).

## Example

Let's demonstrate a simple interview that assembles a Hello, World document.
We'll use a few new specifiers: the `attachment` specifier, and a few options that fall underneath it to control the name and content of the document we create.

```yaml
---
comment: |
  As a best practice, let's continue to use an object whenever we collect information about a person. Check out Assignment 2 if you need to refresh your memory.
objects:
  - client: Individual
--- 
comment: |
  This block controls the order of questions in the interview
mandatory: True
code: |
  client.name.first
  download_files
---
question: |
  What is your name?
fields:
  - First: client.name.first
  - Last: client.name.last  
---
comment: |
  As a reminder, an event specifier is used for an ending screen.
event: download_files
question: |
  Your file is ready
attachment:
  name: Hello World
  filename: Hello_World
  content: |
    Hello, ${client}
```

Let's take a closer look our sample interview. As a reminder, instead of a standard variable name, we're using an [Individual object](practical-guide-docassemble/object-oriented-programming.md#the-individual-class) to store the information about our user. We use the `objects` block to create our `client` object.

The only new feature of our interview comes in the `attachment` specifier at the end. Notice we have three options indented below the `attachment` specifier:

1. `name`: A descriptive name that is shown by Docassemble on the screen
1. `filename`: The filename that the user will download (we don't need to include .pdf or .rtf)
1. `content`: the actual text that the document will contain, which can include Mako + Markdown. If we click the "preview" link, we can see a preview of the attachment.

Here's how those options will appear on the screen:

<img alt="Attachment example" src={useBaseUrl('img/Hello_world_document.png')} />

Docassemble also offers us an option to email the completed document.

## Putting it into practice

[Amnesty International](https://www.amnesty.org/en/) uses international letter writing and other pressure campaigns
to get governments around the world to release "[prisoners of conscience](https://en.wikipedia.org/wiki/Prisoner_of_conscience)". Let's write a tool that might help someone write letters more efficiently.

Our letter will request the release of Dr. Martin Luther King, Jr. from the Birmingham jail.

In addition to the `attachment` specifier, we introduce two new kinds of screens:

* The [`area` input type](https://docassemble.org/docs/fields.html#plaintext)
* An [information screen with a continue button](https://docassemble.org/docs/questions.html#tocAnchor-1-6-3), which uses the specifier `field`
* A [signature screen](https://docassemble.org/docs/questions.html#tocAnchor-1-6-5), which uses the specifier `signature`

Let's start with some working code. We'll modify this to improve it.

```yaml
---
objects:
  - user: Individual
---
mandatory: True
code: |
  introduction
  user.name.first
  custom_paragraph
  user.signature
  download_screen
---
comment: |
  Using an introduction screen is a good idea. It helps your
  user understand what the tool can and cannot do.

  Use the specifier field for a screen that doesn't do anything
  except display a continue button.
question: |
  Letter writing tool
subquestion: |
  This tool will help you send a letter to request the release of Dr. Martin Luther King, Jr. He was arrested in August 1963 during non-violent demonstrations against segregation in the city of Birmingham, Alabama.

  At the end, we'll ask you sign the letter, print it, and mail it to the city prosecutor's office.
continue button field: introduction
---
question: |
  What is your name
fields:
  - no label: user.name.first
---
question: |
  Sign below
signature: user.signature
under: |
  ${user}
---
comment: |
  input type: area lets you collect more than one line of text
  at once
question: |
  Add a custom paragraph
fields:
  - no label: custom_paragraph
    input type: area
---
event: download_screen
question: |
  Your letter is ready to download and print
subquestion: |
  Print the letter below. Mail it to the Birmingham prosecutor
attachment:
  name: Letter to the Birmingham Jail
  filename: letter
  content: |
    Birmingham City Prosecutor

    ## The charges against Martin Luther King Jr. must be dropped

    Dear Prosecutor,

    I am writing to you concerning the prosecution of Martin Luther King Jr., who is currently incarcerated in the Birmingham Jail.

    Dr. King was arrested as a non-violent participant in protests against segregation. His arrest is unfair and in violation of international law.

    ${custom_paragraph}

    In conclusion, I ask you to immediately release Dr. King.

    Yours sincerely,

    ${user.signature}

    ${user}
```

## Assignment

* Change the file name of the letter to be more descriptive
* Add a yes/no question to the interview that prompts the user about whether they live in Alabama. Look back at assignment 3 for one way to add a [yes/no question](https://docassemble.org/docs/fields.html#fields%20yesnoradio) using the `fields` specifier. You could also use [yes/no buttons](https://docassemble.org/docs/fields.html#yesornoquestions).
* Add an optional paragraph using `% if ...:` and `% endif` tags that only displays if they live in Alabama. For example, it might say "As an Alabama resident, I am disappointed..." You may want to review the section in [Mako](mako.md#use-conditional-text) on conditional text. We also used conditional text in Assignment 1.

### Turning in your work

Download the final YAML file and copy the link to run your interview. Upload to Blackboard.
