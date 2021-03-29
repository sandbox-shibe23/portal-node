"use strict";
exports.__esModule = true;
exports.writeFileEffect = exports.readLineEffect = void 0;
var readline = require("readline");
var fs = require("fs");
function readLineEffect(path, callback) {
    return new Promise(function (resolve) {
        var rs = fs.createReadStream(path);
        var rl = readline.createInterface({
            input: rs
        });
        rl.on('line', function (line) {
            callback(line, rl);
        }).on('close', function () {
            resolve();
        });
    });
}
exports.readLineEffect = readLineEffect;
function writeFileEffect(path, value) {
    fs.appendFile(path, value.label + " " + value.dir + "\n", function () {
        console.log("Append " + value.label + " " + value.dir);
        process.exit(0);
    });
}
exports.writeFileEffect = writeFileEffect;
