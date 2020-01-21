---
id: 2020-law-smart-machines-assignment-1
title: Assignment 1
sidebar_label: Assignment 1
---
import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.

## Before you get started

We will discuss the first few sections of this assignment in class. To refresh your memory and reflect on your own, I recommend skimming the [Overview of Docassemble](introduction.md), Description of [YAML](yaml.md), and the section describing [Mako](mako.md). If you run into any trouble, please ask for help on the class Slack channel.

## Introduction to the Docassemble Playground

We will use the Docassemble playground for all exercises. Log in to the Docassemble server at https://interviews.lemmalegal.com. When you are loggged in, click on your name, and then select the Playground option to reach the Playground.

<img alt="Overview of the Docassemble Playground" src={useBaseUrl('img/playground_window.png')} />

The Playground is made up of several elements.

1. The main text editing window
1. A list of example blocks that can be directly inserted into the text editing window
1. A list of variables and functions available in the current interview file
1. The save and run button, used to run the interview and view results.
1. The share button which also gives you a link that can be shared 

## Hello, World

In computer programming, the [traditional first exercise](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) in a new programming language is to display the text "Hello, World."

### Baby steps

Let's erase the text in the playground and replace it with the text below:

```yaml
question: Hello, World
```

Docassemble interviews contain a series of `specifiers` followed by text, such as the `question` specifier. The `question` specifier tells docassemble that what follows will be the title of a screen displayed to the user.

When you save and then run this sample, you will notice an error.

```
Error
Docassemble has finished executing all code blocks marked as initial or mandatory, and finished asking all questions marked as mandatory (if any). It is a best practice to end your interview with a question that says goodbye and offers an Exit button.
```

### The mandatory specifier
Take a minute to read the error message. In Docassemble, your interview can contain many questions and branches that are never shown to the user. This error is telling us that _none_ of the questions are marked as `mandatory`, or required, so Docassemble doesn't know what to display. Let's fix that.

```yaml
question: Hello, World
mandatory: True
```

The `mandatory` specifier marks this block as required. Now when we run the interview, we'll see the text "Hello, World" on the screen without any errors.

> **Note**: you should normally have only ONE `mandatory` block in a single interview. We'll discuss good practices around this later.

### Introducing variables

The purpose of Docassemble is to gather information from the users. Let's ask the user's name so we can greet them personally.

```yaml
question: Hello, ${user_name}
mandatory: True
---
question: What is your name?
fields:
  - Name: user_name
```

We introduced several new ideas in this interview. Notice that each screen in the interview is separated by three dashes, like this: `---`.

We introduced a new `specifier`, `fields`. Instead of single line of text, this `specifier` takes a list. Each field in the list is indented and begins with a single dash, like this: `-`. Each item has a label, followed by a colon, followed by the name of the variable that the user's input will be assigned to.

To learn more about the format of a Docassemble interview, read the section on the [YAML format](yaml.md).

We also introduced `variables`. A variable is simply a placeholder. `user_name` is a variable that is a placeholder for the user's name. Inside the Docassemble interview, we can display a variable by surrounding it with `Mako` tags, like this: `${variable_name}`.

> **Note**: We don't need to tell Docassemble to mark the second question as mandatory. Because the mandatory question requires the variable `user_name`, Docassemble automatically asks the first question that provides a definition.

### Introducing logic

Docassemble uses [Mako](mako.md) tags to control displaying variables and basic logic inside the interview file. Let's try out using an `if` statement: the most basic building block of logic.

```yaml
question: Hello, ${user_name}
subquestion: |
  % if user_name == 'Bob':
  My uncle's name is Bob too!
  % endif
mandatory: True
---
question: What is your name?
fields:
  - Name: user_name
```

In this iteration, we introduce the `line continuation` marker, `|`. This allows us to have more than one line of text in a row that is part of the same field. Text that follows the `line continuation` marker is always indented. Usually, we use two spaces as indentation.

We also introduce the `subquestion` specifier. A `subquestion` is displayed in a smaller font than the main `question` text.

A `Mako` `if` statement is written on its own line. Notice that the line _must_ end in a `:`. Also notice that when we check the value of a variable, we need to use a double `==`, not `=`. We also need to tell Docassemble when the optional text ends and the main text starts back up with the `endif` keyword.

> **Note**:  [YAML](yaml.md) is picky about indentation. If you run into an error, check to make sure each line is indented the same way as the example above.

## Your assignment

1. Modify the Hello, World exercise so that is asks for the user's birthday. Use the `date` datatype. Take a look at the [Docassemble documentation](https://docassemble.org/docs/fields.html#date) to see examples.
1. If today is the user's birthday, wish them happy birthday.

### Stretch goal
1. Display a balloon if it's the user's birthday. You may want to use a font-awesome decorator. See [documentation](https://docassemble.org/docs/fields.html#date). You can also use a static image or a gif.