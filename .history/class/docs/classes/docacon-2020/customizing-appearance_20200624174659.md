---
id: customizing-appearance
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

The number and variety of options can be a bit overwhelming, though. The
docassemble documentation includes some
[tips](https://docassemble.org/docs/config.html#bootstrap%20theme) to help.

## Decorating your interview with images