'use strict';
/**
 * clases
 */
class Pelota {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    marca(marca) {
        this.marca = marca;
    }
}

let pelota = new Pelota('golf');
pelota.marca('la pelota mágica');

console.log(pelota); // Pelota {nombre: 'golf', marca: 'la pelota mágica'}
console.log(pelota.nombre); // golf
console.log(pelota.marca); // la pelota mágica
