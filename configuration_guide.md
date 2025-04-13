# How to Configure a `.gitignore` File

## introduction (The role of gitignore, simple example, what you will learn)
The **.gitignore** file tells [Git](https://git-scm.com/) which files or folders to ignore when committing changes to your repository. Think of .gitignore as a **do-not-pack** list when you’re preparing your project for sharing—it keeps out files that are unnecessary, sensitive, or too large.

For example, if your project uses an API key saved in a **.env** file, you don’t want that file uploaded to GitHub where others can see it. You can add **.env** to your **.gitignore** file to keep it private.

By the end of this guide, you'll learn:
- What **.gitignore** is and how it works.
- How to create and configure a **.gitignore** file
- What kinds of files should (and shouldn't) be ignored

## Prerequisites (Code editor, basic JavScript or any other language knowledge)
To get started, make sure you have the following:
- A code editor — such as [Visual Studio Code](https://code.visualstudio.com/) to create and edit project files.
- Basic programming knowledge — such as JavaScript, Python, or any other language to create a project
- Basic Git skills — such as initializing a repository, committing changes, and pushing to GitHub. If you're new to [GitHub](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git), go to [Github Hello World guide](https://docs.github.com/en/get-started/start-your-journey/hello-world#introduction) to get started.

## Syntax

## What files can be ignored

## When gitignore not work

## Example guide (Create a React project, create .gitignore, add some files)

## Best Practices
- Keep .gitignore organized by file type or tool
- Use a template (like GitHub’s language-specific ones)
- Don’t rely on .gitignore to protect sensitive data (use .git-crypt, .env.local, etc.)