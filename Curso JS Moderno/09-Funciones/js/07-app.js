
//Llamo la funcion
iniciarApp();

// Primera funcion
function iniciarApp() {
    console.log('Iniciando app...');

// Llamo a la segunda funcion dentro de la primera
    segundaFuncion();
}

// Primera funcion
function segundaFuncion() {
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}