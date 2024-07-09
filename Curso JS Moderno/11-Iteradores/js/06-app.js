// forEach 
// para recorrer arreglos. Se ejecuta una vez por cada vez que haya un elemento

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

// Un forEach con funcion flecha
pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
});


// forEach de Objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

carrito.forEach(producto => console.log(producto));

// MAP, igual a forEach pero este crea un arreglo nuevo
carrito.map(producto => console.log(producto));