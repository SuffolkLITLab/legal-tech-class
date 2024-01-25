"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[9325],{1193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(5893),s=t(1151);const i={slug:"python",title:"Basics of the Python programming language",sidebar_label:"Python basics"},r=void 0,a={id:"python",title:"Basics of the Python programming language",description:"About Python",source:"@site/docs/python.md",sourceDirName:".",slug:"/python",permalink:"/legal-tech-class/docs/python",draft:!1,unlisted:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/python.md",tags:[],version:"current",frontMatter:{slug:"python",title:"Basics of the Python programming language",sidebar_label:"Python basics"},sidebar:"someSidebar",previous:{title:"Mako",permalink:"/legal-tech-class/docs/mako"},next:{title:"Jinja2",permalink:"/legal-tech-class/docs/jinja2"}},l={},c=[{value:"About Python",id:"about-python",level:2},{value:"The basics of programming",id:"the-basics-of-programming",level:2},{value:"Variables",id:"variables",level:3},{value:"Datatypes, Datastructures, and Objects",id:"datatypes-datastructures-and-objects",level:3},{value:"Tests and logical operators",id:"tests-and-logical-operators",level:3},{value:"Assignment operators",id:"assignment-operators",level:3},{value:"Control structures",id:"control-structures",level:3},{value:"Sequence (ordering instructions)",id:"sequence-ordering-instructions",level:4},{value:"Selection (if then statements)",id:"selection-if-then-statements",level:4},{value:"Repetition (loops)",id:"repetition-loops",level:4},{value:"<code>for</code> Loops",id:"for-loops",level:5},{value:"<code>while</code> Loops",id:"while-loops",level:4},{value:"A note on the Mako and Jinja variations",id:"a-note-on-the-mako-and-jinja-variations",level:4},{value:"Functions and methods",id:"functions-and-methods",level:3},{value:"Learning more about Python",id:"learning-more-about-python",level:2},{value:"Books and tutorials",id:"books-and-tutorials",level:3},{value:"Online Python interpreter (run Python without installing it to your computer)",id:"online-python-interpreter-run-python-without-installing-it-to-your-computer",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"about-python",children:"About Python"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://python.org",children:"Python"})," is one of the worlds ",(0,o.jsx)(n.a,{href:"https://www.infoworld.com/article/3401536/python-popularity-reaches-an-all-time-high.html",children:"most popular programming languages"})," for a good reason. It is easy to use, while familiar enough that people who have tried other languages can jump right in."]}),"\n",(0,o.jsxs)(n.p,{children:["Two unique features of Python for people who come from other programming languages are that indentation marks the end and beginning of Python statements (rather than curly braces ","); and that you do not need to use a semi-colon at the end of lines."]}),"\n",(0,o.jsxs)(n.p,{children:["Python has a very large collection of ",(0,o.jsx)(n.a,{href:"https://docs.python.org/3/library/",children:'pre-built "modules"'})," and an even larger library of ",(0,o.jsx)(n.a,{href:"https://pypi.org",children:"modules contributed by third-party developers"}),". This can make it fast and easy to build very capable applications."]}),"\n",(0,o.jsx)(n.h2,{id:"the-basics-of-programming",children:"The basics of programming"}),"\n",(0,o.jsx)(n.p,{children:"Docassemble developers may use only a few features of Python. Still, let's take some time to put the different aspects of any programming language in context, and then talk about how they are used in Python and in Docassemble."}),"\n",(0,o.jsx)(n.p,{children:"Programming involves two basic concepts: data, and instructions. Data is stored in variables which usually are provided when the program is run. Instructions tell the computer what to do with the data it receives."}),"\n",(0,o.jsx)(n.h3,{id:"variables",children:"Variables"}),"\n",(0,o.jsxs)(n.p,{children:['Variables could be considered "buckets" that hold information. Just like ',(0,o.jsx)(n.code,{children:"x"})," in an algebra equation, we don't know the value until our program is run. Docassemble variables (or fields) are also Python variables."]}),"\n",(0,o.jsx)(n.h3,{id:"datatypes-datastructures-and-objects",children:"Datatypes, Datastructures, and Objects"}),"\n",(0,o.jsxs)(n.p,{children:['Variables each have an associated "type". For example, a number is treated differently by the computer than a piece of written text. ',(0,o.jsx)(n.code,{children:'"Roger" + "Helicopter"'})," should really do something different than ",(0,o.jsx)(n.code,{children:"1 + 2"}),". Unlike many languages, in Python variables can change type dynamically. The same variable can be a number at one time, and text later in the same program."]}),"\n",(0,o.jsxs)(n.p,{children:["Python uses the following ",(0,o.jsx)(n.em,{children:"basic"})," or ",(0,o.jsx)(n.em,{children:"primitive"})," datatypes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"int"})," (integer, or whole numbers)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"float"})," (floating point, or fractional numbers)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"str"})," (string, or text)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"bool"})," (Boolean, or ",(0,o.jsx)(n.code,{children:"True"}),"/",(0,o.jsx)(n.code,{children:"False"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"None"})," (null value, or undefined)"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Python includes the following built-in data structures:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"list"})," (an array, or list of one or more variables)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dict"})," (a dictionary, or associative array)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"tuple"})," (like a list, but cannot be changed (immutable))"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"set"})," (like a list, but has unique values)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Docassemble has its own implementation of these datastructures, named ",(0,o.jsx)(n.code,{children:"DAList"}),", ",(0,o.jsx)(n.code,{children:"DADict"}),", and ",(0,o.jsx)(n.code,{children:"DASet"})," respectively."]}),"\n",(0,o.jsxs)(n.p,{children:["Python also supports object oriented programming principles that allow you to create your own complex types. A ",(0,o.jsx)(n.code,{children:"class"})," is a blueprint for an ",(0,o.jsx)(n.code,{children:"object"}),". When you use objects, you gather a list of ",(0,o.jsx)(n.code,{children:"attributes"})," together with ",(0,o.jsx)(n.code,{children:"methods"})," that can act on the attributes to provide standardized behavior and model your program against the real world."]}),"\n",(0,o.jsxs)(n.p,{children:["When you want to create a new class, you can ",(0,o.jsx)(n.code,{children:"inherit"})," the properties of an existing class. For example, if you had a class ",(0,o.jsx)(n.code,{children:"apple"})," it may inherit properties from a ",(0,o.jsx)(n.code,{children:"fruit"})," class."]}),"\n",(0,o.jsxs)(n.p,{children:["In Docassemble, you are encouraged to have every object inherit from the base object named ",(0,o.jsx)(n.code,{children:"DAObject"}),". You will make frequent use of the ",(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/objects.html#Individual",children:(0,o.jsx)(n.code,{children:"Individual"})})," object in Docassemble, which collects attributes of a person together: such as a first and last name, birthdate, address, and more."]}),"\n",(0,o.jsx)(n.h3,{id:"tests-and-logical-operators",children:"Tests and logical operators"}),"\n",(0,o.jsxs)(n.p,{children:["You will use ",(0,o.jsx)(n.code,{children:"Boolean"})," values again and again in Docassemble. Sometimes you will get a True/False value directly from the user. Other times, you will use a logical test. Python's comparison operators should look familiar to you."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"=="})," (tests for equality. ",(0,o.jsx)(n.strong,{children:"Note"}),": ",(0,o.jsx)(n.code,{children:"="})," is reserved as the assignment operator)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"!="})," (tests for inequality)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:">"})," (greater than)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<"})," (less than)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:">="})," (greater than or equal)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<="})," (less than or equal)"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Logical operators include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"and"})," (combines two tests and will be True if both are True)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"or"})," (combines two tests and will be True if either is True)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"not"})," (returns True if the test is False)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Operators can be grouped with round brackets ",(0,o.jsx)(n.code,{children:"()"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://www.w3schools.com/python/python_operators.asp",children:"W3Schools"})," for a more complete list."]}),"\n",(0,o.jsx)(n.h3,{id:"assignment-operators",children:"Assignment operators"}),"\n",(0,o.jsxs)(n.p,{children:["In Python, you ",(0,o.jsx)(n.code,{children:"assign"})," a value to a variable using an assignment operator. You can get by with just one operator: ",(0,o.jsx)(n.code,{children:"="}),". For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'z = 1 # Assigns the value 1 to z\nz = "Hello, World" # Assigns the text Hello, World to z.\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You may also find yourself using the shorthands ",(0,o.jsx)(n.code,{children:"+="}),", ",(0,o.jsx)(n.code,{children:"-="})," to add a value and subtract a value in one statement."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"z = 1\nz += 1 # the value of z is now 2\nz -= 3 # the value of z is now -1.\n"})}),"\n",(0,o.jsx)(n.p,{children:"Python also supports basic arithmetic operators."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"+"})," (addition)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-"})," (subtraction)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"*"})," (multiplication)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/"})," (division)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"%"})," (modulus, or remainder)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["There are many more assignment operators. See ",(0,o.jsx)(n.a,{href:"https://www.w3schools.com/python/python_operators.asp",children:"W3Schools"})," for a more complete list."]}),"\n",(0,o.jsx)(n.h3,{id:"control-structures",children:"Control structures"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Control structures"})," let you dictate the sequence of operations that your program will take in different circumstances. There are three basic types of control structures: ",(0,o.jsx)(n.code,{children:"sequence"}),", ",(0,o.jsx)(n.code,{children:"selection"})," and ",(0,o.jsx)(n.code,{children:"repetition"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"sequence-ordering-instructions",children:"Sequence (ordering instructions)"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Sequence"})," controls the order that your instructions to the computer are executed. In Python, the order is implied, top to bottom, in the order that you write each instruction in the file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"operation1\noperation2\noperation3\n"})}),"\n",(0,o.jsx)(n.h4,{id:"selection-if-then-statements",children:"Selection (if then statements)"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Selection"})," controls which instructions are executed, and which ones remain idle. In Python, the basic ",(0,o.jsx)(n.code,{children:"selection"})," statement is the ",(0,o.jsx)(n.code,{children:"if"})," statement."]}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.code,{children:"if"})," statement is composed of the keyword ",(0,o.jsx)(n.code,{children:"if"}),", followed by a test, and then a colon. The code that follows will execute if the test resolves to a Boolean True."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"if test1:\n  operation1\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can add-in additional tests as part of the main ",(0,o.jsx)(n.code,{children:"if"})," statement with the keywords ",(0,o.jsx)(n.code,{children:"elif"})," and ",(0,o.jsx)(n.code,{children:"else"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"if test1:\n  operation1\nelif test2:\n  operation2\nelse:\n  operation3\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you are familiar with other programming languages, you may be surprised that there is no ",(0,o.jsx)(n.code,{children:"switch"})," statement in Python. If not, just ignore it :). ",(0,o.jsx)(n.code,{children:"Switch"})," statements are just a series of ",(0,o.jsx)(n.code,{children:"if/elseif"})," statements. Python does include the ",(0,o.jsx)(n.code,{children:"ternary"})," operator, or one-line ",(0,o.jsx)(n.code,{children:"if"})," statement:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"x = 1 if test1 else 2 # Sets x to 1 if test1 is true. Otherwise, it sets x to 2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ternary"})," operator can be hard to read so it's usually best to avoid it, but sometimes it's convenient to include in Docassemble in a place where you can only fit one line of code, or inside a Mako statement (",(0,o.jsx)(n.code,{children:"${}"}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"repetition-loops",children:"Repetition (loops)"}),"\n",(0,o.jsxs)(n.p,{children:["Docassemble can easily give you the power to gather repeated information. You usually gather that information into a ",(0,o.jsx)(n.code,{children:"list"})," or ",(0,o.jsx)(n.code,{children:"dictionary"}),". You will use Python's repetition control structures to work with those repeated values."]}),"\n",(0,o.jsxs)(n.h5,{id:"for-loops",children:[(0,o.jsx)(n.code,{children:"for"})," Loops"]}),"\n",(0,o.jsx)(n.p,{children:"Suppose you have a list with following values:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"[1,2,3,4]"})}),"\n",(0,o.jsxs)(n.p,{children:["Python makes it simple to ",(0,o.jsx)(n.code,{children:"iterate"}),", or ",(0,o.jsx)(n.code,{children:"loop"})," over each value in the list without needing to keep track of the total number of elements. If you have used ",(0,o.jsx)(n.code,{children:"C"}),", ",(0,o.jsx)(n.code,{children:"Java"})," or ",(0,o.jsx)(n.code,{children:"JavaScript"}),", this is a convenient built-in feature."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"for number in [1,2,3,4]:\n  print number\n"})}),"\n",(0,o.jsx)(n.p,{children:"Will print"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1\n2\n3\n4\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"while-loops",children:[(0,o.jsx)(n.code,{children:"while"})," Loops"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"while"})," loops combine a test with repeated action. In the example below"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"i = 1\nwhile i <= 4:\n  print(i)\n  i += 1\n"})}),"\n",(0,o.jsx)(n.p,{children:"Will print"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1\n2\n3\n4\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Here be dragons"})," Be careful with ",(0,o.jsx)(n.code,{children:"while"})," loops!"]}),"\n",(0,o.jsxs)(n.p,{children:["Notice that it's up to you to make sure your ",(0,o.jsx)(n.code,{children:"while"})," loop actually ends. It's possible (and easy while you're learning) to create a ",(0,o.jsx)(n.code,{children:"while"})," loop that is stuck in an infinite series of repetitions, crashing the server."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"a-note-on-the-mako-and-jinja-variations",children:"A note on the Mako and Jinja variations"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/legal-tech-class/docs/mako",children:"Mako"})," statements let you include Python control structures right inside your interview file, as well as inside Markdown templates. When you want to use the Mako version of a control structure, just include a % symbol at the start of the line. The text underneath does ",(0,o.jsx)(n.em,{children:"not"})," need to be indented. But you must include the ending keyword."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"% if statement:\nConditionally displayed text\n% endif\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/legal-tech-class/docs/jinja2",children:"Jinja"})," statements allow you to include something almost, but not quite entirely unlike Python inside a Docx template. There are many variations to be aware of, but usually it's best to learn about them one at a time. Jinja statements do not need to be on their own line. There is no colon ",(0,o.jsx)(n.code,{children:":"})," at the end of the opening keyword. They do require an ending keyword."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"{% if mytest %} Some conditionally displayed text {% endif %}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"functions-and-methods",children:"Functions and methods"}),"\n",(0,o.jsxs)(n.p,{children:["Python ",(0,o.jsx)(n.code,{children:"functions"})," and ",(0,o.jsx)(n.code,{children:"methods"}),' are an abstraction that lets you "save" a series of instructions and operations that you will want to use again and again. In some languages, these are called ',(0,o.jsx)(n.code,{children:"procedures"}),". You should write some of your own functions. But there is a large ",(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/functions.html",children:"library of functions"})," built-in to Docassemble that you should also peruse when you are about to do something that you think other developers have run into in the past."]}),"\n",(0,o.jsxs)(n.p,{children:["You create a function in Python with the ",(0,o.jsx)(n.code,{children:"def"})," keyword. Functions have ",(0,o.jsx)(n.code,{children:"arguments"})," and a ",(0,o.jsx)(n.code,{children:"return value"}),". Consider the following useless example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def times(x,y):\n  return x * y\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Notice that the function's contents are indented below the ",(0,o.jsx)(n.code,{children:"def"})," keyword."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"methods"})," are not logically distinct from ",(0,o.jsx)(n.code,{children:"functions"}),". A ",(0,o.jsx)(n.code,{children:"method"})," is a function that is part of an ",(0,o.jsx)(n.code,{children:"object"}),"'s blueprint, or ",(0,o.jsx)(n.code,{children:"class"}),". The ",(0,o.jsx)(n.code,{children:"method"})," typically operates on the object itself, or transforms and returns one or more attributes of the object."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"person.age_in_years() # Uses the person's birthdate attribute to calculate their current age and return it\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Docassemble has many ",(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/objects.html",children:"built-in objects"}),". When you are looking in the function library, you might miss a useful shortcut because you do not know that it is considered a method of a class rather than a standalone function."]}),"\n",(0,o.jsx)(n.h2,{id:"learning-more-about-python",children:"Learning more about Python"}),"\n",(0,o.jsx)(n.h3,{id:"books-and-tutorials",children:"Books and tutorials"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://wiki.python.org/moin/BeginnersGuide",children:"Python Beginner's Guide"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.python.org/3/tutorial/",children:"Python Tutorial"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://automatetheboringstuff.com/",children:"Automate the Boring Stuff"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"online-python-interpreter-run-python-without-installing-it-to-your-computer",children:"Online Python interpreter (run Python without installing it to your computer)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.onlinegdb.com/online_python_interpreter",children:"Online runtime environment"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);