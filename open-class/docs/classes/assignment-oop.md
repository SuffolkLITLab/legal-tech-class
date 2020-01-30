---
id: 2020-law-smart-machines-assignment-2
title: Object Oriented Programming
sidebar_label: Assignment 2
---

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.

## Using Classes in your Docassemble interview

The purpose of this assignment is to dip your toes into the world of [classes](practical-guide-docassemble/object-oriented-programming.md) and object-oriented programming. Docassemble uses classes throughout. They can make your code neater, easier to read, and save you a lot of time and duplicate code.

For the most part, you will be a _consumer_ of classes that have been written by either myself or Docassemble's author, Jonathan Pyle. You may create your own simple classes for your final project, but if so, they will likely not need any advanced understanding of these concepts.

### Using classes isn't hard

There's a lot of information in the documentation about classes. The important facts for you to know are:

1. A class is a _blueprint_ for an _object_
1. Objects are a collection of attributes (variables) and methods (functions)
1. You need an `objects` block to use an object in Docassemble
1. You use . notation to refer to or assign a value to an object's attribute, like this: `object_name.attribute`
1. You use . notation to call a method of an object, like this: `object_name.method()`

Practically, using the `objects` block and recognizing that you need a period to separate the object's name and the attribute or method is what you'll need to make use of objects in your Docassemble interviews.

## Assignment

Before getting started, please review the section on [Object oriented programming in Docassemble](practical-guide-docassemble/object-oriented-programming.md)

Pay special attention beginning with the discussion of [Objects in Docassemble](practical-guide-docassemble/object-oriented-programming.md#using-an-object-inside-docassemble). 

### Describe a Python class for a law school class

Think of a generic class offering in a law school setting, and how you would describe it in computer code that might be used
to create a course catalog and to help students decide to sign up for it.

1. What attributes would your class have? Consider aspects such as course title, location, etc. Remember, you can think of these as the column headers in a spreadsheet that lists all of the classes.
1. What methods would be appropriate to include? In other words, would you want to summarize or transform any of the attributes with a helper function? For inspiration, think of the `.full()` method of an IndividualName and `map_of()` function for an Address.
1. What might be the output of the `__str__()` method for your class? Remember, `__str__()` just displays a summary of an object as text. Think of the way `${user}` displays the user name for inspiration. Your `__str__()` method should probably display some, but not all of the attributes, in a logical order.

Write out an answer to each question above. Explain why you have chosen the attributes and methods you included.

#### Stretch goal:

Try creating a UML diagram for your class like the ones in the [Object oriented programming in Docassemble](practical-guide-docassemble/object-oriented-programming.md) section of this documentation. You might use [Draw.io](https://www.draw.io/), [Creately](https://creately.com/), or [Mermaid.js](https://mermaid-js.github.io/mermaid-live-editor/).

Here's the code for a Mermaid.js diagram that might get you started:

```
classDiagram
class LawschoolClass {
  name
  location
  __str__()
}
```

You can copy and paste the above code into the [Mermaid.js](https://mermaid-js.github.io/mermaid-live-editor/) live editor and change the names to match your diagram.

### Alter the interview below so that it leverages Docassemble built-in classes and methods

You should be able to complete the assignment by looking carefully at the examples discussing the [Individual](practical-guide-docassemble/object-oriented-programming.md#the-individual-class) and [Address](practical-guide-docassemble/object-oriented-programming.md#address) classes. 

Remember that an `Individual` object has a built-in method to display a text representation of itself.

Turn on the [address autocompletion](https://docassemble.org/docs/fields.html#address%20autocomplete) feature.

```yaml
---
mandatory: True
code: |
  welcome
  user_name_first
  user_address_street
  display_results
---
question: |
  Welcome to the interview
field: welcome
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
comment: |
  A template is a reusable block of Markdown+Mako text. This template will be used in both a question and a document you can download.
template: results
content: |
  # Results

  Hello, ${user_name_first} ${user_name_last}.

  You live at:

  ${user_address_street}

  ${user_address_city}, ${user_address_state} ${user_address_zip}

  You are ${year_of(today()) - year_of(user_birthdate)} years old today.
---
event: display_results
question: |
  Results
subquestion: |
  ${results}
attachments:
  - Name: Your results
    content: |
      ${results}
```

## Turn in your work

Use Blackboard to turn in your work. You will need a link to your working interview, the actual YAML code, and your class definition either as a Word File, a UML diagram, or simply written out.