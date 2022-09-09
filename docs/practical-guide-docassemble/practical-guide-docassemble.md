---
slug: practical-guide-docassemble
title: What should you use Docassemble for?
sidebar_label: What should you use Docassemble for?
---

## What should you use Docassemble for?

If we look over our [legal technology taxonomy](legal-tech-overview/legal-tech-overview.md),
which of these tasks is Docassemble best suited for?

Docassemble's main metaphor is a linear series of step-by-step questions. Many of the things Docassemble does best are controlled by that choice: 

* Expert systems
* Filling forms and templates (document assembly)
* Referral and triage
* Intake tools
* Tickler/reminder systems
* Gathering digital signatures, documents, or more from participants in litigation (i.e., collecting your client's documents that must be provided in discovery, getting a signature on a retainer or release, etc)
* Database frontends (i.e., traditional create/read/update/delete systems)

## Examples

Most expert systems built-on Docassemble also include filling forms and templates, but they don't need to.

The [Court Forms Online](https://courtformsonline.org) site contains many examples
of Docassemble interviews for use in Massachusetts.

## What are Docassemble's unique strengths?

### Customizability
The greatest strength of Docassemble is the ability for Docassemble to talk to other existing systems. Because Docassemble is code based, you can easily add in new integrations without waiting for the platform author to add them.

For example, document assembly has existed for decades. Docassemble makes it possible to have document assembly _with information pulled from a case management system_. Of course some platforms integrate with some case management systems. But Docassemble allows you to use any CMS that has a public API or whose database you can access. This may take time, but it's doable. This makes it safe to invest in Docassemble, without fear that the next system that comes along won't be supported.

### Working at scale
Docassemble excels at the development of large, complex apps. While the drag-and-drop metaphor is great for infrequently updated and small, contained systems, larger apps have always been built with written code. Docassemble allows you to use traditional programming tools such as linters and code auto-completion while focusing on your core goal. 

Plain-text code can use `diff` to compare and track changes; easily be versioned; easily be searched and take advantage of code-folding and other techniques to provide an overview without requiring drilling down through hundreds of dialogs or menus. Using object-oriented techniques minimizes duplicate code; CSS and other web-development standbys allow you to manage and tweak the appearance of your system without making changes in hundreds of places for each tweak.

### Internationalization and accessibility

Docassemble is a modern tool, built with multiple languages and accessibility for different levels of ability in mind from the beginning.

A single Docassemble interview can easily be written in multiple languages. The default themes are designed to comply with the Americans with Disability Act / Web Content Accessibility Guidelines ([WCAG](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines)). Most of the important elements use `aria` tags to aid screen readers. And it even includes a built-in screen reading tool and readability analysis scoring system.

### Built-in features

Docassemble's built-in features could easily be dedicated tools in their own right. For example:

* Collecting uploaded files from users
* Optical character recognition
* Digital signatures
* Scheduled tasks that can run without your user being present, for things such as court date reminders
* Integration with SMS and email

