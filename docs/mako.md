---
slug: mako
title: The Mako templating language
sidebar_label: Mako
---

Docassemble uses Mako for formatting throughout the interview file. Mako is also used inside [Markdown](markdown.md) templates.

Inside docx template files, you will instead use the [Jinja](jinja2.md) templating language.

You can read a full reference of Mako at the [project website](https://docs.makotemplates.org/en/latest/syntax.html).

Mako statements allow you to:

1. Insert variables
1. Use conditional text
1. Use control structures to display repeated variables

## Insert variables

To insert a variable into your document, start with a `$` and surround it with  curly braces, like this: `${ variable_name }`.

It's also possible to include Python code in the place of the variable name. For example, if you had 
assigned the value of `my_variable` as below:

```python
my_variable = "lowercase name"
```

Then you could use the `.capitalize()` [method of a string](https://docs.python.org/2.5/lib/string-methods.html)
inside Mako tags to make sure that it started with a capital letter, regardless of how the user entered it inside
your application:

```mako
Dear ${ my_variable.capitalize() }:

    I am writing to tell you...
```

## Use conditional text

You start conditional text with a % symbol at the beginning of the line. If you want to include a literal % symbol instead, use %%. Just like in Python, you need to include a : at the end of the conditional.  The text underneath doesn't need to
be indented.

```mako
% if person.age_in_years() > 18:
You are an adult
% else:
You are a child
% endif
```

## Use control structures

Control structures start the same way as conditional statements, beginning with a % symbol at the start of the line.

```mako
% for fruit in fruits:
${fruit}
% endfor
```
