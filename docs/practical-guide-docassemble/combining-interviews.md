---
slug: combining-interviews
title: Combining multiple interviews
sidebar_label: Combining interviews
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

1. linking
1. using an umbrella structure
1. designing a generic interview

## Linking

1. using `interview_url()`

Example:

* [Dashboard Menu](https://github.com/SuffolkLITLab/docassemble-ALDashboard/blob/main/docassemble/ALDashboard/data/questions/menu.yml)

## Using an umbrella interview

<img src={useBaseUrl('/img/umbrella_diagram.svg')} />

### Preparing the included interview

1. remove all mandatory blocks in the child interview
1. add a "named block" to the interview order block in the child interview
1. give each attachment a `variable name` if it does not already have one

### Reference the included interview in the umbrella interview

1. add a reference to the `named block` in the umbrella interview
1. add the new `variable name` to the download screen using `attachment code` or
   `ALDocumentBundle`

## Read more

1. https://docassemble.org/docs/logic.html#multiple%20interviews
1. [Naming your modular interview files](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml#use-clear-filenames-for-modular-interview-files)