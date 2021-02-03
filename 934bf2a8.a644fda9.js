(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(169)),i=n(170),l={slug:"hello-world",title:"Hello, World",sidebar_label:"Hello, World"},s={unversionedId:"classes/docacon-2020/hello-world",id:"classes/docacon-2020/hello-world",isDocsHomePage:!1,title:"Hello, World",description:"What is Docassemble?",source:"@site/docs/classes/docacon-2020/hello-world.md",slug:"/classes/docacon-2020/hello-world",permalink:"/legal-tech-class/docs/classes/docacon-2020/hello-world",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/docacon-2020/hello-world.md",version:"current",sidebar_label:"Hello, World",sidebar:"someSidebar",previous:{title:"Assignment 3",permalink:"/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-3"},next:{title:"Logic",permalink:"/legal-tech-class/docs/classes/docacon-2020/logic"}},c=[{value:"What is Docassemble?",id:"what-is-docassemble",children:[{value:"Recording from June 2020 Live Training",id:"recording-from-june-2020-live-training",children:[]}]},{value:"Introduction to the Docassemble Playground",id:"introduction-to-the-docassemble-playground",children:[]},{value:"Hello, World",id:"hello-world",children:[{value:"Baby steps",id:"baby-steps",children:[]},{value:"The mandatory specifier",id:"the-mandatory-specifier",children:[]},{value:"Introducing variables",id:"introducing-variables",children:[]}]},{value:"Your assignment",id:"your-assignment",children:[]}],b={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-docassemble"},"What is Docassemble?"),Object(o.b)("p",null,"Docassemble is a system for running interactive questionnaires. It uses several\nopen source technologies, including Python, Markdown, YAML and docx-template to\nlet you concentrate on writing your interviews and writing very little code.\nYet, it's flexible enough to allow you to use advanced coding techniques when\nyou need to do so."),Object(o.b)("h3",{id:"recording-from-june-2020-live-training"},"Recording from June 2020 Live Training"),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Lsh_2qmTSAw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("h2",{id:"introduction-to-the-docassemble-playground"},"Introduction to the Docassemble Playground"),Object(o.b)("p",null,"We will use the Docassemble playground for all exercises. Log in to your\nDocassemble server. When you are loggged\nin, click on your email address, and then select the Playground option to reach the\nPlayground."),Object(o.b)("img",{alt:"Overview of the Docassemble Playground",src:Object(i.a)("img/playground_window.png")}),Object(o.b)("p",null,"The Playground is made up of several elements."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The main text editing window"),Object(o.b)("li",{parentName:"ol"},"A list of example blocks that can be directly inserted into the text editing window"),Object(o.b)("li",{parentName:"ol"},"A list of variables and functions available in the current interview file"),Object(o.b)("li",{parentName:"ol"},"The save and run button, used to run the interview and view results."),Object(o.b)("li",{parentName:"ol"},"The share button which also gives you a link that can be shared ")),Object(o.b)("h2",{id:"hello-world"},"Hello, World"),Object(o.b)("p",null,"In computer programming, the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"}),"traditional first\nexercise"),' in a new\nprogramming language is to display the text "Hello, World."'),Object(o.b)("h3",{id:"baby-steps"},"Baby steps"),Object(o.b)("p",null,"Let's erase the text in the playground and replace it with the text below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, World\n")),Object(o.b)("p",null,"Docassemble interviews contain a series of ",Object(o.b)("inlineCode",{parentName:"p"},"specifiers")," followed by text, such\nas the ",Object(o.b)("inlineCode",{parentName:"p"},"question")," specifier. The ",Object(o.b)("inlineCode",{parentName:"p"},"question")," specifier tells docassemble that\nwhat follows will be the title of a screen displayed to the user."),Object(o.b)("p",null,"When you save and then run this sample, you will notice an error."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Error\nDocassemble has finished executing all code blocks marked as initial or mandatory, and finished asking all questions marked as mandatory (if any). It is a best practice to end your interview with a question that says goodbye and offers an Exit button.\n")),Object(o.b)("h3",{id:"the-mandatory-specifier"},"The mandatory specifier"),Object(o.b)("p",null,"Take a minute to read the error message. In Docassemble, your interview can\ncontain many questions and branches that are never shown to the user. This error\nis telling us that ",Object(o.b)("em",{parentName:"p"},"none")," of the questions are marked as ",Object(o.b)("inlineCode",{parentName:"p"},"mandatory"),", or\nrequired, so Docassemble doesn't know what to display. Let's fix that."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, World\nmandatory: True\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"mandatory"),' specifier marks this block as required. Now when we run the\ninterview, we\'ll see the text "Hello, World" on the screen without any errors.'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": you should normally have only ONE ",Object(o.b)("inlineCode",{parentName:"p"},"mandatory")," block in a single\ninterview. We'll discuss good practices around this later.")),Object(o.b)("h3",{id:"introducing-variables"},"Introducing variables"),Object(o.b)("p",null,"The purpose of Docassemble is to gather information from the users. Let's ask\nthe user's name so we can greet them personally."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, ${user_name}\nmandatory: True\n---\nquestion: What is your name?\nfields:\n  - Name: user_name\n")),Object(o.b)("p",null,"We introduced several new ideas in this interview. Notice that each screen in\nthe interview is separated by three dashes, like this: ",Object(o.b)("inlineCode",{parentName:"p"},"---"),"."),Object(o.b)("p",null,"We introduced a new ",Object(o.b)("inlineCode",{parentName:"p"},"specifier"),", ",Object(o.b)("inlineCode",{parentName:"p"},"fields"),". Instead of single line of text, this\n",Object(o.b)("inlineCode",{parentName:"p"},"specifier")," takes a list. Each field in the list is indented and begins with a\nsingle dash, like this: ",Object(o.b)("inlineCode",{parentName:"p"},"-"),". Each item has a label, followed by a colon,\nfollowed by the name of the variable that the user's input will be assigned to."),Object(o.b)("p",null,"To learn more about the format of a Docassemble interview, read the section on\nthe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/yaml"}),"YAML format"),"."),Object(o.b)("p",null,"We also introduced ",Object(o.b)("inlineCode",{parentName:"p"},"variables"),". A variable is simply a placeholder. ",Object(o.b)("inlineCode",{parentName:"p"},"user_name"),"\nis a variable that is a placeholder for the user's name. Inside the Docassemble\ninterview, we can display a variable by surrounding it with ",Object(o.b)("inlineCode",{parentName:"p"},"Mako")," tags, like\nthis: ",Object(o.b)("inlineCode",{parentName:"p"},"${variable_name}"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": We don't need to tell Docassemble to mark the second question as\nmandatory. Because the mandatory question requires the variable ",Object(o.b)("inlineCode",{parentName:"p"},"user_name"),",\nDocassemble automatically asks the first question that provides a definition.")),Object(o.b)("h2",{id:"your-assignment"},"Your assignment"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Modify the Hello, World exercise so that it ask for the user's first and last\nnames separately.")),Object(o.b)("p",null,"Quinten Steenhuis, June 2020\nSam Harden, June 2020"))}d.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},170:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(22),r=n(171);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},171:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);