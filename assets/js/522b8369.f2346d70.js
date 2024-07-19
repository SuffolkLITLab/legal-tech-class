"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[6178],{3775:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=s(4848),t=s(8453);const r={slug:"maintaining-docassemble",title:"Securing and maintaining your server",sidebar_label:"Securing and maintaining your server"},i=void 0,o={id:"practical-guide-docassemble/updates-and-maintenance",title:"Securing and maintaining your server",description:"Securing Docassemble",source:"@site/docs/practical-guide-docassemble/updates-and-maintenance.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/maintaining-docassemble",permalink:"/legal-tech-class/docs/practical-guide-docassemble/maintaining-docassemble",draft:!1,unlisted:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/updates-and-maintenance.md",tags:[],version:"current",frontMatter:{slug:"maintaining-docassemble",title:"Securing and maintaining your server",sidebar_label:"Securing and maintaining your server"},sidebar:"someSidebar",previous:{title:"Installing a docassemble app on your production server",permalink:"/legal-tech-class/docs/practical-guide-docassemble/installing-production-app"},next:{title:"Overview of AI and Law\n",permalink:"/legal-tech-class/docs/ai-law/ai-law-overview"}},l={},c=[{value:"Securing Docassemble",id:"securing-docassemble",level:2},{value:"Securing the underlying operating system",id:"securing-the-underlying-operating-system",level:2},{value:"Upgrading to a new version of Docassemble",id:"upgrading-to-a-new-version-of-docassemble",level:2},{value:"When to update",id:"when-to-update",level:3},{value:"Updates to the Docassemble frontend",id:"updates-to-the-docassemble-frontend",level:3},{value:"Updates to the Docassemble container",id:"updates-to-the-docassemble-container",level:3},{value:"Updating individual packages",id:"updating-individual-packages",level:2},{value:"Updating the AssemblyLine packages",id:"updating-the-assemblyline-packages",level:3},{value:"PyPi vs GitHub",id:"pypi-vs-github",level:4},{value:"Docassemble server maintenance checklist",id:"docassemble-server-maintenance-checklist",level:2},{value:"AWS Lightsail instance",id:"aws-lightsail-instance",level:3},{value:"AWS S3 bucket",id:"aws-s3-bucket",level:3},{value:"Docker container",id:"docker-container",level:3},{value:"Docassemble web app",id:"docassemble-web-app",level:3},{value:"Packages",id:"packages",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"securing-docassemble",children:"Securing Docassemble"}),"\n",(0,a.jsx)(n.p,{children:"Docassemble has not had any major security incidents in its history. But the\r\nhigher profile your deployment, the more likely you are to have an individual\r\nattack. Such attacks are hard to entirely prevent. The best way to keep\r\nDocassemble secure is by upgrading on a regular basis."}),"\n",(0,a.jsx)(n.p,{children:"In addition:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Consider using ",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/config.html#mfa",children:"2-factor\r\nauthentication"})," on your\r\nproduction server"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/config.html#enable%20playground",children:"Turn off the\r\nPlayground"})," on\r\nyour production server"]}),"\n",(0,a.jsx)(n.li,{children:"Limit the number of developers and administrators on your production server"}),"\n",(0,a.jsxs)(n.li,{children:["Use ",(0,a.jsx)(n.a,{href:"https://securecode.wiki/docs/lang/python/",children:"input sanitization"})," when\r\ncalling a remote API or making a database query that uses user input to\r\ngenerate a query or insert a new row"]}),"\n",(0,a.jsxs)(n.li,{children:["When you have a file upload input, limit the size and type of uploads to\r\nprevent unknown exploits with the\r\n",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#file",children:(0,a.jsx)(n.code,{children:"accept"})})," modifier and the\r\n",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/config.html#maximum%20content%20length",children:(0,a.jsx)(n.code,{children:"maximum content length"})}),"\r\nconfiguration option."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can review ",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/security.html",children:"Docassemble's security policy and\r\ndocumentation"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Instructions on applying regular updates are below."}),"\n",(0,a.jsx)(n.h2,{id:"securing-the-underlying-operating-system",children:"Securing the underlying operating system"}),"\n",(0,a.jsx)(n.p,{children:"By default, a new Lightsail container with Ubuntu will check for security\r\nupdates on a nightly basis and install them automatically. Occasionally,\r\nthese updates may cause a problem with your container starting."}),"\n",(0,a.jsx)(n.p,{children:"SSHing into the container and doing a manual docker start generally resolves\r\nthese problems."}),"\n",(0,a.jsx)(n.p,{children:"The alternative, manual installation of OS updates, is usually worse for most\r\npeople who run a single small Docassemble server. Just set up automated alerts\r\nthat tell you when the website is not available."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://uptimerobot.com/",children:"UpTimeRobot"})," is one free option that works well for\r\nautomated monitoring and alerts."]}),"\n",(0,a.jsxs)(n.p,{children:["If you do not have automatic updates enabled, you can install the\r\n",(0,a.jsx)(n.a,{href:"https://wiki.debian.org/UnattendedUpgrades",children:"unattended-upgrades"})," package manually\r\nusing your host operating system's package manager."]}),"\n",(0,a.jsx)(n.h2,{id:"upgrading-to-a-new-version-of-docassemble",children:"Upgrading to a new version of Docassemble"}),"\n",(0,a.jsx)(n.p,{children:"Docassemble has two parts:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["a ",(0,a.jsx)(n.a,{href:"/legal-tech-class/docs/python",children:"Python"})," web application, built around the ",(0,a.jsx)(n.a,{href:"https://flask.palletsprojects.com/en/2.2.x/",children:"Flask\r\nframework"})]}),"\n",(0,a.jsxs)(n.li,{children:["An Ubuntu docker image and a series of Linux applications that the web\r\nfrontend communicates with, including","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A specific version of ",(0,a.jsx)(n.a,{href:"/legal-tech-class/docs/python",children:"Python"})," (3.10 as of this writing)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.libreoffice.org/discover/writer",children:"LibreOffice"})," for converting\r\nWord documents to PDF"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.latex-project.org/",children:"LaTeX"})," for assembling\r\n",(0,a.jsx)(n.a,{href:"/legal-tech-class/docs/markdown",children:"Markdown"})," files"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/",children:"PDFtk"})," for\r\nmanipulating PDF files and templates"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://letsencrypt.org/",children:"LetsEncrypt"})," for SSL certificate management"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.nginx.com/",children:"Nginx"})," as a web server"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Docassemble is updated regularly. As of this writing, releases come out almost\r\nevery few weeks. Most updates affect only the frontend, not the Ubuntu operating\r\nsystem or its installed applications."}),"\n",(0,a.jsx)(n.h3,{id:"when-to-update",children:"When to update"}),"\n",(0,a.jsx)(n.p,{children:"It's a good idea to stay up to date with the latest version of Docassemble. But\r\nsometimes the very latest release can have bugs. It's best to test out the\r\nrelease on a development or staging server before you install it on your\r\nproduction server."}),"\n",(0,a.jsx)(n.p,{children:"If you get too far behind from the latest version, there's always a chance that\r\nyou will run into a bug that only occurs because your version was too far out of\r\ndate. A good cadence is upgrading about once a month."}),"\n",(0,a.jsxs)(n.p,{children:["Jonathan Pyle, the Docassemble author, is generally very responsive to bug\r\nfixes, as well as helping authors install a fixed version. The best way to get\r\nhelp with an upgrade gone wrong is to use the Docassemble\r\n",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/support.html#tocAnchor-1-1",children:"Slack"})," channel."]}),"\n",(0,a.jsx)(n.p,{children:"Upgrade the Docassemble frontend every few weeks. Upgrade the container every\r\nsix months or so, unless you need a feature right away. But wait a week or two\r\nafter the new container is released to make sure there are no lingering bugs."}),"\n",(0,a.jsx)(n.h3,{id:"updates-to-the-docassemble-frontend",children:"Updates to the Docassemble frontend"}),"\n",(0,a.jsxs)(n.p,{children:["You can update the Python packages and Flask frontend by using the\r\n",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/admin.html#upgrade",children:'"Upgrade"'})," button in the\r\npackage management menu."]}),"\n",(0,a.jsx)(n.p,{children:"This is safe to do on a monthly basis, but keep in mind that you should test\r\nthe upgraded version of Docassemble on a development or staging server before\r\ninstalling on your production server."}),"\n",(0,a.jsx)(n.h3,{id:"updates-to-the-docassemble-container",children:"Updates to the Docassemble container"}),"\n",(0,a.jsx)(n.p,{children:"Updates to the base Docassemble OS image (and Python, LibreOffice, etc) are\r\ngenerally optional. They come with new features that aren't possible to\r\nprovide by updating just the frontend. But if you do not want or need\r\nthose new features, you can wait to upgrade."}),"\n",(0,a.jsx)(n.p,{children:"A good cadence for updating the container is about every 6 months, unless\r\nyou see a feature that you want that requires an earlier update. You may\r\nwant to wait for a few minor releases (which might fix critical bugs)\r\nbefore you upgrade your container. The newest container upgrade is the most\r\nlikely to have a few bugs to work out."}),"\n",(0,a.jsxs)(n.p,{children:["The Docassemble ",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/changelog.html",children:"Changelog"}),'\r\nannounces when there is a new feature that requires a container upgrade.\r\nJust searching on the page for the word "container" should tell you.']}),"\n",(0,a.jsx)(n.p,{children:"Whenever you upgrade the Docassemble container, you have a small chance of\r\nlosing data, because the upgrade process involves starting an entirely new\r\nDocker container and copying the information into it, either from a shared\r\nDocker volume or from S3. If the Docker container did not properly shut down,\r\nthe data that you want to migrate might not be backed up and the new container\r\nmay not have the information."}),"\n",(0,a.jsx)(n.p,{children:"Here is the upgrade process:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"SSH into the virtual machine or server that hosts your Docassemble docker container"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the virtual machine's command line, copy and run the following commands:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker stop -t 600 $(docker ps -a -q)\r\ndocker pull jhpyle/docassemble-os\r\ndocker pull jhpyle/docassemble\r\ndocker run -d -p 443:443 -p 80:80 --restart always --env-file env.list jhpyle/docassemble\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"After the container has safely started up, login to the web application to make\r\nsure all data is still present."}),"\n",(0,a.jsxs)(n.li,{children:["Now, you can clean up all ",(0,a.jsx)(n.strong,{children:"stopped"})," containers\r\n(i.e., the old container you are no longer using) by running the following\r\nDocker command:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker system prune\n"})}),"\n",(0,a.jsx)(n.h2,{id:"updating-individual-packages",children:"Updating individual packages"}),"\n",(0,a.jsxs)(n.p,{children:["You can upgrade individual Python packages and Docassemble interviews on your\r\nserver by ",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/packages.html#updating",children:"visiting the Package Management\r\npage"}),'. and clicking the\r\n"update" button next to the package you want to update.']}),"\n",(0,a.jsx)(n.p,{children:'Generally, the "upgrade" button at the top of the Package Management page\r\nwill upgrade all of the key packages that you need, except for the ones that\r\nrepresent individual interviews you authored.'}),"\n",(0,a.jsx)(n.p,{children:"The exception is if you installed a package or series of packages that is\r\nmaintained by someone other than the Docassemble author, such as the\r\nAssembly Line packages."}),"\n",(0,a.jsx)(n.h3,{id:"updating-the-assemblyline-packages",children:"Updating the AssemblyLine packages"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/",children:"Assembly\r\nLine"})," project's\r\nframework must be updated manually, whenever there is a new feature that you\r\nwant."]}),"\n",(0,a.jsx)(n.p,{children:"The two packages that generally require such updates are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"docassemble.AssemblyLine"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"docassemble.ALToolbox"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'It\'s a good idea to stay on the "latest" version of the Assembly Line framework.\r\nNew features that can cause disruption are usually put behind a new configuration\r\noption.'}),"\n",(0,a.jsxs)(n.p,{children:["You can review the latest features of the Assembly Line on its\r\n",(0,a.jsx)(n.a,{href:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/CHANGELOG.md",children:"Changelog"}),",\r\nas well as the changelog for the\r\n",(0,a.jsx)(n.a,{href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/releases",children:"ALToolbox"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"pypi-vs-github",children:"PyPi vs GitHub"}),"\n",(0,a.jsx)(n.p,{children:'If you installed the AssemblyLine framework from GitHub, when you click the\r\n"upgrade" button, you will get individual minor and major updates that have not\r\nyet been "tagged" with a new version number. While any code on the GitHub server\r\nwill have undergone a code review process and tests, the "tagged" releases are\r\nthe ones that are intended for wider use and installation on production servers.'}),"\n",(0,a.jsx)(n.p,{children:"Therefore, we recommend that most authors install AssemblyLine from PyPi instead\r\nof directly using the GitHub URL."}),"\n",(0,a.jsx)(n.h2,{id:"docassemble-server-maintenance-checklist",children:"Docassemble server maintenance checklist"}),"\n",(0,a.jsxs)(n.p,{children:["On August 24, 2023, ILAO gave a presentation on Maintaining your Docassemble\r\nserver as part of a ",(0,a.jsx)(n.a,{href:"https://www.lsc.gov/grants/technology-initiative-grant-program/tig-program-description",children:"Technology Initiative Grant funded by the Legal Services\r\nCorporation"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Watch the video or\r\n",(0,a.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1eJf6x1SwAx4BcvC2OrVUNmg99G5zoAP1TX4ZGnvfkwY/edit?usp=sharing",children:"download the slides"})]}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/LxmxhO3dDPo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write;\r\nencrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,a.jsx)(n.p,{children:"Much of what was covered in the presentation is found elsewhere in this and other documentation.\r\nWhat follows is a condensed format to serve as a checklist."}),"\n",(0,a.jsx)(n.h3,{id:"aws-lightsail-instance",children:"AWS Lightsail instance"}),"\n",(0,a.jsx)(n.p,{children:"This server instance runs Linux, typically Ubuntu. It is sometimes called the host. Docassemble\r\nsoftware runs on it."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"How to monitor - Log into AWS console and see if it is running. Set up CPU utilization alerts\r\nto be emailed if there's a performance issue. A server reboot through AWS may be required if\r\nthe instance freezes."}),"\n",(0,a.jsxs)(n.li,{children:["How to update","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Important: Before you update or restart, we recommend that you 1) Stop the Docker container using\r\n",(0,a.jsx)(n.code,{children:"docker stop -t 600 $(docker ps -a -q)"}),", and 2) Have a recent or make a backup of the docassemble\r\ndatabase and redis.rdb files. See below on how to access and backup these files on AWS S3."]}),"\n",(0,a.jsxs)(n.li,{children:['The typical setup is configured to automatically download and install security updates. It still\r\nrequires a manual download of other updates and manual reboots. When you connect to the Lighsail\r\ninstance via SSH, you may see a message that a number of "',(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"updates can be applied immediately."})}),'"\r\nYou can install Ubuntu updates with these commands:']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\r\nsudo apt-get upgrade\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We recommend that you restart Ubuntu after applying updates. The ",(0,a.jsx)(n.code,{children:"sudo shutdown -r now"})," command will\r\nrestart Ubuntu. The Docker container should automatically restart if it was run using the ",(0,a.jsx)(n.code,{children:"--restart always"}),"\r\nparameter."]}),"\n",(0,a.jsxs)(n.p,{children:['When you connect to the Lighsail instance via SSH, you may see a "',(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"System restart required"})}),'" message.\r\nYou can restart the instance with this command:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo shutdown -r now\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['When to update - You can update Ubuntu every month or so. Restart it as needed or more frequently when\r\nthe "',(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"System restart required"})}),'" message comes up. This could happen if there is an update required\r\nfor a security vulnerability.',"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Beyond periodic updates, the version of Ubuntu software may need an upgrade. This is like going from\r\nWindows 10 to 11, or macOS Ventura to Sonoma. Every 2 years, there's a new Ubuntu Long Term Support\r\n(LTS) version. See ",(0,a.jsx)(n.a,{href:"https://projects.suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/rebuild-lightsail-instance",children:"Rebuilding your AWS Lightsail instance"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"What to back up - Keep a copy of the latest env.list file in case a rebuild is required."}),"\n",(0,a.jsx)(n.li,{children:"Wnen to back up - After a backup copy of env.list is made, a new backup is needed only if the contents\r\nof that file changes."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"aws-s3-bucket",children:"AWS S3 bucket"}),"\n",(0,a.jsx)(n.p,{children:"This is where the Docassemble database lives. Separating the Docassemble data from the software makes it\r\neasier to maintain and rebuild if needed."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"How to monitor - Log into the AWS console. Go to S3. You should see files within each bucket."}),"\n",(0,a.jsxs)(n.li,{children:["What to back up - The most important files to back up are:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"configuration.yml"}),"\n",(0,a.jsx)(n.li,{children:"redis.rdb"}),"\n",(0,a.jsx)(n.li,{children:"docassemble (inside postgres folder)"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"When to back up - Every few months or as often as you want to have a backup you could rebuild from. By\r\ndefault, Docassemble makes a daily backup of these and other files. Each daily backup is stored in the /backups\r\nfolder."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["It is important to make backups of the docassemble database and redis.rdb files at about the same time. If these\r\nfiles are out of sync files when restoring, user accounts and data sync errors may result. See the Docassemble\r\ndocumentation to learn more about ",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/docker.html#recovery",children:"Recovery from backup files"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"docker-container",children:"Docker container"}),"\n",(0,a.jsx)(n.p,{children:"This virtual machine is installed on the Lightsail instance and runs its own version of Linux. The Docassemble\r\nsoftware runs within. Using a virtual machine adds to resiliency, though it also requires its own maintenance."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["How to monitor - Use ",(0,a.jsx)(n.code,{children:"docker ps"})," command to make sure it is running."]}),"\n",(0,a.jsxs)(n.li,{children:["How to update - See\r\n",(0,a.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/maintaining-docassemble#updates-to-the-docassemble-container",children:"Updates to the Docassemble container"}),".\r\nYou will use these commands: ",(0,a.jsx)(n.code,{children:"docker stop, pull, run,"})," and ",(0,a.jsx)(n.code,{children:"prune"}),".","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you ",(0,a.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation/#increase-nginx-timeouts-to-5-minutes",children:"updated the nginx timeout to 5 minutes"}),"\r\nearlier, you will need to redo it."]}),"\n",(0,a.jsx)(n.li,{children:"This will pull the latest version of each package unless specific version of a package was pinned via PyPI."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["When to update - If the ",(0,a.jsx)(n.a,{href:"https://docassemble.org/docs/changelog.html",children:"Docassemble Change Log"}),' has an update\r\nthat says "',(0,a.jsx)(n.strong,{children:"System upgrade required"}),'," rebuild the Docker container after updating the Docassemble web\r\napp. Otherwise, about every 6 months.']}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"docassemble-web-app",children:"Docassemble web app"}),"\n",(0,a.jsx)(n.p,{children:"This is the Docassemble software users and developers most often interact with through interviews and the\r\nPlayground."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["How to monitor - If you can get to the Playground, My Interviews, or an individual program, then it's working.\r\n",(0,a.jsx)(n.a,{href:"https://uptimerobot.com/",children:"UptimeRobot"})," can be used to receive server up/down notifications by email."]}),"\n",(0,a.jsxs)(n.li,{children:['How to update - Log in as an administrator. Go to Package Management. Click the "Upgrade" button. See\r\n',(0,a.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/maintaining-docassemble#updates-to-the-docassemble-frontend",children:"Updates to the Docassemble frontend"})]}),"\n",(0,a.jsx)(n.li,{children:"When to update - Every few weeks or as needed if there is a critical bug fix or a desired new feature."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"packages",children:"Packages"}),"\n",(0,a.jsx)(n.p,{children:"These are the program code, frameworks, and utilities that run on the Docassemble platform. The Assembly Line package\r\nis an example used by many programs."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["How to monitor - Monitors like ",(0,a.jsx)(n.a,{href:"https://httpstatus.io/",children:"httpstatus.io"})," or homegrown programs can check if individual\r\nprograms are running. Note: These tools just check whether individual interview pages are reachable. Learn about using\r\n",(0,a.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/alkiln/",children:"ALKiln"})," to do automated\r\nstart-to-finish testing and monitoring."]}),"\n",(0,a.jsxs)(n.li,{children:["How to update - You can\r\n",(0,a.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/alkiln/",children:"update Assembly Line packages individually"}),",\r\nor you can use the ",(0,a.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/alkiln/",children:"ALDashboard"}),".\r\nYou can also update individual packages on the Package Management screen."]}),"\n",(0,a.jsx)(n.li,{children:"When to update - Every few weeks or as needed if there is a critical bug fix or a desired new feature."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var a=s(6540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);