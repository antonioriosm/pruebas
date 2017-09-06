'use strict';
/**
 * busqueda en cadena de texto
 */
const mensaje = '¡Hola Mundo!';

console.log(mensaje.repeat(3)); // ¡Hola Mundo!¡Hola Mundo!¡Hola Mundo!
console.log(mensaje.startsWith('ola')); // false
console.log(mensaje.startsWith('ola', 2)); // true
console.log(mensaje.startsWith('ola', 1)); // false
console.log(mensaje.endsWith('ola')); // false
console.log(mensaje.endsWith('ola', 5)); // true
console.log(mensaje.endsWith('ola', 7)); // false
console.log(mensaje.includes('Mundo')); // true
console.log(mensaje.includes('Mundo', 7)); // false
console.log(mensaje.includes('Mundo', 6)); // true