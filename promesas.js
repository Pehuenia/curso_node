const { error } = require("console");
// res --> resolve / rej --> reject
const miPromesa= new Promise((res, rej) =>{
    res('Éxito en la llamada a la promesa');
});

miPromesa.then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(`Error: ${error}`);
});