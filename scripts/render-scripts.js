'use strict';
const fs = require('fs');
const packageJSON = require('../package.json');
const path = require('path');
const sh = require('shelljs');

module.exports = function renderScripts() {
    const scriptsSrcPath = path.resolve(path.dirname(__filename), '../src/js/scripts.js');
    const scriptsDestPath = path.resolve(path.dirname(__filename), '../dist/js/scripts.js');

    const previewsSrcPath = path.resolve(path.dirname(__filename), '../src/js/previews.js');
    const previewsDestPath = path.resolve(path.dirname(__filename), '../dist/js/previews.js');

    const formsSrcPath = path.resolve(path.dirname(__filename), '../src/js/forms.js');
    const formsDestPath = path.resolve(path.dirname(__filename), '../dist/js/forms.js');

    const copyright = `/*!
    * ${packageJSON.title} based on Start Bootstrap v${packageJSON.version} (${packageJSON.homepage})
    * Copyright 2013-${new Date().getFullYear()} ${packageJSON.author} & ${packageJSON.contributors}
    * Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
    */
    `
    const scriptsJS = fs.readFileSync(scriptsSrcPath);
    const destPathDirname = path.dirname(scriptsDestPath);

    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }

    fs.writeFileSync(scriptsDestPath, copyright + scriptsJS);
    sh.cp('-R', previewsSrcPath, previewsDestPath);
    sh.cp('-R', formsSrcPath, formsDestPath);

};
