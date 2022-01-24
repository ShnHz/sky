var fs = require("fs");

function copyIt(from, to) {

    fs.writeFileSync(to, fs.readFileSync(from));
}

copyIt('./docs/index.html', './docs/404.html');