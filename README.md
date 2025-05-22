<!--
TO REMEMBER:
ES Lint extension: works only if there is a eslint configuration in your project, so it provides the
connection between vscode (developer's IDE) and your project. Without the extension, you would have to
manually run 'eslint' from the command line to check for errors.

Prettier extension: while it is a universal or global formatting tool for you whenever you code, having
both the prettier configuration and prettier extension gives you the benefit of custom project-limited
configuration and auto format on save. Without the extension, i think it won't automatically format your code.

So in conclusion: the .prettierrc, and .eslintrc are configurations for your project so that all of the
developers have the generic or generally accepted/set configuration throughout the whole CI/CD pipeline.
Both extensions will automatically read your configurations and run with those.
 -->

# The NotePad. 📔

![Static Badge](https://img.shields.io/badge/success-green?logo=Vercel&label=vercel&labelColor=%231A1A1A)

![image](/public/Website%20Sample%20Img.png)

## Description

"The NotePad" is a website designed as a personal project to hone and showcase the developer's front-end web development skills. It serves as a resource hub for various front-end technologies, font pairings, color palettes, JavaScript snippets, and more. The site aims to benefit developers seeking quick references and insights into these areas.

## Technologies Used

- NextJS
- Tailwind CSS

## How to Run

- Check if `nvm`, `npm`, and `node` or whatever you're using is updated or installed.

  > [!NOTE]
  >
  > To install npm, you need to first download and install Node.js, as npm comes bundled with Node.js.

  1. node version managers allows you to install and switch between multiple versions of `Node.js` and `npm` on your system so you can test your applications on multiple versions of npm to ensure they work for users on different versions. [reference](https://github.com/nvm-sh/nvm?tab=readme-ov-file#intro)

  ```
  # for this one, I'll be using nvm. make sure to check for the latest version
  # to install
  $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  ```

  - try this command, it should return "nvm". if not, try closing the terminal and open again, if the issue persists, proceed to the next step

  ```
  $ command -v nvm
  ```

  - if you don't see anything or it returns an error: "command not found". check the [reference](https://github.com/nvm-sh/nvm?tab=readme-ov-file#intro) for more info.

  ```
  # source the nvm script depending on which shell your using
  $ source ~/.bashrc

  # to check version
  $ nvm -v
  ```

  2. updating/installing _node_

  ```
  # to install/update node
  $ nvm install --lts

  # to check version/installed
  $ nvm -v
  ```

  3. _npm_ should be installed as well after installing node

  ```
  # to check version
  $ npm -v

  # to update/install npm
  $ npm install -g npm@latest
  ```

4. Clone the project into your local machine.

```
# if cloning to a premade directory
$ git clone thisisyourpath@github.com .

# otherwise
$ git clone thisisyourpath@github.com newfolder/
```

- Install packages.

```
$ npm i
```

- Run the project.

```
$ npm run dev
```

## Pages Overview

- Homepage
  - Introduction to "The NotePad" and brief descriptions of available pages.
- Developer Page
  - Details about the developer and showcased projects.
- Front-End Blueprints
  - Steps to start projects using different technologies (e.g. React, Gatsby, NextJS).
- Font Pairings
  - Display various font pairings suitable for different use cases.
- Color Palettes
  - Showcased color combinations for project design inspirations.
- JavaScript Snippets
  - Collection of JavaScript-related questions and solutions for common scenarios.

---

## Linting/Formatting ✨

> [!NOTE]
>
> When you run 'next lint', you'd be automatically lead to installing `eslint` and `eslint-config-next`.
> Packages:

- `eslint` <small>[source](https://eslint.org/)</small>
- `eslint-config-next` <small>[source](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)</small>
- `eslint-config-prettier` <small>[source](https://github.com/prettier/eslint-config-prettier)</small>
- `prettier` <small>[source](https://prettier.io/docs/en/install.html)</small>
- `prettier-plugin-tailwindcss` <small>[source](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)</small>

**Installation:**

1. Run commands depending on your `package.json`.

```bash
# terminal
npm run lint

next lint
```

> - Basically it's the same, it just depends on what command and package manager you want to run.
> - This will also create a new legacy file `.eslintrc.json` and add configurations depending on what you have chosen on the prompt ([reference](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)).
> - It will also depend on you if you want to use the legacy version or the new version for your eslint configuration file. Eslint website says that legacy is already deprecated. ([new](https://eslint.org/docs/latest/use/configure/configuration-files)) ([legacy](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated))

2. Install `prettier` and `prettier-plugin-tailwindcss`.

```bash
# terminal
npm i -D prettier prettier-plugin-tailwindcss
```

> [!NOTE]
>
> `-D` is shorthand for `--save-dev`.

3. Create `.prettierrc.json` file and add your configurations.

**Sample:**

```json
{
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "semi": true,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

4. Install `eslint-config-prettier` and update `.eslintrc.json` configurations.

```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

> [!NOTE]
>
> This may depend on what you have chosen in the first prompt. ([reference](https://nextjs.org/docs/pages/building-your-application/configuring/eslint))

This will make `eslint` solely focus on code quality, and `prettier` to handle all formatting.

> [!TIP]
> It depends on you if you want to add `eslint-plugin-prettier` to add prettier formatting as an eslint rule or not.

🚀 [kerbethecoder](https://github.com/kerbethecoder)  
📫 krby.cnts@gmail.com  
📌 July 21, 2023

Happy coding! :philippines:
