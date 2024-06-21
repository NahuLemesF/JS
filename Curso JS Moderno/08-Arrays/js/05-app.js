const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

// Agregar elemento al final del arreglo
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// Agregar elemento al principio del arreglo
carrito.unshift(producto3);

console.table(carrito);