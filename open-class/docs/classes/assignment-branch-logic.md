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

All but the most complex Docassemble interviews will have some choices that change the information
that you show to the user or that you will need to ask a follow-up question for. Sometimes, this choice
making is called branching logic. It's the kind of choice that you might think of making with a flowchart.

In today's class, we'll talk about how to write a Docassemble interview that achieves this goal.

## The problem

Suppose you have a friend who comes to you for advice. They were invited to a party, but they're not
sure if they should go. You give them advice, your friend is happy, and now you have lots of friends coming
to you looking for advice on the same topic. You decide to write a simple flowchart to help them out.

### Thinking through outcomes

What outcomes will our flowchart have?

1. Go to the party
2. Stay home
3. Go, but don't stay too late

### Gathering the facts

What kind of information do we want to know to advise our friends? Let's think of some possible questions.

* Do you like parties?
* Is there anyone there who you want to meet?
* How difficult is it to get to the party?
* Do you have any big assignments or studying you should do?

### Sorting our questions out

Let's think of a logical order for our questions, and how they fit together.

It might make sense to first learn a little about what the person prefers. It makes
sense to choose a question order that is respectful of the user's time. Let's think of big
questions up front that might reduce the number of unnecessary questions we have to ask later.

A logical first question might be:

1. Do you like parties?

If they don't like parties at all, they can probably skip this one. But just in case, a good follow-up might be:

* Is there anyone there who you want to meet?

Followed by

* Do you have any big assigments or studying to do?

If they do like parties, we might ask:

2. Do you have a big assignment due?

## Map it out

For a small problem like this, it might be helpful to write out a small flow chart or map of the logic. For a bigger problem, you might come up with a different way to organize it.

Below is a flowchart that maps out part of the logic we worked out above:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtEbyB5b3UgbGlrZSBwYXJ0aWVzP10gLS0-IEJ7eWVzfVxuICBBIC0tPiBDe25vfVxuICBDIC0tPkRbSXMgdGhlcmUgYW55b25lIHlvdSB3YW50IHRvIG1lZXQ_XVxuICBEIC0tPkV7eWVzfVxuICBEIC0tPkZ7bm99XG4gIEYgLS0-IFooZmE6ZmEtYmVkIERvbid0IEdvKVxuICBFIC0tPiBHW0RvIHlvdSBoYXZlIGEgYmlnIGFzc2lnbm1lbnQgZHVlP11cbiAgRyAtLT5oe3llc31cbiAgRyAtLT5pe25vfVxuICBpIC0tPlkoZmE6ZmEtZ2lmdCBHbyB0byB0aGUgcGFydHkpXG5cbiAgaCAtLT4gWlxuICBCIC0tPiBHXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtEbyB5b3UgbGlrZSBwYXJ0aWVzP10gLS0-IEJ7eWVzfVxuICBBIC0tPiBDe25vfVxuICBDIC0tPkRbSXMgdGhlcmUgYW55b25lIHlvdSB3YW50IHRvIG1lZXQ_XVxuICBEIC0tPkV7eWVzfVxuICBEIC0tPkZ7bm99XG4gIEYgLS0-IFooZmE6ZmEtYmVkIERvbid0IEdvKVxuICBFIC0tPiBHW0RvIHlvdSBoYXZlIGEgYmlnIGFzc2lnbm1lbnQgZHVlP11cbiAgRyAtLT5oe3llc31cbiAgRyAtLT5pe25vfVxuICBpIC0tPlkoZmE6ZmEtZ2lmdCBHbyB0byB0aGUgcGFydHkpXG5cbiAgaCAtLT4gWlxuICBCIC0tPiBHXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

## Building our Docassemble interview

### What kinds of information do we need to gather?

Before we start, let's think about what kinds of information we will want to ask.

This Docassemble interview will use two kinds of screens:

1. Yes/no questions
2. Ending screens

As a reminder, ending screens use the `event` specifier. 

We haven't seen a `question` block that uses just a yes/no question yet. Here's a [link to the documentation](https://docassemble.org/docs/questions.html#tocAnchor-1-6-1).

Let's take a look at an example:

```yaml
question: |
  Are you at least 18 years of age?
yesno: over_eighteen
```

And here's what it looks like when we run it:

<img alt="Yes/No question" src={useBaseUrl('img/Yes_no.png')} />

Docassemble uses two different kinds of `question` blocks. This new kind only lets you ask for one variable on a screen, and doesn't use the `fields` specifier we learned earlier. It's kind of a simplified shorcut version.

Let's look at line 3 of our sample:

```yaml
yesno: over_eighteen
```

This is a new specifier: the `yesno` specifier. It always shows the text `yes` and `no` as buttons on the screen. On the right hand side of the : is the variable that will be assigned the value `True` or `False`, depending on which button the user clicks.

### Planning out our variables

It can help to start out by writing a list of the actual variables we will want to ask. This way, we can plan variable names that make sense together.

In Docassemble interviews, it's traditional to use variables names that are:

1. Short
1. Descriptive (without cryptic abbreviations)
1. Lower-case
1. Use _ to separate multiple words when needed

We are going to need true/false variables and an ending screen. Let's name them as follows:

variable name | meaning
--------------|---------
go_to_party | A screen that tells the person to go to the party
dont_go_to_party | A screen that says not to go to the party
likes_parties | Do you like parties?
wants_to_meet | Do you want to meet someone there?
big_assignment | Do you have a big assignment due?

### Writing our first question blocks

Let's start with writing the ending blocks, which are the simplest. Remember, we will use the `event` specifier for these because they are ending screens.

```yaml
---
event: go_to_party
question: |
  You should go to the party!
subquestion: |
  [FILE https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif]
```

[![](https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif)]

```yaml
---
event: dont_go_to_party
question: |
  You should just go to sleep
subquestion: |
  [FILE https://media.giphy.com/media/xT8qBvH1pAhtfSx52U/giphy.gif]
```

[![](https://media.giphy.com/media/xT8qBvH1pAhtfSx52U/giphy.gif)]

Let's try writing one of the yes/no questions.

```yaml
---
question: |
  Do you like parties?
yesno: likes_parties
---
question: |
  Do you want to meet someone at the party?
yesno: wants_to_meet
---
question: | 
  Do you have a big assignment due?
yesno: big_assignment 
```

### Setting up the branch logic

We have already seen in class how we can use a `code` block to control question order. Now, we're going to combine that with `if`/`else` statements. These will follow pretty well regular English expressions.

```yaml
---
comment: |
  We will write the questions below in the order we want them 
  to appear. Optional questions will be underneath an if statement.

  This will be the only mandatory block in our interview
mandatory: True
code: |
  if likes_parties:
    if big_assignment:
      dont_go_to_party
    else:
      go_to_party
  else: # Doesn't like parties
    if wants_to_meet:
      if big_assignment:
        dont_go_to_party
      else:
        go_to_party
    else:
      dont_go_to_party
```

## The final interview

```yaml
---
comment: |
  We will write the questions below in the order we want them 
  to appear. Optional questions will be underneath an if statement.

  This will be the only mandatory block in our interview
mandatory: True
code: |
  if likes_parties:
    if big_assignment:
      dont_go_to_party
    else:
      go_to_party
  else: # Doesn't like parties
    if wants_to_meet:
      if big_assignment:
        dont_go_to_party
      else:
        go_to_party
    else:
      dont_go_to_party
---
question: |
  Do you like parties?
yesno: likes_parties
---
question: |
  Do you want to meet someone at the party?
yesno: wants_to_meet
---
question: | 
  Do you have a big assignment due?
yesno: big_assignment 
---
event: go_to_party
question: |
  You should go to the party!
subquestion: |
  [FILE https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif]
---
event: dont_go_to_party
question: |
  You should just go to sleep
subquestion: |
  [FILE https://media.giphy.com/media/xT8qBvH1pAhtfSx52U/giphy.gif]
```
