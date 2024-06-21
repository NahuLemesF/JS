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

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// Forma declarativa para agregar elementos al carrito. Copia de array 
let resultado;

resultado = [...carrito, producto];

console.table(resultado);
console.table(carrito);