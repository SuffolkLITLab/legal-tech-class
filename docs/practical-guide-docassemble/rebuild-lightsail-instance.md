---
slug: rebuild-lightsail-instance
title: Rebuilding your AWS Lightsail instance
sidebar_label: Rebuilding your AWS Lightsail instance
---

## Rebuilding your Docassemble server

Periodically, a new version of Ubuntu that runs in your Lightsail container
will be available. A new [Long-term Support (LTS)](https://wiki.ubuntu.com/LTS)
version is released every two years. You don't need to use the latest version, but
for compatibility, security, and performance reasons, it is recommended to stay
within a few major versions.

Upgrading the Lightsail container also gives you the opportunity to increase
the specifications. For example, you can upgrade to a container with more RAM,
CPUs, or storage space.

The good news is that you can update the Ubuntu software in your Lightsail
container and connect it to your existing Docassemble database. This saves time and
minimizes changes.

## Before you begin

This process involves backing up files, creating a new AWS Lightsail instance, and
connecting the new instance to your database. It will create a new Docker container.
The new Docker container will be running the latest version of Docassemble and other
installed packages. The process usually takes around 1 hour, so do it when you can
afford your Docassemble server to be unavailable for a while.

This guide assumes you already have an existing, functional Docassemble server with
the following setup:
 - AWS Lightsail instance
 - AWS S3 data storage
 - Docker container
 - Docassemble web app

It also assumes you can access all those items through AWS, including SSH access to
the Lightsail instance. See
[Installing a docassemble server](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/setup-server)
for instructions on setting up a server.

It is also important that you make note of your existing admin and developer accounts
on the server you are going to rebuild.

## Stop the docassemble server and copy the env.list file
Sign into AWS, go to the Lightsail instance that you want to rebuild. Connect using
SSH. You can also use another SSH client.

### Stop the docker container
Once you are connected, stop the docker container with the following command.

```bash
docker stop <tab> -t 600
```

Instead of `<tab>` hit the TAB key. This should autofill the name of the currently running
Docker container. Make sure this finishes before you continue.

### Copy the env.list file
Then retrieve the contents of your env.list file. This has sensitive information such
as your organization's private API keys. The env.list file rarely changes after
initial setup, but it is a good idea to copy the latest version.

Enter the following command to see the contents of the env.list file:

```bash
cat env.list
```

Copy the contents of that file and paste into a text file on your local computer. Save this
text file for now. You will be copy/pasting it onto the same file on the rebuilt server. 

### Shut down the Lightsail instance
Finally, shut down the Lightsail instance. First, to properly shut down Ubuntu, enter
this command:

```bash
sudo shutdown now
```

When complete, in AWS, go to the Lightsail instance and click **Stop**.

## Back up S3 files 

You can now make a copy of the Docassemble files that are stored in your S3 bucket. Most
of the time you won't need to use these backups. It's reassuring to have a backup copy.

Sign into AWS, and go to your Amazon S3 Buckets. Click on the server you want to upgrade.
One at a time, select and download the following:

 - config.yml
 - redis.rdb
 - docassemble (found inside the /postgres/ folder)


## Make a new Lightsail instance

In AWS Lightsail, you can make a new instance by following these steps.

 - Click **Create instance** to make a new instance.
 - Be sure to match the geographical zone where old server is located.
 - Select the platform: Unix/Linux.
 - Select a blueprint: Under the 'Operating System (OS) only' tab, select Ubuntu 22.04 LTS (or the latest version).
 - Choose your instance plan: Most new Docassemble instances use the 4GB Memory option.
 - Give your server a name under Identify your instance. This can't be the same as your existing instance.
You might want to include the Ubuntu version or year. It is helpful to include something
like "Dev" or "Prod" to keep these types of severs distinct. For example, you could name the
instance: Dev-easyforms-ilao-ubuntu-22.04.
 - Click **Create instance** (at the bottom of the screen).

## Set up networking on the new instance
To access the new server using the same IP and domain name as the old server, you will
need to change Networking on the new instance to match old instance.

On the old instance:

 - Click **Networking**
 - Under IPv4 click **IP**
 - Detach the Public IP address

You should not have to write down the IP address. AWS will remember it for use with your
account's Lightsail containers.

On the new instance:

 - Click **IPv4**
 - In PUBLIC IP, attach the Public IP address (the one you just detached)
 - In Firewall, Add the below rule for https then click **Create**
     - Application: HTTPS
     - Protocol: TCP
     - Port or range: 443
     - Restrict to IP address box Unchecked
 - Keep Duplicate rule for IPv6 selected
 - Keep IPv6 turned on

## Follow instructions on Installing a docassemble server

Most of the remaining steps are the same ones used in the [Finish installation on your Lightsail instance over
SSH](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/setup-server#finish-installation-on-your-lightsail-instance-over-ssh)
section of **Installing a docassemble server**.

Note: When entering the Linux commands in those instructions, it works best to enter them one
at a time when copy/pasting. For example, this command:

```bash
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

Can be converted to:

```bash
sudo apt-get install ca-certificates curl gnupg lsb-release
```

It is important to wait for each command to complete. If there are prompts during the
process, it is okay to accept the defaults. Here are the steps listed individually.

### Update the server (follow existing instructions)

Commands from this section:

```bash
sudo apt update

sudo apt upgrade -u -y
```

### Install docker (follow existing instructions)

Commands from this section:

```bash
sudo apt-get install ca-certificates curl gnupg lsb-release

sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### Add your user account to the Docker group (follow existing instructions)

Commands from this section:

```bash
sudo usermod -aG docker $USER

newgrp docker 
```

### Set up a Linux swap file (follow existing instructions)

Commands from this section:

```bash
sudo fallocate -l 10G /swapfile

sudo chmod 600 /swapfile

sudo mkswap /swapfile

sudo swapon /swapfile

echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### Make an env.list file

This step is similar to the existing 'Create an env.list file' instructions. Using the
contents of your old env.list file, copy/paste the text and save it as a new env.list file.

Copy the text from your env.list file, then follow these commands:

```bash
nano env.list

[shift-insert or right mouse click to paste]
[CTRL-O, enter, CTRL-X to save and exit the Nano editor]
```

### Start Docker (follow existing instructions)

Use this command to start the new Docker container:

```bash
docker run -d -p 443:443 -p 80:80 --restart always --env-file env.list --stop-timeout 600 jhpyle/docassemble
```

Sit back and wait. This cannot be overstated. It can take 10 to 45 minutes or more.

If you are getting curious/anxious, you can monitor the Docker install progress with
this command:

```bash
docker exec -ti $(docker ps --format '{{.Names}}') sh -c "tail -f /var/log/supervisor/initialize-stderr*"
```

Tip: Once Docker has started, you can hit the TAB key instead of typing `$(docker ps
--format '{{.Names}}')` in the above command. That will enter the container name. Be
sure to finish the command with `sh -c "tail -f /var/log/supervisor/initialize-stderr*"`.

To exit the log, hit CTRL-C.


### Final steps

Once the server is running, it is recommended to increase timeout period of nginx. This
needs to be done inside docker container. Follow [these instructions](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation#increase-nginx-timeouts-to-5-minutes).

If you want to receive email alerts when the new AWS Lightsail instance is working hard,
set up AWS Lightsail alerts - CPU utilization. A threshold of over 60% CPU utilization 2
times in 10 minutes might be useful. Adjust accordingly.

If everything looks good, after a few days, you can delete the old Lightsail instance.
