'use strict';
/**
 * getter y setter
 */
class Pelota {
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    
}

let pelota = new Pelota();

console.log(pelota); // Pelota { }
console.log(pelota.nombre); // undefined
pelota.nombre = "golf";
console.log(pelota.nombre); // golf
