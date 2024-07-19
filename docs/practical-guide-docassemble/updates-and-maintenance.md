---
slug: maintaining-docassemble
title: Securing and maintaining your server
sidebar_label: Securing and maintaining your server
---

## Securing Docassemble

Docassemble has not had any major security incidents in its history. But the
higher profile your deployment, the more likely you are to have an individual
attack. Such attacks are hard to entirely prevent. The best way to keep
Docassemble secure is by upgrading on a regular basis.

In addition:

- Consider using [2-factor
  authentication](https://docassemble.org/docs/config.html#mfa) on your
  production server
- [Turn off the
  Playground](https://docassemble.org/docs/config.html#enable%20playground) on
  your production server
- Limit the number of developers and administrators on your production server
- Use [input sanitization](https://securecode.wiki/docs/lang/python/) when
  calling a remote API or making a database query that uses user input to
  generate a query or insert a new row
- When you have a file upload input, limit the size and type of uploads to
  prevent unknown exploits with the
  [`accept`](https://docassemble.org/docs/fields.html#file) modifier and the
  [`maximum content
  length`](https://docassemble.org/docs/config.html#maximum%20content%20length)
  configuration option.

You can review [Docassemble's security policy and
documentation](https://docassemble.org/docs/security.html).

Instructions on applying regular updates are below.

## Securing the underlying operating system

By default, a new Lightsail container with Ubuntu will check for security 
updates on a nightly basis and install them automatically. Occasionally, 
these updates may cause a problem with your container starting.

SSHing into the container and doing a manual docker start generally resolves
these problems.

The alternative, manual installation of OS updates, is usually worse for most
people who run a single small Docassemble server. Just set up automated alerts
that tell you when the website is not available.

[UpTimeRobot](https://uptimerobot.com/) is one free option that works well for
automated monitoring and alerts.

If you do not have automatic updates enabled, you can install the
[unattended-upgrades](https://wiki.debian.org/UnattendedUpgrades) package manually
using your host operating system's package manager.

## Upgrading to a new version of Docassemble

Docassemble has two parts: 

1. a [Python](/docs/python.md) web application, built around the [Flask
framework](https://flask.palletsprojects.com/en/2.2.x/)
1. An Ubuntu docker image and a series of Linux applications that the web
   frontend communicates with, including
    - A specific version of [Python](/docs/python.md) (3.10 as of this writing)
    - [LibreOffice](https://www.libreoffice.org/discover/writer) for converting
      Word documents to PDF
    - [LaTeX](https://www.latex-project.org/) for assembling
      [Markdown](/docs/markdown.md) files
    - [PDFtk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/) for
      manipulating PDF files and templates
    - [LetsEncrypt](https://letsencrypt.org/) for SSL certificate management
    - [Nginx](https://www.nginx.com/) as a web server


Docassemble is updated regularly. As of this writing, releases come out almost
every few weeks. Most updates affect only the frontend, not the Ubuntu operating
system or its installed applications.

### When to update

It's a good idea to stay up to date with the latest version of Docassemble. But
sometimes the very latest release can have bugs. It's best to test out the
release on a development or staging server before you install it on your
production server.

If you get too far behind from the latest version, there's always a chance that
you will run into a bug that only occurs because your version was too far out of
date. A good cadence is upgrading about once a month.

Jonathan Pyle, the Docassemble author, is generally very responsive to bug
fixes, as well as helping authors install a fixed version. The best way to get
help with an upgrade gone wrong is to use the Docassemble
[Slack](https://docassemble.org/docs/support.html#tocAnchor-1-1) channel.

Upgrade the Docassemble frontend every few weeks. Upgrade the container every
six months or so, unless you need a feature right away. But wait a week or two
after the new container is released to make sure there are no lingering bugs. 

### Updates to the Docassemble frontend

You can update the Python packages and Flask frontend by using the
["Upgrade"](https://docassemble.org/docs/admin.html#upgrade) button in the
package management menu.

This is safe to do on a monthly basis, but keep in mind that you should test
the upgraded version of Docassemble on a development or staging server before
installing on your production server.

### Updates to the Docassemble container

Updates to the base Docassemble OS image (and Python, LibreOffice, etc) are 
generally optional. They come with new features that aren't possible to
provide by updating just the frontend. But if you do not want or need
those new features, you can wait to upgrade.

A good cadence for updating the container is about every 6 months, unless
you see a feature that you want that requires an earlier update. You may
want to wait for a few minor releases (which might fix critical bugs)
before you upgrade your container. The newest container upgrade is the most
likely to have a few bugs to work out.

The Docassemble [Changelog](https://docassemble.org/docs/changelog.html)
announces when there is a new feature that requires a container upgrade.
Just searching on the page for the word "container" should tell you.

Whenever you upgrade the Docassemble container, you have a small chance of
losing data, because the upgrade process involves starting an entirely new
Docker container and copying the information into it, either from a shared
Docker volume or from S3. If the Docker container did not properly shut down,
the data that you want to migrate might not be backed up and the new container
may not have the information.

Here is the upgrade process:

1. SSH into the virtual machine or server that hosts your Docassemble docker container

2. In the virtual machine's command line, copy and run the following commands:

```bash
docker stop -t 600 $(docker ps -a -q)
docker pull jhpyle/docassemble-os
docker pull jhpyle/docassemble
docker run -d -p 443:443 -p 80:80 --restart always --env-file env.list jhpyle/docassemble
```

3. After the container has safely started up, login to the web application to make
sure all data is still present. 
4. Now, you can clean up all **stopped** containers
(i.e., the old container you are no longer using) by running the following
Docker command:

```bash
docker system prune
```

## Updating individual packages

You can upgrade individual Python packages and Docassemble interviews on your
server by [visiting the Package Management
page](https://docassemble.org/docs/packages.html#updating). and clicking the
"update" button next to the package you want to update.

Generally, the "upgrade" button at the top of the Package Management page
will upgrade all of the key packages that you need, except for the ones that 
represent individual interviews you authored.

The exception is if you installed a package or series of packages that is 
maintained by someone other than the Docassemble author, such as the 
Assembly Line packages.

### Updating the AssemblyLine packages

The [Assembly
Line](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/) project's
framework must be updated manually, whenever there is a new feature that you 
want. 

The two packages that generally require such updates are:

- `docassemble.AssemblyLine`
- `docassemble.ALToolbox`

It's a good idea to stay on the "latest" version of the Assembly Line framework.
New features that can cause disruption are usually put behind a new configuration
option.

You can review the latest features of the Assembly Line on its
[Changelog](https://github.com/SuffolkLITLab/docassemble-AssemblyLine/blob/main/CHANGELOG.md),
as well as the changelog for the
[ALToolbox](https://github.com/SuffolkLITLab/docassemble-ALToolbox/releases).

#### PyPi vs GitHub

If you installed the AssemblyLine framework from GitHub, when you click the
"upgrade" button, you will get individual minor and major updates that have not
yet been "tagged" with a new version number. While any code on the GitHub server
will have undergone a code review process and tests, the "tagged" releases are
the ones that are intended for wider use and installation on production servers.

Therefore, we recommend that most authors install AssemblyLine from PyPi instead
of directly using the GitHub URL.

## Docassemble server maintenance checklist
On August 24, 2023, ILAO gave a presentation on Maintaining your Docassemble
server as part of a [Technology Initiative Grant funded by the Legal Services
Corporation](https://www.lsc.gov/grants/technology-initiative-grant-program/tig-program-description). 

Watch the video or
[download the slides](https://docs.google.com/presentation/d/1eJf6x1SwAx4BcvC2OrVUNmg99G5zoAP1TX4ZGnvfkwY/edit?usp=sharing)
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LxmxhO3dDPo"
  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Much of what was covered in the presentation is found elsewhere in this and other documentation.
What follows is a condensed format to serve as a checklist.

### AWS Lightsail instance

This server instance runs Linux, typically Ubuntu. It is sometimes called the host. Docassemble
software runs on it.

 - How to monitor - Log into AWS console and see if it is running. Set up CPU utilization alerts
   to be emailed if there's a performance issue. A server reboot through AWS may be required if
   the instance freezes.
 - How to update
    - Important: Before you update or restart, we recommend that you 1) Stop the Docker container using
      `docker stop -t 600 $(docker ps -a -q)`, and 2) Have a recent or make a backup of the docassemble
      database and redis.rdb files. See below on how to access and backup these files on AWS S3.
    - The typical setup is configured to automatically download and install security updates. It still
      requires a manual download of other updates and manual reboots. When you connect to the Lighsail
      instance via SSH, you may see a message that a number of "***updates can be applied immediately.***"
      You can install Ubuntu updates with these commands:

```bash
sudo apt-get update
sudo apt-get upgrade
```

We recommend that you restart Ubuntu after applying updates. The `sudo shutdown -r now` command will
restart Ubuntu. The Docker container should automatically restart if it was run using the `--restart always`
parameter.

When you connect to the Lighsail instance via SSH, you may see a "***System restart required***" message.
You can restart the instance with this command:

```bash
sudo shutdown -r now
```

  - When to update - You can update Ubuntu every month or so. Restart it as needed or more frequently when
    the "***System restart required***" message comes up. This could happen if there is an update required
    for a security vulnerability.
    - Beyond periodic updates, the version of Ubuntu software may need an upgrade. This is like going from
      Windows 10 to 11, or macOS Ventura to Sonoma. Every 2 years, there's a new Ubuntu Long Term Support
      (LTS) version. See [Rebuilding your AWS Lightsail instance](https://projects.suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/rebuild-lightsail-instance).
  - What to back up - Keep a copy of the latest env.list file in case a rebuild is required.
  - Wnen to back up - After a backup copy of env.list is made, a new backup is needed only if the contents
    of that file changes.

### AWS S3 bucket

This is where the Docassemble database lives. Separating the Docassemble data from the software makes it
easier to maintain and rebuild if needed.
 - How to monitor - Log into the AWS console. Go to S3. You should see files within each bucket.
 - What to back up - The most important files to back up are:
   - configuration.yml
   - redis.rdb
   - docassemble (inside postgres folder)
 - When to back up - Every few months or as often as you want to have a backup you could rebuild from. By
   default, Docassemble makes a daily backup of these and other files. Each daily backup is stored in the /backups
   folder.

It is important to make backups of the docassemble database and redis.rdb files at about the same time. If these 
files are out of sync files when restoring, user accounts and data sync errors may result. See the Docassemble
documentation to learn more about [Recovery from backup files](https://docassemble.org/docs/docker.html#recovery).

### Docker container

This virtual machine is installed on the Lightsail instance and runs its own version of Linux. The Docassemble
software runs within. Using a virtual machine adds to resiliency, though it also requires its own maintenance.

 - How to monitor - Use `docker ps` command to make sure it is running.
 - How to update - See
   [Updates to the Docassemble container](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/maintaining-docassemble#updates-to-the-docassemble-container).
   You will use these commands: `docker stop, pull, run,` and `prune`. 
    - If you [updated the nginx timeout to 5 minutes](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation/#increase-nginx-timeouts-to-5-minutes)
      earlier, you will need to redo it.
    - This will pull the latest version of each package unless specific version of a package was pinned via PyPI.
  - When to update - If the [Docassemble Change Log](https://docassemble.org/docs/changelog.html) has an update
    that says "**System upgrade required**," rebuild the Docker container after updating the Docassemble web
    app. Otherwise, about every 6 months.

### Docassemble web app

This is the Docassemble software users and developers most often interact with through interviews and the
Playground.
 - How to monitor - If you can get to the Playground, My Interviews, or an individual program, then it's working.
   [UptimeRobot](https://uptimerobot.com/) can be used to receive server up/down notifications by email.
 - How to update - Log in as an administrator. Go to Package Management. Click the "Upgrade" button. See
   [Updates to the Docassemble frontend](https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/maintaining-docassemble#updates-to-the-docassemble-frontend)
 - When to update - Every few weeks or as needed if there is a critical bug fix or a desired new feature.

### Packages

These are the program code, frameworks, and utilities that run on the Docassemble platform. The Assembly Line package
is an example used by many programs.
 - How to monitor - Monitors like [httpstatus.io](https://httpstatus.io/) or homegrown programs can check if individual
   programs are running. Note: These tools just check whether individual interview pages are reachable. Learn about using
   [ALKiln](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/alkiln/) to do automated
   start-to-finish testing and monitoring.
 - How to update - You can
   [update Assembly Line packages individually](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/alkiln/),
   or you can use the [ALDashboard](https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/alkiln/).
   You can also update individual packages on the Package Management screen.
 - When to update - Every few weeks or as needed if there is a critical bug fix or a desired new feature.
