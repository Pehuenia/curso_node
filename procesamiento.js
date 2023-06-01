
const fs = require('fs');

// console.log("Inicio")
// fs.readFile('dataCanal.txt', 'utf-8', (error, data) => {
//     if(!error) {
//         console.log(data);
//     } else {
//         console.log(`Error: $ {error}`);
//     }
// })
// console.log("Fin");


// console.log("Inicio")

// const miData= fs.readFileSync('dataCanal.txt', 'utf-8');
// console.log(miData)
// console.log("Fin")

console.log("Inicio")

console.log(fs.readFileSync('dataCanal.txt', 'utf-8'))

console.log("Fin")