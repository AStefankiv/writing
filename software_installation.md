# How to Install and Configure Node.js + npm on Ubuntu 20.04
**Introduction**

[Node.js](https://nodejs.org/en/about) is a cross-platform, open-source JavaScript runtime environment that can run on server-side. [NPM](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) (Node Package Manager) is a default package manager for Node.js.
By the end of this tutorial, you will have Node.js and NPM installed and ready to start developing applications in JavaScript.
## Prerequisites
Before installing anything, make sure your system is up to date. Run this command directly in your Ubuntu terminal:

```sudo apt update && sudo apt upgrade -y```

This ensures you have the latest version of packages on your Ubuntu system.

## Option 1 - Install Node.js with Apt (recommended)
This is the most popular way to get the latest version of Node.js and NPM.

**Step 1 - Install Node.js and NPM**

```sudo apt install -y nodejs```

**Step 2 - Check if the installation was successful**

```node -v```

You will get Node.js 16.z.z or 18.w.w

```npm -v```

You will get NPM npm 8.z.z to 10.w.w

![check_node_npm_installed](check_node_npm_installed.png)

>If NPM failed to install, run ```sudo apt install npm```

You have successfully installed **Node.js** and **NPM**

## Option 2 - Install Node.js with [Node Version Manager](https://github.com/nvm-sh/nvm?tab=readme-ov-file#about)
This way of installing Node.js allows you to intall and switch between many different versions of Node.js. Initially, you will get the latest versions for both Node.js and NPM.

**Step 1 - Install NVM**

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash```

In your terminal, the last lines will look something like this:

```
=> => Compressing and cleaning up git repository

=> nvm source string already in /home/labber/.bashrc
=> bash_completion source string already in /home/labber/.bashrc
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Then restart your terminal or run:

```source ~/.bashrc```

**Step 2 - Install Node.js with NVM:**

```nvm install --lts```

```nvm use --lts```

You will get the latest Node.js version.

**Step 3 - Choose any other Node.js version**

See the list of available versions (it's much longer):

```nvm list-remote```

Example output
```
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

```nvm install v18.20.0```

View the list of your installed Node.js versions:

```nvm list```

```
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
```
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

```nvm install lts/jod```

```
Downloading and installing node v22.14.0...
. . .
Now using node v22.14.0 (npm v10.9.2)
```

You can switch any other version, using ```nvm use```:

```nvm use v18.20.0```

```
Now using node v18.20.0 (npm v10.5.0)
```