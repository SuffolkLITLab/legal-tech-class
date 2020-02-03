(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(6),i=(n(0),n(161)),o=n(163),s={id:"assignment-creating-document",title:"Assignment 4: Creating a document\n",sidebar_label:"Assignment 4"},c={id:"classes/assignment-creating-document",title:"Assignment 4: Creating a document\n",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/classes/assignment-creating-document.md",permalink:"/docassemble-class/docs/classes/assignment-creating-document",editUrl:"https://github.com/nonprofittechy/docassemble-class/edit/master/open-class/docs/classes/assignment-creating-document.md",sidebar_label:"Assignment 4",sidebar:"someSidebar",previous:{title:"Assignment 3: Branching logic\n",permalink:"/docassemble-class/docs/classes/assignment-branch-logic"},next:{title:"The YAML file Format",permalink:"/docassemble-class/docs/yaml"}},l=[{value:"Something from Nothing: Assembling Your First Documents with Docassemble",id:"something-from-nothing-assembling-your-first-documents-with-docassemble",children:[]},{value:"Example",id:"example",children:[]},{value:"Putting it into practice",id:"putting-it-into-practice",children:[]},{value:"Assignment",id:"assignment",children:[{value:"Turning in your work",id:"turning-in-your-work",children:[]}]}],u={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("img",{alt:"Man signing document",src:Object(o.a)("img/cytonn-photography-GJao3ZTX9gU-unsplash.jpg")}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Photo by Cytonn Photography on Unsplash")),Object(i.b)("h2",{id:"something-from-nothing-assembling-your-first-documents-with-docassemble"},"Something from Nothing: Assembling Your First Documents with Docassemble"),Object(i.b)("p",null,"We have already explored ways to show text to the user, from our very first\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"classes/2020-law-smart-machines-assignment-1.md"}),"Hello, World exercise"),"."),Object(i.b)("p",null,"We can create documents using the same method. We need to learn about a new ",Object(i.b)("inlineCode",{parentName:"p"},"specifier")," first:\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"attachment")," specifier. You can read more about ",Object(i.b)("inlineCode",{parentName:"p"},"attachments")," here, or check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docassemble.org/docs/documents.html#oview"}),"official documentation"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Let's create a simple interview that assembles a Hello, World document.\nWe'll use a few new specifiers: the ",Object(i.b)("inlineCode",{parentName:"p"},"attachment")," specifier, and a few options that fall underneath it to control the name and content of the document we create."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\ncomment: |\n  As a best practice, let's continue to use an object whenever we collect information about a person. Check out Assignment 2 if you need to refresh your memory.\nobjects:\n  - client: Individual\n--- \ncomment: |\n  This block controls the order of questions in the interview\nmandatory: True\ncode: |\n  client.name.first\n  download_files\n---\nquestion: |\n  What is your name?\nfields:\n  - First: client.name.first\n  - Last: client.name.last  \n---\ncomment: |\n  As a reminder, an event specifier is used for an ending screen.\nevent: download_files\nquestion: |\n  Your file is ready\nattachment:\n  name: Hello World\n  filename: Hello_World\n  content: |\n    Hello, ${client}\n")),Object(i.b)("p",null,"Let's take a closer look our sample interview. As a reminder, instead of a standard variable name, we're using an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docassemble-class/docs/practical-guide-docassemble/object-oriented-programming#the-individual-class"}),"Individual object")," to store the information about our user. We use the ",Object(i.b)("inlineCode",{parentName:"p"},"objects")," block to create our ",Object(i.b)("inlineCode",{parentName:"p"},"client")," object."),Object(i.b)("p",null,"The only new feature of our interview comes in the ",Object(i.b)("inlineCode",{parentName:"p"},"attachment")," specifier at the end. Notice we have three options indented below the ",Object(i.b)("inlineCode",{parentName:"p"},"attachment")," specifier:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"name"),": A descriptive name that is shown by Docassemble on the screen"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"filename"),": The filename that the user will download (we don't need to include .pdf or .rtf)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"content"),': the actual text that the document will contain, which can include Mako + Markdown. If we click the "preview" link, we can see a preview of the attachment.')),Object(i.b)("p",null,"Here's how those options will appear on the screen:"),Object(i.b)("img",{alt:"Attachment example",src:Object(o.a)("img/Hello_world_document.png")}),Object(i.b)("p",null,"Docassemble also offers us an option to email the completed document."),Object(i.b)("h2",{id:"putting-it-into-practice"},"Putting it into practice"),Object(i.b)("p",null,"Let's create a letter for Amnesty International."),Object(i.b)("p",null,"Our letter will request the release of Dr. Martin Luther King, Jr. from the Birmingham jail."),Object(i.b)("p",null,"In addition to the ",Object(i.b)("inlineCode",{parentName:"p"},"attachment")," specifier, we introduce two new kinds of screens:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docassemble.org/docs/questions.html#tocAnchor-1-6-3"}),"information screen with a continue button"),", which uses the specifier ",Object(i.b)("inlineCode",{parentName:"li"},"field")),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docassemble.org/docs/questions.html#tocAnchor-1-6-5"}),"signature screen"),", which uses the specifier ",Object(i.b)("inlineCode",{parentName:"li"},"signature"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nobjects:\n  - user: Individual\n---\nmandatory: True\ncode: |\n  introduction\n  user.name.first\n  custom_paragraph\n  user.signature\n  download_screen\n---\ncomment: |\n  Using an introduction screen is a good idea. It helps your\n  user understand what the tool can and cannot do.\n\n  Use the specifier field for a screen that doesn't do anything\n  except display a continue button.\nquestion: |\n  Letter writing tool\nsubquestion: |\n  This tool will help you send a letter to request the release of Dr. Martin Luther King, Jr. He was arrested in August 1963 during non-violent demonstrations against segregation in the city of Birmingham, Alabama.\n\n  At the end, we'll ask you sign the letter, print it, and mail it to the city prosecutor's office.\nfield: introduction\n---\nquestion: |\n  What is your name\nfields:\n  - no label: user.name.first\n---\nquestion: |\n  Sign below\nsignature: user.signature\nunder: |\n  ${user}\n---\ncomment: |\n  datatype: area lets you collect more than one line of text\n  at once\nquestion: |\n  Add a custom paragraph\nfields:\n  - no label: custom_paragraph\n    datatype: area\n---\nevent: download_screen\nquestion: |\n  Your letter is ready to download and print\nsubquestion: |\n  Print the letter below. Mail it to the Birmingham prosecutor\nattachment:\n  name: Letter to the Birmingham Jail\n  filename: letter\n  content: |\n    Birmingham City Prosecutor\n\n    ## The charges against Martin Luther King Jr. must be dropped\n\n    Dear Prosector,\n\n    I am writing to you concerning the prosecution of Martin Luther King Jr., who is currently incarcerated in the Birmingham Jail.\n\n    Dr. King was arrested as a non-violent participant in protests against segregation. His arrest is unfair and in violation of international law.\n\n    ${custom_paragraph}\n\n    In conclusion, I ask you to immediately release Dr. King.\n\n    Yours sincerely,\n\n    ${user.signature}\n\n    ${user}\n")),Object(i.b)("h2",{id:"assignment"},"Assignment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Change the file name of the letter to be more descriptive"),Object(i.b)("li",{parentName:"ul"},"Add a yes/no question to the interview that prompts the user about whether they live in Alabama."),Object(i.b)("li",{parentName:"ul"},"Add an optional paragraph using ",Object(i.b)("inlineCode",{parentName:"li"},"% if ...:")," and ",Object(i.b)("inlineCode",{parentName:"li"},"% endif"),' tags that only displays if they live in Alabama. For example, it might say "As an Alabama resident, I am disappointed..." ')),Object(i.b)("h3",{id:"turning-in-your-work"},"Turning in your work"),Object(i.b)("p",null,"Download the final YAML file and copy the link to run your interview. Upload to Blackboard."))}m.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},m=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,p=m["".concat(o,".").concat(b)]||m[b]||d[b]||i;return n?r.a.createElement(p,s({ref:t},l,{components:n})):r.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},162:function(e,t,n){"use strict";var a=n(0),r=n(32);t.a=function(){return Object(a.useContext)(r.a)}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(162);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);