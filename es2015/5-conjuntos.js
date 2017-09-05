'use strict';
/**
 * Conjuntos
 */
let operadores = new Set();

operadores.add('+');
operadores.add('-');
operadores.add('*').add('/');

console.log(operadores); // Set { '+', '-', '*', '/'}
console.log(operadores.has('*')); // true
console.log(operadores.size); // 4
console.log(operadores.delete('+')); // true
console.log(operadores); // Set { '-', '*', '/'}

operadores.forEach( 
    (operador) => console.log(operador)
);