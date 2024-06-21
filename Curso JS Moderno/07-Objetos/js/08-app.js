"use strict"; 
// MODO ESTRICTO

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Congela objeto para que no pueda ser modificado. tiene que estar USE STRICT
Object.freeze(producto);

// ESTO NO CORRE
// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(producto);

// Para saber si un objeto está congelado o no
console.log(Object.isFrozen(producto));
