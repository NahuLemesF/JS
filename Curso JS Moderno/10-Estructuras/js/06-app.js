// Operador Y (&&)

const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if (!puedePagar && !usuario) {
    console.log('No puedes comprar');
} else if (!usuario) { // ! es no
    console.log('Inicia sesion o crea una cuenta');
} else if (!puedePagar) {
    console.log('Sesion iniciada: Fondos insuficientes');
}