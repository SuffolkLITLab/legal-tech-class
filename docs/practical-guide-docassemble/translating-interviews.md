---
slug: translating-interviews
title: Translating your interview into other languages
sidebar_label: Translating your interview
---

# Creating interviews in multiple languages

Docassemble interviews can be translated into multiple languages.
It includes handy features that load the translation at runtime, which
means you do not need to maintain two separate versions of the interview
to get the benefit of multiple languages.

The translation system is friendly for working with professional
translators and amateur translators alike. It takes advantage of simple
human-readable spreadsheets or text files.

## The basics

### Naming your language

In Docassemble, you reference the language you are using with a short name of
your choice.

Most authors use 2-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) 
language codes to name their languages. If there is no appropriate
2-letter code, you should consider using [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3).

Some system phrases are already translated and keyed to the two-letter ISO 639-1
code. So it's a good idea to stick with this convention. But if you need to 
translate into a dialect and you can't find an official name, feel free to use
one of your own invention. The official code is just a convention.

### Switching languages

You can control the language of an interview by using the [`set_language()`](https://docassemble.org/docs/functions.html#set_language) function. The
name for the language you want to switch to is the only required parameter.

Docassemble checks the value of `get_language()` to decide what language to
display system phrases and question text in. There is no built-in menu item
that allows you to switch languages. You need to add a question or custom 
menu item that invokes `set_language()` at the appropriate time.

### Incomplete translations

When a phrase has not been translated yet, the user will not get an error. Instead, Docassemble will show the default language.

Translation works off of an exact match. When you change the original language
of a question, the translation will no longer be valid. Even changes to 
punctuation and white space will cause Docassemble to ignore the translation and
show the page in its original language.

Despite this need for an exact match, the translation system is granular.
Each field, option, question text, and subquestion text will be considered
separate items to get translated. If some but not all phrases are translated,
a partial translation will be shown.

### What can be translated

All of the text in the Docassemble interface and interview can 
be translated. 

Docassemble has separate systems for translating different kinds
of interview text:

Kind of text | Docassemble documentation page
-------------|------------------------
Question text | [Spreadsheet or XLIFF file](https://docassemble.org/docs/language.html)
System text (buttons, built-in menu items) | [words.yml](https://docassemble.org/docs/config.html#words)
Code and metadata blocks | Add multiple blocks, with a [language modifier](https://docassemble.org/docs/modifiers.html#language)
Documents | [Language modifier](https://docassemble.org/docs/documents.html#language), also see [Creating documents in languages other than English](https://docassemble.org/docs/language.html#documents)
Function output | [Language-specific functions](https://docassemble.org/docs/functions.html#linguistic)

## Demo interview

Below is a small interview that demonstrates several
translation features.

```yaml
---
# This should always be the first line of the YAML. It needs
# to come before any text that will get translated
translations:
 - phrases_es.xlsx # this spreadsheet has most of the interview phrases
---
features:
  navigation: True
---
language: en
sections:
  - introduction: Introduction
  - ending: Ending
---
# The `sections` block is one that doesn't appear in the 
# translations spreadsheet. You need to use a language modifier
# instead
language: es
sections:
  - introduction: Introducción
  - ending: Conclusión
---
mandatory: True
code: |
  set_language(language_choice) # This actually sets the language to the two-letter code below
  intro
  ending
---
question: |
  What is your language?
fields:
 - Language/lengua: language_choice
   datatype: radio
   choices:
     - English: en
     - Español: es
---
section: introduction
continue button field: intro
question: |
  This is the first screen
subquestion: |
  This is the subquestion area of the first screen.
fields:
  - The first field: field1
  - Select one or more: field2
    datatype: checkboxes
    choices:
      - Label 1: value1
      - Label 2: value2
      - Label 3: value3
      - Label 4: value4
---
section: ending
event: ending
question: |
  All done
subquestion: |
  When you use the comma_and_list() function, the word "and"
  is translated so long as a words.yml is defined in the global configuration
  file.

```

The XLSX file phrases_es.xlsx has these contents:

interview | question_id | index_num | hash | orig_lang | tr_lang | orig_text | tr_text
----------|-------------|-----------|------|-----------|---------|-----------|----------
docassemble.playground10language:language.yml | Question_1 | 0 | dbc292ca7541f124f4924e3f0dd9608d | en | es | "What is your language?
" | ¿Cuál es su idioma?
docassemble.playground10language:language.yml | Question_1 | 1 | 12cad744449f8d4cbdeb9b6fb2738a48 | en | es | Language/lengua | 
docassemble.playground10language:language.yml | Question_1 | 2 | 78463a384a5aa4fad5fa73e2f506ecfc | en | es | English | 
docassemble.playground10language:language.yml | Question_1 | 3 | de92bbe05815c4eb756acb5897baa99c | en | es | Español | 
docassemble.playground10language:language.yml | Question_2 | 0 | 8800e1c9b3e22c44ba59a34db3fe4841 | en | es | introduction | 
docassemble.playground10language:language.yml | Question_2 | 1 | 2a11e19cd150a312759299a692dc394a | en | es | "This is the first screen
" | Esta es la primera pantalla
docassemble.playground10language:language.yml | Question_2 | 2 | 1d8d0906aad3c23c4be70b376b8d02d8 | en | es | "This is the subquestion area of the first screen.
" | Esta es el área de subpreguntas de la primera pantalla.
docassemble.playground10language:language.yml | Question_2 | 3 | 75f398248f25e05bc99e157d7145c363 | en | es | The first field | el primer campo
docassemble.playground10language:language.yml | Question_2 | 4 | e055c0d5b54f36c2665d271fb86079fc | en | es | Select one or more | Seleccione uno o más
docassemble.playground10language:language.yml | Question_2 | 5 | eff63417104e8ebe57b3531054153264 | en | es | Label 1 | Etiqueta 1
docassemble.playground10language:language.yml | Question_2 | 6 | f95d4806340464e46da38ed8a1ce45c6 | en | es | Label 2 | Etiqueta 2
docassemble.playground10language:language.yml | Question_2 | 7 | a890dd1894c379ab876f8d2616ba5907 | en | es | Label 3 | Etiqueta 3
docassemble.playground10language:language.yml | Question_2 | 8 | 650857596fe374d17d7712d706f3864c | en | es | Label 4 | Etiqueta 4
docassemble.playground10language:language.yml | Question_3 | 0 | deeb6f5001d774a40a29140b74cf5011 | en | es | ending | 
docassemble.playground10language:language.yml | Question_3 | 1 | c46c51f9085b1460607798292bcf5232 | en | es | "All done
" | Todo listo
docassemble.playground10language:language.yml | Question_3 | 2 | 0c5b0b5e1c20a9af00353e64f6d2a062 | en | es | "When you use the comma_and_list() function, the word "and" is translated so long as a words.yml is defined in the global configuration file. " | Cuando usas la función `coma_and_list()`, la palabra ""y"" se traduce siempre que se defina un archivo words.yml en la configuración global archivo.

The XLSX file was created by visiting https://[myserver]/utilities and typing
"docassemble.playground10language:language.yml" in the "Download an interview phrase translation file" box.

In the translation file, notice we left several lines that we do not want to translate blank.

The important columns are are the `hash` and `tr_text` columns. The translator can directly edit the `tr_text` column
to add the translations that are needed. Any mako tags or other special syntax will be color-coded. Just let the translator
know to ignore any text that is not black.

## Read more

* [Docassemble's official documentation on language functions](https://docassemble.org/docs/language.html)

### More complex multi-lingual interviews you can inspect

* [MADE](https://gbls.org/MADE), ([GitHub source code](https://github.com/GBLS/docassemble-maevictiondefense))
* [UpToCode](https://getuptocode.org), ([GitHub source code][https://github.com/LemmaLegalConsulting/docassemble-HousingCodeChecklist])
* [Massachusetts 209A Abuse Prevention Petition](https://courtformsonline.org/dv/#209A), ([GitHub source code](https://github.com/suffolklitlab/docassemble-MA209AProtectiveOrder))