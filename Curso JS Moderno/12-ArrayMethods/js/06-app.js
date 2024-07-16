const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// .every - Las condiciones deben cumplirse en cada posicion del arreglo

// Este ejemplo va a retornar true porque TODOS los productos
// tienen valor menor a 1000
const resultado = carrito.every ( producto => producto.precio < 1000 )
console.log(resultado);

// En este ejemplo va a dar false
const resultado2 = carrito.every (producto => producto.precio > 500);
console.log(resultado2);

// El caso contrario va a ser .some
const resultado3 = carrito.some (producto => producto.precio > 500);
console.log(resultado3);