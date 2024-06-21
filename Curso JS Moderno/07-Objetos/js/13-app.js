const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Metodo .keys . retorna las llaves del objeto (precio, nombre, disponible)
console.log (Object.keys( producto ));

// Metodo .values . retorna los valores del objeto ("Monitor", 300, True)
console.log(Object.values(producto));

// Método .entries. retorna todo en pares, separado en arrays
console.log(Object.entries(producto));