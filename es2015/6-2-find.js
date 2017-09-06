'use strict';
/**
 * find()
 */
let frutas = ['manzana', 'pera', 'uva'];

console.log(frutas.find(fruta => fruta == "pera")); // pera
console.log(frutas.findIndex(fruta => fruta == "pera")); // 1