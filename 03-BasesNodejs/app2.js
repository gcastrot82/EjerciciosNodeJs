// Imprimir la tabla del 5



//import { writeFile } from 'fs';

const { crearArchivo } = require('./helpers/multiplicar');

console.clear();



const base = 7;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));