---
slug: working-with-docx
title: Working with Docx files
sidebar_label: Working with Docx
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## The big picture

In our [Hello, World](hello-world.md) exercise, we did everything in the
playground.

When you work with a Docx file, we're adding something new: an editor that can
open and save files in Microsoft Word's native format, docx. You don't need
Microsoft Office. You can use [Libre Office](https://www.libreoffice.org/) or
the [free version of Office
Online](https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web).

We still have our YAML file. The YAML file will contain the questions that the
user is asked. The Docx file will contain our formatted text. It can also
include variables that will be filled in by the interview. We can include
display logic and use Python functions to format our text as well.

In the Hello, World exercise, we used [Markdown](markdown.md) and
[Mako](mako.md) to display variables and format our text. In a Docx file, we use
a very similar language called [Jinja2](jinja2.md).

## Hello, Docx

Let's take a look at perhaps the simplest interview that automates a Docx template.

First, create a Word document that looks like this:

```
Hello, {{ user_name }}!
```

You can copy and paste the text above right into the Word file. Name the file
`hello_world.docx`. Upload it to your playground using the Folders | Templates
area of the playground.

Next, make a new interview in your Docassemble playground that looks like this:

```yaml
---
question: |
  What is your name?
fields:
  - no label: user_name
---
mandatory: True
question: |
  Your document is ready
attachment:
  docx template file: hello_world.docx
```

Save and run the interview, and see what you get.

### What happened?

Our interview has a question for one variable: `user_name`. Inside the docx
file, we put the variable name inside curly brackets, like this: `{{ user_name }}`.
Docassemble replaced `{{ user_name }}` with the text we entered when we ran the interview.

Notice that the `{{ }}` is pretty similar to what we did in the Hello, World exercise.
This syntax is called [Jinja2](jinja2.md). The big difference is in a Docx we use two curly
braces; in our interview YAML, we use a dollar sign and single curly braces, 
like this: `${ user_name }`.

This is the first time that we introduced the 
[attachment](https://docassemble.org/docs/documents.html#attachment) `specifier`.
This is the simplest way to add an attachment to a question. Sometimes, you may
want to assign the completed document itself to a variable and do more things with it.
Or, you may want to display different templates depending on the selections the user
makes.

#### Questions

1. How did the interview know to ask for the definition of `user_name`?

## Mail Merge can't do **that**

What if we wanted to include some optional text in our template? It's pretty common
to want different versions of a document for different scenarios. Docassemble of
course allows you to use conditional text inside your Docx template.

Create a Word document with the text below. You can copy and paste the 
code exactly as is. 

```
Reynham Industries Company Picnic Ticket

Welcome, {{ user_name }}. Enjoy the fun in the sun!

{%p if user_name == "Moss" %}
Don't forget to take some water along in case you get a hot ear!
{%p elif user_name == "Roy" %}
Did you try turning it off and on again?
{%p endif %}
```

Save the file with the name `ticket.docx` and upload it to the Folders |
Templates section of the playground.

Now, create an interview file with the text below:

```yaml
---
mandatory: True
code: |
  user_name
  download
---
question: |
  What is your name?
fields:
  - no label: user_name
---
event: download
question: |
  Your document is ready
attachment:
  name: Company Picnic
  docx template file: ticket.docx
```

### Questions

1. What happens when you use the name "Jen"?
1. What about when you use "Moss"? What about "Roy"?
1. What happens when you type "moss"?

### What happened?

To mark conditional text, we surround it with some new tags.
`{%p if ... %}` marks the beginning of an `if` statement in a Docx file.
We can optionally use the `{%p else %}`. We always need to include the special
`{%p endif %}` tag in a Docx file. Notice we did not need something like `endif`
inside a Python code block.

### Further exploration

1. What happens when we change the format of the Word file by turning it into
headings, bold, and so on? What about changing the format of the `{{ user_name }}` text?
1. Try removing one of the `p`s in the `{%p if ... %}` lines. Try removing all of them.

## Further reading

1. The [attachment](https://docassemble.org/docs/documents.html#attachment) block
1. [Docx Templates](https://docassemble.org/docs/documents.html#docx%20template%20file)
1. [Docassemble tutorial](https://docassemble.org/docs/helloworld.html)
1. [Jinja reference](https://jinja.palletsprojects.com/en/2.11.x/) (this is
   similar but not the exact syntax used in Docasssemble)
1. [Docx-template Jinja reference](https://docxtpl.readthedocs.io/en/latest/#jinja2-like-syntax)

Quinten Steenhuis, June 2020