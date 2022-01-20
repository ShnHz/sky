var fs = require('fs');
var path = require('path');

exports.createFile = function (template, OUTPUT_PATH) {
    writeFile(OUTPUT_PATH, template);
}
const dirCache = {};

function writeFile(filePath, value) {
    if (fs.existsSync(filePath)) {} else {
        mkdir(filePath);
    }

    fs.writeFile(filePath, value, function (err) {
        if (err) {
            return console.log(err);
        }
    })
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