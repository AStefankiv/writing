# 📚 Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Option 1 - Install via APT](#option-1---install-via-apt-from-ubuntu-repositories-beginner-friendly)
- [Option 2 - Install Using NVM](#option-2---install-using-node-version-manager-nvm)
- [Option 3 - Install Using NodeSource PPA](#option-3---install-using-nodesource-ppa)
- [Which method should I Use?](#which-method-should-i-use)
- [Next Steps](#next-steps)


# **Install and Configure Node.js + npm on Ubuntu 20.04: Step-by-step Guide**
## **Introduction**

[Node.js](https://nodejs.org/en/about) is a cross-platform, open-source JavaScript runtime environment that can run on server-side. [NPM](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) (Node Package Manager) is a default package manager for Node.js.
By the end of this tutorial, you will have Node.js and npm installed using three different methods — whether you want the latest version, multiple versions, or long-term support (LTS) versions.
## **Prerequisites**
Before installing anything, make sure your system is up to date. Run this command directly in your Ubuntu terminal:
```bash
sudo apt update && sudo apt upgrade -y
```
This ensures your system has the latest version of packages.

## **Option 1 - Install via APT from Ubuntu Repositories (Beginner-Friendly)**
This is the most popular way to get the latest version of Node.js and npm.

1. **Install Node.js and npm**
```bash
sudo apt install -y nodejs
```

2. **Verify installation**
Check that Node.js is installed:
```bash
node -v
```
You will likely get Node.js 16.z.z or 18.w.w

For npm, run:
```bash
npm -v
```
You will likely get npm 8.z.z to 10.w.w

![Screenshot showing successful installation of Node.js and npm](media/check_node_npm_installed.png)

> ⚠️ **Warning:** If npm fails to install, run `sudo apt install npm`

You have successfully installed **Node.js** and **npm** using the apt method.

---

## **Option 2 - Install Using Node Version Manager (NVM)**
[NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#about) allows you to install and switch between different versions of Node.js. Initially, you will get the latest versions for both Node.js and npm.

> 💡 **Tip: Why use NVM?**
>
> **NVM** is the preferred tool for developers because it allows you to **switch between Node.js versions** without affecting your system-wide (global) installation.  
>  
> This is especially useful when working on **multiple projects** that require different Node versions.


1. **Install NVM**
Run the following command:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
In your terminal, you'll see a message like this:
```bash
=> => Compressing and cleaning up git repository

=> nvm source string already in /home/labber/.bashrc
=> bash_completion source string already in /home/labber/.bashrc
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

**Restart your terminal or run:**
```bash
source ~/.bashrc
```

> ⚠️ **Warning:** This command downloads and runs a script from the internet. Only use official sources like the [NVM GitHub](https://github.com/nvm-sh/nvm). You can inspect the script [here](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh) before running it.

2. **Install Node.js with NVM:**
Install the latest [Long Term Support](https://nodejs.org/en/blog/release/v20.9.0) (LTS) version of Node.js:
```bash
nvm install --lts
```
```bash
nvm use --lts
```

3. **Choose any other Node.js version**

To view the list of available versions, run:

```bash
nvm list-remote
```
Example output
```bash
        v22.4.1
        v22.5.0
        v22.5.1
        v22.6.0
        v22.7.0
        v22.8.0
        v22.9.0
        v22.10.0
        v22.11.0   (LTS: Jod)
        v22.12.0   (LTS: Jod)
        v22.13.0   (LTS: Jod)
        v22.13.1   (LTS: Jod)
->      v22.14.0   (Latest LTS: Jod)
        v23.0.0
        v23.1.0
        v23.2.0
        v23.3.0
        v23.4.0
```
Choose the version and install it:
```bash
nvm install v18.20.0
```
View the list of your installed Node.js versions:
```bash
nvm list
```
```bash
       v18.20.0
->     v19.9.0
       v22.14.0
default -> lts/* (-> v22.14.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v22.14.0) (default)
stable -> 22.14 (-> v22.14.0) (default)
```
The current version is marked with an arrow sign **->**, occasionally followed by some name aliases.

There are different aliases for the [long-term support releases](https://nodejs.org/en/about/previous-releases):
```bash
lts/* -> lts/hydrogen (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.2
lts/gallium -> v16.19.0 (-> N/A)
lts/hydrogen -> v18.13.0 (-> N/A)
```
You can install Node.js versions based on aliases as well. For example, to install the latest long-term support version, **Jod**, run this command:

```bash
nvm install lts/jod
```
```bash
Downloading and installing node v22.14.0...
. . .
Now using node v22.14.0 (npm v10.9.2)
```
You can switch any other version, using ```nvm use```:
```bash
nvm use v18.20.0
```
```bash
Now using node v18.20.0 (npm v10.5.0)
```
## **Option 3 - Install Using [NodeSource PPA](https://github.com/nodesource/distributions/blob/master/README.md)**
If you need a different version of Node.js, use a PPA (personal package archive) developed by NodeSource. PPAs have more available versions than default Ubuntu repositories. Node.js v20.x is available as of April 2025

1. **Choose your version**
Decide what version you want. For example, if you want Node.js 18.x, you'll use `setup_18.x`.

2. **Download the setup script**
Run the following command to download the setup script:
```bash
cd ~
curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
```
3. **(Optional) Check the script**
Check the contents of the script before running it.

```bash
nano nodesource_setup.sh
```
You will see:
```bash
Logger Function
log() {
  local message="$1"
  local type="$2"
  local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
  local color
  local endcolor="\033[0m"

  case "$type" in
    "info") color="\033[38;5;79m" ;;
    "success") color="\033[1;32m" ;;
    "error") color="\033[1;31m" ;;
    *) color="\033[1;34m" ;;
  esac
```
Press Ctrl + X to exit.

4. **Run the setup script**
Execute the setup script:
```bash
sudo bash nodesource_setup.sh
```
5. **Install Node.js + npm**
Next, install Node.js:
```bash
sudo apt install nodejs -y
```
6. **Verify installation**
Check that Node.js and npm are installed:
```bash
node -v
npm -v
```
Output:
```bash
v18.x.x
```

> ✅ **Success!** You have successfully installed Node.js and npm. Try building your first CLI app, install a popular framework like Express.js, or explore npm packages to extend your project.

## **Visual Summary - Node.js Installation Methods**

The diagram below provides a quick overview of the three different ways to install Node.js and npm on Ubuntu:

![node_npm_ubuntu](media/node_npm_ubuntu.png)

## **Which method should I Use?**

| Method             | Best for...                                 | Notes                                  |
|--------------------|---------------------------------------------|----------------------------------------|
| **Apt (Option 1)** | Beginners, simple installs                  | May not have the latest version        |
| **NVM (Option 2)** | Developers who need multiple Node versions  | Lightweight and flexible               |
| **NodeSource (Opt 3)** | Specific versions without using NVM     | Good for controlled version installs   |

> 💡 **Tip:** Only use **one installation method** at a time. If you mix `apt`, `nvm`, and `nodesource`, you might run into version conflicts.
- To remove previous installs:
```bash
  sudo apt remove nodejs npm
```

## Next Steps

Now that you have Node.js and npm installed, try:

- Creating your first Node.js script: `hello.js`

- Installing Express: `npm install express`

- Exploring npm packages: [npmjs.com](https://www.npmjs.com/)

- Creating a CLI tool or a REST API

Happy coding! 🚀