"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[2298],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(4996),i=["components"],s={slug:"hello-world",title:"Hello, World",sidebar_label:"Hello, World"},c=void 0,d={unversionedId:"classes/docacon-2020/hello-world",id:"classes/docacon-2020/hello-world",title:"Hello, World",description:"Let's begin our Docassemble journey by trying a simple coding exercise: the classic",source:"@site/docs/classes/docacon-2020/hello-world.md",sourceDirName:"classes/docacon-2020",slug:"/classes/docacon-2020/hello-world",permalink:"/legal-tech-class/docs/classes/docacon-2020/hello-world",draft:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/docacon-2020/hello-world.md",tags:[],version:"current",frontMatter:{slug:"hello-world",title:"Hello, World",sidebar_label:"Hello, World"},sidebar:"someSidebar",previous:{title:"What should you use Docassemble for?",permalink:"/legal-tech-class/docs/practical-guide-docassemble/practical-guide-docassemble"},next:{title:"Logic",permalink:"/legal-tech-class/docs/classes/docacon-2020/logic"}},u={},p=[{value:"What is Docassemble?",id:"what-is-docassemble",level:2},{value:"Video version of this training",id:"video-version-of-this-training",level:3},{value:"Introduction to the Docassemble Playground",id:"introduction-to-the-docassemble-playground",level:2},{value:"Hello, World",id:"hello-world",level:2},{value:"Baby steps",id:"baby-steps",level:3},{value:"The mandatory specifier",id:"the-mandatory-specifier",level:3},{value:"Introducing variables",id:"introducing-variables",level:3},{value:"Your assignment",id:"your-assignment",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's begin our Docassemble journey by trying a simple coding exercise: the classic\nHello, World exercise that is the traditional first exercise in a new programming\nlanguage."),(0,r.kt)("h2",{id:"what-is-docassemble"},"What is Docassemble?"),(0,r.kt)("p",null,"Docassemble is a system for running interactive questionnaires. It uses several\nopen source technologies, including ",(0,r.kt)("a",{parentName:"p",href:"/legal-tech-class/docs/python"},"Python"),", ",(0,r.kt)("a",{parentName:"p",href:"/legal-tech-class/docs/markdown"},"Markdown"),", ",(0,r.kt)("a",{parentName:"p",href:"/legal-tech-class/docs/yaml"},"YAML")," and docx-template to\nlet you concentrate on writing your interviews and writing very little code.\nYet, it's flexible enough to allow you to use advanced coding techniques when\nyou need to do so."),(0,r.kt)("h3",{id:"video-version-of-this-training"},"Video version of this training"),(0,r.kt)("p",null,"This training was conducted live in June, 2020. You can follow\nalong with the video if you want, or if you prefer just follow the\nwritten instructions."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Lsh_2qmTSAw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"introduction-to-the-docassemble-playground"},"Introduction to the Docassemble Playground"),(0,r.kt)("p",null,"We will use the Docassemble playground for all exercises. Log in to your\nDocassemble server. When you are loggged\nin, click on your email address, and then select the Playground option to reach the\nPlayground."),(0,r.kt)("img",{alt:"Overview of the Docassemble Playground",src:(0,l.Z)("img/playground_window.png")}),(0,r.kt)("p",null,"The Playground is made up of several elements."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The main text editing window"),(0,r.kt)("li",{parentName:"ol"},"A list of example blocks that can be directly inserted into the text editing window"),(0,r.kt)("li",{parentName:"ol"},"A list of variables and functions available in the current interview file"),(0,r.kt)("li",{parentName:"ol"},"The save and run button, used to run the interview and view results."),(0,r.kt)("li",{parentName:"ol"},"The share button which also gives you a link that can be shared ")),(0,r.kt)("h2",{id:"hello-world"},"Hello, World"),(0,r.kt)("p",null,"In computer programming, the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"},"traditional first\nexercise"),' in a new\nprogramming language is to display the text "Hello, World."'),(0,r.kt)("h3",{id:"baby-steps"},"Baby steps"),(0,r.kt)("p",null,"Let's erase the text in the playground and replace it with the text below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"question: Hello, World\n")),(0,r.kt)("p",null,"Docassemble interviews contain a series of ",(0,r.kt)("inlineCode",{parentName:"p"},"specifiers")," followed by text, such\nas the ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," specifier. The ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," specifier tells docassemble that\nwhat follows will be the title of a screen displayed to the user."),(0,r.kt)("p",null,"When you save and then run this sample, you will notice an error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error\nDocassemble has finished executing all code blocks marked as initial or mandatory, and finished asking all questions marked as mandatory (if any). It is a best practice to end your interview with a question that says goodbye and offers an Exit button.\n")),(0,r.kt)("h3",{id:"the-mandatory-specifier"},"The mandatory specifier"),(0,r.kt)("p",null,"Take a minute to read the error message. In Docassemble, your interview can\ncontain many questions and branches that are never shown to the user. This error\nis telling us that ",(0,r.kt)("em",{parentName:"p"},"none")," of the questions are marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"mandatory"),", or\nrequired, so Docassemble doesn't know what to display. Let's fix that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"question: Hello, World\nmandatory: True\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mandatory"),' specifier marks this block as required. Now when we run the\ninterview, we\'ll see the text "Hello, World" on the screen without any errors.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": you should normally have only ONE ",(0,r.kt)("inlineCode",{parentName:"p"},"mandatory")," block in a single\ninterview. We'll discuss good practices around this later.")),(0,r.kt)("h3",{id:"introducing-variables"},"Introducing variables"),(0,r.kt)("p",null,"The purpose of Docassemble is to gather information from the users. Let's ask\nthe user's name so we can greet them personally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"question: Hello, ${user_name}\nmandatory: True\n---\nquestion: What is your name?\nfields:\n  - Name: user_name\n")),(0,r.kt)("p",null,"We introduced several new ideas in this interview. Notice that each screen in\nthe interview is separated by three dashes, like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"---"),"."),(0,r.kt)("p",null,"We introduced a new ",(0,r.kt)("inlineCode",{parentName:"p"},"specifier"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),". Instead of single line of text, this\n",(0,r.kt)("inlineCode",{parentName:"p"},"specifier")," takes a list. Each field in the list is indented and begins with a\nsingle dash, like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),". Each item has a label, followed by a colon,\nfollowed by the name of the variable that the user's input will be assigned to."),(0,r.kt)("p",null,"To learn more about the format of a Docassemble interview, read the section on\nthe ",(0,r.kt)("a",{parentName:"p",href:"/legal-tech-class/docs/yaml"},"YAML format"),"."),(0,r.kt)("p",null,"We also introduced ",(0,r.kt)("inlineCode",{parentName:"p"},"variables"),". A variable is simply a placeholder. ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name"),"\nis a variable that is a placeholder for the user's name. Inside the Docassemble\ninterview, we can display a variable by surrounding it with ",(0,r.kt)("inlineCode",{parentName:"p"},"Mako")," tags, like\nthis: ",(0,r.kt)("inlineCode",{parentName:"p"},"${variable_name}"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": We don't need to tell Docassemble to mark the second question as\nmandatory. Because the mandatory question requires the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name"),",\nDocassemble automatically asks the first question that provides a definition.")),(0,r.kt)("h2",{id:"your-assignment"},"Your assignment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Modify the Hello, World exercise so that it ask for the user's first and last\nnames separately.")),(0,r.kt)("p",null,"Quinten Steenhuis, June 2020\nSam Harden, June 2020"))}m.isMDXComponent=!0}}]);