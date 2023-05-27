 const { error } = require('console');
const fs=require('fs');
const { arch } = require('os');

//Crear un archivo txt:
//  fs.writeFile('data1.txt','Marina - Suscribite ahora ',(error)=>{
//     if (error) {
//         console.log(`Error: ${error}`);
//     }
//  });


//Leer un archivo txt:
// fs.readFile('data1.txt', 'utf-8', (error, data) => {
//     if(!error) {
//         console.log(data);
//     } else {
//        console.log(`Error: {error}`);  
//     }
// });

//Renombrar el archivo txt:
// fs.rename('data1.txt', 'dataCanal.txt',(error) => {
//      if (!error) {
//         console.log("¡Renombrado!")
//      } else {
//         console.log(`Error: ${error}`);
//      }
// })

//Añadir contenido al archivo txt:
// fs.appendFile('dataCanal.txt', '\n¡Gracias por darle like a este video!', (error) => {
//     if (!error) {
//         console.log("¡Contenido agregado!");
//     } else {
//         console.log(`Error: ${error}`);
//     }
// } )


//Crear una copia del txt
//fs.createReadStream('dataCanal.txt').pipe(fs.createWriteStream('dataCanal_bu.txt'));



//Borrar un archivo
//  fs.unlink('dataCanal_bu.txt', (error) => {
//     if(error) {
//        console.log(`Error: ${error}`);
//    }
//   })


 //Leer todos los archivos. Con readdir se lee un directorio:
fs.readdir('/.', (error, archivos)=> {
    archivos.forEach(archivo => {
        console.log(archivo);
    })
})
