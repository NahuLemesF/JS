const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo'); // This es el boton flotante, porque es el mismo boton el que esta llamando la funcion.
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}
