var fs = require('fs');
var path = require('path');

exports.createFileVue = function (template, OUTPUT_PATH) {
    writeFile(`./src/${OUTPUT_PATH}`, template);
}

const dirCache = {};

function writeFile(filePath, value) {
    if (fs.existsSync(filePath)) {} else {
        mkdir(filePath);
    }

    fs.appendFile(filePath, value, 'utf8')
}

function mkdir(filePath) {
    const arr = filePath.split('/');
    let dir = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (!dirCache[dir] && !fs.existsSync(dir)) {
            dirCache[dir] = true;
            fs.mkdirSync(dir);
        }
        dir = dir + '/' + arr[i];
    }
    fs.writeFileSync(filePath, '')
}