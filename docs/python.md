---
slug: python
title: Basics of the Python programming language
sidebar_label: Python basics
---

## About Python
[Python](https://python.org) is one of the worlds [most popular programming languages](https://www.infoworld.com/article/3401536/python-popularity-reaches-an-all-time-high.html) for a good reason. It is easy to use, while familiar enough that people who have tried other languages can jump right in.

Two unique features of Python for people who come from other programming languages are that indentation marks the end and beginning of Python statements (rather than curly braces {}); and that you do not need to use a semi-colon at the end of lines.

Python has a very large collection of [pre-built "modules"](https://docs.python.org/3/library/) and an even larger library of [modules contributed by third-party developers](https://pypi.org). This can make it fast and easy to build very capable applications.

## The basics of programming

Docassemble developers may use only a few features of Python. Still, let's take some time to put the different aspects of any programming language in context, and then talk about how they are used in Python and in Docassemble.

Programming involves two basic concepts: data, and instructions. Data is stored in variables which usually are provided when the program is run. Instructions tell the computer what to do with the data it receives.

### Variables
Variables could be considered "buckets" that hold information. Just like `x` in an algebra equation, we don't know the value until our program is run. Docassemble variables (or fields) are also Python variables.

### Datatypes, Datastructures, and Objects

Variables each have an associated "type". For example, a number is treated differently by the computer than a piece of written text. `"Roger" + "Helicopter"` should really do something different than `1 + 2`. Unlike many languages, in Python variables can change type dynamically. The same variable can be a number at one time, and text later in the same program.

Python uses the following _basic_ or _primitive_ datatypes:

* `int` (integer, or whole numbers)
* `float` (floating point, or fractional numbers)
* `str` (string, or text)
* `bool` (Boolean, or `True`/`False`)
* `None` (null value, or undefined)

Python includes the following built-in data structures:

* `list` (an array, or list of one or more variables)
* `dict` (a dictionary, or associative array)
* `tuple` (like a list, but cannot be changed (immutable))
* `set` (like a list, but has unique values)

Docassemble has its own implementation of these datastructures, named `DAList`, `DADict`, and `DASet` respectively.

Python also supports object oriented programming principles that allow you to create your own complex types. A `class` is a blueprint for an `object`. When you use objects, you gather a list of `attributes` together with `methods` that can act on the attributes to provide standardized behavior and model your program against the real world.

When you want to create a new class, you can `inherit` the properties of an existing class. For example, if you had a class `apple` it may inherit properties from a `fruit` class.

In Docassemble, you are encouraged to have every object inherit from the base object named `DAObject`. You will make frequent use of the [`Individual`](https://docassemble.org/docs/objects.html#Individual) object in Docassemble, which collects attributes of a person together: such as a first and last name, birthdate, address, and more.

### Tests and logical operators

You will use `Boolean` values again and again in Docassemble. Sometimes you will get a True/False value directly from the user. Other times, you will use a logical test. Python's comparison operators should look familiar to you.

* `==` (tests for equality. **Note**: `=` is reserved as the assignment operator)
* `!=` (tests for inequality)
* `>` (greater than)
* `<` (less than)
* `>=` (greater than or equal)
* `<=` (less than or equal)

Logical operators include:

* `and` (combines two tests and will be True if both are True)
* `or` (combines two tests and will be True if either is True)
* `not` (returns True if the test is False)

Operators can be grouped with round brackets `()`.

See [W3Schools](https://www.w3schools.com/python/python_operators.asp) for a more complete list.

### Assignment operators

In Python, you `assign` a value to a variable using an assignment operator. You can get by with just one operator: `=`. For example:

```python
z = 1 # Assigns the value 1 to z
z = "Hello, World" # Assigns the text Hello, World to z.
```

You may also find yourself using the shorthands `+=`, `-=` to add a value and subtract a value in one statement. 

```python
z = 1
z += 1 # the value of z is now 2
z -= 3 # the value of z is now -1.
```

Python also supports basic arithmetic operators.

* `+` (addition)
* `-` (subtraction)
* `*` (multiplication)
* `/` (division)
* `%` (modulus, or remainder)

There are many more assignment operators. See [W3Schools](https://www.w3schools.com/python/python_operators.asp) for a more complete list.

### Control structures

`Control structures` let you dictate the sequence of operations that your program will take in different circumstances. There are three basic types of control structures: `sequence`, `selection` and `repetition`.

#### Sequence (ordering instructions)
`Sequence` controls the order that your instructions to the computer are executed. In Python, the order is implied, top to bottom, in the order that you write each instruction in the file.

```python
operation1
operation2
operation3
```

#### Selection (if then statements)
`Selection` controls which instructions are executed, and which ones remain idle. In Python, the basic `selection` statement is the `if` statement.

An `if` statement is composed of the keyword `if`, followed by a test, and then a colon. The code that follows will execute if the test resolves to a Boolean True.

```python
if test1:
  operation1
```

You can add-in additional tests as part of the main `if` statement with the keywords `elif` and `else`. 

```python
if test1:
  operation1
elif test2:
  operation2
else:
  operation3
```

If you are familiar with other programming languages, you may be surprised that there is no `switch` statement in Python. If not, just ignore it :). `Switch` statements are just a series of `if/elseif` statements. Python does include the `ternary` operator, or one-line `if` statement:

```python
x = 1 if test1 else 2 # Sets x to 1 if test1 is true. Otherwise, it sets x to 2
```

The `ternary` operator can be hard to read so it's usually best to avoid it, but sometimes it's convenient to include in Docassemble in a place where you can only fit one line of code, or inside a Mako statement (`${}`).

#### Repetition (loops)

Docassemble can easily give you the power to gather repeated information. You usually gather that information into a `list` or `dictionary`. You will use Python's repetition control structures to work with those repeated values.

##### `for` Loops

Suppose you have a list with following values:

`[1,2,3,4]`

Python makes it simple to `iterate`, or `loop` over each value in the list without needing to keep track of the total number of elements. If you have used `C`, `Java` or `JavaScript`, this is a convenient built-in feature.

```python
for number in [1,2,3,4]:
  print number
```

Will print 

```
1
2
3
4
```

#### `while` Loops

`while` loops combine a test with repeated action. In the example below

```python
i = 1
while i <= 4:
  print(i)
  i += 1
```

Will print 

```
1
2
3
4
```

> **Here be dragons** Be careful with `while` loops!
>
> Notice that it's up to you to make sure your `while` loop actually ends. It's possible (and easy while you're learning) to create a `while` loop that is stuck in an infinite series of repetitions, crashing the server.

#### A note on the Mako and Jinja variations

[Mako](mako.md) statements let you include Python control structures right inside your interview file, as well as inside Markdown templates. When you want to use the Mako version of a control structure, just include a % symbol at the start of the line. The text underneath does _not_ need to be indented. But you must include the ending keyword.

```markdown
% if statement:
Conditionally displayed text
% endif
```

[Jinja](jinja2.md) statements allow you to include something almost, but not quite entirely unlike Python inside a Docx template. There are many variations to be aware of, but usually it's best to learn about them one at a time. Jinja statements do not need to be on their own line. There is no colon `:` at the end of the opening keyword. They do require an ending keyword.

```
{% if mytest %} Some conditionally displayed text {% endif %}
```

### Functions and methods

Python `functions` and `methods` are an abstraction that lets you "save" a series of instructions and operations that you will want to use again and again. In some languages, these are called `procedures`. You should write some of your own functions. But there is a large [library of functions](https://docassemble.org/docs/functions.html) built-in to Docassemble that you should also peruse when you are about to do something that you think other developers have run into in the past.

You create a function in Python with the `def` keyword. Functions have `arguments` and a `return value`. Consider the following useless example:

```python
def times(x,y):
  return x * y
```

Notice that the function's contents are indented below the `def` keyword.

`methods` are not logically distinct from `functions`. A `method` is a function that is part of an `object`'s blueprint, or `class`. The `method` typically operates on the object itself, or transforms and returns one or more attributes of the object.

For example:

```python
person.age_in_years() # Uses the person's birthdate attribute to calculate their current age and return it
```

Docassemble has many [built-in objects](https://docassemble.org/docs/objects.html). When you are looking in the function library, you might miss a useful shortcut because you do not know that it is considered a method of a class rather than a standalone function.

## Learning more about Python

### Books and tutorials

* [Python Beginner's Guide](https://wiki.python.org/moin/BeginnersGuide)
* [Python Tutorial](https://docs.python.org/3/tutorial/)
* [Automate the Boring Stuff](https://automatetheboringstuff.com/)

### Online Python interpreter (run Python without installing it to your computer)

* [Online runtime environment](https://www.onlinegdb.com/online_python_interpreter)
