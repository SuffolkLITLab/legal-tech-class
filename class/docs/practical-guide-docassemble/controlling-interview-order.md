---
id: controlling-interview-order
title: Controlling Interview Order
sidebar_label: Controlling Interview Order
---

## The interview as a question library

You can think of a docassemble interview as a library of questions.
The only questions that docassemble will ask are those that are triggered,
either by a `mandatory` block or in some other way.

Docassemble will scan the interview file until it finds a question
that contains the answer to every field that is required by any
mandatory block. If a field isn't used in the mandatory block, or a
block that the mandatory block itself triggers, it will never be shown
to the user.

Copy and paste the interview below into your playground.

Before you run it, make a prediction.

1. Which questions will be asked?
1. Which question will be asked first? What will be the order of the remaining questions?

```yaml
---
question: |
  What is the average airspeed velocity of an unladen swallow?
fields:
  - no label: air_speed
---
question: |
  What is your quest?
fields:
  - no label: quest
---
question: |
  What is your name?
fields:
  - First name: first_name
  - Last name: last_name
---
mandatory: True
question: |
  Hello, ${ first_name }
subquestion: |
  You said the swallow's speed is ${ air_speed }

  Your first name is ${ first_name }
```

### What happened?

Docassemble only asks the `air_speed` and `first_name` questions. The `quest`
question wasn't used by any mandatory blocks in this interview, so it
was never asked.

The first question that is asked is the `first_name` question. This is because
the one `mandatory` block mentions the `first_name` field before it mentions any
other fields.

As you can imagine, the incidental order of fields on your final screen doesn't always
dictate the most logical or pleasant order for questions in a lengthy interview.
There are other ways to control the order of questions in a more fine-grained way.

## Who's the boss? Why you should use only one mandatory block

There are a lot of ways to [control the
order](https://docassemble.org/docs/logic.html) of questions in a docassemble
interview. For example: you can use a `mandatory` modifier on many questions,
and the `if` modifier to handle optional questions. Alternatively, you can
use the `need` modifier on multiple individual blocks.

It's a good habit to use only **one** mandatory block in your interview.

Using one mandatory block can allow you to:

1. Visualize and trace your interview logic in one place
1. Better understand which code will end up executing and which will not

Copy and paste the interview below into your playground. Before you run it,
make a prediction.

1. What will be the last screen that is shown to the user?
1. What action will happen when the interview is complete?

```yaml
---
mandatory: True
question: |
  Please answer our intake questionnaire
continue button field: introduction
---
mandatory: True
question: |
  Tell us your name
fields:
  - First name: user_first_name
  - Last name: user_last_name
---
mandatory: True
question: |
  How old are you?
fields:
  - birthdate: birthday
    datatype: date
---
mandatory: True
question: |
  Results
subquestion: |
  Thank you, ${user_first_name}.
  
  We will send your results to Dewey, Cheatem and Howe.
---
template: email_contents
content: |
  Here is the intake
  
  First name: ${ user_first_name }  
  Last name: ${ user_last_name }

  Birthdate: ${birthday}
---
mandatory: True
code: |
  send_email(to="dewey@example.com", template=email_contents)
```

### What happened?

Mandatory blocks are read from "top to bottom" of the interview file.

In the interview above, all of the blocks are mandatory. But the code block
that sends an email will never run. Why? It can only run after the last screen
is shown. But docassemble pauses on the "results" screen indefinitely.

## The interview order block

