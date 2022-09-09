---
slug: jinja2
title: The Jinja2 Templating Language
sidebar_label: Jinja2
---

Jinja2 plays the same role inside Microsoft Word docx templates that
[Mako](mako.md) plays inside the interview file. 

Jinja was originally created as a [templating language for Django](https://jinja.palletsprojects.com/en/2.9.x/).
Docassemble's version of Jinja is not quite the same; it's a variation built for 
[docx-template](https://docxtpl.readthedocs.io/en/latest/). It's useful to keep this in mind if you are
trying to use an advanced feature and find that it doesn't work.

Jinja statements allow you to:

1. Insert variables
1. Use conditional text
1. Use control structures to display repeated variables

## Insert variables

To insert a variable into your document, surround it with double curly braces, like this: `{{ variable_name }}`.

It's also possible to include Python code in the place of the variable name. For example, if you had 
assigned the value of `my_variable` as below:

```python
my_variable = "lowercase name"
```

Then you could use the `.capitalize()` [method of a string](https://docs.python.org/2.5/lib/string-methods.html)
inside Jinja tags to make sure that it started with a capital letter, regardless of how the user entered it inside
your application:

```jinja
Dear {{ my_variable.capitalize() }}:

    I am writing to tell you...
```

## Use conditional text

One of the most common uses of Jinja tags inside a docx template is to insert conditional text. There are two types
of conditionals: in-line, and paragraph/bullet level conditionals.

### In-line conditional statements

Jinja in-line conditionals are started with a curly brace and a % symbol, like `{% if condition %}` and closed with `{% endif %}`. You can optionally include both `{% elif %}` and `{% else %}` tags.

```jinja
You are {% if person.age_in_years() < 13 %} a child {% elif person.age_in_years() < 20 %} a teenager {% else %} an adult. {% endif %}
```

### Paragraph-level conditional statements

Sometimes you want to hide an entire paragraph if a certain condition is met. One time you may want to use this when several optional items are shown on a list. In this case, you use a slight variation: `{%p if... %}`.

```jinja
* Apple
* {%p if likes_bananas %}
* Bananas
* {%p endif %}
```

If you leave out the `p`, you would have an empty line after `Apple`. Using `p` tells Docassemble to remove that line from the document.

Make sure you use the `{%p endif %}` form to close the statement. Otherwise, Docassemble will raise an error that there is an unmatched if statement.

## Use control structures

Control structures use the same syntax as conditional statements, surrounded by `{% %}` or `{%p %}`. You can use the same control structures (`for` and `while`) in Jinja that you can use in Python and wherever you can use Mako statements.

```jinja
{%p for fruit in fruits %}
* {{ fruit }}
{%p endfor %}
```

## Further reading

* https://docassemble.org/docs/documents.html#docx%20template%20file