---
id: logic
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

> **Note**:  [YAML](yaml.md) is picky about indentation. If you run into an
> error, check to make sure each line is indented the same way as the example
> above.

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


## Your assignment

1. Modify the Logic exercise so that a new secret message is displayed when a
   name of your choice is displayed.
2. Stretch goal: make all of the secret messages work regardless of how the user
   capitalizes their name. Hint: using the
   [`.lower()`](https://www.w3schools.com/python/ref_string_lower.asp) method of a
   Python string should help you out.

Quinten Steenhuis, June 2020