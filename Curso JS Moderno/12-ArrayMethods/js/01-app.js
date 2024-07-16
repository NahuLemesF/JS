// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo

// // con un IF. version pete

// meses.forEach( mes => {
//     if(mes === 'Enero') {
//         console.log('Enero si existe');
//     }
// })


// // con el Array Method 'includes'. para arreglos de indice

// const resultado = meses.includes('Enero');
// console.log(resultado); // Muestra true o false, un booleano

// En un arreglo de objetos se utiliza .some

const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);

// En un arreglo tradicional con .some
const existe2 = meses.some( mes => mes === 'Febrero');
console.log(existe2);