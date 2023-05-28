const { error } = require('console');
const fs = require('fs');

fs.readFile('dataCanal.txt','utf-8',(error,data)=>{
    if(!error) {
        console.log(data);
    } else {
        console.log(`Error: ${error}`);
    }
})