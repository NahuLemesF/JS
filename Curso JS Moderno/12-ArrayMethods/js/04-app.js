const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// .filter -  Crea un nuevo arreglo basado en la condicion
//que le pase

let resultado;

resultado = carrito.filter (producto => producto.precio > 400);
resultado = carrito.filter ( producto => producto.precio < 600);

// Sacar un producto del arreglo !== excepto
resultado = carrito.filter (producto => producto.nombre !== 'Audifonos')
console.log(resultado);