// Sets

// se crean asi
const carrito = new Set();

// .add para agregar elementos al set
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// .has para ver si existe un elemento en el set
console.log(carrito.has('Camisa')) //retorna true o false

// .delete para eliminar un elemento del set
// carrito.delete('Disco #2');

// .clear para eliminar todos los elementos del set
// carrito.clear();

// Iterar sobre un set con .forEach
carrito.forEach( producto => {
    console.log(producto);
})

// console.log(carrito);

// .size para ver cuanto mide el set (similar a .length)
console.log('El carrito tiene ' + carrito.size + ' elementos')