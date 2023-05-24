function sumar(n1, n2) {
    return n1 + n2;
}
const canalMio = "Mi canal";

function restar(n1, n2) {
    return n1 - n2;
}
 function multiplicar(n1, n2) {
    return n1 * n2;
 }

 //module.exports.sumar = sumar;

 //module.exports.nombreCanal= canalMio;

 module.exports = {
    canal: canalMio,
    sumar: sumar,
    restar: restar,
    dividir: function(n1,n2) {
        return n1/n2;
    },
    multiplicar: multiplicar
 };