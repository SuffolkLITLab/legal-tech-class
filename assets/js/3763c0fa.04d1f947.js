"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[6914],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8186:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={slug:"setup-server",title:"Installing a docassemble server",sidebar_label:"Installing a docassemble server"},l="What this guide is",c={unversionedId:"practical-guide-docassemble/setup-server",id:"practical-guide-docassemble/setup-server",title:"Installing a docassemble server",description:"There are a lot of [ways you can install",source:"@site/docs/practical-guide-docassemble/setup-server.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/setup-server",permalink:"/legal-tech-class/docs/practical-guide-docassemble/setup-server",draft:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/setup-server.md",tags:[],version:"current",frontMatter:{slug:"setup-server",title:"Installing a docassemble server",sidebar_label:"Installing a docassemble server"},sidebar:"someSidebar",previous:{title:"Translating your interview",permalink:"/legal-tech-class/docs/practical-guide-docassemble/translating-interviews"},next:{title:"Docassemble with Docker and VS Code",permalink:"/legal-tech-class/docs/practical-guide-docassemble/run-docassemble-docker-vscode"}},u={},p=[{value:"A video walkthrough of the full process",id:"a-video-walkthrough-of-the-full-process",level:2},{value:"Create your AWS account",id:"create-your-aws-account",level:2},{value:"Choose a DNS name",id:"choose-a-dns-name",level:2},{value:"If you don&#39;t own a domain name yet",id:"if-you-dont-own-a-domain-name-yet",level:3},{value:"Reserve a static IPv4 address in Lightsail",id:"reserve-a-static-ipv4-address-in-lightsail",level:2},{value:"Create an <code>A</code> record that points to the reserved IP address in your DNS provider&#39;s website",id:"create-an-a-record-that-points-to-the-reserved-ip-address-in-your-dns-providers-website",level:2},{value:"Create your Lightsail server",id:"create-your-lightsail-server",level:2},{value:"Enable HTTPS traffic on your Lightsail server",id:"enable-https-traffic-on-your-lightsail-server",level:2},{value:"Create an S3 Bucket to match your new DNS name",id:"create-an-s3-bucket-to-match-your-new-dns-name",level:2},{value:"Turn on S3 bucket versioning",id:"turn-on-s3-bucket-versioning",level:3},{value:"Create an IAM user that has appropriate access to your S3 bucket",id:"create-an-iam-user-that-has-appropriate-access-to-your-s3-bucket",level:2},{value:"A note about S3 permissions",id:"a-note-about-s3-permissions",level:3},{value:"Finish installation on your Lightsail instance over SSH",id:"finish-installation-on-your-lightsail-instance-over-ssh",level:2},{value:"Connect with SSH",id:"connect-with-ssh",level:3},{value:"Recommended: use Putty or another SSH client",id:"recommended-use-putty-or-another-ssh-client",level:4},{value:"In a pinch: Use the Lightsail built-in SSH container",id:"in-a-pinch-use-the-lightsail-built-in-ssh-container",level:3},{value:"Update the server",id:"update-the-server",level:3},{value:"Install docker",id:"install-docker",level:3},{value:"Add your user account to the Docker group",id:"add-your-user-account-to-the-docker-group",level:3},{value:"Setup a Linux swap file",id:"setup-a-linux-swap-file",level:3},{value:"Create an env.list file",id:"create-an-envlist-file",level:3},{value:"Start Docker",id:"start-docker",level:2},{value:"If you are running Docker on a server you own instead of AWS",id:"if-you-are-running-docker-on-a-server-you-own-instead-of-aws",level:3},{value:"Sit back and wait",id:"sit-back-and-wait",level:2},{value:"Monitor progress",id:"monitor-progress",level:3},{value:"Further reading",id:"further-reading",level:2}],d={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-this-guide-is"},"What this guide is"),(0,r.kt)("p",null,"There are a lot of ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/installation.html"},"ways you can install\nDocassemble"),". This is one quick\npath that will help you get started quickly without having to make your own\nchoices."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Provision a full virtual machine in ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lightsail/"},"AWS\nLightsail"),"."),(0,r.kt)("li",{parentName:"ol"},"Store a copy of backups and files on ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"AWS S3")," for safer and easier recovery"),(0,r.kt)("li",{parentName:"ol"},"Use an env.list file that contains all of the startup configuration that I\nkeep a local copy of.")),(0,r.kt)("p",null,"Larger deployments might consider using a ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/scalability.html"},"multi-server configuration"),".\nBut for most deployments, it is cheaper and more reliable to scale vertically. An 8 GB instance on Lightsail,\nwhich costs $40/month to run at this time, handles 10s of thousands of monthly sessions for the state of Massachusetts."),(0,r.kt)("p",null,"It typically takes about ",(0,r.kt)("strong",{parentName:"p"},"1 hour")," to follow these steps from start to finish."),(0,r.kt)("h2",{id:"a-video-walkthrough-of-the-full-process"},"A video walkthrough of the full process"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JXdOCLMFPHc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"create-your-aws-account"},"Create your AWS account"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/"},"Follow Amazon's\ninstructions")),(0,r.kt)("h2",{id:"choose-a-dns-name"},"Choose a DNS name"),(0,r.kt)("p",null,"Choose a short, readable name, like ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.example.com"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com"),"\nis a domain that you own."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use a subdomain of the domain you own like ",(0,r.kt)("inlineCode",{parentName:"li"},"apps.example.com"),", not a base (second level) domain like ",(0,r.kt)("inlineCode",{parentName:"li"},"example.com")),(0,r.kt)("li",{parentName:"ol"},"Stick with the common subdomain names: ",(0,r.kt)("inlineCode",{parentName:"li"},"app"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"apps"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"interviews")," unless you have a good\nreason to choose something different. "),(0,r.kt)("li",{parentName:"ol"},"Avoid ",(0,r.kt)("inlineCode",{parentName:"li"},"www")," as this is usually used for a landing page.")),(0,r.kt)("h3",{id:"if-you-dont-own-a-domain-name-yet"},"If you don't own a domain name yet"),(0,r.kt)("p",null,"If you don't own a domain name yet, it may be\nsimplest to register and manage it through ",(0,r.kt)("a",{parentName:"p",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-domain-registration"},"AWS\nLightsail")),(0,r.kt)("h2",{id:"reserve-a-static-ipv4-address-in-lightsail"},"Reserve a static IPv4 address in Lightsail"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip"},"AWS\nLightsail"),"\ninstructions to create a static IP. Use the DNS name you chose earlier to label\nthe IP, with suffix to indicate that it is the IP. Like: ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.example.com-IP"),"."),(0,r.kt)("h2",{id:"create-an-a-record-that-points-to-the-reserved-ip-address-in-your-dns-providers-website"},"Create an ",(0,r.kt)("inlineCode",{parentName:"h2"},"A")," record that points to the reserved IP address in your DNS provider's website"),(0,r.kt)("p",null,"You now need a new ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," record that points your reserved IP address (like ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),")\nto your chosen domain name (like ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.example.com"),")"),(0,r.kt)("p",null,"The steps for this depend on your DNS provider."),(0,r.kt)("p",null,"Here are some basic instructions about adding an ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," record for common platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-create-dns-entry"},"AWS Lightsail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pantheon.io/docs/route53"},"AWS Route 53")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.godaddy.com/help/add-an-a-record-19238"},"GoDaddy"))),(0,r.kt)("p",null,"If you need to, you can stop now and come back to the rest of the steps later. The rest will take about 30 minutes and should\nbe done all together."),(0,r.kt)("h2",{id:"create-your-lightsail-server"},"Create your Lightsail server"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/how-to-create-amazon-lightsail-instance-virtual-private-server-vps"},"Lightsail\ninstance")),(0,r.kt)("p",null,'Select these options on the "Create an instance" page:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Select the closest "Instance location" or AWS region. (The default is probably fine if it is on your continent!)'),(0,r.kt)("li",{parentName:"ol"},'Select an "OS only" blueprint of "Linux".'),(0,r.kt)("li",{parentName:"ol"},"Select the latest long term support edition of ",(0,r.kt)("strong",{parentName:"li"},"Ubuntu Server")," (22.04 at this writing; avoid Amazon Linux)"),(0,r.kt)("li",{parentName:"ol"},"Select at least the 4 GB of memory plan (at this writing, it costs ",(0,r.kt)("strong",{parentName:"li"},"$20/month"),")")),(0,r.kt)("p",null,"Label the new Lighsail instance with the DNS name you chose earlier. For\nexample: ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.example.com"),"."),(0,r.kt)("h2",{id:"enable-https-traffic-on-your-lightsail-server"},"Enable HTTPS traffic on your Lightsail server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on your Lightsail instance, and then the Networking tab. (Note: make sure\nyou click on the instance name first)."),(0,r.kt)("li",{parentName:"ol"},"Scroll down to IPv4 Firewall. Click + Add rule to add a new rule. "),(0,r.kt)("li",{parentName:"ol"},'Select "HTTPS" as the application, and then the green "create" button.')),(0,r.kt)("p",null,"This should also create the matching IPv6 rule automatically for you."),(0,r.kt)("h2",{id:"create-an-s3-bucket-to-match-your-new-dns-name"},"Create an S3 Bucket to match your new DNS name"),(0,r.kt)("p",null,"Follow the instructions to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"create an AWS S3\nbucket")," using the AWS console."),(0,r.kt)("p",null,"You will make a new S3 bucket with these configuration options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Named the same as your DNS name. E.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"apps.example.com")),(0,r.kt)("li",{parentName:"ol"},"Matches the AWS region of your Lightsail instance (e.g., us-east-1a for Virginia)."),(0,r.kt)("li",{parentName:"ol"},"Use the default security policy, including ",(0,r.kt)("inlineCode",{parentName:"li"},"Block Public Access"),".")),(0,r.kt)("h3",{id:"turn-on-s3-bucket-versioning"},"Turn on S3 bucket versioning"),(0,r.kt)("p",null,'To improve your ability to recover from disasters, we recommend that you turn on bucket versioning.\nThis will keep a "shadow copy" of any deleted or modified files.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html"},"View AWS instructions"),'\n(For simplicity, jump ahead to the instructions for "S3 console"--you can ignore the preamble).'),(0,r.kt)("h2",{id:"create-an-iam-user-that-has-appropriate-access-to-your-s3-bucket"},"Create an IAM user that has appropriate access to your S3 bucket"),(0,r.kt)("p",null,"Create a new user with the same name as your DNS name. E.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"apps.example.com"),". Give it access to S3."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html"},"View Amazon's up to date instructions"),",\nor keep reading for our more specific instructions. Note: these may change over time."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit the Identity Access and Management (IAM) console in AWS"),(0,r.kt)("li",{parentName:"ol"},'Under "Access Management" in the left menu, click "Users"'),(0,r.kt)("li",{parentName:"ol"},'Click "Create user"'),(0,r.kt)("li",{parentName:"ol"},"Name the new user to match your server's name (e.g., apps.example.com)"),(0,r.kt)("li",{parentName:"ol"},'Under permission options, choose "Attach policies directly".'),(0,r.kt)("li",{parentName:"ol"},'Under "Permissions policies", type S3. Check the box next to AmazonS3FullAccess. The permissions boundary is not necessary.'),(0,r.kt)("li",{parentName:"ol"},"Click next and don't modify anything on the Tags page. Review and then Create user."),(0,r.kt)("li",{parentName:"ol"},'Navigate back to "Users" under "Access Management" and select the one you just created. In the Summary, select the option to "Create Access Key".')),(0,r.kt)("p",null,'For the use case, select "Command Line Interface (CLI)". Click next and add a description if desired. Create access key. (You may have to\nclick through or ignore a warning).'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Copy the Access key ID and Secret access key")," to a safe place, such as an open\ntext editor window. This is your only chance to view the secret access key. But you\ncan always make a new one later."),(0,r.kt)("h3",{id:"a-note-about-s3-permissions"},"A note about S3 permissions"),(0,r.kt)("p",null,"Your new user account has access to all of S3, not just the one bucket. If your AWS account is used for multiple\nservers, it is best to limit its access."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html#iam-policy-ex0"},"View AWS instructions to limit access to one bucket")),(0,r.kt)("h2",{id:"finish-installation-on-your-lightsail-instance-over-ssh"},"Finish installation on your Lightsail instance over SSH"),(0,r.kt)("h3",{id:"connect-with-ssh"},"Connect with SSH"),(0,r.kt)("p",null,"Next, use SSH to connect to your newly created server."),(0,r.kt)("h4",{id:"recommended-use-putty-or-another-ssh-client"},"Recommended: use Putty or another SSH client"),(0,r.kt)("p",null,"In Lightsail, download the default keypair for your region. Use this SSH key\nto connect to your new Lightsail container:"),(0,r.kt)("p",null,"Using the Windows command line (with SSH installed), WSL or Apple Terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh ubuntu@apps.example.com -i /path/to/ssh_key\n")),(0,r.kt)("p",null,"Or follow instructions for using\n",(0,r.kt)("a",{parentName:"p",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-putty-to-connect-using-ssh"},"Putty")),(0,r.kt)("h3",{id:"in-a-pinch-use-the-lightsail-built-in-ssh-container"},"In a pinch: Use the Lightsail built-in SSH container"),(0,r.kt)("p",null,"You can also use the browser-based SSH client that is integrated into AWS\nLightsail. ",(0,r.kt)("strong",{parentName:"p"},"Warning"),": it is ",(0,r.kt)("em",{parentName:"p"},"really")," bad at copying and pasting. You should copy\nand paste each line one at a time if you use the browser SSH container."),(0,r.kt)("p",null,"Follow the AWS instructions to ",(0,r.kt)("a",{parentName:"p",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-ssh-in-amazon-lightsail"},"connect to your new server with\nSSH"),"."),(0,r.kt)("h3",{id:"update-the-server"},"Update the server"),(0,r.kt)("p",null,"From the SSH console, type the following commands, hitting enter after one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt upgrade -u -y\n")),(0,r.kt)("h3",{id:"install-docker"},"Install docker"),(0,r.kt)("p",null,"Type the command below to install the latest docker from the official Docker Engine repository"),(0,r.kt)("p",null,"(Or follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"latest instructions from Docker Engine"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get install \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\nsudo mkdir -p /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin\n')),(0,r.kt)("h3",{id:"add-your-user-account-to-the-docker-group"},"Add your user account to the Docker group"),(0,r.kt)("p",null,"Type the following commands in the SSH console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo usermod -aG docker $USER\nnewgrp docker \n")),(0,r.kt)("h3",{id:"setup-a-linux-swap-file"},"Setup a Linux swap file"),(0,r.kt)("p",null,"While the 4 GB RAM allocation is almost always enough, Docassemble can have odd\nmoments where the RAM usage spikes up quickly, which can crash the server. This\nis somewhat more likely to be a problem on a development server."),(0,r.kt)("p",null,"Quick fix: run the command below to create a 4 GB swap file. This provides\nsome free, virtual breathing room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fallocate -l 4G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\necho '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab\n")),(0,r.kt)("p",null,"Or, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04"},"more complete instructions here"),"."),(0,r.kt)("h3",{id:"create-an-envlist-file"},"Create an env.list file"),(0,r.kt)("p",null,"In an editor of your choice, copy the following text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DAHOSTNAME=apps.example.com\nS3ENABLE=true\nS3BUCKET=apps.example.com\nS3ACCESSKEY=\nS3SECRETACCESSKEY=\nS3REGION=us-east-2\nTIMEZONE=America/New_York\nUSEHTTPS=true\nUSELETSENCRYPT=true\nLETSENCRYPTEMAIL=apps@example.com\n")),(0,r.kt)("p",null,"Update the values as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under DAHOSTNAME, set it to your DNS name."),(0,r.kt)("li",{parentName:"ul"},"Under S3 bucket, set it to your DNS name."),(0,r.kt)("li",{parentName:"ul"},"Set the S3ACCESSKEY to your Access key ID."),(0,r.kt)("li",{parentName:"ul"},"Set the S3SECRETACCESSKEY to your secret access key that you wrote down earlier."),(0,r.kt)("li",{parentName:"ul"},"Set the S3 region to the appropriate region you selected."),(0,r.kt)("li",{parentName:"ul"},"Set the Timezone to the matching ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},'"tz database time\nzone"')," name\nthat you want to be the default on your server. This will be used in log files\nand to set the time that daily scheduled cron scripts run."),(0,r.kt)("li",{parentName:"ul"},"Set LETSENCRYPTEMAIL to an email of your choice. You will receive messages at this\naddress if your certificate is about to expire, but otherwise will not.")),(0,r.kt)("p",null,"Notice that in the Docker environment file, we use a lowercase ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("p",null,"Create a new file on the server named env.list and copy the settings from your text editor into the file on the server. Here is one way you can do that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano env.list\n[shift-insert or right mouse click to paste]\n[CTRL+O, CTRL+X to save and exit the Nano editor]\n")),(0,r.kt)("p",null,"Here is where using a 3rd party SSH console and not the Amazon SSH console is helpful.\nAmazon's web-based SSH console is very bad at handling copy and paste."),(0,r.kt)("p",null,"Save this env.list file locally somewhere secure. It is the one important file that will not be backed up to S3 if something goes wrong on your server."),(0,r.kt)("h2",{id:"start-docker"},"Start Docker"),(0,r.kt)("p",null,"Start up your new docassemble server like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 443:443 -p 80:80 --restart always --env-file env.list --stop-timeout 600 jhpyle/docassemble\n")),(0,r.kt)("h3",{id:"if-you-are-running-docker-on-a-server-you-own-instead-of-aws"},"If you are running Docker on a server you own instead of AWS"),(0,r.kt)("p",null,"Make sure that you set up ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/docker.html#persistent"},"persistent volumes"),".\nBoth your startup command and your env.list file will look different."),(0,r.kt)("h2",{id:"sit-back-and-wait"},"Sit back and wait"),(0,r.kt)("p",null,"In a few minutes, your Docassemble server will be up and running. Visit the website at the DNS\nname you chose, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://apps.example.com"),". Log in with the default username and password,\n",(0,r.kt)("a",{parentName:"p",href:"mailto:admin@admin.com"},"admin@admin.com"),"/password. Change it to something more secure."),(0,r.kt)("h3",{id:"monitor-progress"},"Monitor progress"),(0,r.kt)("p",null,"While the server starts up, you can run this command to monitor the container's progress, if\nDocassemble is the only docker container in your server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti $(docker ps --format '{{.Names}}') sh -c \"tail -f /var/log/supervisor/initialize-stderr*\"\n")),(0,r.kt)("p",null,"If you have more than one container, you can modify the command as follows:"),(0,r.kt)("p",null,"Note the name of the Docassemble container, which should be listed in the output of ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),"\nIn the command below, replace ","[YOUR CONTAINER NAME]"," with the name of your container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker exec -ti [YOUR CONTAINER NAME] sh -c "tail -f /var/log/supervisor/initialize-stderr*"\n')),(0,r.kt)("p",null,"Keep watching the output of this command until the install is finished, which will read\n",(0,r.kt)("inlineCode",{parentName:"p"},"initialize: Finished initializing"),". You can hit CTRL+c to close the output."),(0,r.kt)("p",null,'Watch out for the word "error" which may indicate that something went wrong. As long as it keeps\nupdating, you should just stay patient.'),(0,r.kt)("h1",{id:"how-many-servers-do-i-need"},"How many servers do I need?"),(0,r.kt)("p",null,"I recommend at least 2 servers: a production server and a development server. You may also want\na test server, for a total of 3."),(0,r.kt)("p",null,"Production should have the most stable version of Docassemble. Development can test bleeding edge code.\nTest should mirror Production as much as possible."),(0,r.kt)("p",null,"If you want to configure load balancing, that is something I have not experimented with in Docassemble. Cost\nwill be much higher but it may be worthwhile. You still will want at least a test/dev and production environment."),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("p",null,"For a lot more detail, review ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/installation.html"},"Installation")," and also\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/config.html"},"configuration")," pages."))}h.isMDXComponent=!0}}]);