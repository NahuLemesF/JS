const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        // La propiedad this. busca la propiedad con ese nombre dentro del mismo objeto
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 2000,
    disponible: true,
    mostrarInfo: function() {
        // La propiedad this. busca la propiedad con ese nombre dentro del mismo objeto
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();