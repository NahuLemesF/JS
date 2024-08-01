const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// Object destructuring
const { nombre } = producto;

console.log(nombre);

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

const [0] = numeros
