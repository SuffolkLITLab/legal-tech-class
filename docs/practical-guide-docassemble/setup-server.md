---
slug: setup-server 
title: Installing a docassemble server 
sidebar_label: Installing a docassemble server
---

# What this guide is

There are a lot of [ways you can install
Docassemble](https://docassemble.org/docs/installation.html). This is one quick
path that will help you get started quickly without having to make your own
choices.

1. Provision a full virtual machine in [AWS
   Lightsail](https://aws.amazon.com/lightsail/).
2. Wire up the file storage and backups to [AWS S3](https://aws.amazon.com/s3/).
3. Use an env.list file that contains all of the startup configuration that I
   keep a local copy of.

Why? This gets you:

1. A cheap, easy to use, always on server. Provisioning the same server for
   full-time usage on EC2 or Azure would be at least 2 times the price.
2. The safety of all configuration and databases, files and backups being stored
   and served from S3.
3. The ability to easily destroy and restore a new copy of your server.

What you miss out on:

1. Automated load balancing and auto scaling that comes with EC-2.
2. Clustering and managed docker that you get with docker swarm or Lightsail containers.

Things that I don't do but should consider:

1. Using docker compose instead of just an env.list

# Setting up Docassemble, start to finish

<iframe width="560" height="315" src="https://www.youtube.com/embed/JXdOCLMFPHc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Create your AWS account

[Follow Amazon's
instructions](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)


## Choose a DNS name

If you want to be able to reach your server over the Internet, you must add a
DNS entry for it. You can use a _subdomain_ of an existing domain name you
control.

I recommend using something short, like `apps.example.com` (where `example.com`
is a domain name you already own.) If you don't own a domain name yet, it may be
simplest to purchase and manage it through [AWS Route
53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html).

I still recommend using a _subdomain_ of the new domain you purchase, rather
than pointing docassemble directly to a top level domain.

## Create your Lightsail server

Create a [Lightsail
instance](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/how-to-create-amazon-lightsail-instance-virtual-private-server-vps)

Choose Ubuntu Server (the newest edition) as the operating system type.

Choose the 4 GB instance as the size, unless you have a very good reason to choose
otherwise. Docassemble can run with fewer than 4 GB of RAM if you set up a swap
file. You will probably not need more than 4 GB of RAM until you reach a very
high traffic level or have a lot of developers working on your server at the same
time.

Choose an AWS region that matches your needs. E.g., one that is geographically
close to your users or that is not subject to US jurisdiction if required by
data privacy laws in your country.

Label the new Lighsail instance with the DNS name you chose earlier. For
example: `apps.example.com`.

Optionally: take note of the IPv6 address that AWS automatically assigns to your
new Lightsail instance.

## Create a static IPv4 address

Follow the [AWS
Lightsail](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip)
instructions to create a static IP. Use the DNS name you chose earlier to label
the IP. Like: `apps.example.com-IP`.

## Enable HTTPS traffic on your Lightsail server

1. Click on your Lightsail instance, and then the Networking tab. (Note: make sure
you click on the instance name first).
2. Scroll down to IPv4 Firewall. Click + Add rule to add a new rule. 
3. Select "HTTPS" as the application, and then the green "create" button.

This should also create the matching IPv6 rule automatically for you.

## Create a DNS entry with the new DNS name you chose

Create a new `A` record that points to your new IP address and matches the DNS
name you chose earlier. The instructions for this vary depending on where your
DNS is hosted. The AWS documentation is pretty confusing. Here are some [good
instructions](https://pantheon.io/docs/route53) on the Pantheon website.

Optionally: create an `AAAA` record that points to the IPv6 IP address that
matches your new Lightsail instance. This will allow people to access your new
server over IPv6 and is a good future-proofing step with no cost.

## Create an S3 Bucket to match your new DNS name

Follow the instructions to [create an AWS S3
bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) using the AWS console.

You will make a new S3 bucket with these configuration options:

1. Named the same as your DNS name. E.g., `apps.example.com`
2. Matches the AWS region of your Lightsail instance.
3. Use the default security policy, including `Block Public Access`.

## Create an IAM user that has appropriate access to your S3 bucket

I tend to create an S3 user with "Full Access" permissions, because the 
AWS account only includes S3 buckets that Docassemble is intended to access.

Visit the Identity Access and Management (IAM) console in AWS. 
Create a new user with the same name as your DNS name. E.g., 
`apps.example.com`. 

For AWS Access type, select "Programmatic access" and then click Next.

Under Set permissions, choose "Attach existing policies directly".

Under "filter policies", type S3. Check the box next to AmazonS3FullAccess.

Click next and don't modify anything on the Tags page. Click Next: Review, and then
Create user.

**Copy the Access key ID and Secret access key** to a safe place, such as an open
text editor window. This is your only chance to view the secret access key.

## Finish installation on your Lightsail instance over SSH

### Connect with SSH

Follow the AWS instructions to [connect to your new server with
SSH](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-ssh-in-amazon-lightsail).
I recommend using either Putty or another 3rd-party SSH client, but the
browser-based SSH console will work in a pinch.

Either way, I suggest downloading the default lightsail SSH keypair and keeping
a copy somewhere safe.

### Update the server

From the SSH console, type the following commands, hitting enter after one:

```bash
sudo apt update
sudo apt upgrade -u -y
```


### Install docker

Type the command below to install the latest docker from the official Docker Engine repository

(Or follow the [latest instructions from Docker Engine](https://docs.docker.com/engine/install/ubuntu/))

```bash
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### Add your user account to the Docker group

Type the following commands in the SSH console:

```
sudo usermod -aG docker $USER
newgrp docker 
```

### Setup a Linux swap file

While the 4 GB RAM allocation is almost always enough, Docassemble can have odd
moments where the RAM usage spikes up quickly, which can crash the server. This
is somewhat more likely to be a problem on a development server.

Quick fix: run the command below to create a 4 GB swap file. This provides
some free, virtual breathing room.

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

Or, follow the [more complete instructions here](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04).


### Create an env.list file

In an editor of your choice, copy the following text:

```
DAHOSTNAME=apps.example.com
S3ENABLE=true
S3BUCKET=apps.example.com
S3ACCESSKEY=
S3SECRETACCESSKEY=
S3REGION=us-east-2
TIMEZONE=America/New_York
USEHTTPS=true
USELETSENCRYPT=true
LETSENCRYPTEMAIL=apps@example.com
```

Update the values as follows:

* Under DAHOSTNAME, set it to your DNS name.
* Under S3 bucket, set it to your DNS name.
* Set the S3ACCESSKEY to your Access key ID.
* Set the S3SECRETACCESSKEY to your secret access key that you wrote down earlier.
* Set the S3 region to the appropriate region you selected.
* Set the Timezone to the matching ["tz database time
  zone"](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) name
  that you want to be the default on your server. This will be used in log files
  and to set the time that daily scheduled cron scripts run.
* Set LETSENCRYPTEMAIL to an email of your choice. You will receive messages at this
  address if your certificate is about to expire, but otherwise will not.
  
Notice that in the Docker environment file, we use a lowercase `true`, not `True`.

Create a new file on the server named env.list and copy the settings from your text editor into the file on the server. Here is one way you can do that:

```
nano env.list
[shift-insert or right mouse click to paste]
[CTRL+O, CTRL+X to save and exit the Nano editor]
```

Here is where using a 3rd party SSH console and not the Amazon SSH console is helpful.
Amazon's web-based SSH console is very bad at handling copy and paste.

Save this env.list file locally somewhere secure. It is the one important file that will not be backed up to S3 if something goes wrong on your server.

## Start Docker

Start up your new docassemble server like this:

```bash
docker run -d -p 443:443 -p 80:80 --restart always --env-file env.list jhpyle/docassemble
```

### If you are running Docker on a server you own instead of AWS

Make sure that you set up [persistent volumes](https://docassemble.org/docs/docker.html#persistent).
Both your startup command and your env.list file will look different.

# Sit back and wait

In a few minutes, your Docassemble server will be up and running. Visit the website at the DNS
name you chose, `https://apps.example.com`. Log in with the default username and password,
admin@admin.com/password. Change it to something more secure.

# How many servers do I need?

I recommend at least 2 servers: a production server and a development server. You may also want
a test server, for a total of 3.

Production should have the most stable version of Docassemble. Development can test bleeding edge code.
Test should mirror Production as much as possible.

If you want to configure load balancing, that is something I have not experimented with in Docassemble. Cost
will be much higher but it may be worthwhile. You still will want at least a test/dev and production environment.

## Further reading

For a lot more detail, review [Installation](https://docassemble.org/docs/installation.html) and also
the [configuration](https://docassemble.org/docs/config.html) pages.

