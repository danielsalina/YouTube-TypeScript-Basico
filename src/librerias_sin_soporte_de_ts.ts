//import jquery from "jquery";

//jquery.ajax()

import _ from 'lodash';

const arrayDeNumeros1 = [6.1, 4.2, 6.3];
const arrayDeNumeros2 = ['one', 'two', 'three'];

console.log(_.groupBy(arrayDeNumeros1));
console.log(_.groupBy(arrayDeNumeros2));

const lenguajes = [
  {
    nombre: 'JS',
    ruta: 'Front',
  },
  {
    nombre: 'TS',
    ruta: 'Front',
  },
  {
    nombre: 'php',
    ruta: 'Back',
  },
  {
    nombre: 'python',
    ruta: 'Back',
  },
];

console.log(_.groupBy(lenguajes, (lenguajes) => lenguajes.ruta));
