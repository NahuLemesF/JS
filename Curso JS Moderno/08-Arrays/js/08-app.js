const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Destructuring
const { nombre } = producto;
console.log(nombre);

// Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, ...tercero] = numero; // Van por orden no importa cual puse

console.log(primero);