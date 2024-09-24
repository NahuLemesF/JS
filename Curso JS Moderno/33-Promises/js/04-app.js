// Resolver el callback hell con un promise

// Creo la variable vacia de un carrito
const cart = [];

// A esta arrow function le paso el producto que quiero agregar al array
// y declaro que es una nueva promiser
addProduct = product => new Promise (resolve => {
    // dentro del promise en este caso creo un set time out para que despues de un segundo
    // agregue el producto al carrito con .push y el resolve me de un resultado en la consola
    setTimeout(() => {
        cart.push(product)
        resolve(`Se añadió el producto ${product}`);
    }, 1000);
});

// llamo a addProduct y le paso el producto
addProduct('Televisor')
// Este .then tambien es un arrow al que le paso un resultado
    .then(result => {
        //muestro el resultado y el carrito en consola
        console.log(result);
        console.log(cart);
        // creo un return llamando nuevamente al addProduct
        return addProduct('Lavarropas')
    })
    // este es el .then del addProduct recientemente llamado
    .then(result => {
        console.log(result);
        console.log(cart);
    })