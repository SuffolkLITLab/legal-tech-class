---
slug: markdown
title: The Markdown formatting language
sidebar_label: Markdown
---

## The Markdown formatting language
Like YAML, [Markdown](https://daringfireball.net/projects/markdown/) is meant to be a concise, human readable way to represent information: in this case, it represents elements such as font size, headers, bold, italic, formatted lists, and even links to resources on the WWW. Many forums, including the popular Reddit, allow you to format your comments using Markdown. However, it is not quite as expressive as an OOXML, Word, or RTF file would be.

```markdown
#### Heading level 4
**Bold text**
_italic text__

1. Numbered item 1
1. Numbered item 2
1. Numbered item 3
```
Turns into:

#### Heading level 4

**Bold text**

_italic text_

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3

## Including variable text

In order to add variable text, Docassemble uses the [Mako templating language](mako.md) which 
can be inserted directly almost anywhere Docassemble expects text, such as under a 
`question`, `subquestion`, `content` or `template` block.

The [Docassemble documentation](https://docassemble.org/docs/markup.html) covers Markdown fairly well, with examples. 

This section was originally posted as a blog on [Nonprofittechy.com](https://www.nonprofittechy.com/2020/01/17/understanding-docassembles-yaml-interview-format/).