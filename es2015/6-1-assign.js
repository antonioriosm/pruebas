'use strict';
/**
 * Object.assign()
 */
let cuenta = { cliente: 'Sergio Brito' };
let alimentos = { nombre: 'hamburguesa', cantidad: 5 };
let bebidas = { tipo: 'soda', sabor: 'naranja' };

console.log(cuenta); // { cliente: 'Sergio Brito' }

Object.assign(cuenta, alimentos, bebidas);

console.log(cuenta); /* { cliente: 'Sergio Brito',
nombre: 'hamburguesa',
cantidad: 5,
tipo: 'soda',
sabor: 'naranja' }*/
console.log(cuenta.sabor);