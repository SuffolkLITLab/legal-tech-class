"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[6914],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8186:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=["components"],l={slug:"setup-server",title:"Installing a docassemble server",sidebar_label:"Installing a docassemble server"},i="What this guide is",c={unversionedId:"practical-guide-docassemble/setup-server",id:"practical-guide-docassemble/setup-server",title:"Installing a docassemble server",description:"There are a lot of [ways you can install",source:"@site/docs/practical-guide-docassemble/setup-server.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/setup-server",permalink:"/legal-tech-class/docs/practical-guide-docassemble/setup-server",draft:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/setup-server.md",tags:[],version:"current",frontMatter:{slug:"setup-server",title:"Installing a docassemble server",sidebar_label:"Installing a docassemble server"},sidebar:"someSidebar",previous:{title:"Applying custom themes",permalink:"/legal-tech-class/docs/practical-guide-docassemble/theming-docassemble"},next:{title:"Docassemble with Docker and VS Code",permalink:"/legal-tech-class/docs/practical-guide-docassemble/run-docassemble-docker-vscode"}},u={},p=[{value:"Create your AWS account",id:"create-your-aws-account",level:2},{value:"Choose a DNS name",id:"choose-a-dns-name",level:2},{value:"Create your Lightsail server",id:"create-your-lightsail-server",level:2},{value:"Create a static IPv4 address",id:"create-a-static-ipv4-address",level:2},{value:"Enable HTTPS traffic on your Lightsail server",id:"enable-https-traffic-on-your-lightsail-server",level:2},{value:"Create a DNS entry with the new DNS name you chose",id:"create-a-dns-entry-with-the-new-dns-name-you-chose",level:2},{value:"Create an S3 Bucket to match your new DNS name",id:"create-an-s3-bucket-to-match-your-new-dns-name",level:2},{value:"Create an IAM user that has appropriate access to your S3 bucket",id:"create-an-iam-user-that-has-appropriate-access-to-your-s3-bucket",level:2},{value:"Finish installation on your Lightsail instance over SSH",id:"finish-installation-on-your-lightsail-instance-over-ssh",level:2},{value:"Connect with SSH",id:"connect-with-ssh",level:3},{value:"Update the server",id:"update-the-server",level:3},{value:"Install docker",id:"install-docker",level:3},{value:"Add your user account to the Docker group",id:"add-your-user-account-to-the-docker-group",level:3},{value:"Setup a Linux swap file",id:"setup-a-linux-swap-file",level:3},{value:"Create an env.list file",id:"create-an-envlist-file",level:3},{value:"Start Docker",id:"start-docker",level:2},{value:"If you are running Docker on a server you own instead of AWS",id:"if-you-are-running-docker-on-a-server-you-own-instead-of-aws",level:3},{value:"Further reading",id:"further-reading",level:2}],d={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-this-guide-is"},"What this guide is"),(0,r.kt)("p",null,"There are a lot of ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/installation.html"},"ways you can install\nDocassemble"),". This is one quick\npath that will help you get started quickly without having to make your own\nchoices."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Provision a full virtual machine in ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lightsail/"},"AWS\nLightsail"),"."),(0,r.kt)("li",{parentName:"ol"},"Wire up the file storage and backups to ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"AWS S3"),"."),(0,r.kt)("li",{parentName:"ol"},"Use an env.list file that contains all of the startup configuration that I\nkeep a local copy of.")),(0,r.kt)("p",null,"Why? This gets you:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A cheap, easy to use, always on server. Provisioning the same server for\nfull-time usage on EC2 or Azure would be at least 2 times the price."),(0,r.kt)("li",{parentName:"ol"},"The safety of all configuration and databases, files and backups being stored\nand served from S3."),(0,r.kt)("li",{parentName:"ol"},"The ability to easily destroy and restore a new copy of your server.")),(0,r.kt)("p",null,"What you miss out on:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Automated load balancing and auto scaling that comes with EC-2."),(0,r.kt)("li",{parentName:"ol"},"Clustering and managed docker that you get with docker swarm or Lightsail containers.")),(0,r.kt)("p",null,"Things that I don't do but should consider:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using docker compose instead of just an env.list")),(0,r.kt)("h1",{id:"setting-up-docassemble-start-to-finish"},"Setting up Docassemble, start to finish"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JXdOCLMFPHc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"create-your-aws-account"},"Create your AWS account"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/"},"Follow Amazon's\ninstructions")),(0,r.kt)("h2",{id:"choose-a-dns-name"},"Choose a DNS name"),(0,r.kt)("p",null,"If you want to be able to reach your server over the Internet, you must add a\nDNS entry for it. You can use a ",(0,r.kt)("em",{parentName:"p"},"subdomain")," of an existing domain name you\ncontrol."),(0,r.kt)("p",null,"I recommend using something short, like ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.example.com")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com"),"\nis a domain name you already own.) If you don't own a domain name yet, it may be\nsimplest to purchase and manage it through ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html"},"AWS Route\n53"),"."),(0,r.kt)("p",null,"I still recommend using a ",(0,r.kt)("em",{parentName:"p"},"subdomain")," of the new domain you purchase, rather\nthan pointing docassemble directly to a top level domain."),(0,r.kt)("h2",{id:"create-your-lightsail-server"},"Create your Lightsail server"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/how-to-create-amazon-lightsail-instance-virtual-private-server-vps"},"Lightsail\ninstance")),(0,r.kt)("p",null,"Choose Ubuntu Server (the newest edition) as the operating system type."),(0,r.kt)("p",null,"Choose the 4 GB instance as the size, unless you have a very good reason to choose\notherwise. Docassemble can run with fewer than 4 GB of RAM if you set up a swap\nfile. You will probably not need more than 4 GB of RAM until you reach a very\nhigh traffic level or have a lot of developers working on your server at the same\ntime."),(0,r.kt)("p",null,"Choose an AWS region that matches your needs. E.g., one that is geographically\nclose to your users or that is not subject to US jurisdiction if required by\ndata privacy laws in your country."),(0,r.kt)("p",null,"Label the new Lighsail instance with the DNS name you chose earlier. For\nexample: ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.example.com"),"."),(0,r.kt)("p",null,"Optionally: take note of the IPv6 address that AWS automatically assigns to your\nnew Lightsail instance."),(0,r.kt)("h2",{id:"create-a-static-ipv4-address"},"Create a static IPv4 address"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip"},"AWS\nLightsail"),"\ninstructions to create a static IP. Use the DNS name you chose earlier to label\nthe IP. Like: ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.example.com-IP"),"."),(0,r.kt)("h2",{id:"enable-https-traffic-on-your-lightsail-server"},"Enable HTTPS traffic on your Lightsail server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on your Lightsail instance, and then the Networking tab. (Note: make sure\nyou click on the instance name first)."),(0,r.kt)("li",{parentName:"ol"},"Scroll down to IPv4 Firewall. Click + Add rule to add a new rule. "),(0,r.kt)("li",{parentName:"ol"},'Select "HTTPS" as the application, and then the green "create" button.')),(0,r.kt)("p",null,"This should also create the matching IPv6 rule automatically for you."),(0,r.kt)("h2",{id:"create-a-dns-entry-with-the-new-dns-name-you-chose"},"Create a DNS entry with the new DNS name you chose"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," record that points to your new IP address and matches the DNS\nname you chose earlier. The instructions for this vary depending on where your\nDNS is hosted. The AWS documentation is pretty confusing. Here are some ",(0,r.kt)("a",{parentName:"p",href:"https://pantheon.io/docs/route53"},"good\ninstructions")," on the Pantheon website."),(0,r.kt)("p",null,"Optionally: create an ",(0,r.kt)("inlineCode",{parentName:"p"},"AAAA")," record that points to the IPv6 IP address that\nmatches your new Lightsail instance. This will allow people to access your new\nserver over IPv6 and is a good future-proofing step with no cost."),(0,r.kt)("h2",{id:"create-an-s3-bucket-to-match-your-new-dns-name"},"Create an S3 Bucket to match your new DNS name"),(0,r.kt)("p",null,"Follow the instructions to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"create an AWS S3\nbucket")," using the AWS console."),(0,r.kt)("p",null,"You will make a new S3 bucket with these configuration options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Named the same as your DNS name. E.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"apps.example.com")),(0,r.kt)("li",{parentName:"ol"},"Matches the AWS region of your Lightsail instance."),(0,r.kt)("li",{parentName:"ol"},"Use the default security policy, including ",(0,r.kt)("inlineCode",{parentName:"li"},"Block Public Access"),".")),(0,r.kt)("h2",{id:"create-an-iam-user-that-has-appropriate-access-to-your-s3-bucket"},"Create an IAM user that has appropriate access to your S3 bucket"),(0,r.kt)("p",null,'I tend to create an S3 user with "Full Access" permissions, because the\nAWS account only includes S3 buckets that Docassemble is intended to access.'),(0,r.kt)("p",null,"Visit the Identity Access and Management (IAM) console in AWS.\nCreate a new user with the same name as your DNS name. E.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"apps.example.com"),". "),(0,r.kt)("p",null,'For AWS Access type, select "Programmatic access" and then click Next.'),(0,r.kt)("p",null,'Under Set permissions, choose "Attach existing policies directly".'),(0,r.kt)("p",null,'Under "filter policies", type S3. Check the box next to AmazonS3FullAccess.'),(0,r.kt)("p",null,"Click next and don't modify anything on the Tags page. Click Next: Review, and then\nCreate user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Copy the Access key ID and Secret access key")," to a safe place, such as an open\ntext editor window. This is your only chance to view the secret access key."),(0,r.kt)("h2",{id:"finish-installation-on-your-lightsail-instance-over-ssh"},"Finish installation on your Lightsail instance over SSH"),(0,r.kt)("h3",{id:"connect-with-ssh"},"Connect with SSH"),(0,r.kt)("p",null,"Follow the AWS instructions to ",(0,r.kt)("a",{parentName:"p",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-ssh-in-amazon-lightsail"},"connect to your new server with\nSSH"),".\nI recommend using either Putty or another 3rd-party SSH client, but the\nbrowser-based SSH console will work in a pinch."),(0,r.kt)("p",null,"Either way, I suggest downloading the default lightsail SSH keypair and keeping\na copy somewhere safe."),(0,r.kt)("h3",{id:"update-the-server"},"Update the server"),(0,r.kt)("p",null,"From the SSH console, type the following commands, hitting enter after one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt upgrade -u -y\nsudo apt-get install \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n")),(0,r.kt)("h3",{id:"install-docker"},"Install docker"),(0,r.kt)("p",null,"Type the command below to install the latest docker from the official Docker Engine repository"),(0,r.kt)("p",null,"(Or follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"latest instructions from Docker Engine"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get install \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\nsudo mkdir -p /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin\n')),(0,r.kt)("h3",{id:"add-your-user-account-to-the-docker-group"},"Add your user account to the Docker group"),(0,r.kt)("p",null,"Type the following commands in the SSH console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo usermod -aG docker $USER\nnewgrp docker \n")),(0,r.kt)("h3",{id:"setup-a-linux-swap-file"},"Setup a Linux swap file"),(0,r.kt)("p",null,"While the 4 GB RAM allocation is almost always enough, Docassemble can have odd\nmoments where the RAM usage spikes up quickly, which can crash the server. This\nis somewhat more likely to be a problem on a development server."),(0,r.kt)("p",null,"Quick fix: run the command below to create a 4 GB swap file. This provides\nsome free, virtual breathing room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fallocate -l 4G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\necho '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab\n")),(0,r.kt)("p",null,"Or, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04"},"more complete instructions here"),"."),(0,r.kt)("h3",{id:"create-an-envlist-file"},"Create an env.list file"),(0,r.kt)("p",null,"In an editor of your choice, copy the following text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DAHOSTNAME=apps.example.com\nS3ENABLE=true\nS3BUCKET=apps.example.com\nS3ACCESSKEY=\nS3SECRETACCESSKEY=\nS3REGION=us-east-2\nTIMEZONE=America/New_York\nUSEHTTPS=true\nUSELETSENCRYPT=true\nLETSENCRYPTEMAIL=apps@example.com\n")),(0,r.kt)("p",null,"Update the values as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under DAHOSTNAME, set it to your DNS name."),(0,r.kt)("li",{parentName:"ul"},"Under S3 bucket, set it to your DNS name."),(0,r.kt)("li",{parentName:"ul"},"Set the S3ACCESSKEY to your Access key ID."),(0,r.kt)("li",{parentName:"ul"},"Set the S3SECRETACCESSKEY to your secret access key that you wrote down earlier."),(0,r.kt)("li",{parentName:"ul"},"Set the S3 region to the appropriate region you selected."),(0,r.kt)("li",{parentName:"ul"},"Set the Timezone to the matching ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},'"tz database time\nzone"')," name\nthat you want to be the default on your server. This will be used in log files\nand to set the time that daily scheduled cron scripts run."),(0,r.kt)("li",{parentName:"ul"},"Set LETSENCRYPTEMAIL to an email of your choice. You will receive messages at this\naddress if your certificate is about to expire, but otherwise will not.")),(0,r.kt)("p",null,"Notice that in the Docker environment file, we use a lowercase ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("p",null,"Create a new file on the server named env.list and copy the settings from your text editor into the file on the server. Here is one way you can do that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano env.list\n[shift-insert or right mouse click to paste]\n[CTRL+O, CTRL+X to save and exit the Nano editor]\n")),(0,r.kt)("p",null,"Here is where using a 3rd party SSH console and not the Amazon SSH console is helpful.\nAmazon's web-based SSH console is very bad at handling copy and paste."),(0,r.kt)("p",null,"Save this env.list file locally somewhere secure. It is the one important file that will not be backed up to S3 if something goes wrong on your server."),(0,r.kt)("h2",{id:"start-docker"},"Start Docker"),(0,r.kt)("p",null,"Start up your new docassemble server like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 443:443 -p 80:80 --restart always --env-file env.list jhpyle/docassemble\n")),(0,r.kt)("h3",{id:"if-you-are-running-docker-on-a-server-you-own-instead-of-aws"},"If you are running Docker on a server you own instead of AWS"),(0,r.kt)("p",null,"Make sure that you set up ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/docker.html#persistent"},"persistent volumes"),".\nBoth your startup command and your env.list file will look different."),(0,r.kt)("h1",{id:"sit-back-and-wait"},"Sit back and wait"),(0,r.kt)("p",null,"In a few minutes, your Docassemble server will be up and running. Visit the website at the DNS\nname you chose, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://apps.example.com"),". Log in with the default username and password,\n",(0,r.kt)("a",{parentName:"p",href:"mailto:admin@admin.com"},"admin@admin.com"),"/password. Change it to something more secure."),(0,r.kt)("h1",{id:"how-many-servers-do-i-need"},"How many servers do I need?"),(0,r.kt)("p",null,"I recommend at least 2 servers: a production server and a development server. You may also want\na test server, for a total of 3."),(0,r.kt)("p",null,"Production should have the most stable version of Docassemble. Development can test bleeding edge code.\nTest should mirror Production as much as possible."),(0,r.kt)("p",null,"If you want to configure load balancing, that is something I have not experimented with in Docassemble. Cost\nwill be much higher but it may be worthwhile. You still will want at least a test/dev and production environment."),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("p",null,"For a lot more detail, review ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/installation.html"},"Installation")," and also\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/config.html"},"configuration")," pages."))}h.isMDXComponent=!0}}]);