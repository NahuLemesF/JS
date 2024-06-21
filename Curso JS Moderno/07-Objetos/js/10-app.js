const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medidas: '1m'
}

console.log(producto);
console.log(medidas);

// Una forma de unir dos objetos: assign
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas}

console.log(resultado2);