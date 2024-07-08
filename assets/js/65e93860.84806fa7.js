"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[6448],{905:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(5893),l=s(1151);const o={slug:"run-docassemble-docker-vscode",title:"Setup & Run Docassemble with Docker and VS Code",sidebar_label:"Docassemble with Docker and VS Code"},t=void 0,r={id:"practical-guide-docassemble/run-docassemble-docker-vscode",title:"Setup & Run Docassemble with Docker and VS Code",description:"Author: Dele Omotosho",source:"@site/docs/practical-guide-docassemble/run-docassemble-docker-vscode.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/run-docassemble-docker-vscode",permalink:"/legal-tech-class/docs/practical-guide-docassemble/run-docassemble-docker-vscode",draft:!1,unlisted:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/run-docassemble-docker-vscode.md",tags:[],version:"current",frontMatter:{slug:"run-docassemble-docker-vscode",title:"Setup & Run Docassemble with Docker and VS Code",sidebar_label:"Docassemble with Docker and VS Code"},sidebar:"someSidebar",previous:{title:"Rebuilding your AWS Lightsail instance",permalink:"/legal-tech-class/docs/practical-guide-docassemble/rebuild-lightsail-instance"},next:{title:"Installing a docassemble app on your production server",permalink:"/legal-tech-class/docs/practical-guide-docassemble/installing-production-app"}},c={},d=[{value:"Install Windows Subsystem for Linux (WSL 2)",id:"install-windows-subsystem-for-linux-wsl-2",level:2},{value:"Install Docker",id:"install-docker",level:2},{value:"Docker Installation",id:"docker-installation",level:3},{value:"Confirm docker works with WSL 2",id:"confirm-docker-works-with-wsl-2",level:3},{value:"Install GitHub and Git for file control and collaboration",id:"install-github-and-git-for-file-control-and-collaboration",level:2},{value:"Install and Configure Visual Studio Code (VS Code)",id:"install-and-configure-visual-studio-code-vs-code",level:2},{value:"Configure VS Code to use WSL 2",id:"configure-vs-code-to-use-wsl-2",level:3},{value:"Test docker works inside VS Code",id:"test-docker-works-inside-vs-code",level:3},{value:"Install Python and docassemble command-line app",id:"install-python-and-docassemble-command-line-app",level:2},{value:"Install Python on WSL",id:"install-python-on-wsl",level:3},{value:"Install Python on MacOS",id:"install-python-on-macos",level:3},{value:"Install docassemble command line",id:"install-docassemble-command-line",level:3},{value:"Write and collaborate on your docassemble interview",id:"write-and-collaborate-on-your-docassemble-interview",level:2},{value:"Run your first offline docassemble",id:"run-your-first-offline-docassemble",level:3},{value:"Points to have on mind while writing interviews locally",id:"points-to-have-on-mind-while-writing-interviews-locally",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Author: ",(0,i.jsx)(n.a,{href:"https://github.com/deletosh",children:"Dele Omotosho"})]}),"\n",(0,i.jsx)(n.p,{children:"In this section, we will setup our system to write and run docassemble without using the playground or a server."}),"\n",(0,i.jsx)(n.p,{children:"This allows us to use a regular text editor (we will use Visual Studio Code), save our work in a way that allows us to collaborate on interviews with colleagues."}),"\n",(0,i.jsx)(n.p,{children:"A big bonus too is, get an easier way to track MS docx templates next to our interview files docassemble."}),"\n",(0,i.jsx)(n.p,{children:"At the end of this guide, you will design an interview this way:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/aaoZL9h.gif",alt:"Designing docassemble interview in VS Code"})}),"\n",(0,i.jsx)(n.p,{children:"This guide has 6 sections:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Install Windows Subsystem for Linux (WSL 2)"})," (skip if you're on Mac or Linux)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Install Docker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Install GitHub and Git for file control and collaboration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Install and configure Visual Studio Code (VS Code)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Install Python and docassemble command-line tool"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Write and collaborate on your docassemble interview"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's jump in."}),"\n",(0,i.jsx)(n.h2,{id:"install-windows-subsystem-for-linux-wsl-2",children:"Install Windows Subsystem for Linux (WSL 2)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open Command Prompt as an Administrator ",(0,i.jsx)(n.img,{src:"https://i.imgur.com/1g0fyiS.gif",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In your command prompt, type ",(0,i.jsx)(n.code,{children:"wsl --install -d  Ubuntu-16.04"})," and complete\nthis installation\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/hUsbNKM.gif",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["At the end of this process, it asks you to create your credentials\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/HWtxfbN.gif",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now you have a Linux (Ubuntu 16.04) operating system installed inside\nwindows."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To run this later, from the start menu, type ",(0,i.jsx)(n.strong,{children:"Ubuntu 16.04"})," and open it\n(it will look like the windows command line)\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/kAmYdR7.gif",alt:""})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-docker",children:"Install Docker"}),"\n",(0,i.jsxs)(n.p,{children:["Before continuing with this, confirm your systems ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/windows-install/#system-requirements",children:"meets the minimum requirement to run docker"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"docker-installation",children:"Docker Installation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/windows-install",children:"https://docs.docker.com/desktop/install/windows-install"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Download Desktop for Window"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the downloaded installation (leave all the default settings)\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/HRB11zm.gif",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you are on MacOS, install the appropriate version of Docker instead of the Windows version."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Follow through the installation. When it's complete, restart your computer if you are using Windows."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"confirm-docker-works-with-wsl-2",children:"Confirm docker works with WSL 2"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open docker and and confirm you the ",(0,i.jsx)(n.strong,{children:"Use the WSL 2 based engine"})," is\nchecked. This step can be skipped on MacOS. ",(0,i.jsx)(n.img,{src:"https://i.imgur.com/BxkFGO4.gif",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open your terminal (Ubuntu 16.04) or your MacOS Terminal and type ",(0,i.jsx)(n.code,{children:"docker -v"}),", see the proper\ndocker version in the terminal (Docker needs to be running for you to try\nthis). ",(0,i.jsx)(n.img,{src:"https://i.imgur.com/wv0mNt7.png",alt:""})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-github-and-git-for-file-control-and-collaboration",children:"Install GitHub and Git for file control and collaboration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://desktop.github.com",children:"https://desktop.github.com"})," to download GitHub Desktop."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the downloaded file, when the installation is complete you should see this screen: ",(0,i.jsx)(n.img,{src:"https://i.imgur.com/scIdBqU.png",alt:""})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You have 2 options:"}),"\n",(0,i.jsxs)(n.p,{children:["If you don't have a GitHub account, click ",(0,i.jsx)(n.strong,{children:"Create your free account"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/signup",children:"do it here"}),", then continue to the next step."]}),"\n",(0,i.jsxs)(n.p,{children:["With your new (or existing) GitHub account, click the ",(0,i.jsx)(n.strong,{children:"Sign in to GitHub.com"}),". You will be redirected to a new page to login"]}),"\n",(0,i.jsx)(n.p,{children:"When that completed, it brings us back to the Git configuration screen:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/p3gCEGD.png",alt:""})}),"\n",(0,i.jsx)(n.h2,{id:"install-and-configure-visual-studio-code-vs-code",children:"Install and Configure Visual Studio Code (VS Code)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com",children:"https://code.visualstudio.com"}),' and hit the "Download for X" button,\nthe "X" will be the name of your operating system.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the downloaded file and follow through there instructions. Here's a\nstep-by-step for ",(0,i.jsx)(n.a,{href:"https://deletosh.com/connect-vscode-github",children:"in-depth guide on configuring VS Code for legal\nautomation"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In MacOS, there is an additional step to get ",(0,i.jsx)(n.code,{children:"code"})," working from the command line. Per ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line",children:"Visual Studio's Documentation"}),", Open the ",(0,i.jsx)(n.strong,{children:"Command Palette"})," (",(0,i.jsx)(n.code,{children:"Cmd+Shift+P"}),") and type ",(0,i.jsx)(n.code,{children:"shell command"})," to find the ",(0,i.jsx)(n.code,{children:"Shell Commmand: Install 'code' command in PATH"}),". Run this command."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-vs-code-to-use-wsl-2",children:"Configure VS Code to use WSL 2"}),"\n",(0,i.jsx)(n.p,{children:"Skip this step on MacOS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open VS Code's preferences ",(0,i.jsx)(n.img,{src:"https://i.imgur.com/oHuFEuT.gif",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["Open the JSON settings and add the following to the last line of the existing content on that file: ",(0,i.jsx)(n.code,{children:'"terminal.integrated.shell.windows": "C:\\\\Windows\\\\System32\\\\wsl.exe"'})," and ",(0,i.jsx)(n.strong,{children:"File"})," > ",(0,i.jsx)(n.strong,{children:"Save"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/LRiO87R.gif",alt:""})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"(Notice: I added a comma before adding this line)"}),"\n",(0,i.jsx)(n.h3,{id:"test-docker-works-inside-vs-code",children:"Test docker works inside VS Code"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["With VS Code still open, click ",(0,i.jsx)(n.strong,{children:"Terminal"})," > ",(0,i.jsx)(n.strong,{children:"New Terminal"})]}),"\n",(0,i.jsxs)(n.li,{children:["In the terminal, type ",(0,i.jsx)(n.code,{children:"docker -v"})," we should see the same result as we saw in WSL (Ubuntu 16.04) or your MacOS Terminal earlier.\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/LRiO87R.gif",alt:""})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-python-and-docassemble-command-line-app",children:"Install Python and docassemble command-line app"}),"\n",(0,i.jsx)(n.p,{children:"Docassemble is written in the Python programming language. To make docassemble work offline, we need to install Python."}),"\n",(0,i.jsx)(n.h3,{id:"install-python-on-wsl",children:"Install Python on WSL"}),"\n",(0,i.jsx)(n.p,{children:"Skip this step on MacOS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open your WSL ",(0,i.jsx)(n.img,{src:"https://i.imgur.com/kAmYdR7.gif",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["Type ",(0,i.jsx)(n.code,{children:"sudo apt update && update"}),"\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/O6eThhR.gif",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["When that completes type: ",(0,i.jsx)(n.code,{children:"sudo apt install -y python3 python3-pip ipython3"}),"\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/x18BSTP.gif",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["In your WSL, type: ",(0,i.jsx)(n.code,{children:"echo \"alias python='/usr/bin/python3'\" >> ~/. bashrc"})," (you get no response)"]}),"\n",(0,i.jsxs)(n.li,{children:["Next, type: ",(0,i.jsx)(n.code,{children:"echo \"alias pip='/usr/bin/pip3'\" >> ~/.bashrc"})," (you get no\nresponse)"]}),"\n",(0,i.jsx)(n.li,{children:"Close and re-open your WSL"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"install-python-on-macos",children:"Install Python on MacOS"}),"\n",(0,i.jsx)(n.p,{children:"Skip if using Windows."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Browse to ",(0,i.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"https://www.python.org/downloads/"})," to find the appropriate version of Python. If you are using Apple Silicon, be sure to download the appropriate version."]}),"\n",(0,i.jsx)(n.li,{children:"Install the downloaded version."}),"\n",(0,i.jsxs)(n.li,{children:["In a terminal window, type ",(0,i.jsx)(n.code,{children:"curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py"}),". This will download an install file for ",(0,i.jsx)(n.code,{children:"python3-pip"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Then run ",(0,i.jsx)(n.code,{children:"python3 get-pip.py"}),". Pip is now installed."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"install-docassemble-command-line",children:"Install docassemble command line"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["With your WSL still open, type: ",(0,i.jsx)(n.code,{children:"pip install docassemblecli"}),"\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/hUjb4s9.gif",alt:""})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We've now installed all the tools that allows us to write and collaborate on\ndocassemble files offline."}),"\n",(0,i.jsx)(n.p,{children:"Let's write a sample interview."}),"\n",(0,i.jsx)(n.h2,{id:"write-and-collaborate-on-your-docassemble-interview",children:"Write and collaborate on your docassemble interview"}),"\n",(0,i.jsxs)(n.p,{children:["This process assumes you will collaborate on your interview using version control like Git and GitHub. ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/development.html#versioncontrol",children:"The official documentation describes this flow"})]}),"\n",(0,i.jsx)(n.p,{children:"We will use a sample GitHub interview package I've setup as a starter for your project."}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s how:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open GitHub desktop"}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Clone a repository from the Internet..."})," select ",(0,i.jsx)(n.strong,{children:"URL"}),", in the text box enter: ",(0,i.jsx)(n.strong,{children:"deletosh/docassemble-premier"})," then click ",(0,i.jsx)(n.strong,{children:"Clone"}),".\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/tZEU7NF.gif",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["To edit the files look like, hit ",(0,i.jsx)(n.strong,{children:"Repository"})," > ",(0,i.jsx)(n.strong,{children:"Open in Visual Studio"}),"\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/OUTJCFu.gif",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["With our VS Code open, confirm we can run an interview on our computer.  Click through ",(0,i.jsx)(n.strong,{children:"docassemble"})," > ",(0,i.jsx)(n.strong,{children:"template"})," > ",(0,i.jsx)(n.strong,{children:"questions"})," > ",(0,i.jsx)(n.strong,{children:"data"})," then open ",(0,i.jsx)(n.strong,{children:"sample.yml"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/AlMV6Ce.gif",alt:""})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the terminal. Click ",(0,i.jsx)(n.strong,{children:"Terminal"})," > ",(0,i.jsx)(n.strong,{children:"\u200cNew Terminal"}),"\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/qmHkIBT.gif",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["Type ",(0,i.jsx)(n.code,{children:"docker-compose up -d"})," This starts the docassemble server locally\n(Note: this command needs a fast connection \u2014 it will take some time the first time you run it)\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/GF8SmxY.gif",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["Open your browser and go to ",(0,i.jsx)(n.code,{children:"http://localhost"}),". You might see this\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/VaFLb62.png",alt:""})]}),"\n",(0,i.jsx)(n.li,{children:"After a few minutes, you should see Docassemble running."}),"\n",(0,i.jsxs)(n.li,{children:["Sign in with the default password:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["username: ",(0,i.jsx)(n.a,{href:"mailto:admin@admin.com",children:"admin@admin.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["password: password\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/NMMUBUU.gif",alt:""})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"(the first time you login, it will have you change your password)"}),"\n",(0,i.jsx)(n.h3,{id:"run-your-first-offline-docassemble",children:"Run your first offline docassemble"}),"\n",(0,i.jsxs)(n.p,{children:["Our main setup is now complete. Let's test our first interview.\nFirst, go to Docassemble running on your system. In your browser, type ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"http://localhost",children:"http://localhost"})}),", in the navigation section, click ",(0,i.jsx)(n.strong,{children:"My Profile"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/Wq4KE1X.png",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["On the next page, go to the ",(0,i.jsx)(n.strong,{children:"Other settings"})," > ",(0,i.jsx)(n.strong,{children:"API keys"}),"\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/JpBul6N.png",alt:""})]}),"\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"\u200cAdd a New API Key"})," and give it any name. Then click ",(0,i.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Finally, copy the resulting key\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/FLTtjRn.gif",alt:""})]}),"\n",(0,i.jsx)(n.p,{children:"Now, go back into VS Code with the project we opened."}),"\n",(0,i.jsxs)(n.p,{children:["Type ",(0,i.jsx)(n.code,{children:"code ~/.docassemblecli"}),", this opens a new tab in VS Code."]}),"\n",(0,i.jsx)(n.p,{children:"Paste:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apikey: XXXXXXX\napiurl: http://localhost\nname: localhost\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.strong,{children:"XXXXXXX"})," with the API you created locally above\n![]]()"]}),"\n",(0,i.jsxs)(n.p,{children:["Paste the API code you created in the previous section in the ",(0,i.jsx)(n.strong,{children:"apikey"}),". Save the file or ",(0,i.jsx)(n.code,{children:"Ctrl + S"})]}),"\n",(0,i.jsxs)(n.p,{children:["Next, let's rename the ",(0,i.jsx)(n.strong,{children:"docassemble"})," > ",(0,i.jsx)(n.strong,{children:"template"})," file to\n",(0,i.jsx)(n.strong,{children:"docassemble-premier"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/GSOfFNJ.gif",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["With the ",(0,i.jsx)(n.strong,{children:"sample.yml"})," file open, type:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"dainstall --norestart --playground ../docassemble-premier"})}),"\n",(0,i.jsxs)(n.p,{children:["You should see ",(0,i.jsx)(n.strong,{children:"Installed"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can now go back to the browser at ",(0,i.jsx)(n.code,{children:"http://localhost"}),", then go to the ",(0,i.jsx)(n.strong,{children:"\u200cPlayground"})]}),"\n",(0,i.jsx)(n.p,{children:"Let's run the code."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/aaoZL9h.gif",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["When we make changes to our files on VS Code, we need to re-run the ",(0,i.jsx)(n.code,{children:"dainstall --norestart --playground ../docassemble-premier"})," in the terminal to see the changes reflected."]}),"\n",(0,i.jsx)(n.h2,{id:"points-to-have-on-mind-while-writing-interviews-locally",children:"Points to have on mind while writing interviews locally"}),"\n",(0,i.jsx)(n.p,{children:"here are some things you need to keep in mind with developing Docassemble\nlocally:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Every docassemble project is self-contained and you need to re-start Docker in each project."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When you start a new project, you need to add and re-create your API keys.  ",(0,i.jsx)(n.strong,{children:"You cannot use the API key you've added before"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var i=s(7294);const l={},o=i.createContext(l);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);