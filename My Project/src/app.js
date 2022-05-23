// import fs from 'fs';
// let inputFile = fs.readFileSync('./employee.csv', 'utf-8');
var csvToJson = require('convert-csv-to-json');
// let submitElement = document.getElementById('submit')! as HTMLButtonElement;
// submitElement.addEventListener('click', submitHandler);
function submitHandler() {
    // e.preventDefault();
    var json = csvToJson.getJsonFromCsv('src/employee.csv');
    for (var i = 0; i < json.length; i++) {
        console.log(json[i]);
    }
}
submitHandler();
