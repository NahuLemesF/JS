// Igual a (==)
// Diferente a (!=)
// Comparador estricto (===)

const puntaje = 1000;

// ESTO ES UN DIFERENTE A

// if (puntaje != 1000) {
//     console.log('Si es diferente')
// } else {
//     console.log('El puntaje no es igual');
// };



//ESTO ES UN COMPARADOR ESTRICTO.
// EL ESTRICTO COMPARA TAMBIEN EL TIPO DE DATO

if (puntaje === '1000') {
    console.log('Si! Es igual');
} else {
    console.log('No es igual');
}