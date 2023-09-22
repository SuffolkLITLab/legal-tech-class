---
slug: customizing-appearance
title: Customizing Appearance
sidebar_label: Customizing Appearance
---

## Creating a custom title and subtitle for your interview

You can customize almost everything about a docassemble interview's
appearance right out of the box. Something you may want to do early on
is to change the title that appears in the navigation bar. You do this
by customizing the [Metadata](https://docassemble.org/docs/initial.html#metadata)
block.

```yaml
---
metadata:
  title: |
    Bill and Ted's Excellent Title
  short title: |
    Excellent  
---
question: Hello, World
mandatory: True
```

## Using a pre-built Bootstrap theme

A website's appearance is often controlled with a CSS (cascading style sheet)
file. Docassemble allows you to use your own CSS to change the appearance of
interviews. A common way to change the appearance of docassemble is with a
pre-built [Bootstrap](https://getbootstrap.com/) theme.

Bootstrap is currently the world's most popular framework for layout and style
of a website. That makes it easy to find a style that someone else created and
adapt it to your needs.

A good source for free, pre-built themes is [Bootswatch](https://www.bootstrapcdn.com/bootswatch/).

Add a custom CSS file to your interview with the
[Features](https://docassemble.org/docs/initial.html#javascript) block, and add
a custom Bootstrap theme with the [bootstrap
theme](https://docassemble.org/docs/initial.html#bootstrap%20theme) directive.

```yaml
---
features:
  bootstrap theme: https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cerulean/bootstrap.min.css
---
question: Hello, World
mandatory: True
```

You may find yourself wanting to build a theme with custom colors and more. Try experimenting
with one of these tools:

* [Bootstrap.build](https://bootstrap.build/)
* [Bootstrap Magic](https://pikock.github.io/bootstrap-magic/)

The number and variety of options, even with a builder, can be overwhelming. The
docassemble documentation includes some
[tips](https://docassemble.org/docs/config.html#bootstrap%20theme) to help.

## Decorating your interview with images

One of the cool features of docassemble is the ability to natively
access a massive set of free icons called [Font-Awesome](https://fontawesome.com/icons?d=gallery&m=free).

To insert an icon into your interview, just reference it using the shorthand
`:icon-name:` syntax.

Try running the interview below in your docassemble playground.

```yaml
---
question: |
  What is the weather like today?
fields:
  - no label: weather
    datatype: radio
    choices:
      - Sunny
      - Rainy
      - Snowy
      - Cloudy
---
question: |
  Hello, World
subquestion: |
  Have a 
  % if weather == 'Sunny':
  :sun:
  % elif weather == 'Rainy':
  :cloud-rain:
  % elif weather == 'Snowy':
  :snowflake:
  % elif weather == 'Cloudy':
  :cloud-sun:
  % endif
  day!
mandatory: True
```

You can also add a Font-Awesome icon as a "decoration" that appears in the 
top right corner of the interview.

```yaml
---
mandatory: True
decoration: globe-africa
question: |
  Hello, World
```

And use a Font-Awesome icon as a button:

```yaml
---
question: |
  What is the weather like today?
field: weather
buttons:
  - Sunny: Sunny
    image: sun
  - Rainy: Rainy
    image: cloud-rain
  - Snowy: Snowy
    image: snowflake
  - Cloudy: Cloudy
    image: cloud-sun
---
question: |
  Hello, World
subquestion: |
  Have a 
  % if weather == 'Sunny':
  :sun:
  % elif weather == 'Rainy':
  :cloud-rain:
  % elif weather == 'Snowy':
  :snowflake:
  % elif weather == 'Cloudy':
  :cloud-sun:
  % endif
  day!
mandatory: True
```

Quinten Steenhuis, June 2020