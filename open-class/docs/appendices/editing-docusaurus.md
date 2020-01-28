---
id: editing-docusaurus
title: 
sidebar_label: 
---


Recommend enable Windows feature Windows Subsystem for Linux and then the Ubuntu image from Microsoft Store.

In VS Code, you can install the plugins:

Remote - WSL
Markdown Preview Enhanced
Markdown Preview Mermaid

To see what you are doing as you work.

## Quick start

git clone

install yarn, node and npm

run `yarn` inside the git repository to download all Node dependencies.

to create mermaid graphs, use remark-mermaid plugin. This should install when you run `yarn`

To build on your environment, you need to install dependencies for chrome-headless

```
sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

## Add mermaid plugin

edit docusaurus.config.js
At top of file, add 
`const mermaid = require('remark-mermaid')`

In the "docs" block, add `remarkPlugins: [mermaid],`
See https://mdxjs.com/advanced/plugins which explains how remark plugins work. Not explained in Docusaurus documentation.