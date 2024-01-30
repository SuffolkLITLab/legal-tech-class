"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[6914],{696:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=s(5893),i=s(1151);const o={slug:"setup-server",title:"Installing a docassemble server",sidebar_label:"Installing a docassemble server"},a="What this guide is",r={id:"practical-guide-docassemble/setup-server",title:"Installing a docassemble server",description:"There are a lot of [ways you can install",source:"@site/docs/practical-guide-docassemble/setup-server.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/setup-server",permalink:"/legal-tech-class/docs/practical-guide-docassemble/setup-server",draft:!1,unlisted:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/setup-server.md",tags:[],version:"current",frontMatter:{slug:"setup-server",title:"Installing a docassemble server",sidebar_label:"Installing a docassemble server"},sidebar:"someSidebar",previous:{title:"Translating your interview",permalink:"/legal-tech-class/docs/practical-guide-docassemble/translating-interviews"},next:{title:"Docassemble with Docker and VS Code",permalink:"/legal-tech-class/docs/practical-guide-docassemble/run-docassemble-docker-vscode"}},l={},c=[{value:"A video walkthrough of the full process",id:"a-video-walkthrough-of-the-full-process",level:2},{value:"Create your AWS account",id:"create-your-aws-account",level:2},{value:"Choose a DNS name",id:"choose-a-dns-name",level:2},{value:"If you don&#39;t own a domain name yet",id:"if-you-dont-own-a-domain-name-yet",level:3},{value:"Reserve a static IPv4 address in Lightsail",id:"reserve-a-static-ipv4-address-in-lightsail",level:2},{value:"Create an <code>A</code> record that points to the reserved IP address in your DNS provider&#39;s website",id:"create-an-a-record-that-points-to-the-reserved-ip-address-in-your-dns-providers-website",level:2},{value:"Create your Lightsail server",id:"create-your-lightsail-server",level:2},{value:"Enable HTTPS traffic on your Lightsail server",id:"enable-https-traffic-on-your-lightsail-server",level:2},{value:"Create an S3 Bucket to match your new DNS name",id:"create-an-s3-bucket-to-match-your-new-dns-name",level:2},{value:"Turn on S3 bucket versioning",id:"turn-on-s3-bucket-versioning",level:3},{value:"Create an IAM user that has appropriate access to your S3 bucket",id:"create-an-iam-user-that-has-appropriate-access-to-your-s3-bucket",level:2},{value:"A note about S3 permissions",id:"a-note-about-s3-permissions",level:3},{value:"Finish installation on your Lightsail instance over SSH",id:"finish-installation-on-your-lightsail-instance-over-ssh",level:2},{value:"Connect with SSH",id:"connect-with-ssh",level:3},{value:"Recommended: use Putty or another SSH client",id:"recommended-use-putty-or-another-ssh-client",level:4},{value:"In a pinch: Use the Lightsail built-in SSH container",id:"in-a-pinch-use-the-lightsail-built-in-ssh-container",level:3},{value:"Update the server",id:"update-the-server",level:3},{value:"Install docker",id:"install-docker",level:3},{value:"Add your user account to the Docker group",id:"add-your-user-account-to-the-docker-group",level:3},{value:"Setup a Linux swap file",id:"setup-a-linux-swap-file",level:3},{value:"Create an env.list file",id:"create-an-envlist-file",level:3},{value:"Start Docker",id:"start-docker",level:2},{value:"If you are running Docker on a server you own instead of AWS",id:"if-you-are-running-docker-on-a-server-you-own-instead-of-aws",level:3},{value:"Sit back and wait",id:"sit-back-and-wait",level:2},{value:"Monitor progress",id:"monitor-progress",level:3},{value:"Further reading",id:"further-reading",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"what-this-guide-is",children:"What this guide is"}),"\n",(0,t.jsxs)(n.p,{children:["There are a lot of ",(0,t.jsx)(n.a,{href:"https://docassemble.org/docs/installation.html",children:"ways you can install\nDocassemble"}),". This is one quick\npath that will help you get started quickly without having to make your own\nchoices."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Provision a full virtual machine in ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/lightsail/",children:"AWS\nLightsail"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Store a copy of backups and files on ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/s3/",children:"AWS S3"})," for safer and easier recovery"]}),"\n",(0,t.jsx)(n.li,{children:"Use an env.list file that contains all of the startup configuration that I\nkeep a local copy of."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Larger deployments might consider using a ",(0,t.jsx)(n.a,{href:"https://docassemble.org/docs/scalability.html",children:"multi-server configuration"}),".\nBut for most deployments, it is cheaper and more reliable to scale vertically. An 8 GB instance on Lightsail,\nwhich costs $40/month to run at this time, handles 10s of thousands of monthly sessions for the state of Massachusetts."]}),"\n",(0,t.jsxs)(n.p,{children:["It typically takes about ",(0,t.jsx)(n.strong,{children:"1 hour"})," to follow these steps from start to finish."]}),"\n",(0,t.jsx)(n.h2,{id:"a-video-walkthrough-of-the-full-process",children:"A video walkthrough of the full process"}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JXdOCLMFPHc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,t.jsx)(n.h2,{id:"create-your-aws-account",children:"Create your AWS account"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/",children:"Follow Amazon's\ninstructions"})}),"\n",(0,t.jsx)(n.h2,{id:"choose-a-dns-name",children:"Choose a DNS name"}),"\n",(0,t.jsxs)(n.p,{children:["Choose a short, readable name, like ",(0,t.jsx)(n.code,{children:"apps.example.com"}),", where ",(0,t.jsx)(n.code,{children:"example.com"}),"\nis a domain that you own."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Use a subdomain of the domain you own like ",(0,t.jsx)(n.code,{children:"apps.example.com"}),", not a base (second level) domain like ",(0,t.jsx)(n.code,{children:"example.com"})]}),"\n",(0,t.jsxs)(n.li,{children:["Stick with the common subdomain names: ",(0,t.jsx)(n.code,{children:"app"}),", ",(0,t.jsx)(n.code,{children:"apps"}),", or ",(0,t.jsx)(n.code,{children:"interviews"})," unless you have a good\nreason to choose something different."]}),"\n",(0,t.jsxs)(n.li,{children:["Avoid ",(0,t.jsx)(n.code,{children:"www"})," as this is usually used for a landing page."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"if-you-dont-own-a-domain-name-yet",children:"If you don't own a domain name yet"}),"\n",(0,t.jsxs)(n.p,{children:["If you don't own a domain name yet, it may be\nsimplest to register and manage it through ",(0,t.jsx)(n.a,{href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-domain-registration",children:"AWS\nLightsail"})]}),"\n",(0,t.jsx)(n.h2,{id:"reserve-a-static-ipv4-address-in-lightsail",children:"Reserve a static IPv4 address in Lightsail"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip",children:"AWS\nLightsail"}),"\ninstructions to create a static IP. Use the DNS name you chose earlier to label\nthe IP, with suffix to indicate that it is the IP. Like: ",(0,t.jsx)(n.code,{children:"apps.example.com-IP"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"create-an-a-record-that-points-to-the-reserved-ip-address-in-your-dns-providers-website",children:["Create an ",(0,t.jsx)(n.code,{children:"A"})," record that points to the reserved IP address in your DNS provider's website"]}),"\n",(0,t.jsxs)(n.p,{children:["You now need a new ",(0,t.jsx)(n.code,{children:"A"})," record that points your reserved IP address (like ",(0,t.jsx)(n.code,{children:"127.0.0.1"}),")\nto your chosen domain name (like ",(0,t.jsx)(n.code,{children:"apps.example.com"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"The steps for this depend on your DNS provider."}),"\n",(0,t.jsxs)(n.p,{children:["Here are some basic instructions about adding an ",(0,t.jsx)(n.code,{children:"A"})," record for common platforms:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-create-dns-entry",children:"AWS Lightsail"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://pantheon.io/docs/route53",children:"AWS Route 53"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.godaddy.com/help/add-an-a-record-19238",children:"GoDaddy"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you need to, you can stop now and come back to the rest of the steps later. The rest will take about 30 minutes and should\nbe done all together."}),"\n",(0,t.jsx)(n.h2,{id:"create-your-lightsail-server",children:"Create your Lightsail server"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.a,{href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/how-to-create-amazon-lightsail-instance-virtual-private-server-vps",children:"Lightsail\ninstance"})]}),"\n",(0,t.jsx)(n.p,{children:'Select these options on the "Create an instance" page:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Select the closest "Instance location" or AWS region. (The default is probably fine if it is on your continent!)'}),"\n",(0,t.jsx)(n.li,{children:'Select an "OS only" blueprint of "Linux".'}),"\n",(0,t.jsxs)(n.li,{children:["Select the latest long term support edition of ",(0,t.jsx)(n.strong,{children:"Ubuntu Server"})," (22.04 at this writing; avoid Amazon Linux)"]}),"\n",(0,t.jsxs)(n.li,{children:["Select at least the 4 GB of memory plan (at this writing, it costs ",(0,t.jsx)(n.strong,{children:"$20/month"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Label the new Lighsail instance with the DNS name you chose earlier. For\nexample: ",(0,t.jsx)(n.code,{children:"apps.example.com"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"enable-https-traffic-on-your-lightsail-server",children:"Enable HTTPS traffic on your Lightsail server"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Click on your Lightsail instance, and then the Networking tab. (Note: make sure\nyou click on the instance name first)."}),"\n",(0,t.jsx)(n.li,{children:"Scroll down to IPv4 Firewall. Click + Add rule to add a new rule."}),"\n",(0,t.jsx)(n.li,{children:'Select "HTTPS" as the application, and then the green "create" button.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This should also create the matching IPv6 rule automatically for you."}),"\n",(0,t.jsx)(n.h2,{id:"create-an-s3-bucket-to-match-your-new-dns-name",children:"Create an S3 Bucket to match your new DNS name"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the instructions to ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html",children:"create an AWS S3\nbucket"})," using the AWS console."]}),"\n",(0,t.jsx)(n.p,{children:"You will make a new S3 bucket with these configuration options:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Named the same as your DNS name. E.g., ",(0,t.jsx)(n.code,{children:"apps.example.com"})]}),"\n",(0,t.jsx)(n.li,{children:"Matches the AWS region of your Lightsail instance (e.g., us-east-1a for Virginia)."}),"\n",(0,t.jsxs)(n.li,{children:["Use the default security policy, including ",(0,t.jsx)(n.code,{children:"Block Public Access"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"turn-on-s3-bucket-versioning",children:"Turn on S3 bucket versioning"}),"\n",(0,t.jsx)(n.p,{children:'To improve your ability to recover from disasters, we recommend that you turn on bucket versioning.\nThis will keep a "shadow copy" of any deleted or modified files.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html",children:"View AWS instructions"}),'\n(For simplicity, jump ahead to the instructions for "S3 console"--you can ignore the preamble).']}),"\n",(0,t.jsx)(n.h2,{id:"create-an-iam-user-that-has-appropriate-access-to-your-s3-bucket",children:"Create an IAM user that has appropriate access to your S3 bucket"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new user with the same name as your DNS name. E.g.,\n",(0,t.jsx)(n.code,{children:"apps.example.com"}),". Give it access to S3."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",children:"View Amazon's up to date instructions"}),",\nor keep reading for our more specific instructions. Note: these may change over time."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Visit the Identity Access and Management (IAM) console in AWS"}),"\n",(0,t.jsx)(n.li,{children:'Under "Access Management" in the left menu, click "Users"'}),"\n",(0,t.jsx)(n.li,{children:'Click "Create user"'}),"\n",(0,t.jsx)(n.li,{children:"Name the new user to match your server's name (e.g., apps.example.com)"}),"\n",(0,t.jsx)(n.li,{children:'Under permission options, choose "Attach policies directly".'}),"\n",(0,t.jsx)(n.li,{children:'Under "Permissions policies", type S3. Check the box next to AmazonS3FullAccess. The permissions boundary is not necessary.'}),"\n",(0,t.jsx)(n.li,{children:"Click next and don't modify anything on the Tags page. Review and then Create user."}),"\n",(0,t.jsx)(n.li,{children:'Navigate back to "Users" under "Access Management" and select the one you just created. In the Summary, select the option to "Create Access Key".'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'For the use case, select "Command Line Interface (CLI)". Click next and add a description if desired. Create access key. (You may have to\nclick through or ignore a warning).'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Copy the Access key ID and Secret access key"})," to a safe place, such as an open\ntext editor window. This is your only chance to view the secret access key. But you\ncan always make a new one later."]}),"\n",(0,t.jsx)(n.h3,{id:"a-note-about-s3-permissions",children:"A note about S3 permissions"}),"\n",(0,t.jsx)(n.p,{children:"Your new user account has access to all of S3, not just the one bucket. If your AWS account is used for multiple\nservers, it is best to limit its access."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html#iam-policy-ex0",children:"View AWS instructions to limit access to one bucket"})}),"\n",(0,t.jsx)(n.h2,{id:"finish-installation-on-your-lightsail-instance-over-ssh",children:"Finish installation on your Lightsail instance over SSH"}),"\n",(0,t.jsx)(n.h3,{id:"connect-with-ssh",children:"Connect with SSH"}),"\n",(0,t.jsx)(n.p,{children:"Next, use SSH to connect to your newly created server."}),"\n",(0,t.jsx)(n.h4,{id:"recommended-use-putty-or-another-ssh-client",children:"Recommended: use Putty or another SSH client"}),"\n",(0,t.jsx)(n.p,{children:"In Lightsail, download the default keypair for your region. Use this SSH key\nto connect to your new Lightsail container:"}),"\n",(0,t.jsx)(n.p,{children:"Using the Windows command line (with SSH installed), WSL or Apple Terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh ubuntu@apps.example.com -i /path/to/ssh_key\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or follow instructions for using\n",(0,t.jsx)(n.a,{href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-putty-to-connect-using-ssh",children:"Putty"})]}),"\n",(0,t.jsx)(n.h3,{id:"in-a-pinch-use-the-lightsail-built-in-ssh-container",children:"In a pinch: Use the Lightsail built-in SSH container"}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the browser-based SSH client that is integrated into AWS\nLightsail. ",(0,t.jsx)(n.strong,{children:"Warning"}),": it is ",(0,t.jsx)(n.em,{children:"really"})," bad at copying and pasting. You should copy\nand paste each line one at a time if you use the browser SSH container."]}),"\n",(0,t.jsxs)(n.p,{children:["Follow the AWS instructions to ",(0,t.jsx)(n.a,{href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-ssh-in-amazon-lightsail",children:"connect to your new server with\nSSH"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"update-the-server",children:"Update the server"}),"\n",(0,t.jsx)(n.p,{children:"From the SSH console, type the following commands, hitting enter after one:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt upgrade -u -y\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-docker",children:"Install docker"}),"\n",(0,t.jsx)(n.p,{children:"Type the command below to install the latest docker from the official Docker Engine repository"}),"\n",(0,t.jsxs)(n.p,{children:["(Or follow the ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"latest instructions from Docker Engine"}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo apt-get install \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\nsudo mkdir -p /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin\n'})}),"\n",(0,t.jsx)(n.h3,{id:"add-your-user-account-to-the-docker-group",children:"Add your user account to the Docker group"}),"\n",(0,t.jsx)(n.p,{children:"Type the following commands in the SSH console:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo usermod -aG docker $USER\nnewgrp docker \n"})}),"\n",(0,t.jsx)(n.h3,{id:"setup-a-linux-swap-file",children:"Setup a Linux swap file"}),"\n",(0,t.jsx)(n.p,{children:"While the 4 GB RAM allocation is almost always enough, Docassemble can have odd\nmoments where the RAM usage spikes up quickly, which can crash the server. This\nis somewhat more likely to be a problem on a development server."}),"\n",(0,t.jsx)(n.p,{children:"Quick fix: run the command below to create a 4 GB swap file. This provides\nsome free, virtual breathing room."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo fallocate -l 4G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\necho '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or, follow the ",(0,t.jsx)(n.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04",children:"more complete instructions here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"create-an-envlist-file",children:"Create an env.list file"}),"\n",(0,t.jsx)(n.p,{children:"In an editor of your choice, copy the following text:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"DAHOSTNAME=apps.example.com\nS3ENABLE=true\nS3BUCKET=apps.example.com\nS3ACCESSKEY=\nS3SECRETACCESSKEY=\nS3REGION=us-east-2\nTIMEZONE=America/New_York\nUSEHTTPS=true\nUSELETSENCRYPT=true\nLETSENCRYPTEMAIL=apps@example.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"Update the values as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Under DAHOSTNAME, set it to your DNS name."}),"\n",(0,t.jsx)(n.li,{children:"Under S3 bucket, set it to your DNS name."}),"\n",(0,t.jsx)(n.li,{children:"Set the S3ACCESSKEY to your Access key ID."}),"\n",(0,t.jsx)(n.li,{children:"Set the S3SECRETACCESSKEY to your secret access key that you wrote down earlier."}),"\n",(0,t.jsx)(n.li,{children:"Set the S3 region to the appropriate region you selected."}),"\n",(0,t.jsxs)(n.li,{children:["Set the Timezone to the matching ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:'"tz database time\nzone"'})," name\nthat you want to be the default on your server. This will be used in log files\nand to set the time that daily scheduled cron scripts run."]}),"\n",(0,t.jsx)(n.li,{children:"Set LETSENCRYPTEMAIL to an email of your choice. You will receive messages at this\naddress if your certificate is about to expire, but otherwise will not."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Notice that in the Docker environment file, we use a lowercase ",(0,t.jsx)(n.code,{children:"true"}),", not ",(0,t.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Create a new file on the server named env.list and copy the settings from your text editor into the file on the server. Here is one way you can do that:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nano env.list\n[shift-insert or right mouse click to paste]\n[CTRL+O, CTRL+X to save and exit the Nano editor]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here is where using a 3rd party SSH console and not the Amazon SSH console is helpful.\nAmazon's web-based SSH console is very bad at handling copy and paste."}),"\n",(0,t.jsx)(n.p,{children:"Save this env.list file locally somewhere secure. It is the one important file that will not be backed up to S3 if something goes wrong on your server."}),"\n",(0,t.jsx)(n.h2,{id:"start-docker",children:"Start Docker"}),"\n",(0,t.jsx)(n.p,{children:"Start up your new docassemble server like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 443:443 -p 80:80 --restart always --env-file env.list --stop-timeout 600 jhpyle/docassemble\n"})}),"\n",(0,t.jsx)(n.h3,{id:"if-you-are-running-docker-on-a-server-you-own-instead-of-aws",children:"If you are running Docker on a server you own instead of AWS"}),"\n",(0,t.jsxs)(n.p,{children:["Make sure that you set up ",(0,t.jsx)(n.a,{href:"https://docassemble.org/docs/docker.html#persistent",children:"persistent volumes"}),".\nBoth your startup command and your env.list file will look different."]}),"\n",(0,t.jsx)(n.h2,{id:"sit-back-and-wait",children:"Sit back and wait"}),"\n",(0,t.jsxs)(n.p,{children:["In a few minutes, your Docassemble server will be up and running. Visit the website at the DNS\nname you chose, ",(0,t.jsx)(n.code,{children:"https://apps.example.com"}),". Log in with the default username and password,\n",(0,t.jsx)(n.a,{href:"mailto:admin@admin.com",children:"admin@admin.com"}),"/password. Change it to something more secure."]}),"\n",(0,t.jsx)(n.h3,{id:"monitor-progress",children:"Monitor progress"}),"\n",(0,t.jsx)(n.p,{children:"While the server starts up, you can run this command to monitor the container's progress, if\nDocassemble is the only docker container in your server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker exec -ti $(docker ps --format '{{.Names}}') sh -c \"tail -f /var/log/supervisor/initialize-stderr*\"\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you have more than one container, you can modify the command as follows:"}),"\n",(0,t.jsxs)(n.p,{children:["Note the name of the Docassemble container, which should be listed in the output of ",(0,t.jsx)(n.code,{children:"docker ps"}),"\nIn the command below, replace [YOUR CONTAINER NAME] with the name of your container."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker exec -ti [YOUR CONTAINER NAME] sh -c "tail -f /var/log/supervisor/initialize-stderr*"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Keep watching the output of this command until the install is finished, which will read\n",(0,t.jsx)(n.code,{children:"initialize: Finished initializing"}),". You can hit CTRL+c to close the output."]}),"\n",(0,t.jsx)(n.p,{children:'Watch out for the word "error" which may indicate that something went wrong. As long as it keeps\nupdating, you should just stay patient.'}),"\n",(0,t.jsx)(n.h1,{id:"how-many-servers-do-i-need",children:"How many servers do I need?"}),"\n",(0,t.jsx)(n.p,{children:"I recommend at least 2 servers: a production server and a development server. You may also want\na test server, for a total of 3."}),"\n",(0,t.jsx)(n.p,{children:"Production should have the most stable version of Docassemble. Development can test bleeding edge code.\nTest should mirror Production as much as possible."}),"\n",(0,t.jsx)(n.p,{children:"If you want to configure load balancing, that is something I have not experimented with in Docassemble. Cost\nwill be much higher but it may be worthwhile. You still will want at least a test/dev and production environment."}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.p,{children:["For a lot more detail, review ",(0,t.jsx)(n.a,{href:"https://docassemble.org/docs/installation.html",children:"Installation"})," and also\nthe ",(0,t.jsx)(n.a,{href:"https://docassemble.org/docs/config.html",children:"configuration"})," pages."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var t=s(7294);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);