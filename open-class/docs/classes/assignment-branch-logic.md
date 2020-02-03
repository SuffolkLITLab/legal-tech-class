---
id: assignment-branch-logic
title: |
  Assignment 3: Branching logic
sidebar_label: Assignment 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Walking Down the Path: Branching Logic

<img alt="Woman at crossroads" src={useBaseUrl('img/einar-storsul-K3W7I7x37Xk-unsplash.jpg')} />

_Photo by Einar Storsul on Unsplash_

Very simple interviews might just ask a user some questions and spit out some result. Most interviews, though, will want to change what the questions they ask and the results they show based on a user's answers.

Our code has to make a choice and, until the AI take over, we have to give it very specific instructions about how to make that choice. That's often called *branching logic*. Probably because of trees.

## Example

![](https://imgs.xkcd.com/comics/automation.png)

Suppose you have a friend who comes to you for advice. They were invited to a party, but they're not sure if they should go. You give them advice, your friend is happy, and now you have lots of friends, and even strangers coming to you looking for advice on the same topic. You decide [code is the answer](https://xkcd.com/1319/) and you'll write a simple form to help them out.

You start simple.

### Thinking through outcomes

What outcomes will our flowchart have? 

1. Go to the party
2. Stay home

We'll need two **ending** screens. You make endings screens with an [`event` specifier](https://docassemble.org/docs/questions.html#event) in a `question` block. Unlike regular question screens, your user isn't going to give an answer here, so there's no variable for Docassemble to find. The `event` specifier tells Docassemble how to find the question without needing a variable name.

```yaml
---
event: dont_go_to_party
question: |
  Don't go to that dumb party. Do something fun instead!
---
event: go_to_party
question: |
  You should go to the party! I promise it'll be awesome!
```

### What do you need to know?

Well, without user research, you don't really know what good questions would be. You don't have funding or time to do that discovery work, though, but you don't care that much about those strangers and it's not like they have other options, so you'll start by making a guess and worry about it later.

Do they even like parties? That seems like a place to start.

```yaml
---
question: |
  Do you like parties?
fields:
  - no label: user_likes_parties
    datatype: yesnoradio
```

<!-- Alternative:
```yaml
---
question: |
  Do you like parties?
yesno: user_likes_parties
```
-->

Docassemble will show two buttons on this question screen. If the user clicks 'Yes', `user_likes_parties` will have a value of `True`. If they click 'No', it will have a value of `False`. We can use that to help our program decide what to do. [Read more about yes/no fields](https://docassemble.org/docs/fields.html#fields%20yesno).

### If this, then that

We'll use what's called an `if` statement. It tells our program, 'if the situation is this, then do that.'

We already learned about using `if` statements inside a `question` block. The `if` statement inside a `code` block is very similar. However, we don't need to start our line with a `%` symbol. We also use indentation to show the start and end instead of an `endif` statement.

``` yaml
---
mandatory: True
code: |
  if user_likes_parties :
    go_to_party
  else:
    dont_go_to_party
```

### More branches!

So that's not really all that matters, right? For example, do they have a ride or would they have to walk?

```yaml
---
question: |
  Do you have a ride?
fields:
  - no label: user_has_a_ride
    datatype: yesnoradio
```

<!-- Alternative:
```yaml
---
question: |
  Do you have a ride?
yesno: user_has_a_ride
```
-->

We could ask them both questions separately...

``` yaml
---
mandatory: True
code: |
  if user_likes_parties :
    go_to_party
  else:
    dont_go_to_party
  
  if user_has_a_ride :
    go_to_party
  else:
    dont_go_to_party
```

...but we'd be wasting their time. If they don't like parties, why does it matter if they have a ride? They want their answer as soon as possible! So we nest the `if` statements inside each other. We only ask the second question if they said yes to the first question.

``` yaml
---
mandatory: True
code: |
  if user_likes_parties :
    if user_has_a_ride:
      go_to_party
  else:
    dont_go_to_party
```

### Assignment 3

We've put the app out there and people aren't happy. They feel the situation is more nuanced than the questions you have. Add some more questions! What else could you ask? Copy the script above and add some more questions.

<!-- I suggest putting the variable name suggestions on another page at this point. It muddies the water here -->
<!-- Here is some people's advice for [creating variable names](link) -->
<!--
## Variable names

Code is about communiating with humans. One way we do that is with variable names. Creating good ones is as hard in code as communication is hard in the rest of life. These are a couple tips that some people like to keep in mind when creating varible names, listed in order of priority. Variable names are sometimes good when they:

1. Are descriptive (without cryptic abbreviations)
1. Are short

Also, Python has some naming conventions that Python coders try to stick to. When humans know what to expect from a situation, they do better processing it. In Python, variables:

1. Use `_` to separate multiple words when needed
1. Are lower-case

### Examples
-->

Add three more questions to the file we already have. If you are short on inspiration, you could choose from this list:

* Do you have a big assignment due the next day?
* Do you have someone you want to meet?
* Is it really far away?
* Will it be mostly people you don't know?

The basic steps will be:

1. Create a question block for each question.
1. Add the question in the right place inside your nested `if` statement.

``` yaml
---
comment: |
  ASSIGNMENT CHECKLIST:
  [ ] Copy this code
  [ ] Turn it into an interview
  [ ] Add three more question blocks
  [ ] Add logical `if` statements to the code block
  [ ] Upload two items to the Blackboard
      [ ] Your version of this script on the Blackboard
      [ ] A link to your working interview
---
mandatory: True
code: |
  if user_likes_parties:
    if user_has_a_ride:
      go_to_party
  else:
    dont_go_to_party
---
question: |
  Do you like parties?
fields:
  - no label: user_likes_parties
  - datatype: yesnoradio
---
question: |
  Do you have a ride?
fields:
  - no label: user_has_a_ride
  - datatype: yesnoradio
---
event: dont_go_to_party
question: |
  Don't go to that dumb party. Do something fun instead!
---
event: go_to_party
question: |
  You should go to the party! I promise it'll be awesome!
```

## Turn in your work

Use Blackboard to turn in your work. As you see in the comment at the top of the script, you will need to turn in a link to your working interview, as well as the actual YAML code.

## Contributors

This exercise was prepared by:

[Quinten Steenhuis](https://github.com/nonprofittechy), [@Plocket](https://github.com/plocket)
