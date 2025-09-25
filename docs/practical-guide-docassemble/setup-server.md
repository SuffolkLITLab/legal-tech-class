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
2. Store a copy of backups and files on [AWS S3](https://aws.amazon.com/s3/) for safer and easier recovery
3. Use an env.list file that contains all of the startup configuration that I
   keep a local copy of.

Larger deployments might consider using a [multi-server configuration](https://docassemble.org/docs/scalability.html).
But for most deployments, it is cheaper and more reliable to scale vertically. An 8 GB instance on Lightsail,
which costs $40/month to run at this time, handles 10s of thousands of monthly sessions for the state of Massachusetts.

It typically takes about **1 hour** to follow these steps from start to finish.

## A video walkthrough of the full process

<iframe width="560" height="315" src="https://www.youtube.com/embed/JXdOCLMFPHc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Create your AWS account

[Follow Amazon's
instructions](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

## Choose a DNS name

Choose a short, readable name, like `apps.example.com`, where `example.com`
is a domain that you own.

1. Use a subdomain of the domain you own like `apps.example.com`, not a base (second level) domain like `example.com`
1. Stick with the common subdomain names: `app`, `apps`, or `interviews` unless you have a good
   reason to choose something different. 
1. Avoid `www` as this is usually used for a landing page.

### If you don't own a domain name yet

If you don't own a domain name yet, it may be
simplest to register and manage it through [AWS 
Lightsail](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-domain-registration)

## Reserve a static IPv4 address in Lightsail

Follow the [AWS
Lightsail](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip)
instructions to create a static IP. Use the DNS name you chose earlier to label
the IP, with suffix to indicate that it is the IP. Like: `apps.example.com-IP`.

## Create an `A` record that points to the reserved IP address in your DNS provider's website

You now need a new `A` record that points your reserved IP address (like `127.0.0.1`)
to your chosen domain name (like `apps.example.com`)

The steps for this depend on your DNS provider.

Here are some basic instructions about adding an `A` record for common platforms:

* [AWS Lightsail](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-create-dns-entry)
* [AWS Route 53](https://pantheon.io/docs/route53)
* [GoDaddy](https://www.godaddy.com/help/add-an-a-record-19238)

If you need to, you can stop now and come back to the rest of the steps later. The rest will take about 30 minutes and should
be done all together.

## Create your Lightsail server

Create a [Lightsail
instance](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/how-to-create-amazon-lightsail-instance-virtual-private-server-vps)

Select these options on the "Create an instance" page:

1. Select the closest "Instance location" or AWS region. (The default is probably fine if it is on your continent!)
1. Select an "OS only" blueprint of "Linux".
1. Select the latest long term support edition of **Ubuntu Server** (24.04 at this writing; avoid Amazon Linux)
1. Select at least the 4 GB of memory plan (at this writing, it costs **$20/month**)

Label the new Lighsail instance with the DNS name you chose earlier. For
example: `apps.example.com`.

## Enable HTTPS traffic on your Lightsail server

1. Click on your Lightsail instance, and then the Networking tab. (Note: make sure
you click on the instance name first).
2. Scroll down to IPv4 Firewall. Click + Add rule to add a new rule. 
3. Select "HTTPS" as the application, and then the green "create" button.

This should also create the matching IPv6 rule automatically for you.

## Create an S3 Bucket to match your new DNS name

Follow the instructions to [create an AWS S3
bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) using the AWS console.

You will make a new S3 bucket with these configuration options:

1. Named the same as your DNS name. E.g., `apps.example.com`
2. Matches the AWS region of your Lightsail instance (e.g., us-east-1a for Virginia).
3. Use the default security policy, including `Block Public Access`.

### Turn on S3 bucket versioning

To improve your ability to recover from disasters, we recommend that you turn on bucket versioning.
This will keep a "shadow copy" of any deleted or modified files.

[View AWS instructions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html)
(For simplicity, jump ahead to the instructions for "S3 console"--you can ignore the preamble).

## Create an IAM user that has appropriate access to your S3 bucket

Create a new user with the same name as your DNS name. E.g., 
`apps.example.com`. Give it access to S3.

[View Amazon's up to date instructions](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html),
or keep reading for our more specific instructions. Note: these may change over time.

1. Visit the Identity Access and Management (IAM) console in AWS
1. Under "Access Management" in the left menu, click "Users"
1. Click "Create user"
1. Name the new user to match your server's name (e.g., apps.example.com)
1. Under permission options, choose "Attach policies directly".
1. Under "Permissions policies", type S3. Check the box next to AmazonS3FullAccess. The permissions boundary is not necessary.
1. Click next and don't modify anything on the Tags page. Review and then Create user.
1. Navigate back to "Users" under "Access Management" and select the one you just created. In the Summary, select the option to "Create Access Key".

For the use case, select "Command Line Interface (CLI)". Click next and add a description if desired. Create access key. (You may have to
click through or ignore a warning).

**Copy the Access key ID and Secret access key** to a safe place, such as an open
text editor window. This is your only chance to view the secret access key. But you
can always make a new one later.

### A note about S3 permissions

Your new user account has access to all of S3, not just the one bucket. If your AWS account is used for multiple
servers, it is best to limit its access.

[View AWS instructions to limit access to one bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html#iam-policy-ex0)

## Finish installation on your Lightsail instance over SSH

### Connect with SSH

Next, use SSH to connect to your newly created server.

#### Recommended: use Putty or another SSH client

In Lightsail, download the default keypair for your region. Use this SSH key
to connect to your new Lightsail container:

Using the Windows command line (with SSH installed), WSL or Apple Terminal:

```bash
ssh ubuntu@apps.example.com -i /path/to/ssh_key
```

Or follow instructions for using 
[Putty](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-putty-to-connect-using-ssh)

### In a pinch: Use the Lightsail built-in SSH container

You can also use the browser-based SSH client that is integrated into AWS
Lightsail. **Warning**: it is _really_ bad at copying and pasting. You should copy
and paste each line one at a time if you use the browser SSH container.

Follow the AWS instructions to [connect to your new server with
SSH](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-ssh-in-amazon-lightsail).

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
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
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
DAEXTRAFONTS=false
DAGOOGLEFONTS=false
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
* In Docassemble version 1.8.14 and later, if DAEXTRAFONTS and DAGOOGLEFONTS are true they
  will install those fonts on startup. These might be necessary for your interviews that do
  DOCX to PDF conversion.
  
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
docker run -d -p 443:443 -p 80:80 --restart unless-stopped --env-file env.list --stop-timeout 600 jhpyle/docassemble
```

### If you are running Docker on a server you own instead of AWS

Make sure that you set up [persistent volumes](https://docassemble.org/docs/docker.html#persistent).
Both your startup command and your env.list file will look different.

### Docker Compose

For ease of future upgrades, you can save this command in a [Docker
Compose](https://docs.docker.com/compose/) file. Docker Compose allows you to reduce
the `docker run` command to a saved file for repeated use. `docker stop` and `docker start`
commands are not affected by using a Docker Compose file.

Create a new file named docker-compose.yml on the server in the same directory as the
env.list file. To match the `docker run` command above, it should have this content
(lines beginning with a `#` are comments to help explain the commands):

```yaml
services:
  docassemble_container:
    # The name of the service. You can reference this name for inter-service communication.

    image: jhpyle/docassemble
    # Specifies the Docker image to use for this service. 
    # Update this line to pull a different version/tag of the image, e.g., 'jhpyle/docassemble:1.2.3'.
    
    restart: always
    # This ensures the container is always restarted if it stops.
    # Options include 'no', 'always', 'on-failure', or 'unless-stopped'.
    
    stop_grace_period: 600s
    # The duration to wait before forcefully killing the container upon stopping.
    # You can adjust this value based on your application's shutdown requirements.
    
    ports:
      - '80:80'
      # Maps port 80 on the host to port 80 on the container.
      # To change the host port, modify the first number, e.g., '8080:80'.
    
    env_file:
      - env.list
      # Specifies a file containing environment variables. 
      # Update the filename if your environment variables are in a different file.

    volumes:
      - dacerts:/usr/share/docassemble/certs
      - dabackup:/usr/share/docassemble/backup
      # Maps the `dacerts` and `dabackup` volumes to specific directories in the container.
      # These volumes are defined in the `volumes` section and will be created automatically if they don't exist.

volumes:
  dacerts:
    # Defines the `dacerts` volume. Docker Compose will automatically create it if it doesn't exist.
  
  dabackup:
    # Defines the `dabackup` volume. Docker Compose will automatically create it if it doesn't exist.
```

If you are not using docker persistant volumes, everything including and after the 
first reference to `volumes` can be removed. 

Different operating systems have different command lines for docker compose. To
check which you have, run `docker-compose --version` or `docker compose version`.
Only one of those will be successful. Depending on whether you need the hyphen to
run the service, you'll either run:

```
docker-compose up -d
```

or 

```
docker compose up -d
```

The `-d` flag runs it in a detached mode meaning that everything is happening
in the background. If you want to run it with some of the supervisorctl logs
visible to you, you can run the command without the -d flag. You'll then know
when your server is up when you see the line that `nginx entered RUNNING
state`. That's the start of the expected webserver. A few seconds later you should
be able to access the web interface. You can hit CTRL+c to close the output.

When you need to upgrade your server in the future, you can use the same Docker
Compose file to ensure you are setting the same flags in the new container. 

## Sit back and wait

In a few minutes, your Docassemble server will be up and running. Visit the website at the DNS
name you chose, `https://apps.example.com`. Log in with the default username and password,
admin@admin.com/password. Change it to something more secure.

### Monitor progress

While the server starts up, you can run this command to monitor the container's progress, if
Docassemble is the only docker container in your server:

```bash
docker exec -ti $(docker ps --format '{{.Names}}') sh -c "tail -f /var/log/supervisor/initialize-stderr*"
```

If you have more than one container, you can modify the command as follows:

Note the name of the Docassemble container, which should be listed in the output of `docker ps`
In the command below, replace [YOUR CONTAINER NAME] with the name of your container.

```bash
docker exec -ti [YOUR CONTAINER NAME] sh -c "tail -f /var/log/supervisor/initialize-stderr*"
```

Keep watching the output of this command until the install is finished, which will read 
`initialize: Finished initializing`. You can hit CTRL+c to close the output.

Watch out for the word "error" which may indicate that something went wrong. As long as it keeps
updating, you should just stay patient.

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

