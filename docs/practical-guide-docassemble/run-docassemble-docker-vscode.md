---
slug: run-docassemble-docker-vscode
title: Setup & Run Docassemble with Docker and VS Code
sidebar_label: Docassemble with Docker and VS Code
---

Author: [Dele Omotosho](https://github.com/deletosh)

In this section, we will setup our system to write and run docassemble without using the playground or a server.

This allows us to use a regular text editor (we will use Visual Studio Code), save our work in a way that allows us to collaborate on interviews with colleagues.

A big bonus too is, get an easier way to track MS docx templates next to our interview files docassemble.

At the end of this guide, you will design an interview this way:

![Designing docassemble interview in VS Code](https://i.imgur.com/aaoZL9h.gif)

This guide has 6 sections:
-   **Install Windows Subsystem for Linux (WSL 2)** (skip if you're on Mac or Linux)
-   **Install Docker**
-   **Install GitHub and Git for file control and collaboration**
-   **Install and configure Visual Studio Code (VS Code)**
-   **Install Python and docassemble command-line tool**
-   **Write and collaborate on your docassemble interview**

Let's jump in.

## Install Windows Subsystem for Linux (WSL 2)

-   Open Command Prompt as an Administrator ![](https://i.imgur.com/1g0fyiS.gif)
-   In your command prompt, type `wsl --install -d  Ubuntu-16.04` and complete
    this installation 
![](https://i.imgur.com/hUsbNKM.gif)

-   At the end of this process, it asks you to create your credentials
    ![](https://i.imgur.com/HWtxfbN.gif)

-   Now you have a Linux (Ubuntu 16.04) operating system installed inside
    windows.

-   To run this later, from the start menu, type **Ubuntu 16.04** and open it
    (it will look like the windows command line)
    ![](https://i.imgur.com/kAmYdR7.gif)

## Install Docker
Before continuing with this, confirm your systems [meets the minimum requirement to run docker](https://docs.docker.com/desktop/install/windows-install/#system-requirements).

### Docker Installation
-   Go to [https://docs.docker.com/desktop/install/windows-install](https://docs.docker.com/desktop/install/windows-install)

-   Click **Download Desktop for Window**

-   Run the downloaded installation (leave all the default settings)
    ![](https://i.imgur.com/HRB11zm.gif)
    
-   If you are on MacOS, install the appropriate version of Docker instead of the Windows version. 

-   Follow through the installation. When it's complete, restart your computer if you are using Windows.

### Confirm docker works with WSL 2

-   Open docker and and confirm you the **Use the WSL 2 based engine** is
    checked. This step can be skipped on MacOS. ![](https://i.imgur.com/BxkFGO4.gif)

-   Open your terminal (Ubuntu 16.04) or your MacOS Terminal and type `docker -v`, see the proper
    docker version in the terminal (Docker needs to be running for you to try
    this). ![](https://i.imgur.com/wv0mNt7.png)

## Install GitHub and Git for file control and collaboration

-   Go to https://desktop.github.com to download GitHub Desktop.

-   Run the downloaded file, when the installation is complete you should see this screen: ![](https://i.imgur.com/scIdBqU.png)

You have 2 options:

If you don't have a GitHub account, click **Create your free account** or [do it here](https://github.com/signup), then continue to the next step.

With your new (or existing) GitHub account, click the **Sign in to GitHub.com**. You will be redirected to a new page to login

When that completed, it brings us back to the Git configuration screen:

![](https://i.imgur.com/p3gCEGD.png)

## Install and Configure Visual Studio Code (VS Code)

-   Go to [https://code.visualstudio.com](https://code.visualstudio.com) and hit the "Download for X" button,
    the "X" will be the name of your operating system.

-   Open the downloaded file and follow through there instructions. Here's a
    step-by-step for [in-depth guide on configuring VS Code for legal
    automation](https://deletosh.com/connect-vscode-github)
    
-   In MacOS, there is an additional step to get `code` working from the command line. Per [Visual Studio's Documentation](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line), Open the **Command Palette** (`Cmd+Shift+P`) and type `shell command` to find the `Shell Commmand: Install 'code' command in PATH`. Run this command.   

### Configure VS Code to use WSL 2
Skip this step on MacOS
-   Open VS Code's preferences ![](https://i.imgur.com/oHuFEuT.gif)
-   Open the JSON settings and add the following to the last line of the existing content on that file: `"terminal.integrated.shell.windows": "C:\\Windows\\System32\\wsl.exe"` and **File** \> **Save**  
    ![](https://i.imgur.com/LRiO87R.gif)

(Notice: I added a comma before adding this line)

### Test docker works inside VS Code
-   With VS Code still open, click **Terminal** \> **New Terminal**
-   In the terminal, type `docker -v` we should see the same result as we saw in WSL (Ubuntu 16.04) or your MacOS Terminal earlier. 
![](https://i.imgur.com/LRiO87R.gif)

## Install Python and docassemble command-line app
Docassemble is written in the Python programming language. To make docassemble work offline, we need to install Python.

### Install Python on WSL 
Skip this step on MacOS
-   Open your WSL ![](https://i.imgur.com/kAmYdR7.gif)
-   Type `sudo apt update && update` 
![](https://i.imgur.com/O6eThhR.gif)
-   When that completes type: `sudo apt install -y python3 python3-pip ipython3`
    ![](https://i.imgur.com/x18BSTP.gif)
-   In your WSL, type: `echo "alias python='/usr/bin/python3'" >> ~/. bashrc` (you get no response)
-   Next, type: `echo "alias pip='/usr/bin/pip3'" >> ~/.bashrc` (you get no
    response)
-   Close and re-open your WSL

### Install Python on MacOS
Skip if using Windows. 
-   Browse to [https://www.python.org/downloads/](https://www.python.org/downloads/) to find the appropriate version of Python. If you are using Apple Silicon, be sure to download the appropriate version.
-   Install the downloaded version.
-   In a terminal window, type `curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py`. This will download an install file for `python3-pip`. 
-   Then run `python3 get-pip.py`. Pip is now installed. 

### Install docassemble command line
-   With your WSL still open, type: `pip install docassemblecli`
    ![](https://i.imgur.com/hUjb4s9.gif)

We've now installed all the tools that allows us to write and collaborate on
docassemble files offline.

Let's write a sample interview.

## Write and collaborate on your docassemble interview
This process assumes you will collaborate on your interview using version control like Git and GitHub. [The official documentation describes this flow](https://docassemble.org/docs/development.html#versioncontrol)

We will use a sample GitHub interview package I've setup as a starter for your project.

Here’s how:

-   Open GitHub desktop
-   Click **Clone a repository from the Internet...** select **URL**, in the text box enter: **deletosh/docassemble-premier** then click **Clone**.
    ![](https://i.imgur.com/tZEU7NF.gif)
-   To edit the files look like, hit **Repository** > **Open in Visual Studio**
    ![](https://i.imgur.com/OUTJCFu.gif)
-   With our VS Code open, confirm we can run an interview on our computer.  Click through **docassemble** > **template** > **questions** > **data** then open **sample.yml**

![](https://i.imgur.com/AlMV6Ce.gif)

-   Open the terminal. Click **Terminal** \> **‌New Terminal**
    ![](https://i.imgur.com/qmHkIBT.gif)
-   Type `docker-compose up -d` This starts the docassemble server locally
    (Note: this command needs a fast connection — it will take some time the first time you run it)
	  ![](https://i.imgur.com/GF8SmxY.gif)
-   Open your browser and go to `http://localhost`. You might see this
    ![](https://i.imgur.com/VaFLb62.png)
-   After a few minutes, you should see Docassemble running.
-   Sign in with the default password:
    -   username: admin@admin.com
    -   password: password 
![](https://i.imgur.com/NMMUBUU.gif)

(the first time you login, it will have you change your password)

### Run your first offline docassemble

Our main setup is now complete. Let's test our first interview.
First, go to Docassemble running on your system. In your browser, type **http://localhost**, in the navigation section, click **My Profile**.

![](https://i.imgur.com/Wq4KE1X.png)

On the next page, go to the **Other settings** \> **API keys**
![](https://i.imgur.com/JpBul6N.png)

Click **‌Add a New API Key** and give it any name. Then click **Create**.

Finally, copy the resulting key
![](https://i.imgur.com/FLTtjRn.gif)

Now, go back into VS Code with the project we opened.

Type `code ~/.docassemblecli`, this opens a new tab in VS Code.

Paste:
```
apikey: XXXXXXX
apiurl: http://localhost
name: localhost
```

Replace **XXXXXXX** with the API you created locally above
![]]()

Paste the API code you created in the previous section in the **apikey**. Save the file or `Ctrl + S`

Next, let's rename the **docassemble** \> **template** file to
**docassemble-premier**

![](https://i.imgur.com/GSOfFNJ.gif)

With the **sample.yml** file open, type:

`dainstall --norestart --playground ../docassemble-premier`

You should see **Installed**.

You can now go back to the browser at `http://localhost`, then go to the **‌Playground**

Let's run the code.

![](https://i.imgur.com/aaoZL9h.gif)

When we make changes to our files on VS Code, we need to re-run the `dainstall --norestart --playground ../docassemble-premier` in the terminal to see the changes reflected.

## Points to have on mind while writing interviews locally

here are some things you need to keep in mind with developing Docassemble
locally:

-   Every docassemble project is self-contained and you need to re-start Docker in each project.

-   When you start a new project, you need to add and re-create your API keys.  **You cannot use the API key you've added before**.

