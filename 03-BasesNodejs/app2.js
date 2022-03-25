// Imprimir la tabla del 5



//import { writeFile } from 'fs';

const { crearArchivo } = require('./helpers/multiplicar');

console.clear();



console.log(process.argv)

const [,,agr3='base=5'] = process.argv
// Separa cadena por =
const [,base=5] = agr3.split('=');
console.log(base);



//const base = 7;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));