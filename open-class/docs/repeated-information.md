---
id: repeated-information
title: Working With Repeated Information
sidebar_label: Repeated Information (Groups)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## What is repeated information?

Repeated information refers to gathering information when we don't know how many of each kind of information
we want to gather up front.

A common task for Docassemble is a client intake. Let's think of a paper intake form. A lot of the information
would neatly fit in one column of a spreadsheet. But not everything does. Some information is "repeated", and
we don't know how many we need to collect in advance.

Here's a portion of a real paper intake form from Greater Boston Legal Services:

<img alt="Intake showing list of household members" src={useBaseUrl('img/intake.png')} />

This actually shows two repeated fields:

1. The names of the people who live with the client
1. The income sources that each person has.

We can do our best to squeeze these fields in, but notice we were limited to 9 household members. And if someone 
has two jobs, or gets both SSI and a job, they have to fit that information into a small box. Our form probably works for
_most_ people (who live with fewer than 9 other household members, and who have no more than about 2 jobs), but not everyone.

One way to try to solve this problem would be to mirror the paper form. The form has 9 lines; we could write 9 separate variables. For example: `household1`, `household2`, etc. This would be pretty hard to work with. We'd need all kinds of `if` statements to
figure out how many lines to show in different contexts. We also wouldn't be able to handle someone with 10 family members at all.

Computers don't have this limit. We can add as many questions about income as we want, and as many questions about the people
who live with our user as we want. We do that using what Docassemble calls groups. A group is a variable that store many items
in a single variable.

In Docassemble, there are three basic kinds of groups: 

1. Lists
1. Dictionaries
1. Sets

Each kind of group relates to a built-in Python data structure. Under the hood, groups are also [Objects](practical-guide-docassemble/object-oriented-programming.md). As a result, they have `attributes` and `methods` just like
other kinds of objects.

Let's start with discussing the basic kinds of groups. Then, let's talk about how they work in Docassemble. Docassemble adds some special features to standard Python lists, dictionaries, and sets that help you use them in an interview.

### Lists

Lists are the most basic kind of group that you will work with. A Python list is similar to an array in other programming languages, although it's much easier to work with.

A list is a group of data that has these features:

&nbsp; | &nbsp;
-------|-------
Size | Unlimited - a list can be as large as you like, and will automatically grow
Order | A list has an _order_. Each item is assigned an _index_ as you add it, starting with 0. 
What you can collect | You can store anything you like in a list. You can have duplicates and mix types. You can store objects, regular variables, or even other groups.
Syntax | You use `[]` to access an item in a list. E.g., `my_list[0]` lets you access the first item added to a list.
Create a list | You can specify a list's items using square brackets when you create it, like this: `my_list = ["Apple", "Peach","Pear"]`
Add an item | use `my_list.append(item)`
Change an item | use `my_list[index_number] = item`
Combine two lists | use `my_new_list = my_list1 + my_list2` (creates a new list) or `my_list1.extend(my_list2)` (modifies `my_list1` to include the items from `my_list2`)
Other features | You can also remove items from a list. Check out all of the ways to work with list items in the [Python documentation](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists).

You can recognize a list because of the bracket syntax `[]` and the fact that you use numbers, not words, to index items in the list.

To keep things simple, let's start with a small Python demonstration of a list:

```python
my_list = [] # Create an empty list
my_list.append("Apple")
my_list.append("Pear")
```

Results in a list like this: `["Apple","Pear"]`

If we want to access the first fruit in our list, we would write `my_list[0]`, which would return `"Apple"`. To access the second fruit, we would write `my_list[1]`.

#### The Docassemble variation

When you use a list in Docassemble and want it to handle collecting items for you, you will create an object of class `DAList` instead of creating it using `my_list = []`. Once you've done that, you can access/modify, and otherwise work with the items the same way you do in Python: you can refer to `my_dalist[0]` and use the methods `.append()`, `.extend()`, and even add lists together using `list1 + list2`.

As a reminder, we use the `objects` block to create a Docassemble object. Here's an interview that creates a DAList:

```yaml
objects:
  - my_list: DAList
```

You can read [Docassemble's documentation about lists](https://docassemble.org/docs/groups.html#list).

#### Use in the YAML file format

In the section about [YAML](yaml.md), we discussed that a list in YAML is represented with a hyphen `-`. Any time you use the `-` at the beginning of a line in YAML, you are creating a list. For example, we use a list in combination with the `fields` and `objects` specifiers.

### Dictionaries

A dictionary is a lot like a list. The main difference between a list and a dictionary is that a dictionary has no inherent order, and instead of using numbers, we use keywords to index items in a dictionary. You can think of a dictionary as an unordered list of key/value pairs.

If you are coming from a different programming language, you might know Python's dictionaries as _Associative arrays_, or _Hashtables_. Internally, [Python's objects](practical-guide-docassemble/object-oriented-programming.md) are actually all a special kind of dictionary. Like objects, you can think of a dictionary as a big spreadsheet, where you can read down from a column (key) to the find the value for your row.

Here is a summary of the basic features of a dictionary: 

&nbsp; | &nbsp;
-------|-------
Size | Unlimited - a dictionary can be as large as you like, and will automatically grow as necessary
Order | A dictionary is _not_ guaranteed to be ordered. You can sort a dictionary by its keys or values.
What you can collect | You can store anything you like in a dictionary. You can have duplicates and mix types. You can store objects, regular variables, or even other groups.
Syntax | You use `[]` to access an item in a dictionary. Instead of a numeric index, you use a keyword. E.g., `my_dict['keyword']`.
Create a dictionary | You can specify a dictionary's items when you create it using curly brackets, like this: `my_dict = {"keyword1" : "value 1", "keyword2" : "value 2"}`
Add an item | You need a keyword, like this: `my_dict['keyword'] = item`. The keyword doesn't have to already be part of the dictionary; referring to it creates it.
Change an item | use `my_dict['keyword'] = item`
Combine two dictionaries | use `my_dict.update(my_dict2)` (modifies `my_dict` to include the items from `my_dict2`)
Other features | You can also remove items from a dictionary. Check out all of the ways to work with dictionary items in the [Python documentation](https://docs.python.org/3/tutorial/datastructures.html#dictionaries).

Let's demonstrate some simple Python code that uses a dictionary:

```python
my_dict = {}
my_dict["keyword"] = 1
my_dict["keyword2"] = "Rutabaga"
```

Would result in `my_dict` looking like this: `{"keyword": 1, "keyword2": "Rutabaga"}`

#### The Docassemble variation

When you use a dictionary in Docassemble and want it to handle collecting items for you, you will create an object of class `DADict` instead of creating it using `my_dict = {}`. Once you've done that, you can access/modify, and otherwise work with the items the same way you do in Python: you can refer to `my_dadict["keyword"]` and use the method `.update()` to combine two DA dictionaries.

As a reminder, we use the `objects` block to create a Docassemble object. Here's an interview that creates a DAList:

```yaml
objects:
  - my_dict: DADict
```

You can read [Docassemble's documentation about dictionaries](https://docassemble.org/docs/groups.html#dictionary).

#### Use in the YAML file format

In the section about [YAML](yaml.md), we discussed that a dictionary in YAML is represented with a `:` (just as in Python). A keyword, followed by a `:` and then a value, is a dictionary in YAML.

Each `specifier` (and some of the options) in a Docassemble interview is actually a dictionary key. For example, `question` is a dictionary key, and whatever text you display to the user (such as "Hello, World") is a dictionary value.

### Sets

Sets are like lists, with the exception that a set can only contain exactly one of every item. This limits the kinds of objects that can be contained in a set; there must be a way for Python to figure out if the item is unique (this is called _hashing_ the item). The item you add must be _unchanging_ (immutable). If you try adding the wrong kind of item to a set, you will get an error that it is not hashable. You can't add other groups to a set, for example.

Sets are a little strange compared to the other group types. Sets are borrowed from mathematics, and don't appear as a built-in data structure in many programming languages. Don't feel discouraged if the concept confuses you at first. Why use a set? Using a set is a helpful way to make sure you don't have any duplicates in a list. Often, you'll work with a group as a list, and then turn it into a set to remove the duplicates without a lot of manual work.

The syntax is also slightly different for a set.

&nbsp; | &nbsp;
-------|-------
Size | Unlimited
Order | A set is _not_ ordered. You can sort it.
What you can collect | Items must be _unique_, and Python needs to be able to figure out if they are unique (or "hashable"). A set _cannot_ contain an item that might change, such as another group.
Syntax | Items are either in a set, or not. They do not have an index. You can work with the items one at a time, using the methods we'll discuss below. You can delete, but not change an item in a set.
Create a set | There is no shortcut bracket syntax for a set. You create a set with the `set()` Class constructor, like this: `my_set = set()`
Adding an item | Use the `.add()` method, like this: `my_set.add(item)`
Combine two sets | Use the `.update()` method, like this: `my_list.update(my_list2)`.
Other features |  See [Python documentation](https://docs.python.org/3/tutorial/datastructures.html#sets)

```python
my_set = set()
my_set.add(1)
my_set.add(2)
my_set.add(3)

my_set.add(1)
my_set.add(3)
```

Results in the value of `my_set` looking like this: `{1,2,3}`. Notice that even though we add 1 and 3 twice, they still only appear once in our set.

#### The Docassemble variation

When you use a dictionary in Docassemble and want it to handle collecting items for you, you will create an object of class `DASet`. Once you've done that, you can work with the items the same way you do in Python. Use the method `.update()` to combine two DA sets.

As a reminder, we use the `objects` block to create a Docassemble object. Here's an interview that creates a DASet:

```yaml
objects:
  - my_set: DASet
```

You can read [Docassemble's documentation about sets](https://docassemble.org/docs/groups.html#set).

## Groups and objects work well together

Groups can store all kinds of information. But you might notice that groups are a perfect metaphor to extend our metaphor of objects; if an object is one row in a spreadsheet, a list is a whole spreadsheet. Often when we gather repeated information, we have more than one attribute of each item that we want to know about.

Thinking back to our intake sheet, for each household member we collected:

1. First name
1. Last name
1. Gender
1. Birthdate
1. Income

Docassemble lets you work with lists, dictionaries, and sets of objects. They just work better together. On one screen, you can collect all 5 fields for each household member, and store them as one object in the list, dictionary, or set.

You don't need to create your own objects to store them in lists. Docassemble lets you store the built-in `DAObject` in a list, which can have attributes added in your interview without requiring you to do any special setup.

## Using Docassemble Groups to Collect Information

### Special variable `i`

You can always treat a group like an ordinary variable, and simply use the square bracket syntax, like this: `- User name: names[1]`. However, that has no advantage over using ordinary variables, like `name_1`, `name_2`, etc.

Instead, Docassemble offers a convenient placeholder: the [special variable `i`](https://docassemble.org/docs/groups.html#i). In a Docassemble interview, the variable `i` always refers to an item inside a list. A question that refers to `children[i]` will work for any item in the list `children`.

Here's an example:

```yaml
---
question: |
  Tell us about this child
fields:
  - First name: children[i].name.first
  - Last name: children[i].name.last
  - Birthdate: children[i].birthdate
    datatype: date
```

The one question we wrote above will work for the first, second, third, etc. child, without us having to write a different question for each child.

You might want to let someone know what child number they are answering a question about. You can use the variable `i` to help with that, too. The built-in function [`ordinal()`](https://docassemble.org/docs/functions.html#ordinal) will take a list number, and return "first" for the first item (which has index 0, remember, because lists start at zero), "second" for the second item, and so on. Here's a short interview that uses this function:

```yaml
---
question: |
  Tell us about your ${ordinal(i)} child
fields:
  - First name: children[i].name.first
  - Last name: children[i].name.last
```

This would display on the screen as `Tell us about your first child`.

> Note: if you are working with a list of lists, or even a list of lists of lists, you can use the variables `i`, `j`, `k`, `l`, `m`, and `n` all on the same screen. E.g., `list1[i].children[j].income_sources[k]`. Because of Docassemble's object structure, you rarely need to do this. It's more common to use the `generic object` feature for those lower levels.

### The .using() method of an object

One DAList object can work 4 different ways. To configure those options, Docassemble expects us to set an attribute on the object. One way to do that is to use the method `.using()`. Briefly, `.using()` lets you set the attribute of an object at the same time that you create it. We do that with `keyword` parameters.

Here's a regular object block:

```yaml
---
objects:
  - my_object: DAObject
```

Let's say we want to set the `favorite_color` attribute of our object to "Blue". One way is with the `.using()` method:

```yaml
---
objects:
  - my_object: DAObject.using(favorite_color="Blue")
```

Another way would be to set it in a mandatory code block:

```yaml
---
objects:
  - my_object: DAObject
---
mandatory: True
code: |
  my_object.favorite_color = "Blue"
```

Or of course, in a question:

```yaml
---
objects:
  - my_object: DAObject
---
question: |
  What is the object's favorite color?
fields:
  - no label: my_object.favorite_color  
```

### Methods of collection

There are four recommended ways to use groups in Docassemble. These apply to lists, dictionaries, and sets:

1. Ask for the number of items in the group up front. Docassemble will handle showing a separate screen to collect each item.
1. After collecting each item, ask if the user has more items to add. Docassemble will keep going until your user answers "no".
1. Gather the whole group on one screen, letting the user click a button to add a new item.
1. Pre-fill the group with prompts or using computer code, and allow your user to edit and add more later.

Which method you use depends on your intuititions (and testing) about the best user experience.

Some kinds of information we naturally number, and some we don't. For example: if we are prompted to list our children, we know how many children we have. If we are prompted to list our assets, we might never have counted them up individually. Asking how many bank accounts we have gives us extra work instead of making it simpler. Think about the information you're gathering and which method works best.

Similarly, some information is a good fit for gathering on a single screen, and some is too complex. In our household example, 5 fields might be too many to try to fit multiple rows on a small screen. Usually the on-one-screen method works best when you're collecting 3 or fewer fields for each item.

### Asking for the number up front
One way to use a Docassemble list is to ask the user for how many items they are going to gather up front. Let's walk through this process with gathering a list of children.

Asking for the number up front requires us to use two special attributes of a DAList: `.ask_number` and `target_number`. We are collecting a list of objects, so we also need to tell Docassemble what kind of object our list will hold with the `object_type` attribute.

First, let's create our `DAList` object:

```yaml
---
objects: 
  - children: DAList
```

We want to use the list style that asks the user how many of that item they have. We do this by setting the `ask_number` attribute to True. Let's do that with the `.using()` method. Modify the objects block so it looks like this:

```yaml
---
objects: 
  - children: DAList.using(ask_number=True)
```

We'll use the class Individual to represent each child in our list. To tell Docassemble what class of object we are storing in the list, modify it one more time:

```yaml
---
objects: 
  - children: DAList.using(ask_number=True, object_type=Individual)
```

By setting the `object_type`, Docassemble will handle creating new objects for us as needed, any time we add a new item to the list.

Next, we want to set the `target_number` attribute of our DAList so we know how many children our user has. Let's do that with a question. Add the block below to your interview: 

```yaml
question: |
  How many children do you have?
fields:
  - no label: children.target_number
    datatype: integer 
```

[Datatype `integer`](https://docassemble.org/docs/fields.html#numbers) represents a whole, round number (instead of a number with a decimal point). We need a whole number for `target_number`. We can't collect 1/2 of a kid!

Now, we just need a question to get information about each child:

```yaml
---
question: |
  Information about your ${ordinal(i)} child
fields:
  - First name: children[i].name.first
  - Last name: children[i].name.last
```  

### Asking after each item is gathered

### Asking for multiple items on one screen

### Using code to pre-fill items, with or without prompts

## Display information from a Docassemble Group on screen or in a template

## Further reading

* https://www.nonprofittechy.com/2018/11/26/gathering-repeated-information-working-with-docassemble-groups/
* https://docassemble.org/docs/groups.html