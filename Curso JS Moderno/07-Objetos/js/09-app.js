"use strict"; 
// MODO ESTRICTO

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Sellar objeto. Diferencia de freeze es que no se pueden 
// agregar propiedades pero sí modificarlas
Object.seal(producto);

// Puedo editar
producto.disponible = false;

//No puedo agregar ni eliminar
    // producto.imagen = "imagen.jpg";
    // delete producto.precio;

console.log(producto);

// Para saber si un objeto está sellado o no
console.log(Object.isSealed(producto));
