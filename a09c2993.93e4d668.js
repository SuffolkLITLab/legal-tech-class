(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var o=a(1),n=a(6),r=(a(0),a(161)),i={id:"introduction",title:"Introduction to Docassemble",sidebar_label:"Introduction to Docassemble"},s={id:"introduction",title:"Introduction to Docassemble",description:"## What is Docassemble?",source:"@site/docs/introduction.md",permalink:"/docassemble-class/docs/introduction",editUrl:"https://github.com/nonprofittechy/docassemble-class/edit/master/open-class/docs/introduction.md",sidebar_label:"Introduction to Docassemble",sidebar:"someSidebar",next:{title:"What Legal Technology Is",permalink:"/docassemble-class/docs/legal-tech-overview/legal-tech-overview"}},l=[{value:"What is Docassemble?",id:"what-is-docassemble",children:[]},{value:"Comparable applications",id:"comparable-applications",children:[]},{value:"How does Docassemble work?",id:"how-does-docassemble-work",children:[{value:"Interview Files",id:"interview-files",children:[]},{value:"Templates",id:"templates",children:[]},{value:"Logic",id:"logic",children:[]}]},{value:"Special features",id:"special-features",children:[]}],c={rightToc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-docassemble"},"What is Docassemble?"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docassemble.org"}),"Docassemble")," describes itself as a free, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Open_source"}),"open-source")," ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Expert_system"}),"expert system")," for guided interviews and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Document_automation"}),"document assembly"),", based on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.python.org/"}),"Python"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/YAML"}),"YAML"),", and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Markdown"}),"Markdown"),"."),Object(r.b)("p",null,"Another way to say this is that Docassemble is a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Web_framework"}),"web framework")," that can be easily customized to create a wide variety of interactive applications with a (usually linear) question/answer format that might:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Deliver tailored information or advice"),Object(r.b)("li",{parentName:"ol"},"Fill out a template with information gathered from a user or client"),Object(r.b)("li",{parentName:"ol"},"Place information into an electronic database")),Object(r.b)("p",null,"For example, a Docassemble interview could ask for something like the user's name and address and use those to add the user's signature to a letter to Congress. A more complex example could ask for facts that underly a complaint and create tailored pleadings: and even electronically file them on PACER."),Object(r.b)("p",null,"These applications are usually called ",Object(r.b)("em",{parentName:"p"},"interviews"),". A server running Docassemble can run many interviews at once."),Object(r.b)("p",null,"An interview author can use Docassemble to create one of these interviews without having to focus on many of the details of running or configuring a web application. At the same time, Docassemble offers a great deal of flexibility to customize and add advanced features without needing to switch to a different platform."),Object(r.b)("h2",{id:"comparable-applications"},"Comparable applications"),Object(r.b)("p",null,"If you are reading this in the United States, you have probably used TurboTax or a competitor for filing your taxes. Docassemble allows the creation of very similar applications. Direct competitors to Docassemble's functionality include:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://hotdocs.com"}),"HotDocs")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://a2jauthor.org"}),"A2J Author")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.neotalogic.com/"}),"Neota Logic")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://legal.thomsonreuters.com/en/products/contract-express"}),"Contract Express")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.tylertech.com/products/odyssey/guide-file"}),"Odyssey Guide and File"))),Object(r.b)("p",null,"Notable apps in the same space but with different functionality include:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://qnamarkup.org"}),"QnAMarkup"))),Object(r.b)("p",null,"Docassemble has also inspired two user-friendly low-code frontends: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://community.lawyer"}),"Community.Lawyer")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.documate.org/"}),"Documate"),"."),Object(r.b)("h2",{id:"how-does-docassemble-work"},"How does Docassemble work?"),Object(r.b)("p",null,'Docassemble runs on a web server. This could be a desktop or laptop computer, but most commonly, it\'s a computer in "the cloud," such as Amazon Web Services (AWS).'),Object(r.b)("p",null,"You typically access Docassemble from a web browser, either on a desktop or a mobile device. Docassemble can also be accessed by SMS text messaging, voice control, or by API."),Object(r.b)("p",null,"Interview authors need to think about three key components when creating a Docassemble interview:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("em",{parentName:"li"},"interview")," questions (and their sequence, and logic controlling that sequence)"),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("em",{parentName:"li"},"template")," or final output, and any logic internal to the template that decides whether certain sections are shown or hidden."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("em",{parentName:"li"},"underlying logic")," of the problem that the application is addressing. For example, a legal rule that exists in the real world. A name for these that is useful in many domains is ",Object(r.b)("em",{parentName:"li"},"business rules."))),Object(r.b)("h3",{id:"interview-files"},"Interview Files"),Object(r.b)("p",null,"Interview files are written in plain text, using a combination of the YAML file format, Markdown, and Mako."),Object(r.b)("h3",{id:"templates"},"Templates"),Object(r.b)("p",null,"Templates are normally one of three choices, each with different systems of logic:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A plain text template, using the same Markdown and Mako syntax as is used to write interviews."),Object(r.b)("li",{parentName:"ol"},"Microsoft Word (.docx) files, using Jinja2 syntax"),Object(r.b)("li",{parentName:"ol"},"Adobe PDF formatted documents, using Acrobat's field editor")),Object(r.b)("p",null,"The plain text format can be downloaded by the end user as an RTF, Word or PDF file, and Microsoft Word templates can also be downloaded as PDF files."),Object(r.b)("h3",{id:"logic"},"Logic"),Object(r.b)("p",null,"Docassemble runs on Python, a popular and easy to use computer programming logic. It's typical to write business rules in Python. There are slight variations on Python used for logic inside templates."),Object(r.b)("p",null,"There's no one place that you absolutely must put this logic. It can live in the template file. It could be embedded into your interview file. Or it can live in separate Python modules."),Object(r.b)("p",null,"However, it's recommended to keep most of the logic representing substantive rules in separate Python modules. This keeps templates and interview files neat and readable. It also helps you be able to view all of your business rules in one place to validate, check for errors, and even run automated tests. For example, you could use short functions like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"def test_rule_against_perpetuities(person, vesting_time):\n    return person.is_alive or (person.death_date.plus(vesting_time) < 21)\n")),Object(r.b)("p",null,"for each rule that your interview makes use of. It's even possible to share these rules with other authors and avoid having to go through the difficult process of turning legal rules into computer code when unnecessary."),Object(r.b)("h2",{id:"special-features"},"Special features"),Object(r.b)("p",null,"Docassemble has a number of special features that make it powerful for representing complex legal applications."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Ability to schedule interaction after the user's session has ended"),Object(r.b)("li",{parentName:"ol"},"Integration with email and SMS to automate reminders, follow-up interviews, and more"),Object(r.b)("li",{parentName:"ol"},"Ability to call external APIs to integrate third-party applications (such as payment platforms, maps, and databases)"),Object(r.b)("li",{parentName:"ol"},"Ability to customize every aspect of screens with JavaScript, CSS, and Python code")))}b.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=o,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return a?n.a.createElement(d,s({ref:t},c,{components:a})):n.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);