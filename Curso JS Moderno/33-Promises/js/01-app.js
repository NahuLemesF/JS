// Callbacks

const paises = ['Francia', 'Portugal', 'Australia', 'Inglaterra', 'Argentina'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais)
        callback()
    }, 3000);
}
function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        });
    }, 1000);
};

mostrarPaises();

nuevoPais('Alemania', mostrarPaises)