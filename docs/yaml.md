---
slug: yaml
title: Question files (YAML)
sidebar_label: Question files (YAML)
---

When Jonathan Pyle created Docassemble, he chose to use the [YAML](https://en.wikipedia.org/wiki/YAML) file format as the main way to represent the contents of an interview. When writing a Docassemble interview, it can be helpful to understand what YAML is, which conventions are Docassemble standards that overlay YAML, and how the different components of a Docassemble interview are represented in YAML.

YAML, which stands for Yet Another Markup Language (or YAML Ain't a Markup Language), is a standardized way for a computer program to save information to a file. Most commonly, this is configuration data: a way to store a list of preferences and settings that relate to a program or web application. One of the goals of YAML is to be human readable. That means a minimum of clutter. YAML stands on the shoulders of previous file formats, such as [INI](https://en.wikipedia.org/wiki/INI_file), [XML](https://en.wikipedia.org/wiki/XML), and [JSON](https://en.wikipedia.org/wiki/JSON), all of which make different trade-offs of readability and conciseness. The structures of the different formats also each tend to represent different kinds of data better.

One thing you'll notice when you look at a YAML file is that there is very little “punctuation”. There are no square or curly brackets such as those used in JSON, no closing/opening tags such as used in XML, and no section headings such as present in .INI files. Instead, the different kinds of data that a YAML file stores are implied by context, indentation, and two common delimiters: the colon (:) and the dash (-).

## The components of a YAML file
There are four standard kinds of elements of a YAML file to keep in mind:

- Documents (more usefully called blocks)
- Dictionaries
- Lists
- Data (which is usually text, but could be numeric)

### Documents
Documents represent different sections or blocks of a YAML file. If your interview file has only one section, you don't need any special marker. If you have more than one section (as is almost certain), each one needs to be separated by three dashes at the start of a line, like this: ---

```yaml
---
Block 1
---
Block 2
```
The name document is confusing when applied to a Docassemble interview's file, since each interview will contain multiple `documents`, but it's part of the YAML standard. Just mentally replace the word `document` with block if you need to refer to the YAML standard, and you'll be fine.

### Dictionaries
A [dictionary](https://en.wikipedia.org/wiki/Associative_array) is a kind of data structure in computer programming. Just like the standard definition, the point of a dictionary is that you have multiple entries (the definitions), and you can look up each entry with a keyword. One thing special about the computer kind of dictionary is that the order of entries doesn't matter. The only thing guaranteed is that the keyword (or key) retrieves the linked definition. In YAML, a dictionary entry is a key followed by a :, and then a value or definition. In the example below, the keyword is “question” and the value is “What is your name?”

```yaml
question: What is your name?
answer: Jane Smith
```

Throughout the documentation, Docassemble uses the term `specifier` for a dictionary key that has a special meaning inside the interview format. There are many such specifiers, with question, subquestion, fields, and code being specifiers you will use right away.

### Lists

A [list](https://en.wikipedia.org/wiki/List_(abstract_data_type)), which is similar to an array, is another data structure that represents one or more entries. Lists are simpler than dictionaries. Entries in a list don't have a label. Instead, each one will get a numeric index assigned automatically, starting at zero. The order does matter. YAML will preserve the order that you write the entries in a list. In YAML, you indicate a list by starting each entry with a dash (-) as in the example below.

```yaml
- Item 1
- Item 2
- Item 3
```

### Data

YAML files can also contain data: the values that are stored in a list or dictionary. The most common kind of data is text data. Optionally, text can be surrounded by quotes. This might be needed if your text contains some of the special characters, such as a colon, but more often you leave quotes off. There is one special way to represent data that you should use often inside a Docassemble-flavored YAML file, which is the line continuation indicator or vertical pipe separator (|). Inside a dictionary's value, the vertical pipe separator tells YAML that everything that follows on the next indented line is going to be text, and that the text may flow on multiple lines and can contain special characters.

```yaml
---
question: |
  This question can contain special characters (such as accents
  and colons) and can extend across multiple lines. Each line 
  needs to be indented to the same level underneath the dictionary key.
```

Text is text, and as the saying goes, what you see is what you get. However, the text inside a Docassemble YAML file can almost always be formatted using Markdown, which is another standard.

I want to discuss [Markdown](markdown.md) here only to point out that an interview file can contain Markdown, but as far as YAML goes, its all plain text. Docassemble looks for Markdown tags in the text and applies the formatting where it's appropriate.

In addition to text blocks that may or not be formatted with Markdown, Docassemble's YAML files typically contain blocks of instructions called code blocks (which might be called scripts in a different platform).

### Code blocks

Code blocks are just text data as far as the YAML file format is concerned. But Docassemble will interpret the text as Python code. Python is one of the most popular programming languages in the world due to its simple and expressive syntax and ease of learning, as well as its power and extensive library of “packages” that make it easy to use functionality created by other people.

In Docassemble's YAML files, you can mix Python code with your interview file with the code: specifier, like this:

```yaml
---
code: |
  # Here is a Python comment. Notice the code block must be indented
  # And that code blocks always use the line continuation / vertical 
  # pipe
  my_variable = 1 + 3  
```

You might notice that a Python code block in Docassemble is really a special kind of dictionary, one that starts with the keyword “code”. This lets Docassemble know that the text that follows will interpreted as instructions rather than another purpose. Code blocks are great for instructions and conditional logic that are related to the flow of the interview. More complex code is better contained inside a regular Python module, or .py file. Python code blocks can contain comments, but YAML itself can contain comments, too.

### YAML Comments
The final type of YAML contents that you should be aware of are comments. Comments begin with a # symbol and are ignored by Docassemble. Like the other contents of a YAML file, YAML comments need to follow the same indentation rules. Here's an example:

```yaml
---
question: |
  # This is a heading because Docassemble thinks it is Markdown
# This is a comment because it is not indented as part of the question: key's data field.
```

YAML, like Python, does not have multi-line comments. Each line needs to start with a #. Docassemble does have its own special [comment](https://docassemble.org/docs/modifiers.html#comment) `specifier` that can extend over multiple lines.

When writing an interview file, use comments liberally. They can make your logic easier to read, either for another developer, or more often, you in a few months or a year.

### Nesting data structures

Unlike the INI format, but like JSON and XML, a YAML datastructure can itself contain additional datastructures. For example, each item in a list could be a dictionary, or vice versa. Nesting is done by indentation, with no true limit to the number of indentation levels. The most common indentation for Docassemble's YAML file is two spaces.

```yaml
---
dictionary_key1:
  - Item A
  - Item B
  - Item C:
    - Item 1
    - Item 2
```

This nesting is actually quite common in Docassemble's interview files. For example, fields: is a dictionary key that contains a list of dictionaries. Sometimes Docassemble allows you to use either a dictionary or a list as the contents of a specifier. Whenever this is true, make sure you understand the major difference: a list has an order that is guaranteed, while a dictionary does not.

## Digging deeper: the fields specifier

Because Docassemble's fields specifier behaves differently to the regular YAML dictionary keys that they resemble, I wanted to take a minute to look at this specifier a bit closer.

Here's a typical Docassemble question block with a fields specifier:

```yaml
---
question: |
  Information about you
fields:
  - First name: client.name.first
  - Last name: client.name.last
```

Let's break this down and label the different components.


The specifier 1) `question` itself is a dictionary key, followed by text (which could have had Markdown formatting if we desired). 2) `fields` is also a dictionary key. The dashes (3) and (4) represent items in a list that is indented underneath the fields specifier. (5) `First name` and (6) `Last name` represent dictionary keys again, while (7) `client.name.first` and (8) `client.name.last` are values.

Wait a second. Doesn't it make more sense to think of the label (First name, Last name) as a value, while the variable names (client.name.first and client.name.last) are more akin to dictionary keys? Yes, it does. That's exactly how they are used inside Docassemble itself. However, in this special case, Docassemble does the magic to allow you to write your field labels in a more natural and human-readable order. This is one example where adhering too closely to the YAML format could be a bit confusing.

## Keep reading

* If you use the Assembly Line Weaver, you may want to read about the structure of a YAML file generated
  by the [ALWeaver tool](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/generated_yaml).