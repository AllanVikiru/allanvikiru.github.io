# [My Portfolio](https://allanvikiru.github.io)

Based on the [Resume](https://startbootstrap.com/theme/resume/) theme for [Bootstrap](https://getbootstrap.com/) created by [Start Bootstrap](https://startbootstrap.com/).

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/AllanVikiru/allanvikiru.github.io/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-resume.svg)](https://www.npmjs.com/package/startbootstrap-resume)

## Setup

To use this template, download from one of the following sources:

1. [Download the latest release on Start Bootstrap](https://startbootstrap.com/theme/resume/)
2. Install using npm: `npm i startbootstrap-resume`
3. Clone the repo: `git clone https://github.com/StartBootstrap/startbootstrap-resume.git`
4. [Fork, Clone, or Download on GitHub](https://github.com/StartBootstrap/startbootstrap-resume)

## Program Execution

> Using HTML, CSS, JS

After downloading, simply edit the HTML and CSS files included with `dist` directory.

To preview the changes you make to the code, you can open the `index.html` file in your web browser.

> Using NPM 

1. Prerequisites

[Node.js](https://nodejs.org/en/download)

[NPM gh-pages package](https://www.npmjs.com/package/gh-pages)

2. Steps for installation

- Clone the source files of the theme and navigate into the theme's root directory. 

- Run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. `package.json` lists the  scripts that are included.

- Use this [tutorial](https://www.npmjs.com/package/gh-pages) to set up on GitHub Pages using the `gh-pages` package.

- `npm run build` builds the project - this builds assets, HTML, JS, and CSS into *dist*

- `npm run build:assets` copies the files in the *src/assets/* directory into *dist*

- `npm run build:pug` compiles the Pug located in the *src/pug/* directory into *dist*

- `npm run build:scripts` brings the *src/js/scripts.js* file into *dist*

- `npm run build:scss` compiles the SCSS files located in the *src/scss/* directory into *dist*

- `npm run clean` deletes the *dist* directory to prepare for rebuilding the project

- `npm run start:debug` runs the project in debug mode

- `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in *src*

- The GitHub Action `deploy.yml` in `.github/workflows` is used to set the generated files in the `dist` folder to the [gh-pages](https://github.com/AllanVikiru/allanvikiru.github.io/tree/gh-pages) branch. Be sure to set the branch the site is built on in your repo settings.
