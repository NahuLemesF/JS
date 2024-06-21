const carrito = [];

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

const producto4 = {
    nombre: "Celular 2",
    precio: 800
}

// Agregar elemento al final del arreglo
carrito.push(producto);
carrito.push(producto2);

// Agregar elemento al principio del arreglo
carrito.unshift(producto3);
console.table(carrito);

// // Eliminar último elemento de un arreglo .pop
// carrito.pop();
// console.table(carrito);

// // Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// Eliminar un elemento de cualquier posición .splice
carrito.splice(1, 1); // Primer número indica posición, segundo número indica cuantos elementos se borran
console.table(carrito)
