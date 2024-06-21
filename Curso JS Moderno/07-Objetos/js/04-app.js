const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Asignar una propiedad a una nueva variable METODO VIEJO
// const nombre = producto.nombre;
// console.log(nombre);

// Object destructuring
const { nombre, precio, disponible, noExiste } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste); // Va a ser un undefined porque no existe la propiedad.