'use strict';
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const sh = require('shelljs');
const prettier = require('prettier');

module.exports = function renderPug(filePath) {
    const srcPath = path.resolve(path.dirname(__filename), '../src/pug/index.pug');
    const destPath = path.resolve(path.dirname(__filename), '../dist/index.html');

    console.log(`### INFO: Rendering ${filePath} to ${destPath}`);
    const html = pug.renderFile(filePath, {
        doctype: 'html',
        filename: filePath,
        basedir: srcPath
    });

    const destPathDirname = path.dirname(destPath);
    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }

    const prettified = prettier.format(html, {
        printWidth: 1000,
        tabWidth: 4,
        singleQuote: true,
        proseWrap: 'preserve',
        endOfLine: 'lf',
        parser: 'html',
        htmlWhitespaceSensitivity: 'ignore'
    });

    fs.writeFileSync(destPath, prettified);
};
