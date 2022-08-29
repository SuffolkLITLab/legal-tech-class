---
slug: hello-world
title: Hello, World
sidebar_label: Hello, World
---
import useBaseUrl from '@docusaurus/useBaseUrl';


Let's begin our Docassemble journey by trying a simple coding exercise: the classic
Hello, World exercise that is the traditional first exercise in a new programming
language.

## What is Docassemble?

Docassemble is a system for running interactive questionnaires. It uses several
open source technologies, including [Python](/docs/python.md), [Markdown](/docs/markdown.md), [YAML](/docs/yaml.md) and docx-template to
let you concentrate on writing your interviews and writing very little code.
Yet, it's flexible enough to allow you to use advanced coding techniques when
you need to do so.

### Video version of this training

This training was conducted live in June, 2020. You can follow
along with the video if you want, or if you prefer just follow the 
written instructions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Lsh_2qmTSAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Introduction to the Docassemble Playground

We will use the Docassemble playground for all exercises. Log in to your
Docassemble server. When you are loggged
in, click on your email address, and then select the Playground option to reach the
Playground.

<img alt="Overview of the Docassemble Playground" src={useBaseUrl('img/playground_window.png')} />

The Playground is made up of several elements.

1. The main text editing window
1. A list of example blocks that can be directly inserted into the text editing window
1. A list of variables and functions available in the current interview file
1. The save and run button, used to run the interview and view results.
1. The share button which also gives you a link that can be shared 

## Hello, World

In computer programming, the [traditional first
exercise](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) in a new
programming language is to display the text "Hello, World."

### Baby steps

Let's erase the text in the playground and replace it with the text below:

```yaml
question: Hello, World
```

Docassemble interviews contain a series of `specifiers` followed by text, such
as the `question` specifier. The `question` specifier tells docassemble that
what follows will be the title of a screen displayed to the user.

When you save and then run this sample, you will notice an error.

```
Error
Docassemble has finished executing all code blocks marked as initial or mandatory, and finished asking all questions marked as mandatory (if any). It is a best practice to end your interview with a question that says goodbye and offers an Exit button.
```

### The mandatory specifier
Take a minute to read the error message. In Docassemble, your interview can
contain many questions and branches that are never shown to the user. This error
is telling us that _none_ of the questions are marked as `mandatory`, or
required, so Docassemble doesn't know what to display. Let's fix that.

```yaml
question: Hello, World
mandatory: True
```

The `mandatory` specifier marks this block as required. Now when we run the
interview, we'll see the text "Hello, World" on the screen without any errors.

> **Note**: you should normally have only ONE `mandatory` block in a single
> interview. We'll discuss good practices around this later.

### Introducing variables

The purpose of Docassemble is to gather information from the users. Let's ask
the user's name so we can greet them personally.

```yaml
question: Hello, ${user_name}
mandatory: True
---
question: What is your name?
fields:
  - Name: user_name
```

We introduced several new ideas in this interview. Notice that each screen in
the interview is separated by three dashes, like this: `---`.

We introduced a new `specifier`, `fields`. Instead of single line of text, this
`specifier` takes a list. Each field in the list is indented and begins with a
single dash, like this: `-`. Each item has a label, followed by a colon,
followed by the name of the variable that the user's input will be assigned to.

To learn more about the format of a Docassemble interview, read the section on
the [YAML format](yaml.md).

We also introduced `variables`. A variable is simply a placeholder. `user_name`
is a variable that is a placeholder for the user's name. Inside the Docassemble
interview, we can display a variable by surrounding it with `Mako` tags, like
this: `${variable_name}`.

> **Note**: We don't need to tell Docassemble to mark the second question as
> mandatory. Because the mandatory question requires the variable `user_name`,
> Docassemble automatically asks the first question that provides a definition.

## Your assignment

1. Modify the Hello, World exercise so that it ask for the user's first and last
   names separately.

Quinten Steenhuis, June 2020
Sam Harden, June 2020
