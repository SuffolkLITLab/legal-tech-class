"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[7256],{127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=t(4848),i=t(8453),o=t(6025);const a={slug:"assignment-creating-document",title:"Assignment 4: Creating a document\n",sidebar_label:"Assignment 4"},r=void 0,c={id:"classes/smart-machines/2020/assignment-creating-document",title:"Assignment 4: Creating a document\n",description:"Photo by Cytonn Photography on Unsplash",source:"@site/docs/classes/smart-machines/2020/assignment-creating-document.md",sourceDirName:"classes/smart-machines/2020",slug:"/classes/smart-machines/2020/assignment-creating-document",permalink:"/legal-tech-class/docs/classes/smart-machines/2020/assignment-creating-document",draft:!1,unlisted:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/smart-machines/2020/assignment-creating-document.md",tags:[],version:"current",frontMatter:{slug:"assignment-creating-document",title:"Assignment 4: Creating a document\n",sidebar_label:"Assignment 4"},sidebar:"someSidebar",previous:{title:"Assignment 3",permalink:"/legal-tech-class/docs/classes/smart-machines/2020/assignment-branch-logic"},next:{title:"Lawyering in the Age of Smart Machines (2021)\n",permalink:"/legal-tech-class/docs/classes/smart-machines/2021/2021-smart-machines"}},l={},d=[{value:"Something from Nothing: Assembling Your First Documents with Docassemble",id:"something-from-nothing-assembling-your-first-documents-with-docassemble",level:2},{value:"Example",id:"example",level:2},{value:"Putting it into practice",id:"putting-it-into-practice",level:2},{value:"Assignment",id:"assignment",level:2},{value:"Turning in your work",id:"turning-in-your-work",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{alt:"Man signing document",src:(0,o.Ay)("img/cytonn-photography-GJao3ZTX9gU-unsplash.jpg")}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Photo by Cytonn Photography on Unsplash"})}),"\n",(0,s.jsx)(n.h2,{id:"something-from-nothing-assembling-your-first-documents-with-docassemble",children:"Something from Nothing: Assembling Your First Documents with Docassemble"}),"\n",(0,s.jsxs)(n.p,{children:["We have already explored ways to show text to the user, from our very first\n",(0,s.jsx)(n.a,{href:"/legal-tech-class/docs/classes/smart-machines/2020/2020-law-smart-machines-assignment-1",children:"Hello, World exercise"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We can create documents using the same method. We need to learn about a new ",(0,s.jsx)(n.code,{children:"specifier"})," first:\nthe ",(0,s.jsx)(n.code,{children:"attachment"})," specifier. You can read more about ",(0,s.jsx)(n.code,{children:"attachments"})," here, or check out the ",(0,s.jsx)(n.a,{href:"https://docassemble.org/docs/documents.html#oview",children:"official documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Let's demonstrate a simple interview that assembles a Hello, World document.\nWe'll use a few new specifiers: the ",(0,s.jsx)(n.code,{children:"attachment"})," specifier, and a few options that fall underneath it to control the name and content of the document we create."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"---\ncomment: |\n  As a best practice, let's continue to use an object whenever we collect information about a person. Check out Assignment 2 if you need to refresh your memory.\nobjects:\n  - client: Individual\n--- \ncomment: |\n  This block controls the order of questions in the interview\nmandatory: True\ncode: |\n  client.name.first\n  download_files\n---\nquestion: |\n  What is your name?\nfields:\n  - First: client.name.first\n  - Last: client.name.last  \n---\ncomment: |\n  As a reminder, an event specifier is used for an ending screen.\nevent: download_files\nquestion: |\n  Your file is ready\nattachment:\n  name: Hello World\n  filename: Hello_World\n  content: |\n    Hello, ${client}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's take a closer look our sample interview. As a reminder, instead of a standard variable name, we're using an ",(0,s.jsx)(n.a,{href:"/legal-tech-class/docs/practical-guide-docassemble/object-oriented-programming#the-individual-class",children:"Individual object"})," to store the information about our user. We use the ",(0,s.jsx)(n.code,{children:"objects"})," block to create our ",(0,s.jsx)(n.code,{children:"client"})," object."]}),"\n",(0,s.jsxs)(n.p,{children:["The only new feature of our interview comes in the ",(0,s.jsx)(n.code,{children:"attachment"})," specifier at the end. Notice we have three options indented below the ",(0,s.jsx)(n.code,{children:"attachment"})," specifier:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": A descriptive name that is shown by Docassemble on the screen"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filename"}),": The filename that the user will download (we don't need to include .pdf or .rtf)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"content"}),': the actual text that the document will contain, which can include Mako + Markdown. If we click the "preview" link, we can see a preview of the attachment.']}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's how those options will appear on the screen:"}),"\n",(0,s.jsx)("img",{alt:"Attachment example",src:(0,o.Ay)("img/Hello_world_document.png")}),"\n",(0,s.jsx)(n.p,{children:"Docassemble also offers us an option to email the completed document."}),"\n",(0,s.jsx)(n.h2,{id:"putting-it-into-practice",children:"Putting it into practice"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.amnesty.org/en/",children:"Amnesty International"}),' uses international letter writing and other pressure campaigns\nto get governments around the world to release "',(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Prisoner_of_conscience",children:"prisoners of conscience"}),"\". Let's write a tool that might help someone write letters more efficiently."]}),"\n",(0,s.jsx)(n.p,{children:"Our letter will request the release of Dr. Martin Luther King, Jr. from the Birmingham jail."}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the ",(0,s.jsx)(n.code,{children:"attachment"})," specifier, we introduce two new kinds of screens:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsxs)(n.a,{href:"https://docassemble.org/docs/fields.html#plaintext",children:[(0,s.jsx)(n.code,{children:"area"})," input type"]})]}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.a,{href:"https://docassemble.org/docs/questions.html#tocAnchor-1-6-3",children:"information screen with a continue button"}),", which uses the specifier ",(0,s.jsx)(n.code,{children:"field"})]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://docassemble.org/docs/questions.html#tocAnchor-1-6-5",children:"signature screen"}),", which uses the specifier ",(0,s.jsx)(n.code,{children:"signature"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Let's start with some working code. We'll modify this to improve it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"---\nobjects:\n  - user: Individual\n---\nmandatory: True\ncode: |\n  introduction\n  user.name.first\n  custom_paragraph\n  user.signature\n  download_screen\n---\ncomment: |\n  Using an introduction screen is a good idea. It helps your\n  user understand what the tool can and cannot do.\n\n  Use the specifier field for a screen that doesn't do anything\n  except display a continue button.\nquestion: |\n  Letter writing tool\nsubquestion: |\n  This tool will help you send a letter to request the release of Dr. Martin Luther King, Jr. He was arrested in August 1963 during non-violent demonstrations against segregation in the city of Birmingham, Alabama.\n\n  At the end, we'll ask you sign the letter, print it, and mail it to the city prosecutor's office.\ncontinue button field: introduction\n---\nquestion: |\n  What is your name\nfields:\n  - no label: user.name.first\n---\nquestion: |\n  Sign below\nsignature: user.signature\nunder: |\n  ${user}\n---\ncomment: |\n  input type: area lets you collect more than one line of text\n  at once\nquestion: |\n  Add a custom paragraph\nfields:\n  - no label: custom_paragraph\n    input type: area\n---\nevent: download_screen\nquestion: |\n  Your letter is ready to download and print\nsubquestion: |\n  Print the letter below. Mail it to the Birmingham prosecutor\nattachment:\n  name: Letter to the Birmingham Jail\n  filename: letter\n  content: |\n    Birmingham City Prosecutor\n\n    ## The charges against Martin Luther King Jr. must be dropped\n\n    Dear Prosecutor,\n\n    I am writing to you concerning the prosecution of Martin Luther King Jr., who is currently incarcerated in the Birmingham Jail.\n\n    Dr. King was arrested as a non-violent participant in protests against segregation. His arrest is unfair and in violation of international law.\n\n    ${custom_paragraph}\n\n    In conclusion, I ask you to immediately release Dr. King.\n\n    Yours sincerely,\n\n    ${user.signature}\n\n    ${user}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"assignment",children:"Assignment"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Change the file name of the letter to be more descriptive"}),"\n",(0,s.jsxs)(n.li,{children:["Add a yes/no question to the interview that prompts the user about whether they live in Alabama. Look back at assignment 3 for one way to add a ",(0,s.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#fields%20yesnoradio",children:"yes/no question"})," using the ",(0,s.jsx)(n.code,{children:"fields"})," specifier. You could also use ",(0,s.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#yesornoquestions",children:"yes/no buttons"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Add an optional paragraph using ",(0,s.jsx)(n.code,{children:"% if ...:"})," and ",(0,s.jsx)(n.code,{children:"% endif"}),' tags that only displays if they live in Alabama. For example, it might say "As an Alabama resident, I am disappointed..." You may want to review the section in ',(0,s.jsx)(n.a,{href:"/legal-tech-class/docs/mako#use-conditional-text",children:"Mako"})," on conditional text. We also used conditional text in Assignment 1."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"turning-in-your-work",children:"Turning in your work"}),"\n",(0,s.jsx)(n.p,{children:"Download the final YAML file and copy the link to run your interview. Upload to Blackboard."})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);