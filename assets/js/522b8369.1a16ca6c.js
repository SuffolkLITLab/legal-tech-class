"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[5168],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5205:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=["components"],i={slug:"maintaining-docassemble",title:"Securing and maintaining your server",sidebar_label:"Securing and maintaining your server"},l=void 0,u={unversionedId:"practical-guide-docassemble/updates-and-maintenance",id:"practical-guide-docassemble/updates-and-maintenance",title:"Securing and maintaining your server",description:"Securing Docassemble",source:"@site/docs/practical-guide-docassemble/updates-and-maintenance.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/maintaining-docassemble",permalink:"/legal-tech-class/docs/practical-guide-docassemble/maintaining-docassemble",draft:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/updates-and-maintenance.md",tags:[],version:"current",frontMatter:{slug:"maintaining-docassemble",title:"Securing and maintaining your server",sidebar_label:"Securing and maintaining your server"},sidebar:"someSidebar",previous:{title:"Installing a docassemble app on your production server",permalink:"/legal-tech-class/docs/practical-guide-docassemble/installing-production-app"},next:{title:"Overview of Classes",permalink:"/legal-tech-class/docs/classes/class-overview"}},c={},p=[{value:"Securing Docassemble",id:"securing-docassemble",level:2},{value:"Securing the underlying operating system",id:"securing-the-underlying-operating-system",level:2},{value:"Upgrading to a new version of Docassemble",id:"upgrading-to-a-new-version-of-docassemble",level:2},{value:"When to update",id:"when-to-update",level:3},{value:"Updates to the Docassemble frontend",id:"updates-to-the-docassemble-frontend",level:3},{value:"Updates to the Docassemble container",id:"updates-to-the-docassemble-container",level:3},{value:"Updating individual packages",id:"updating-individual-packages",level:2},{value:"Updating the AssemblyLine packages",id:"updating-the-assemblyline-packages",level:3},{value:"PyPi vs GitHub",id:"pypi-vs-github",level:4}],d={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"securing-docassemble"},"Securing Docassemble"),(0,r.kt)("p",null,"Docassemble has not had any major security incidents in its history. But the\nhigher profile your deployment, the more likely you are to have an individual\nattack. Such attacks are hard to entirely prevent. The best way to keep\nDocassemble secure is by upgrading on a regular basis."),(0,r.kt)("p",null,"In addition:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consider using ",(0,r.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/config.html#mfa"},"2-factor\nauthentication")," on your\nproduction server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/config.html#enable%20playground"},"Turn off the\nPlayground")," on\nyour production server"),(0,r.kt)("li",{parentName:"ul"},"Limit the number of developers and administrators on your production server"),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://securecode.wiki/docs/lang/python/"},"input sanitization")," when\ncalling a remote API or making a database query that uses user input to\ngenerate a query or insert a new row"),(0,r.kt)("li",{parentName:"ul"},"When you have a file upload input, limit the size and type of uploads to\nprevent unknown exploits with the\n",(0,r.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/fields.html#file"},(0,r.kt)("inlineCode",{parentName:"a"},"accept"))," modifier and the\n",(0,r.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/config.html#maximum%20content%20length"},(0,r.kt)("inlineCode",{parentName:"a"},"maximum content\nlength")),"\nconfiguration option.")),(0,r.kt)("p",null,"You can review ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/security.html"},"Docassemble's security policy and\ndocumentation"),"."),(0,r.kt)("p",null,"Instructions on applying regular updates are below."),(0,r.kt)("h2",{id:"securing-the-underlying-operating-system"},"Securing the underlying operating system"),(0,r.kt)("p",null,"By default, a new Lightsail container with Ubuntu will check for security\nupdates on a nightly basis and install them automatically. Occasionally,\nthese updates may cause a problem with your container starting."),(0,r.kt)("p",null,"SSHing into the container and doing a manual docker start generally resolves\nthese problems."),(0,r.kt)("p",null,"The alternative, manual installation of OS updates, is usually worse for most\npeople who run a single small Docassemble server. Just set up automated alerts\nthat tell you when the website is not available."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://uptimerobot.com/"},"UpTimeRobot")," is one free option that works well for\nautomated monitoring and alerts."),(0,r.kt)("p",null,"If you do not have automatic updates enabled, you can install the\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.debian.org/UnattendedUpgrades"},"unattended-upgrades")," package manually\nusing your host operating system's package manager."),(0,r.kt)("h2",{id:"upgrading-to-a-new-version-of-docassemble"},"Upgrading to a new version of Docassemble"),(0,r.kt)("p",null,"Docassemble has two parts: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a ",(0,r.kt)("a",{parentName:"li",href:"/legal-tech-class/docs/python"},"Python")," web application, built around the ",(0,r.kt)("a",{parentName:"li",href:"https://flask.palletsprojects.com/en/2.2.x/"},"Flask\nframework")),(0,r.kt)("li",{parentName:"ol"},"An Ubuntu docker image and a series of Linux applications that the web\nfrontend communicates with, including",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A specific version of ",(0,r.kt)("a",{parentName:"li",href:"/legal-tech-class/docs/python"},"Python")," (3.10 as of this writing)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.libreoffice.org/discover/writer"},"LibreOffice")," for converting\nWord documents to PDF"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.latex-project.org/"},"LaTeX")," for assembling\n",(0,r.kt)("a",{parentName:"li",href:"/legal-tech-class/docs/markdown"},"Markdown")," files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/"},"PDFtk")," for\nmanipulating PDF files and templates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://letsencrypt.org/"},"LetsEncrypt")," for SSL certificate management"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nginx.com/"},"Nginx")," as a web server")))),(0,r.kt)("p",null,"Docassemble is updated regularly. As of this writing, releases come out almost\nevery few weeks. Most updates affect only the frontend, not the Ubuntu operating\nsystem or its installed applications."),(0,r.kt)("h3",{id:"when-to-update"},"When to update"),(0,r.kt)("p",null,"It's a good idea to stay up to date with the latest version of Docassemble. But\nsometimes the very latest release can have bugs. It's best to test out the\nrelease on a development or staging server before you install it on your\nproduction server."),(0,r.kt)("p",null,"If you get too far behind from the latest version, there's always a chance that\nyou will run into a bug that only occurs because your version was too far out of\ndate. A good cadence is upgrading about once a month."),(0,r.kt)("p",null,"Jonathan Pyle, the Docassemble author, is generally very responsive to bug\nfixes, as well as helping authors install a fixed version. The best way to get\nhelp with an upgrade gone wrong is to use the Docassemble\n",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/support.html#tocAnchor-1-1"},"Slack")," channel."),(0,r.kt)("p",null,"Upgrade the Docassemble frontend every few weeks. Upgrade the container every\nsix months or so, unless you need a feature right away. But wait a week or two\nafter the new container is released to make sure there are no lingering bugs. "),(0,r.kt)("h3",{id:"updates-to-the-docassemble-frontend"},"Updates to the Docassemble frontend"),(0,r.kt)("p",null,"You can update the Python packages and Flask frontend by using the\n",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/admin.html#upgrade"},'"Upgrade"')," button in the\npackage management menu."),(0,r.kt)("p",null,"This is safe to do on a monthly basis, but keep in mind that you should test\nthe upgraded version of Docassemble on a development or staging server before\ninstalling on your production server."),(0,r.kt)("h3",{id:"updates-to-the-docassemble-container"},"Updates to the Docassemble container"),(0,r.kt)("p",null,"Updates to the base Docassemble OS image (and Python, LibreOffice, etc) are\ngenerally optional. They come with new features that aren't possible to\nprovide by updating just the frontend. But if you do not want or need\nthose new features, you can wait to upgrade."),(0,r.kt)("p",null,"A good cadence for updating the container is about every 6 months, unless\nyou see a feature that you want that requires an earlier update. You may\nwant to wait for a few minor releases (which might fix critical bugs)\nbefore you upgrade your container. The newest container upgrade is the most\nlikely to have a few bugs to work out."),(0,r.kt)("p",null,"The Docassemble ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/changelog.html"},"Changelog"),'\nannounces when there is a new feature that requires a container upgrade.\nJust searching on the page for the word "container" should tell you.'),(0,r.kt)("p",null,"Whenever you upgrade the Docassemble container, you have a small chance of\nlosing data, because the upgrade process involves starting an entirely new\nDocker container and copying the information into it, either from a shared\nDocker volume or from S3. If the Docker container did not properly shut down,\nthe data that you want to migrate might not be backed up and the new container\nmay not have the information."),(0,r.kt)("p",null,"Here is the upgrade process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SSH into the virtual machine or server that hosts your Docassemble docker container")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the virtual machine's command line, copy and run the following commands:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop -t 600 $(docker ps -a -q)\ndocker pull jhpyle/docassemble-os\ndocker pull jhpyle/docassemble\ndocker run -d -p 443:443 -p 80:80 --restart always --env-file env.list jhpyle/docassemble\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"After the container has safely started up, login to the web application to make\nsure all data is still present. "),(0,r.kt)("li",{parentName:"ol"},"Now, you can clean up all ",(0,r.kt)("strong",{parentName:"li"},"stopped")," containers\n(i.e., the old container you are no longer using) by running the following\nDocker command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker system prune\n")),(0,r.kt)("h2",{id:"updating-individual-packages"},"Updating individual packages"),(0,r.kt)("p",null,"You can upgrade individual Python packages and Docassemble interviews on your\nserver by ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/packages.html#updating"},"visiting the Package Management\npage"),'. and clicking the\n"update" button next to the package you want to update.'),(0,r.kt)("p",null,'Generally, the "upgrade" button at the top of the Package Management page\nwill upgrade all of the key packages that you need, except for the ones that\nrepresent individual interviews you authored.'),(0,r.kt)("p",null,"The exception is if you installed a package or series of packages that is\nmaintained by someone other than the Docassemble author, such as the\nAssembly Line packages."),(0,r.kt)("h3",{id:"updating-the-assemblyline-packages"},"Updating the AssemblyLine packages"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/"},"Assembly\nLine")," project's\nframework must be updated manually, whenever there is a new feature that you\nwant. "),(0,r.kt)("p",null,"The two packages that generally require such updates are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docassemble.AssemblyLine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docassemble.ALToolbox"))),(0,r.kt)("p",null,'It\'s a good idea to stay on the "latest" version of the Assembly Line framework.\nNew features that can cause disruption are usually put behind a new configuration\noption.'),(0,r.kt)("p",null,"You can review the latest features of the Assembly Line on its\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/CHANGELOG.md"},"Changelog"),",\nas well as the changelog for the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-ALToolbox/releases"},"ALToolbox"),"."),(0,r.kt)("h4",{id:"pypi-vs-github"},"PyPi vs GitHub"),(0,r.kt)("p",null,'If you installed the AssemblyLine framework from GitHub, when you click the\n"upgrade" button, you will get individual minor and major updates that have not\nyet been "tagged" with a new version number. While any code on the GitHub server\nwill have undergone a code review process and tests, the "tagged" releases are\nthe ones that are intended for wider use and installation on production servers.'),(0,r.kt)("p",null,"Therefore, we recommend that most authors install AssemblyLine from PyPi instead\nof directly using the GitHub URL."))}h.isMDXComponent=!0}}]);