"use strict";
// npm i csvtojson
// npm i -d fs
exports.__esModule = true;
// import csv from 'csvtojson';
var fs = require("fs");
var userFile = '../employee.csv';
var csv = require('csvtojson');
csv().fromFile(userFile).then(function (jsonObj) {
    console.log(jsonObj);
    // const write = fs.createWriteStream('../raw files');
    fs.writeFile('abc1.json', JSON.stringify(jsonObj), function (e) {
        if (e)
            console.log(e);
        else
            console.log('seceded');
    });
});
