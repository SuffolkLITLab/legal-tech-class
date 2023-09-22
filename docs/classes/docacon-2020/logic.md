---
slug: logic
title: Logic
sidebar_label: Logic
---

### Introducing logic

Sometimes you want to answer a question with some logic rather than directly
asking the user for information.

Docassemble uses [Python](python.md), a powerful but easy to read programming
language to control logic inside an interview. Python statements go inside a
`code` block.

```yaml
---
code: |
  # This is a comment. notice that we assign a value with =, and we test a value with ==
  if user_name == "Scotty":
    secret_message = "Beam Me Up, Scotty"
  else:
    secret_message = "No message to report."
---    
question: |
  Hello, ${user_name}
subquestion: |
  ${secret_message}
mandatory: True
---
question: |
  What is your name?
fields:
  - Name: user_name
```

:::info Note
Both [YAML](yaml.md) and Python are picky about indentation. If you run into an
error, check to make sure each line is indented the same way as the example
above.
:::


In the example above, we introduced the use of the `|` line continuation marker,
or vertical pipe. We always use this when the text that follows could go on
multiple lines, and to handle special characters (like accented letters). You
also always use it for a `code` block.

We also introduced the `subquestion` specifier. `subquestion` is used for longer
explanation text on a screen. It uses a smaller font that is not bold.

Sometimes you don't want to use logic to create a new variable. You can use
simple Python code right inside a `question` or `subquestion` block, although the
syntax is very slightly different.

```yaml
---  
question: Hello, ${user_name}
subquestion: |
  % if user_name == 'Spock':
  Live long and prosper.
  % endif
mandatory: True
---
question: What is your name?
fields:
  - Name: user_name
```

Notice that inside a `question` block, the line with the `if` statement starts
with `%`. We also need to use an `endif` statement, instead of using indentation
to show the beginning and end of the `if` statement.

:::info About the `%` symbol in Mako
The ``%` symbol has a special meaning in [Mako](../../mako.md). It
lets you use Python syntax at the start and end of a block, usually
to control conditional text. It is very handy when you have a large block
of text that you want to show or hide, especially if the block has formatting
or also contains variables.

In comparison, the `${ }` we've already been using lets us
put much shorter bits of Python code in the middle of a block of text.

Inside the text of a question or subquestion, use the `%` symbol when the Python
code or conditional logic you are using is meant to control the next line or lines of content.
:::

Python allows us to go a little further than using just if-then. We can introduce
multiple branches using `elif`:


```yaml
---
code: |
  # This is a comment. notice that we assign a value with =, and we test a value with ==
  if user_name == "Scotty":
    secret_message = "Beam Me Up, Scotty"
  elif user_name == "Bones":
    secret_message = "Dammit Jim!"
  else:
    secret_message = "No message to report."
---    
question: |
  Hello, ${user_name}
subquestion: |
  ${secret_message}
mandatory: True
---
question: |
  What is your name?
fields:
  - Name: user_name
```

Note: once a condition is satisfied in an if-then block of logic, Python 
moves on and stops the evaluation process. What do you think the result 
of this would be if the user puts "Bones" as their name?

```yaml
---
code: |
  # This is a comment. notice that we assign a value with =, and we test a value with ==
  if user_name == "Scotty":
    secret_message = "Beam Me Up, Scotty"
  elif user_name == "Bones":
    secret_message = "Dammit Jim!"
  elif user_name == "Bones":
    secret_message = "Here is the antidote!"
  else:
    secret_message = "No message to report."
---    
question: |
  Hello, ${user_name}
subquestion: |
  ${secret_message}
mandatory: True
---
question: |
  What is your name?
fields:
  - Name: user_name
```

#### What happened

The "Dammit Jim!" version of the secret message gets displayed because it is the first
version of the test that matched. One the Python interpreter hits the first matching line,
it stops checking to see if any other test matches.

### An advanced exploration

In the logic exercise above, notice that the comparison between the user name
and the name we want to check for is **case sensitive**. That means if we check
for the name "Scotty" and the user types "scotty" we won't get a match.

We can solve it by adding more checks, like this:

```yaml
code: |
  if user_name == "Scotty" or user_name == "scotty":
    secret_message = "Beam Me Up, Scotty"
```

But what if we want to match "sCotty" and "SCotty", in case the user accidentally
holds the shift key at the wrong time? The one-by-one matching approach gets out
of hand pretty quickly.

Note that what we explore below is an **advanced** concept. You can get pretty far with
the building blocks we already explored. The advantage of Docassemble is that **we can**
use these advanced solutions. So let's see what that might look like.

#### A universal approach

When faced with this problem, someone with a computer science mindset will
think about how to make all of the different possible capitalizations of
the names equivalent to each other.

Luckily, there is a built-in way to do this in Python. It involves a few new concepts:

1. We can transform the value of variables in Python by using `functions` and `methods`.
1. Python has a **lot** of built-in functions and methods. We usually don't have to create
   a new one for basic tasks.
1. We can transform a copy of a value without destroying the original.
1. We use `functions` by wrapping them around a variable, like `function_name(variable_name)`.
   Methods are similar, but we use them by adding a `.` to the end of the variable name, instead,
   like `variable.method_name()`. The reason for the difference isn't critical right now.

Pause for a minute and reflect on this question:

> What is the "universal" version of the name "Scotty"?

You likely came up with one of three answers:

* Scotty
* scotty
* SCOTTY

Suppose we change the `user_name` variable's capitalization to one of these three forms, regardless of the
original capitalization of the variable. Then we can compare it to the exact string we know it should
match, "Scotty", "scotty" or "SCOTTY".

How do we change the capitalization of the `user_name` variable?

Python has handy built-in `methods` that let us transform text. Here are two likely
candidates:

* [.lower()](https://www.w3schools.com/python/ref_string_lower.asp), which makes text all lowercase.
* [.upper()](https://www.w3schools.com/python/ref_string_upper.asp), which makes text all uppercase.

We can eliminate the idea of comparing it to the version with an initial capital letter
("Scotty"). While we could achieve it, notice that it would just add an extra step. We'd need
to make everything lowercase first before changing the capitalization of the first letter.

Here's how we use the `.lower()` and `.upper()` methods:

`user_name.lower()` applies the `.lower()` method to the text and `returns` a lowercase
version of the text. It doesn't change the value that is stored in `user_name` permanently.

We can change our comparison to use this `method`, like this:

```yaml
code: |
  if user_name.lower() == "scotty":
    secret_message = "Beam Me Up, Scotty"
```

We would follow the same pattern to use the `.upper()` method:

```yaml
code: |
  if user_name.upper() == "SCOTTY":
    secret_message = "Beam Me Up, Scotty"
```

Most programmers will choose the lowercase method first. But it's just habit. Either
method would work fine.

Suppose we really wanted to try comparing to "Scotty", despite the extra steps it requires. 
We can do that by chaining the `.lower()` method with the `.capitalize()` method:

```yaml
code: |
  if user_name.lower().capitalize() == "Scotty":
    secret_message = "Beam Me Up, Scotty"
```

#### What to take away from this advanced example

* Logic in Docassemble can take advantage of the full Python programming language
* Python is full of many helpful building blocks. You can look outside of the
  Docassemble documentation to find them.

We've introduced a lot of new concepts here. But you will be able to do a lot
of the Python code in your Docassemble interview by copying and pasting and making
small changes to other working examples. Don't worry about understanding the full
power of the Python language or memorizing the whole library of available functions
and methods.

## Your assignment

1. Modify the Logic exercise so that a new secret message is displayed when a
   name of your choice is displayed.
2. Make all of the secret messages work regardless of how the user
   capitalizes their name. Apply the example that we used to check for upper and lowercase
   versions of `scotty` to the other conditions.

Quinten Steenhuis, June 2020