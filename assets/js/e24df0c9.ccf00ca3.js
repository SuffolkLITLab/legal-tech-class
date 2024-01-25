"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[6759],{7787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(5893),o=t(1151);t(4996);const s={slug:"working-with-docx",title:"Working with Docx files",sidebar_label:"Working with Docx"},a=void 0,l={id:"classes/docacon-2020/working-with-docx",title:"Working with Docx files",description:"The big picture",source:"@site/docs/classes/docacon-2020/working-with-docx.md",sourceDirName:"classes/docacon-2020",slug:"/classes/docacon-2020/working-with-docx",permalink:"/legal-tech-class/docs/classes/docacon-2020/working-with-docx",draft:!1,unlisted:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/docacon-2020/working-with-docx.md",tags:[],version:"current",frontMatter:{slug:"working-with-docx",title:"Working with Docx files",sidebar_label:"Working with Docx"},sidebar:"someSidebar",previous:{title:"Logic",permalink:"/legal-tech-class/docs/classes/docacon-2020/logic"},next:{title:"Controlling Interview Order",permalink:"/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order"}},r={},c=[{value:"The big picture",id:"the-big-picture",level:2},{value:"Hello, Docx",id:"hello-docx",level:2},{value:"What happened?",id:"what-happened",level:3},{value:"Questions",id:"questions",level:4},{value:"Mail Merge can&#39;t do <strong>that</strong>",id:"mail-merge-cant-do-that",level:2},{value:"Questions",id:"questions-1",level:3},{value:"What happened?",id:"what-happened-1",level:3},{value:"Further exploration",id:"further-exploration",level:3},{value:"Further reading",id:"further-reading",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"the-big-picture",children:"The big picture"}),"\n",(0,i.jsxs)(n.p,{children:["In our ",(0,i.jsx)(n.a,{href:"/legal-tech-class/docs/classes/docacon-2020/hello-world",children:"Hello, World"})," exercise, we did everything in the\nplayground."]}),"\n",(0,i.jsxs)(n.p,{children:["When you work with a Docx file, we're adding something new: an editor that can\nopen and save files in Microsoft Word's native format, docx. You don't need\nMicrosoft Office. You can use ",(0,i.jsx)(n.a,{href:"https://www.libreoffice.org/",children:"Libre Office"})," or\nthe ",(0,i.jsx)(n.a,{href:"https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web",children:"free version of Office\nOnline"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"We still have our YAML file. The YAML file will contain the questions that the\nuser is asked. The Docx file will contain our formatted text. It can also\ninclude variables that will be filled in by the interview. We can include\ndisplay logic and use Python functions to format our text as well."}),"\n",(0,i.jsxs)(n.p,{children:["In the Hello, World exercise, we used ",(0,i.jsx)(n.a,{href:"/legal-tech-class/docs/markdown",children:"Markdown"})," and\n",(0,i.jsx)(n.a,{href:"/legal-tech-class/docs/mako",children:"Mako"})," to display variables and format our text. In a Docx file, we use\na very similar language called ",(0,i.jsx)(n.a,{href:"/legal-tech-class/docs/jinja2",children:"Jinja2"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"hello-docx",children:"Hello, Docx"}),"\n",(0,i.jsx)(n.p,{children:"Let's take a look at perhaps the simplest interview that automates a Docx template."}),"\n",(0,i.jsx)(n.p,{children:"First, create a Word document that looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hello, {{ user_name }}!\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can copy and paste the text above right into the Word file. Name the file\n",(0,i.jsx)(n.code,{children:"hello_world.docx"}),". Upload it to your playground using the Folders | Templates\narea of the playground."]}),"\n",(0,i.jsx)(n.p,{children:"Next, make a new interview in your Docassemble playground that looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"---\nquestion: |\n  What is your name?\nfields:\n  - no label: user_name\n---\nmandatory: True\nquestion: |\n  Your document is ready\nattachment:\n  docx template file: hello_world.docx\n"})}),"\n",(0,i.jsx)(n.p,{children:"Save and run the interview, and see what you get."}),"\n",(0,i.jsx)(n.h3,{id:"what-happened",children:"What happened?"}),"\n",(0,i.jsxs)(n.p,{children:["Our interview has a question for one variable: ",(0,i.jsx)(n.code,{children:"user_name"}),". Inside the docx\nfile, we put the variable name inside curly brackets, like this: ",(0,i.jsx)(n.code,{children:"{{ user_name }}"}),".\nDocassemble replaced ",(0,i.jsx)(n.code,{children:"{{ user_name }}"})," with the text we entered when we ran the interview."]}),"\n",(0,i.jsxs)(n.p,{children:["Notice that the ",(0,i.jsx)(n.code,{children:"{{ }}"})," is pretty similar to what we did in the Hello, World exercise.\nThis syntax is called ",(0,i.jsx)(n.a,{href:"/legal-tech-class/docs/jinja2",children:"Jinja2"}),". The big difference is in a Docx we use two curly\nbraces; in our interview YAML, we use a dollar sign and single curly braces,\nlike this: ",(0,i.jsx)(n.code,{children:"${ user_name }"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This is the first time that we introduced the\n",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/documents.html#attachment",children:"attachment"})," ",(0,i.jsx)(n.code,{children:"specifier"}),".\nThis is the simplest way to add an attachment to a question. Sometimes, you may\nwant to assign the completed document itself to a variable and do more things with it.\nOr, you may want to display different templates depending on the selections the user\nmakes."]}),"\n",(0,i.jsx)(n.h4,{id:"questions",children:"Questions"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["How did the interview know to ask for the definition of ",(0,i.jsx)(n.code,{children:"user_name"}),"?"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"mail-merge-cant-do-that",children:["Mail Merge can't do ",(0,i.jsx)(n.strong,{children:"that"})]}),"\n",(0,i.jsx)(n.p,{children:"What if we wanted to include some optional text in our template? It's pretty common\nto want different versions of a document for different scenarios. Docassemble of\ncourse allows you to use conditional text inside your Docx template."}),"\n",(0,i.jsx)(n.p,{children:"Create a Word document with the text below. You can copy and paste the\ncode exactly as is."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Reynham Industries Company Picnic Ticket\n\nWelcome, {{ user_name }}. Enjoy the fun in the sun!\n\n{%p if user_name == "Moss" %}\nDon\'t forget to take some water along in case you get a hot ear!\n{%p elif user_name == "Roy" %}\nDid you try turning it off and on again?\n{%p endif %}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Save the file with the name ",(0,i.jsx)(n.code,{children:"ticket.docx"})," and upload it to the Folders |\nTemplates section of the playground."]}),"\n",(0,i.jsx)(n.p,{children:"Now, create an interview file with the text below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"---\nmandatory: True\ncode: |\n  user_name\n  download\n---\nquestion: |\n  What is your name?\nfields:\n  - no label: user_name\n---\nevent: download\nquestion: |\n  Your document is ready\nattachment:\n  name: Company Picnic\n  docx template file: ticket.docx\n"})}),"\n",(0,i.jsx)(n.h3,{id:"questions-1",children:"Questions"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'What happens when you use the name "Jen"?'}),"\n",(0,i.jsx)(n.li,{children:'What about when you use "Moss"? What about "Roy"?'}),"\n",(0,i.jsx)(n.li,{children:'What happens when you type "moss"?'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"what-happened-1",children:"What happened?"}),"\n",(0,i.jsxs)(n.p,{children:["To mark conditional text, we surround it with some new tags.\n",(0,i.jsx)(n.code,{children:"{%p if ... %}"})," marks the beginning of an ",(0,i.jsx)(n.code,{children:"if"})," statement in a Docx file.\nWe can optionally use the ",(0,i.jsx)(n.code,{children:"{%p else %}"}),". We always need to include the special\n",(0,i.jsx)(n.code,{children:"{%p endif %}"})," tag in a Docx file. Notice we did not need something like ",(0,i.jsx)(n.code,{children:"endif"}),"\ninside a Python code block."]}),"\n",(0,i.jsx)(n.h3,{id:"further-exploration",children:"Further exploration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["What happens when we change the format of the Word file by turning it into\nheadings, bold, and so on? What about changing the format of the ",(0,i.jsx)(n.code,{children:"{{ user_name }}"})," text?"]}),"\n",(0,i.jsxs)(n.li,{children:["Try removing one of the ",(0,i.jsx)(n.code,{children:"p"}),"s in the ",(0,i.jsx)(n.code,{children:"{%p if ... %}"})," lines. Try removing all of them."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/documents.html#attachment",children:"attachment"})," block"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/documents.html#docx%20template%20file",children:"Docx Templates"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/helloworld.html",children:"Docassemble tutorial"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://jinja.palletsprojects.com/en/2.11.x/",children:"Jinja reference"})," (this is\nsimilar but not the exact syntax used in Docasssemble)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docxtpl.readthedocs.io/en/latest/#jinja2-like-syntax",children:"Docx-template Jinja reference"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Quinten Steenhuis, June 2020"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(7294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);