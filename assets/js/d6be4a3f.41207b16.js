"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[86],{1290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(5893),s=n(1151);const o={slug:"mako",title:"The Mako templating language",sidebar_label:"Mako"},l=void 0,i={id:"mako",title:"The Mako templating language",description:"Docassemble uses Mako for formatting throughout the interview file. Mako is also used inside Markdown templates.",source:"@site/docs/mako.md",sourceDirName:".",slug:"/mako",permalink:"/legal-tech-class/docs/mako",draft:!1,unlisted:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/mako.md",tags:[],version:"current",frontMatter:{slug:"mako",title:"The Mako templating language",sidebar_label:"Mako"},sidebar:"someSidebar",previous:{title:"Markdown",permalink:"/legal-tech-class/docs/markdown"},next:{title:"Python basics",permalink:"/legal-tech-class/docs/python"}},r={},c=[{value:"Insert variables",id:"insert-variables",level:2},{value:"Use conditional text",id:"use-conditional-text",level:2},{value:"Use control structures",id:"use-control-structures",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Docassemble uses Mako for formatting throughout the interview file. Mako is also used inside ",(0,a.jsx)(t.a,{href:"/legal-tech-class/docs/markdown",children:"Markdown"})," templates."]}),"\n",(0,a.jsxs)(t.p,{children:["Inside docx template files, you will instead use the ",(0,a.jsx)(t.a,{href:"/legal-tech-class/docs/jinja2",children:"Jinja"})," templating language."]}),"\n",(0,a.jsxs)(t.p,{children:["You can read a full reference of Mako at the ",(0,a.jsx)(t.a,{href:"https://docs.makotemplates.org/en/latest/syntax.html",children:"project website"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Mako statements allow you to:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Insert variables"}),"\n",(0,a.jsx)(t.li,{children:"Use conditional text"}),"\n",(0,a.jsx)(t.li,{children:"Use control structures to display repeated variables"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"insert-variables",children:"Insert variables"}),"\n",(0,a.jsxs)(t.p,{children:["To insert a variable into your document, start with a ",(0,a.jsx)(t.code,{children:"$"})," and surround it with  curly braces, like this: ",(0,a.jsx)(t.code,{children:"${ variable_name }"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["It's also possible to include Python code in the place of the variable name. For example, if you had\nassigned the value of ",(0,a.jsx)(t.code,{children:"my_variable"})," as below:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'my_variable = "lowercase name"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Then you could use the ",(0,a.jsx)(t.code,{children:".capitalize()"})," ",(0,a.jsx)(t.a,{href:"https://docs.python.org/2.5/lib/string-methods.html",children:"method of a string"}),"\ninside Mako tags to make sure that it started with a capital letter, regardless of how the user entered it inside\nyour application:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mako",children:"Dear ${ my_variable.capitalize() }:\n\n    I am writing to tell you...\n"})}),"\n",(0,a.jsx)(t.h2,{id:"use-conditional-text",children:"Use conditional text"}),"\n",(0,a.jsx)(t.p,{children:"You start conditional text with a % symbol at the beginning of the line. If you want to include a literal % symbol instead, use %%. Just like in Python, you need to include a : at the end of the conditional.  The text underneath doesn't need to\nbe indented."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mako",children:"% if person.age_in_years() > 18:\nYou are an adult\n% else:\nYou are a child\n% endif\n"})}),"\n",(0,a.jsx)(t.h2,{id:"use-control-structures",children:"Use control structures"}),"\n",(0,a.jsx)(t.p,{children:"Control structures start the same way as conditional statements, beginning with a % symbol at the start of the line."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mako",children:"% for fruit in fruits:\n${fruit}\n% endfor\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var a=n(7294);const s={},o=a.createContext(s);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);