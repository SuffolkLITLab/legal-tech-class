---
id: 2020-law-smart-machines-assignment-2-doop-intro
title: Object Oriented Programming
sidebar_label: Assignment 2
---

<!-- 'doop' stands for Docassemble object oriented programming -->

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.

## Using classes and objects in your Docassemble interview

The purpose of this assignment is to dip your toes into the world of [classes and objects](practical-guide-docassemble/object-oriented-programming.md), as well as object-oriented programming. They can make your code neater, easier to read, and save you a lot of time and duplicate code.

### tl;dr


1. A class is like spreadsheet with columns that have names, like `phone_number` and `send_message`.
1. If a cell in a column is going to have data in it, like a string or an array, we call that an **attribute**.
1. If a cell in a column will have a procedure (a function) in it, we call that a **method**.
1. You need an `objects` block to make an object in Docassemble.
1. You use . (dot) notation to refer to an object's attribute, like this: `object_name.attribute`.
1. You use . (dot) notation to call a method of an object, like this: `object_name.method()`.

### Classes and objects in general

Classes and objects are inextricably linked. You use a class to make an object.

A class is a blank template. Think of a spreasheet with column headings. That's a class. Think of an object as one row in that spreadsheet. Every time you use a class, you're getting a new row that you can fill out.

### How do they help?

A lot of coding is about holding details - data and procedures (data and functions). To do that, you give everything names. You throw those names around in your code a lot. If you find a bunch of data and/or procedures that are related to each other and keep needing to be used together, throwing them around can feel like throwing a bunch of confetti. Imagine a hacky sack without the sack part - just the beans. A class is like the sack. It lets you throw all the beans.

### An example

You are a human, or so we'll assume. There are lots of things to know about you. For example, your phone number. There's also stuff we might want to do with you. For example, message you.

### So, classes

1. A class is like spreadsheet with columns that have names, like `phone_number` and `send_message`.
1. If a cell in a column is going to have data in it, like a string or an array, we call that an **attribute** - `phone_number`.
1. If a cell in a column will have a procedure (a function) in it, we call that a **method** - `send_message`.

**Note:** An object is said to be a unique 'instance' of a 'class'.

### Classes in Docassemble

For the most part, you will use classes that have already been made, so we're going to focus on using classes. You might make some simple classes for your final project, but if so, they will likely not need any advanced understanding of these concepts. Docassemble has a lot of classes already built in.

#### Using a class
For example, a `Person` class. You can make an object from a `Person` class that will have the data for one person.

Like everything in code, your computer's pretty anxious and needs you to prepare it for what's going to happen next. You'll need to use an `objects` block to do that:

``` yaml
---
id: cool_kids
objects:
  - Shira: Person
---
```

Don't judge. Cartoons are people too.

Now your program is prepped. We used the class (spreadsheet) `Person` to make an object (a row) called `Shira` that has a bunch of useful beans in it. You can see some useful `Person` beans in the [Docassemble docs for `Person`](https://docassemble.org/docs/objects.html#Person).

#### Using an object

But how do we get at those beans? `Computer, give me Shira's phone_number column` isn't going to cut it.

Python knows we're trying to use an object's **attributes** or **methods** when we use 'dot notation'. Dot as in `.`. To get the value in the 'column' called 'phone_number', we use `Shira.phone_number`. We don't have that number yet, though.

#### Getting a value

We want to be able to text Shira if we're in trouble, so we'll make a `question` block that will show the screen that will ask her the question:

``` yaml
---
id: cool_kids
objects:
  - Shira: Person
---
id: phone_number
question: |
  What's your phone number? I promise to only use it in an emergency.
fields:
  - Phone number: Shira.phone_number
---
```

Now use a `code` block to trigger that question:

``` yaml
---
id: cool_kids
objects:
  - Shira: Person
---
id: flow_code
mandatory: True
code: |
  Shira.phone_number
---
id: phone_number
question: |
  What's your phone number?
fields:
  - Phone number: Shira.phone_number
---
```

As you can see, `Person` isn't just special because it holds a lot of beans. It's also special because each of those beans has a tracker on it. When you write code that asks for one of the beans (`phone_number`), `Person` is built so that Docassemble can go looking for that bean and ask the questions that need to be asked. All Docassemble classes are built that way.

### Better names

That was a special interview, just for Shira, Princess of Power. Theoretically, we could use that interview for anyone and it would work just fine, but we can find a better name for a general interview:

```yaml
---
id: people
objects:
  - user: Person
---
```

Now whoever has to read that code will know it's for anyone.

### Big caveat

Classes don't have to be two dimentional like spreadsheets or beanbags. You can have new spreadsheets in every cell in the spreadsheets. Beanbags in every bean. That's how you can get more detailed than just one spreadsheet would allow:

``` python
Shira.name.first
```

It's beanbags all the way down.

## Assignment

<!-- Haven't looked closely at those readings -->

Before getting started, please review the section on [Object oriented programming in Docassemble](practical-guide-docassemble/object-oriented-programming.md) which will talk more about making objects, too.

Pay special attention beginning with the discussion of [Objects in Docassemble](practical-guide-docassemble/object-oriented-programming.md#using-an-object-inside-docassemble).

### Use a Docassemble class in a  interview, Part 1

Some content here with a lot of explicit instruction, showing, and hinting, and very limited complexity.

### Rewrite this interview

Copy the text below and make it into a Docassemble interview. Alter it so that it leverages Docassemble built-in classes and methods.

An `Individual` is another class Docassemble has. It's a lot like `Person`. In fact, it's built off of `Person` and has the same beans and more. You should be able to complete the assignment by looking carefully at the examples discussing the [Individual](practical-guide-docassemble/object-oriented-programming.md#the-individual-class) and [Address](practical-guide-docassemble/object-oriented-programming.md#address) classes. 

Remember that an `Individual` object has a built-in method to display a text representation of itself.

For extra XP, try turning on the [address autocompletion](https://docassemble.org/docs/fields.html#address%20autocomplete) feature once you're using Docassemble's `Individual` class.

(question: does this use a method anywhere?)

```yaml
---
comment: |
  ASSIGNMENT CHECKLIST:
  [ ] Copy this code
  [ ] Turn it into an interview
  [ ] Use Docassemble built-in classes and methods instead of the variable names here
  [ ] Share your version of this script on the Blackboard
  [ ] Fill in the information below
  
  My link to my working interview: 
---
mandatory: True
code: |
  user_name_first
  user_address_street
  display_results
---
question: |
  Your name
fields:
  - First name: user_name_first
  - Last name: user_name_last
---
question: |
  When were you born?
fields:
  - no label: user_birthdate
---
question: |
  Your address
fields:
  - Street address: user_address_street
  - Unit: user_address_unit
  - City: user_address_city
  - State: user_address_state
  - Zip: user_address_zip
---
event: display_results
question: |
  Results
subquestion: |
  Hello, ${user_name_first} ${user_name_last}.

  You live at:

  ${user_address_street}

  ${user_address_city}, ${user_address_state} ${user_address_zip}

  You are ${year_of(today()) - year_of(user_birthdate)} years old today.
```

## Turn in your work

Use Blackboard to turn in your work. As you see in the code comment, you will need to turn in a link to your working interview, as well as the actual YAML code.
