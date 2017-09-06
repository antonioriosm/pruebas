'use strict';
/**
 * mapas
 */

let fruta = new Map();

fruta.set('nombre', 'Manzana');
fruta.set('peso', '250 gramos');

console.log(fruta); // Map {'nombre' => 'Manzana', 'peso' => '250 gramos'}

console.log(fruta.get('nombre')); // Manzana
console.log(fruta.has('nombre')); // true
console.log(fruta.delete('nombre'));  // true
console.log(fruta.has('nombre')); // false
console.log(fruta); // Map {'peso' => '250 gramos'}