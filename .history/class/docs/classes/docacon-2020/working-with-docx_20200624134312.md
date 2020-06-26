---
id: working-with-docx
title: Working with Docx files
sidebar_label: Working with Docx
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## The big picture

In our [Hello, World](classes/hello-world.md) exercise, we did everything in the
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
braces; in our interview YAML, we use `${ user_name }`.

#### Questions

1. How did the interview know to ask for the definition of `user_name`?

### What is a Docx Template?

A docx template is an ordinary Microsoft Word file. You don't use any special
Microsoft Word features to turn it into a template. You just type in the special
docassemble codes in the right place in your file.

### An introduction to Jinja syntax

You can use most of the same features in a Docx template that you can use
inside an ordinary Docassemble `question` block. Docx templates use a similar,
but slightly different syntax to what you use inside questions, called 
[Jinja](jinja2.md).

* Variables are marked with double curly braces, like this: `{{ variable_name }}`
* `if` statements come in two varieties:
    * in-line `if` statements, like this: 
    `{% if is_female %}she{% elif is_male %}he{% else %}they{%endif %}`
    * Paragraph-level `if` statements, like this:
```
{%p if show_paragraph %}
You really like cheese!
{%p endif %}
```

You can also use `{% for ... %}` and other Python control structures.

## Benefits of Docx templates as compared to PDFs

* You can completely control the formatting
* `fields` expand to take up as much or as little space as they need
* You can build a table one row at a time, rather than having to
  include code that represents each possible cell in the table.
* You can place all formatting code and conditional text in the template,
  decluttering your interview file.  
* Helper functions and methods can make things even simpler

### Example

Docassemble uses [objects](practical-guide-docassemble/object-oriented-programming.md),
a useful way in programming to group a bunch of related fields.

As an example, a built-in object that we use again and again is the
Individual object.

```yaml
---
objects:
  - tenant: Individual
---
mandatory: True
code: |
  tenant.name.first
  tenant.address.address
  download
---
question: |
  Your name
fields:
  - First: tenant.name.first
  - Last: tenant.name.last
---
question: |
  Where do you live?
fields:
  - Street address: tenant.address.address
  - City: tenant.address.city
  - State: tenant.address.state
    choices: states_list()
  - Zip: tenant.address.zip
---
event: download
question: |
  Download your file
attachment: 
  docx filename: address_example.docx
```

Inside the Docx template, we could show the address and name like this:

```
Hello, my name is {{tenant}}.

 
Yours sincerely,

{{ tenant.address_block()}}
```

`address_block()` is a method of an Individual object that shows the person's full
address block, including their name. In a PDF, we would have had to code as many
as six different fields to show the same information.

Above we use the second kind of attachment block, one that is part of a question. This style
adds a fair amount of text and buttons around the attachment automatically. It also adds
an email box by default, so that someone can send themselves a copy of the finished document.

## Using the built-in variables from the docassembly line project in your interview

Take a look at the list of variables in the [Docassembly Line Documentation](https://github.com/SuffolkLITLab/doc-assembly-line/blob/master/internal_object_names.md).

When you write a Docassemble interview that uses the MAVirtualCourt package,
you don't need to write your own questions that use these variables or the
attributes that come along with them.

```yaml
include:
  - docassemble.MAVirtualCourt:basic-questions.yml
---
mandatory: True
event: download
question: |
  Download your file
attachment: 
  docx template file: vc_demo.docx
```

Is enough to fill-in the document below, without adding any additional questions in the YAML:

```
{{ users }}             {{ courts }}

v.
                        {{user_role}}'s MOTION TO DISMISS

{{ other_parties }}


Comes now the {{ user_role }} and moves that the court dismiss this action because:


{{ users[0].signature}}

{{ users[0].address_block()}}

Signed {{ signature_date}}
```

## Further exploration

1. Add some more variables to the hello_world.docx template.
1. Experiment with showing/hiding optional text based on a `yesno` question.

## Further reading

1. The [attachment](https://docassemble.org/docs/documents.html#attachment) block
1. [Docx Templates](https://docassemble.org/docs/documents.html#docx%20template%20file)
1. [Docassemble tutorial](https://docassemble.org/docs/helloworld.html)
1. [Jinja reference](https://jinja.palletsprojects.com/en/2.11.x/) (this is
   similar but not the exact syntax used in Docasssemble)
1. [Docx-template Jinja reference](https://docxtpl.readthedocs.io/en/latest/#jinja2-like-syntax)