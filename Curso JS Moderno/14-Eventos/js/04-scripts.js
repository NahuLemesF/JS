// Evento Submit en Formulario

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault(); // Para prevenir la accion que realizaria el evento por default

    console.log('Buscando...');

    console.log(e.target.action);
}