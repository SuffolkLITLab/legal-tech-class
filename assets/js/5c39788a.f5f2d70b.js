"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[616],{1003:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(5893),t=s(1151);const o={slug:"rebuild-lightsail-instance",title:"Rebuilding your AWS Lightsail instance",sidebar_label:"Rebuilding your AWS Lightsail instance"},l=void 0,a={id:"practical-guide-docassemble/rebuild-lightsail-instance",title:"Rebuilding your AWS Lightsail instance",description:"Rebuilding your Docassemble server",source:"@site/docs/practical-guide-docassemble/rebuild-lightsail-instance.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/rebuild-lightsail-instance",permalink:"/legal-tech-class/docs/practical-guide-docassemble/rebuild-lightsail-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/rebuild-lightsail-instance.md",tags:[],version:"current",frontMatter:{slug:"rebuild-lightsail-instance",title:"Rebuilding your AWS Lightsail instance",sidebar_label:"Rebuilding your AWS Lightsail instance"},sidebar:"someSidebar",previous:{title:"Installing a docassemble server",permalink:"/legal-tech-class/docs/practical-guide-docassemble/setup-server"},next:{title:"Docassemble with Docker and VS Code",permalink:"/legal-tech-class/docs/practical-guide-docassemble/run-docassemble-docker-vscode"}},r={},c=[{value:"Rebuilding your Docassemble server",id:"rebuilding-your-docassemble-server",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Stop the docassemble server and copy the env.list file",id:"stop-the-docassemble-server-and-copy-the-envlist-file",level:2},{value:"Stop the docker container",id:"stop-the-docker-container",level:3},{value:"Copy the env.list file",id:"copy-the-envlist-file",level:3},{value:"Shut down the Lightsail instance",id:"shut-down-the-lightsail-instance",level:3},{value:"Back up S3 files",id:"back-up-s3-files",level:2},{value:"Make a new Lightsail instance",id:"make-a-new-lightsail-instance",level:2},{value:"Set up networking on the new instance",id:"set-up-networking-on-the-new-instance",level:2},{value:"Follow instructions on Installing a docassemble server",id:"follow-instructions-on-installing-a-docassemble-server",level:2},{value:"Update the server (follow existing instructions)",id:"update-the-server-follow-existing-instructions",level:3},{value:"Install docker (follow existing instructions)",id:"install-docker-follow-existing-instructions",level:3},{value:"Add your user account to the Docker group (follow existing instructions)",id:"add-your-user-account-to-the-docker-group-follow-existing-instructions",level:3},{value:"Set up a Linux swap file (follow existing instructions)",id:"set-up-a-linux-swap-file-follow-existing-instructions",level:3},{value:"Make an env.list file",id:"make-an-envlist-file",level:3},{value:"Start Docker (follow existing instructions)",id:"start-docker-follow-existing-instructions",level:3},{value:"Final steps",id:"final-steps",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"rebuilding-your-docassemble-server",children:"Rebuilding your Docassemble server"}),"\n",(0,i.jsxs)(n.p,{children:["Periodically, a new version of Ubuntu that runs in your Lightsail container\nwill be available. A new ",(0,i.jsx)(n.a,{href:"https://wiki.ubuntu.com/LTS",children:"Long-term Support (LTS)"}),"\nversion is released every two years. You don't need to use the latest version, but\nfor compatibility, security, and performance reasons, it is recommended to stay\nwithin a few major versions."]}),"\n",(0,i.jsx)(n.p,{children:"Upgrading the Lightsail container also gives you the opportunity to increase\nthe specifications. For example, you can upgrade to a container with more RAM,\nCPUs, or storage space."}),"\n",(0,i.jsx)(n.p,{children:"The good news is that you can update the Ubuntu software in your Lightsail\ncontainer and connect it to your existing Docassemble database. This saves time and\nminimizes changes."}),"\n",(0,i.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,i.jsx)(n.p,{children:"This process involves backing up files, creating a new AWS Lightsail instance, and\nconnecting the new instance to your database. It will create a new Docker container.\nThe new Docker container will be running the latest version of Docassemble and other\ninstalled packages. The process usually takes around 1 hour, so do it when you can\nafford your Docassemble server to be unavailable for a while."}),"\n",(0,i.jsx)(n.p,{children:"This guide assumes you already have an existing, functional Docassemble server with\nthe following setup:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AWS Lightsail instance"}),"\n",(0,i.jsx)(n.li,{children:"AWS S3 data storage"}),"\n",(0,i.jsx)(n.li,{children:"Docker container"}),"\n",(0,i.jsx)(n.li,{children:"Docassemble web app"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["It also assumes you can access all those items through AWS, including SSH access to\nthe Lightsail instance. See\n",(0,i.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/setup-server",children:"Installing a docassemble server"}),"\nfor instructions on setting up a server."]}),"\n",(0,i.jsx)(n.p,{children:"It is also important that you make note of your existing admin and developer accounts\non the server you are going to rebuild."}),"\n",(0,i.jsx)(n.h2,{id:"stop-the-docassemble-server-and-copy-the-envlist-file",children:"Stop the docassemble server and copy the env.list file"}),"\n",(0,i.jsx)(n.p,{children:"Sign into AWS, go to the Lightsail instance that you want to rebuild. Connect using\nSSH. You can also use another SSH client."}),"\n",(0,i.jsx)(n.h3,{id:"stop-the-docker-container",children:"Stop the docker container"}),"\n",(0,i.jsx)(n.p,{children:"Once you are connected, stop the docker container with the following command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker stop <tab> -t 600\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Instead of ",(0,i.jsx)(n.code,{children:"<tab>"})," hit the TAB key. This should autofill the name of the currently running\nDocker container. Make sure this finishes before you continue."]}),"\n",(0,i.jsx)(n.h3,{id:"copy-the-envlist-file",children:"Copy the env.list file"}),"\n",(0,i.jsx)(n.p,{children:"Then retrieve the contents of your env.list file. This has sensitive information such\nas your organization's private API keys. The env.list file rarely changes after\ninitial setup, but it is a good idea to copy the latest version."}),"\n",(0,i.jsx)(n.p,{children:"Enter the following command to see the contents of the env.list file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat env.list\n"})}),"\n",(0,i.jsx)(n.p,{children:"Copy the contents of that file and paste into a text file on your local computer. Save this\ntext file for now. You will be copy/pasting it onto the same file on the rebuilt server."}),"\n",(0,i.jsx)(n.h3,{id:"shut-down-the-lightsail-instance",children:"Shut down the Lightsail instance"}),"\n",(0,i.jsx)(n.p,{children:"Finally, shut down the Lightsail instance. First, to properly shut down Ubuntu, enter\nthis command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo shutdown now\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When complete, in AWS, go to the Lightsail instance and click ",(0,i.jsx)(n.strong,{children:"Stop"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"back-up-s3-files",children:"Back up S3 files"}),"\n",(0,i.jsx)(n.p,{children:"You can now make a copy of the Docassemble files that are stored in your S3 bucket. Most\nof the time you won't need to use these backups. It's reassuring to have a backup copy."}),"\n",(0,i.jsx)(n.p,{children:"Sign into AWS, and go to your Amazon S3 Buckets. Click on the server you want to upgrade.\nOne at a time, select and download the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"config.yml"}),"\n",(0,i.jsx)(n.li,{children:"redis.rdb"}),"\n",(0,i.jsx)(n.li,{children:"docassemble (found inside the /postgres/ folder)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"make-a-new-lightsail-instance",children:"Make a new Lightsail instance"}),"\n",(0,i.jsx)(n.p,{children:"In AWS Lightsail, you can make a new instance by following these steps."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create instance"})," to make a new instance."]}),"\n",(0,i.jsx)(n.li,{children:"Be sure to match the geographical zone where old server is located."}),"\n",(0,i.jsx)(n.li,{children:"Select the platform: Unix/Linux."}),"\n",(0,i.jsx)(n.li,{children:"Select a blueprint: Under the 'Operating System (OS) only' tab, select Ubuntu 22.04 LTS (or the latest version)."}),"\n",(0,i.jsx)(n.li,{children:"Choose your instance plan: Most new Docassemble instances use the 4GB Memory option."}),"\n",(0,i.jsx)(n.li,{children:'Give your server a name under Identify your instance. This can\'t be the same as your existing instance.\nYou might want to include the Ubuntu version or year. It is helpful to include something\nlike "Dev" or "Prod" to keep these types of severs distinct. For example, you could name the\ninstance: Dev-easyforms-ilao-ubuntu-22.04.'}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create instance"})," (at the bottom of the screen)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"set-up-networking-on-the-new-instance",children:"Set up networking on the new instance"}),"\n",(0,i.jsx)(n.p,{children:"To access the new server using the same IP and domain name as the old server, you will\nneed to change Networking on the new instance to match old instance."}),"\n",(0,i.jsx)(n.p,{children:"On the old instance:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Networking"})]}),"\n",(0,i.jsxs)(n.li,{children:["Under IPv4 click ",(0,i.jsx)(n.strong,{children:"IP"})]}),"\n",(0,i.jsx)(n.li,{children:"Detach the Public IP address"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You should not have to write down the IP address. AWS will remember it for use with your\naccount's Lightsail containers."}),"\n",(0,i.jsx)(n.p,{children:"On the new instance:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"IPv4"})]}),"\n",(0,i.jsx)(n.li,{children:"In PUBLIC IP, attach the Public IP address (the one you just detached)"}),"\n",(0,i.jsxs)(n.li,{children:["In Firewall, Add the below rule for https then click ",(0,i.jsx)(n.strong,{children:"Create"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Application: HTTPS"}),"\n",(0,i.jsx)(n.li,{children:"Protocol: TCP"}),"\n",(0,i.jsx)(n.li,{children:"Port or range: 443"}),"\n",(0,i.jsx)(n.li,{children:"Restrict to IP address box Unchecked"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Keep Duplicate rule for IPv6 selected"}),"\n",(0,i.jsx)(n.li,{children:"Keep IPv6 turned on"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"follow-instructions-on-installing-a-docassemble-server",children:"Follow instructions on Installing a docassemble server"}),"\n",(0,i.jsxs)(n.p,{children:["Most of the remaining steps are the same ones used in the ",(0,i.jsx)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/setup-server#finish-installation-on-your-lightsail-instance-over-ssh",children:"Finish installation on your Lightsail instance over\nSSH"}),"\nsection of ",(0,i.jsx)(n.strong,{children:"Installing a docassemble server"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Note: When entering the Linux commands in those instructions, it works best to enter them one\nat a time when copy/pasting. For example, this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n"})}),"\n",(0,i.jsx)(n.p,{children:"Can be converted to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ca-certificates curl gnupg lsb-release\n"})}),"\n",(0,i.jsx)(n.p,{children:"It is important to wait for each command to complete. If there are prompts during the\nprocess, it is okay to accept the defaults. Here are the steps listed individually."}),"\n",(0,i.jsx)(n.h3,{id:"update-the-server-follow-existing-instructions",children:"Update the server (follow existing instructions)"}),"\n",(0,i.jsx)(n.p,{children:"Commands from this section:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n\nsudo apt upgrade -u -y\n"})}),"\n",(0,i.jsx)(n.h3,{id:"install-docker-follow-existing-instructions",children:"Install docker (follow existing instructions)"}),"\n",(0,i.jsx)(n.p,{children:"Commands from this section:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo apt-get install ca-certificates curl gnupg lsb-release\n\nsudo mkdir -p /etc/apt/keyrings\n\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n\necho "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\nsudo apt-get update\n\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin\n'})}),"\n",(0,i.jsx)(n.h3,{id:"add-your-user-account-to-the-docker-group-follow-existing-instructions",children:"Add your user account to the Docker group (follow existing instructions)"}),"\n",(0,i.jsx)(n.p,{children:"Commands from this section:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker $USER\n\nnewgrp docker \n"})}),"\n",(0,i.jsx)(n.h3,{id:"set-up-a-linux-swap-file-follow-existing-instructions",children:"Set up a Linux swap file (follow existing instructions)"}),"\n",(0,i.jsx)(n.p,{children:"Commands from this section:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo fallocate -l 10G /swapfile\n\nsudo chmod 600 /swapfile\n\nsudo mkswap /swapfile\n\nsudo swapon /swapfile\n\necho '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab\n"})}),"\n",(0,i.jsx)(n.h3,{id:"make-an-envlist-file",children:"Make an env.list file"}),"\n",(0,i.jsx)(n.p,{children:"This step is similar to the existing 'Create an env.list file' instructions. Using the\ncontents of your old env.list file, copy/paste the text and save it as a new env.list file."}),"\n",(0,i.jsx)(n.p,{children:"Copy the text from your env.list file, then follow these commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nano env.list\n\n[shift-insert or right mouse click to paste]\n[CTRL-O, enter, CTRL-X to save and exit the Nano editor]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"start-docker-follow-existing-instructions",children:"Start Docker (follow existing instructions)"}),"\n",(0,i.jsx)(n.p,{children:"Use this command to start the new Docker container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 443:443 -p 80:80 --restart always --env-file env.list --stop-timeout 600 jhpyle/docassemble\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sit back and wait. This cannot be overstated. It can take 10 to 45 minutes or more."}),"\n",(0,i.jsx)(n.p,{children:"If you are getting curious/anxious, you can monitor the Docker install progress with\nthis command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker exec -ti $(docker ps --format '{{.Names}}') sh -c \"tail -f /var/log/supervisor/initialize-stderr*\"\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Tip: Once Docker has started, you can hit the TAB key instead of typing ",(0,i.jsx)(n.code,{children:"$(docker ps --format '{{.Names}}')"})," in the above command. That will enter the container name. Be\nsure to finish the command with ",(0,i.jsx)(n.code,{children:'sh -c "tail -f /var/log/supervisor/initialize-stderr*"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To exit the log, hit CTRL-C."}),"\n",(0,i.jsx)(n.h3,{id:"final-steps",children:"Final steps"}),"\n",(0,i.jsxs)(n.p,{children:["Once the server is running, it is recommended to increase timeout period of nginx. This\nneeds to be done inside docker container. Follow (these instructions)[",(0,i.jsx)(n.a,{href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation#increase-nginx-timeouts-to-5-minutes",children:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation#increase-nginx-timeouts-to-5-minutes"}),"]."]}),"\n",(0,i.jsx)(n.p,{children:"If you want to receive email alerts when the new AWS Lightsail instance is working hard,\nset up AWS Lightsail alerts - CPU utilization. A threshold of over 60% CPU utilization 2\ntimes in 10 minutes might be useful. Adjust accordingly."}),"\n",(0,i.jsx)(n.p,{children:"If everything looks good, after a few days, you can delete the old Lightsail instance."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var i=s(7294);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);