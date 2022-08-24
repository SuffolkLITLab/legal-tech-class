---
slug: installing-production-app
title: Installing a docassemble app on your production server
sidebar_label: Installing a docassemble app on your production server
---

Installing your app involves three basic steps:

1. [Putting the app into a
   package.](https://docassemble.org/docs/packages.html#playground). It's best
   to store the package on Github.
2. Installing the app system-wide.
3. Creating a shortcut `alias` to the app so that you can view it on the
   "Available interviews" /list menu and run it via /start/`alias`.

## Quick start

Before installing the package, you will need:

1. The URL to the package on GitHub.
1. The name of the interview YAML file.
1. The desired "alias" or shortcut name for the package.

**The interview author should be able to provide all three pieces of information
to the server administrator before asking for the app to be installed.**

## Installing the app system-wide

To install a package, visit the "Package Management" page on your docassemble
  server (you can reach it via Menu | Package Management, or the /updatepackage
  page on your server.
)

Copy the Github link to your package into the "Github URL" input. It should look
something like this: `https://github.com/gbls/docassemble-MAEvictionDefense`
(without any trailing `/`).

Now, scroll down and click on the large "Update" button. Although this is marked
"Update," it also serves to install a package for the first time.

## Running the installed package

Now that you've installed the package, how do you run it? You will need to
identify two things:

1. The internal/Python name of the package that corresponds to your package from
   GitHub.
1. The name of the YAML file(s) that contains the runnable logic of the package.

The internal name of the package is very similar to the name of the GitHub
repository, except that you replace the `-` with a `.`. For example, the package
https://github.com/gbls/docassemble-MAEvictionDefense becomes 
`docassemble.MAEvictionDefense`. Package names are case sensitive. If you used
the docassemble playground to create your package, it will always start with
"docassemble" as the beginning of the package name.

The YAML file name is simply the name that the file has in your playground.
If this is someone else's package, you will need to do a small amount of dective
work. 

Visit the GitHub page for the package. Each docassemble package has the same
folder structure. Navigate by clicking through the folders as follows, replacing
"PackageName" with the name of your package.

```
docassemble
  +---[PackageName]
    +----data
      +---questions
```

For example, for the MAEvictionDefense package, the folder contents
look like this: 
https://github.com/GBLS/docassemble-MAEvictionDefense/tree/master/docassemble/MAEvictionDefense/data/questions

For some packages, there is only one YAML file. If there is more than one, you
can either ask the package author which one should be run, or click through a
few and pick the likeliest candidate. For the MAEvictionDefense package, the
main interview file is named "eviction.yml".

For a package named `docassemble.MAEvictionDefense` and a YAML file named
`eviction.yml`, the link to run the interview is
`https://[docassemble.example.com]/run/MAEvictionDefense/eviction`.

## Creating a permanent shortcut link to the package

If you want, you can add a [customizable, short
alias](https://docassemble.org/docs/config.html#dispatch) for the interview.

This adds the interview to the /list URL on the server, the "Available
interviews" menu option, and allows you to advertise a nicer URL, like
`https://docassemble.example.com/start/alias`.

This gives you a lot of flexibility to repackage your app later, which
makes it a good idea if you ever want to share the link on a different
website.

You will use the same information needed above: the **package name**
and the **YAML filename**.

Visit the docassemble configuration page (/config) on your server.

Scroll down and look for an existing `dispatch` section in your
configuration file. If you don't see one, create a new one that looks
like this:

```
dispatch:
  alias: docassemble.MyPackageName:data/questions/interview_name.yml
```

Replace "MyPackageName" and "interview_name.yml" with the package name
and the YAML filename for your package, respectively. Now, when someone
visits "https://docassemble.example.com/start/alias" they will be redirected to the
"interview_name.yml" interview.

For example, for the MAEvictionDefense package, the configuration looks like
this:

```
dispatch:
  eviction: docassemble.MAEvictionDefense:data/questions/eviction.yml
```

And the interview can be run via `https://interviews.gbls.org/start/eviction`.

## Updating an app that is already installed

If the app has already been installed on the server, you do not need to get the
GitHub URL again. Just scroll down the /updatepackage page until you see the
name of the package (remember, it will be docassemble.PackageName). Then click the
"update" button next to the package.

If you do not see the "update" button but the package is listed, then use the 
GitHub URL as described above.