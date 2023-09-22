---
slug: question-types
title: Question Types
sidebar_label: Question Types
---

So far we've only looked at one type of question - single text. Docassemble
comes pre-loaded with many different question types that give you options 
on how to ask users for information, as well as how to present options to 
your users. 

## The example block is your friend

At the bottom of the Playground there's a segment called `Example blocks`.
This many examples of common structures and methods used in creating 
Docassemble interviews, and is the best reference guide for starting out, 
and even if you've been using Docassemble for a while. 

### Using multiple fields in the same question

What if we want to ask the user for multiple pieces of information using only 
a single question?

```yaml
question: |
  What are your favorite things to eat?
subquestion: |
  Please be specific.
fields:
  - Vegetable: fav_veggie
  - Fruit: fav_fruit
  - Mineral: fav_mineral
```

### Restricting the user to a specific type of answer

What if we want the user to only answer with a number, a date, or an email address? 
Use the `datatype` specifier:

```yaml
question: |
  Please answer my questions:
subquestion: |
  Please be specific.
fields:
  - Dollar value: big_bucks
    datatype: currency
  - Favorite round number: big_number
    datatype: integer
  - Favorite decimal number: deci_number
    datatype: number
  - Your birthday: user_bday
    datatype: date
  - Your email: user_email
    datatype: email
```

### Creating true-false questions

The `yesno` question type is an easy way to have users set a 
variable to true or false:

```yaml
question: |
  Are you at least 18 years of age?
yesno: over_eighteen
```

### Multiple choice questions

Docassemble gives you different ways to present multiple choice questions. 

Radio buttons:

```yaml
question: |
  What type of shoes do you wear?
field: target_variable
choices:
  - Sneakers
  - Sandals
  - Clogs
  - Other
```

Dropdown:

```yaml
question: |
  What type of shoes do you wear?
field: target_variable
dropdown:
  - Sneakers
  - Sandals
  - Clogs
  - Other
```

Combobox:
```yaml
question: |
  What is your favorite color?
fields:
  - Color: favorite_color
    input type: combobox
    choices: 
      - Red
      - Green
      - Purple
```

### Showing the user more than one screen

If you would like the user to see more than one screen in your interview,
you need to:

1. Make sure the screen is itself `mandatory` or required by a `mandatory` block
1. Make sure that the user can **reach** the screen (that is, it's not blocked by another screen)

#### It's not enough to add another `mandatory` block
In the [Hello, World](./hello-world.md) exercise, we used a single `mandatory: True`
on the final screen of the interview. If we want to display another screen after the
`mandatory: True` screen, our first guess might be to add another block with `mandatory: True`, like this:

```yaml
mandatory: True
question: |
  Hello, World!
---
mandatory: True
question: |
  It's a beautiful day today!
```

The problem is that the "Hello, World!" screen doesn't have a `continue` button.
Docassemble only displays a `continue` button if the question sets the value of
a variable.

#### Adding an invisible field to get Docassemble to display a `continue` button

If we want to display a `continue` button to a screen that doesn't ask any fields,
we can add the `continue button field` modifier, like this:

```yaml
mandatory: True
question: |
  Hello, World!
continue button field: hello_screen_1
---
mandatory: True
question: |
  It's a beautiful day today!
```

The first "Hello, World!" screen will set the value of `hello_screen_1` to `True`
when the `continue` button is pressed.

#### Using an "interview order" `code` block instead

While using more than one `mandatory` block is fine for a short interview, it can get
confusing fast in a longer interview. Instead, we recommend using a single
`mandatory` block in each interview. To do this, we can use a mandatory `code` block
that mentions a variable on each screen we want to display.

We will use the name of:
* A `field` if the question asks for a field.
* A `continue button field` if the question is only informational and doesn't ask a question
* An `event` for an ending screen that doesn't have a `continue` button

```yaml
mandatory: True
comment: |
  This is an interview order block
code: |
  user_name
  hello_screen_1
  ending_screen
---
question: |
  What is your name?
fields:
  - Your name: user_name
---
question: |
  Hello, ${ user_name }!
continue button field: hello_screen_1
---
event: ending_screen
question: |
  It's a beautiful day today!
```

#### Learn more

[Read more about controlling interview order](../../practical-guide-docassemble/controlling-interview-order.md).

## Your assignment

1. Modify your Hello, World exercise so that it uses three different question types. You can use the `continue button field` modifier if you want to display the "Hello, World" question first.

Sam Harden, June 2020