---
slug: controlling-interview-order
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

I often call the code block that I use to control question order the "interview order" block.
There is no official name for it; in HotDocs and its predecessors, this would be called the
INTERVIEW computation. Here's an example interview order block:

```yaml
---
id: interview order
mandatory: True
code: |
  intro_screen
  user.name.first
  if user_type == 'attorney':
    attorney_instructions
  else:
    prose_instructions
  user.address.address
  download
```

### How the block is run

Docassemble runs this code block from top to bottom, seeking the definition of
each variable listed in the code block in order. Each **undefined** variable
triggers an exception (`NameError`, `AttributeError` or `KeyError`) which
Docassemble intercepts, running code or asking a question that can define that
variable. **Docassemble will then run the interview order block again** from top
to bottom until it reaches the next undefined variable.

Understanding that the code block might run multiple times is important! Use
this as a place to list variables as a reference and do simple branching logic.
Don't use it to set any variables or call an API that might be triggered
multiple times.

### You cannot trigger a block with `id`

Another common pattern new Docassemble developers try is to trigger a specific
block in the interview order block by referencing the block's `id` or by
adding an `event` modifier to the block.

The `id` of a block is information for you, the developer, and gets used by
analytics tools as well. It is not used to trigger a block.
### `event` does not do what you think

A new developer might try using an
[`event`](https://docassemble.org/docs/questions.html#event) modifier to trigger
a block. An `event` **generally** does not save or persist any variables that are
set during it. You should not attach an `event` modifier to a block of code that
you want to trigger in an `interview order` block. Reserve it for ending
questions, not to label code you want to run.

The other place that `event` is used is with the Docassemble `actions` system.

`Event`s linked to actions that **do** permanently alter an interview's state
can be triggered by an [external
occurrence](https://docassemble.org/docs/api.html#session_action), [clicking a
button](https://docassemble.org/docs/functions.html#url_action), or be used by
[background code](https://docassemble.org/docs/background.html#background).
Don't try to use an `event` to trigger code in the main flow of an interview.

### How the interview order block differs from HotDocs' INTERVIEW computation

Remember, Docassemble is goal seeking. It doesn't care what screens the user has
seen: it tries to define all of the variables that you mark as `mandatory` that
it can reach.

Unlike in HotDocs, listing a variable that is already defined will not trigger
anything being displayed. Docassemble only displays something or tries running
code if the variable triggers a Python exception.

A common mistake when a developer is getting used to Docassemble's built-in
`Individual` and `Address` classes is to list an object in the interview order
block. The developer may not realize that the `name` and `address` attributes of
an Individual are themselves objects and that they get pre-initialized.

For example:

```yaml
objects:
  - user: Individual
---
id: interview order
mandatory: True
code: |
  user.name
  user.address
```

The short interview above will trigger the objects block in lines 1-2, and
nothing else visible will happen. This is because the `name` and the `address`
attributes of the `user` object are created instantly when the `objects` block
is run (by the `__init__` class constructor of `Individual`). If you want to
trigger a question, you need to trigger an attribute that is not defined yet,
either by a question, code, or a class constructor.

Here is a version of the above interview that probably matches the developer's
intent:

```yaml
objects:
  - user: Individual
---
id: interview order
mandatory: True
code: |
  user.name.first
  user.address.address
```

The `name.first` and `address.address` attributes are not defined yet.
Mentioning them will cause an `AttributeError` exception and lead
Docassemble to seeking a question or code block to define them.

Another way that the `interview order` block differs from HotDocs
is that you might find that other variables are triggered that you did not
explicitly list. Remember, Docassemble is seeking to satisfy all of the
variables you list in order. If your question or code block in turn 
depends on another variable, that will be triggered along with the
variable you explicitly list.

```yaml
objects:
  - user: Individual
---
id: interview order
mandatory: True
code: |
  user.address.address
  user.name.first
---
id: user's address
question: |
  What is the address of ${ user }?
fields:
  - Street address: user.address.address
  - City: user.address.city
---
id: user's name
question: |
  What is your name?
fields:
  - First: user.name.first
  - Last: user.name.last
```

In the example above, triggering `user.address.address` will run the
`id: user's name` block before asking for the user's address.
That is because the user's name is displayed on the `id: user's address`
block.

### Triggering a screen for a variable that is already defined

#### Forcing docassemble to re-ask a defined variable

One pattern you might encounter is that a variable is pre-defined (maybe by an API)
but you still want the user to have a chance to review and edit the value.

You can do that a few different ways:

1. [`invalidate()`](https://docassemble.org/docs/functions.html#invalidate)
2. [`force_ask()`](https://docassemble.org/docs/functions.html#force_ask)
3. Creating a [review screen](https://docassemble.org/docs/fields.html#review)
1. Using [`url_action()`](https://docassemble.org/docs/functions.html#url_action)

`invalidate()` will tell Docassemble the variable is not defined without erasing the
value it has. This has the effect of allowing you to revisit a question.

`force_ask()` has a similar effect in most circumstances, but offers much more
complex options to trigger a series of follow-up questions.

Think carefully about how you use this pattern. You can avoid it
if the API is used to provide defaults. Using `invalidate()` or 
`force_ask()` in the interview order block is also risky, as it may
run more than one time. Try the `named block` pattern below to 
contain any `force_ask()` or `invalidate()` code and ensure it
only runs one time.

#### The **default** pattern

```yaml
---
id: interview order
mandatory: True
code: |
  address_default
  user.address.address
---
code: |
  address_default = run_some_api()
---
question: |
  What is your address?
subquestion: |
  We set the default value based on an API result.
fields:
  - Address: user.address.address
    default: address_default
```

This very simple pattern just displays the API-generated results as a
placeholder. This pattern is nice because the user gets to see the value and
change it. The potentially "wrong" value is never stored in the `Address`
object.

#### The "existing or new" pattern

Another pattern you could try is allowing the user to choose from existing
values or to define a new one. `object_radio` combined with `disable others` is
a good way to do this. This pattern works well with API results.

```yaml
---
objects:
  user: Individual
---
id: interview order
mandatory: True
code: |
  address_default_object
  user.address.address
  display_results
---
code: |
  # You could use a function or API call that returns an Address object instead of directly initializing the object
  address_default_object = Address(address="123 Main St", city="Boston")
---
question: |
  What is your address?
fields:
  - An existing address: user.address
    datatype: object_radio
    none of the above: True
    choices:
      - address_default_object
    disable others: True
  - Address: user.address.address
  - City: user.address.city
  - State: user.address.state
    code: states_list()
---
event: display_results
question: |
  ${ user.address.block() }
```

In the interview snippet above, the Address/City/State fields can only be
interacted with if the "Existing address" field has been left set to `None of
the above`.

#### Displaying a link to allow the user to edit a value

One safe option is to display a link to edit a variable on an arbitrary screen 
with `url_action()`. Here is an example:

```yaml
question: |
  Verify your court
subquestion: |
  Based on the information you gave us, it looks like
  you belong in ${ trial_court }.

  [Edit court](${ url_action('trial_court') })
continue button field: inform_about_court
```

If you want to review multiple fields at once, use the
[review screen](https://docassemble.org/docs/fields.html#review) pattern.
Review screens will automatically update to display only variables that
have a value, which is handy. They can be displayed in-line or when the
user clicks a link.

### Avoid setting variables in the interview order block

You might be tempted to treat the interview order block like a script in an
imperative programming language. This would be incorrect. Docassemble is
declarative. The interview order block should list a set of goals. Setting variables
in the interview order block can:

1. Lead to infinite loops (you can avoid this by using the modifier `scan for
   variables: False`)
1. Lead to variables definition being changed unexpectedly and in a hard to
   trace way.

Yet sometimes you do want to trigger code. Do that by using a "named block".

### Triggering a question and then continuing: using `continue button field`

Docassemble does have a way for you to invoke a screen more explicitly. When you
add a [`continue button
field`](https://docassemble.org/docs/fields.html#continue%20button%20field) to
a question block, you give the block a variable name. You can mention that
variable name in your interview order block.

```yaml
id: interview order
mandatory: True
code: |
  intro_screen
  user.name.first
---
id: introduction
continue button field: intro_screen
question: |
  Welcome to our interview
subquestion: |
  Before you start, follow these steps:

  1. Step 1
  2. Step 2
  3. Step 3
```

Usually you should **only** give a `continue button field` to a screen
that doesn't ask any questions. Avoid using it to simulate HotDocs's
dialog-based interview order. You can run into harder to trace logic.

### Triggering code and then continuing: using "named" blocks
Named block is a term that I use that is not in the Docassemble documentation,
but is a very handy concept.

Here is a short example:

```yaml
objects:
  - user: Individual
---
id: interview order
mandatory: True
code: |
  user.name.first
  get_api_results
  user.address.address
---
code: |
  user.address.address = run_some_api()
  get_api_results = True
```

Notice that in our interview order block, we referenced a variable named
`get_api_results`. This is the "named block." This variable gets defined at the
**end** of our code block. Because it is not defined until the end of the code
block, Docassemble needs to run the whole code block to define it.

This is roughly equivalent to a computation in HotDocs, but note that this code
block will only run once. When the interview order block is run again,
`get_api_results` will already be defined. There is no need for Docassemble
to run it again.

What if you **do** want it to run multiple times? You can use the [`depends
on`](https://docassemble.org/docs/logic.html#depends%20on) modifier to specify
conditions that will cause Docassemble to recalculate the `get_api_results`
definition. More bluntly, you can use
[`reconsider`](https://docassemble.org/docs/logic.html#reconsider) to run the
code block each time the screen is refreshed. It is usually best to avoid
`reconsider` if there is a different tool that works because overusing it can
greatly slow down Docassemble's operation and sometimes lead to unintended
behavior. `depends on` also serves a dual purpose of allowing you to explain
your code's purpose to the next developer to come along and read your interview.


# Learn more

* Docassemble Documentation: [Logic](https://docassemble.org/docs/logic.html)

Quinten Steenhuis, February 2021
