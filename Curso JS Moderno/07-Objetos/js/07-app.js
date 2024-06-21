const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// A pesar de ser const los objetos y sus propiedades sí se pueden reasignar.

producto.disponible = false;

delete producto.precio;

console.log(producto);
