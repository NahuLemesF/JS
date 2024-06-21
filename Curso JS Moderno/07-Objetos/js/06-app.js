const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {  // OBJETO DENTRO DE UN OBJETO
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}


// const { nombre } = producto;

// Destructuring de objetos anidados
const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);