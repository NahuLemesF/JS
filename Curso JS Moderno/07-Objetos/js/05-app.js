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

console.log(producto);

// Si quiero que muestre solo China
console.log(producto.informacion.fabricacion.pais);