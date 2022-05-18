// npm i csvtojson
// npm i -d fs

// import csv from 'csvtojson';
import * as fs from 'fs';
const userFile = '../employee.csv';
const csv = require('csvtojson');

csv().fromFile(userFile).then(jsonObj => {
  console.log(jsonObj);
  // const write = fs.createWriteStream('../raw files');
  fs.writeFile('abc1.json',JSON. stringify(jsonObj), e=>{
    if(e)
    console.log(e);
    else 
    console.log('seceded');
    
    
  })
  
})
