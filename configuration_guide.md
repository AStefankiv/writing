# How to Configure a `.gitignore` File

## introduction
The **.gitignore** file specifies intentionally untracked files that [Git](https://git-scm.com/) which files or folders to ignore when committing changes to your repository. Think of .gitignore as a **do-not-pack** list when you’re preparing your project for sharing—it keeps out files that are unnecessary, sensitive, or too large.

For example, if your project uses an API key saved in a **.env** file, you don’t want that file uploaded to GitHub where others can see it. You can add **.env** to your **.gitignore** file to keep it private.

By the end of this guide, you'll learn:
- What **.gitignore** is and how it works.
- How to create and configure a **.gitignore** file
- What kinds of files should (and shouldn't) be ignored

## Prerequisites
To get started, make sure you have the following:
- A code editor — such as [Visual Studio Code](https://code.visualstudio.com/) to create and edit project files.
- Basic programming knowledge — such as JavaScript, Python, or any other language to create a project
- Basic Git skills — such as initializing a repository, committing changes, and pushing to GitHub. If you're new to [GitHub](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git), go to [Github Hello World guide](https://docs.github.com/en/get-started/start-your-journey/hello-world#introduction) to get started.

## Syntax
Here's a concise cheat-sheet for `.gitignore` patterns:
- `*.txt` — ignore all `.txt` files
- `example.txt` — ignore specific file `example.txt`
- `!example.txt` — do not ignore `example.txt` file (even if `*.txt` is ignored)
- `examples/` — ignore entire `examples` directory
- `example*` — ignore all files starting with `example`
- `example/*.txt` — ignore all `.txt` files inside the `example` folder
- `/example.js` — ignore `example.js` only in the root directory
- `**/example.txt` — ignore example.txt in any subdirectory
- `#` — lines starting with `#` are comments

## What files can be ignored
In your `.gitignore` file, exclude files that are created during development, or build process. These files typically won't be edited and they may clutter your repository. Here's a common list of files and repositories to ignore:
### Build Artifacts
- build/​
- dist/​
- *.class, *.o, *.exe​

### Dependencies
- node_modules/​
- vendor/​
- .venv/​

### System & IDE Files
- .DS_Store (macOS)​
- Thumbs.db (Windows)​
- .vscode/, .idea/​

### Sensitive Configurations
- .env​
- config.json, secrets.yml​

### Logs & Temp Files
- *.log​
- *.tmp, *.swp​

## What You Should Not Ignore
Do not include **source code files** (like .js, .py, .java), **configuration files** necessary for the application to run (e.g., App.js, index.html, package.json), and **documentation files** (such as README.md) in your `.gitignore`.

## When gitignore will not work
### Syntax mistake
Ensure that `.gitignore` syntax is correctly formatted. You may forget to add a slash (/), not account for case sensitivity etc.

### File already committed
If a file was committed to the repository before being added to .gitignore, Git will continue to track it. To stop tracking the file:​
```bash
git rm --cached filename
```

### Global `.gitignore` settings
Git allows to configure `.gitignore` across all your repositories (globally). If a file is being ignored, it's possible that it's listed in your global `.gitignore`. To check if a global `.gitignore` is configured:
```bash
git config --get core.excludesfile
```
This command will show the path to your global `.gitignore` file. Review this file to see if it contains files affecting your current repository.

To set up a global `.gitignore`, run the following command:
```bash
git config --global core.excludesfile ~/.gitignore_global
```
This sets `~/.gitignore_global` as your global ignore file. Ensure that you create this file and add the desired ignore files to it.​

## Example guide
Let's create a React.js sample project to guide you through the process of `.gitignore` file configuration:
1. Create a React App
Initialize a new React project using Create React App:
```bash
npx create-react-app my-react-app
cd my-react-app

```

2. Review the Default `.gitignore`
When you `Create React App`, it generates a `.gitignore` file in the project's root directory. The file typically contains default files to ignore:
- node_modules/​
- build/​
- .env.local, .env.development.local, .env.test.local, .env.production.local​
- npm-debug.log*, yarn-debug.log*, yarn-error.log*​

3. Customize `.gitignore`
Depending on your desired tools, you may add extra files. For example:
# Optional environment variables
.env

# macOS system files
.DS_Store

# IDE directories
.vscode/
.idea/

It will keep your repository clean, hide non-essential files and API keys.

4. Apply Changes to Tracked Files
If you've added new files to `.gitignore` but Git is still tracking those files, remove them from the index:
```bash
git rm -r --cached .
git add .
git commit -m "Update .gitignore to exclude unnecessary files"
```

## Best Practices
- Keep .gitignore organized by file type or tool
- Use a template (like GitHub’s language-specific ones)
- Don’t rely on .gitignore to protect sensitive data (use .git-crypt, .env.local, etc.)

## Summary
Now you know how to keep your Git repo clean and secure using `.gitignore`. Whether you're working solo or collaborating, using `.gitignore` properly can prevent headaches and safeguard sensitive data. Happy coding!

## Resources:
- https://docs.github.com/en/get-started/git-basics/ignoring-files
- https://techblost.com/how-to-setup-gitignore-file/