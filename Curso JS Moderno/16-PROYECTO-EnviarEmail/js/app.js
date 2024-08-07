// el DOMContentLoaded ejecuta todo el codigo que contiene
// UNA VEZ que todo el HTML esta cargado
document.addEventListener('DOMContentLoaded', function () {

    const containerEmail = {
        email: '',
        asunto: '',
        mensaje: '',
    }
    // Selecionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const botonEnviar = document.querySelector('#botones button[type="submit"]');
    const botonReset = document.querySelector('#botones button[type="reset"]');
    const spinner = document.getElementById('spinner');
    // Eventos
    inputEmail.addEventListener('blur', validarInput);
    inputAsunto.addEventListener('blur', validarInput);
    inputMensaje.addEventListener('blur', validarInput);
    formulario.addEventListener('submit', enviarEmail);
    botonReset.addEventListener('click', function (e) {
        e.preventDefault;

        if (confirm('Quieres reiniciar el formulario?')) {
            reiniciarFormulario();
        }
    })

    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            reiniciarFormulario();

            const alertaEnviado = document.createElement('P');
            alertaEnviado.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase')
            alertaEnviado.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaEnviado);

            setTimeout(() => {
                alertaEnviado.remove();
            }, 3000);
        }, 3000);

    }

    // Hago una funcion para no repetir codigo
    function validarInput(e) {
        limpiarAlerta(e.target.parentElement);

        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            containerEmail[e.target.name] = '';
            comprobarEmail();
            return;
        };

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('Email no válido', e.target.parentElement);
            containerEmail[e.target.name] = '';
            comprobarEmail();
            return;
        };

        // Enviar los valores al objeto Email
        containerEmail[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar si el objeto Email se llena
        comprobarEmail();
    };

    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);

        //Generar alerta en HTML
        const bannerError = document.createElement('P');
        bannerError.textContent = mensaje;
        bannerError.classList.add('bg-red-600', 'text-white', 'alerta', 'p-2', 'text-center');

        referencia.appendChild(bannerError);
    };

    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const existeAlerta = referencia.querySelector('.alerta');
        if (existeAlerta) {
            existeAlerta.remove();
        }
    };

    function validarEmail(email) {
        // Expresion regular de email
        const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const emailValido = regexEmail.test(email);
        return emailValido;
    };

    function comprobarEmail() {
        if (Object.values(containerEmail).includes('')) {
            botonEnviar.classList.add('opacity-50');
            botonEnviar.disabled = true;
            return;
        }
        botonEnviar.classList.remove('opacity-50');
        botonEnviar.disabled = false;
    }

    function reiniciarFormulario() {
        containerEmail.email = '';
        containerEmail.asunto = '';
        containerEmail.mensaje = '';
        formulario.reset();
        comprobarEmail();
    }

});
