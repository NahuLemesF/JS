
// Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// Creo un nuevo objeto con el constructor y le asigno las variables en el paréntesis
const producto2 = new Producto("Monitor 24 Pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("Televisión", 100);
console.log(producto3);