// Promises

//resolve, cuando el promise se cumpla
//reject cuando tenemos un error en el promise
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    };
});

// .then, lo que hace despues de usar el promise 
aplicarDescuento
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


// Hay tres valores posibles...
// fulfilled - El promise se cumplio
// rejected - El promise no se cumplio
// pending - El promise aun no se cumplio ni fue rechazzdo