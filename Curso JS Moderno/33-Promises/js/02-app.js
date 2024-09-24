// Callback hell

const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Inglaterra', mostrarPaises);
            }, 1000);
        }, 1000);
    }, 1000);
};

iniciarCallbackHell();