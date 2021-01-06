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

## Your assignment

1. Modify your Hello, World exercise so that it uses three different question types.

Sam Harden, June 2020