// getElementById

const formulario = document.getElementById('formulario');
console.log(formulario);

// si no existe retorna null
const noExiste = document.getElementById('no-existe');
console.log(`No existe retorna ${noExiste}`);

// Si existe mas de uno (que esta mal) retorna el primero