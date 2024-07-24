// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();

// Para guardar todos los Event Listeners
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso)
}


// Funciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement; // Con el parentElement estoy yendo al padre
        leerDatosCurso(cursoSeleccionado);
    }
}

// Lee el contenido del HTML clickeado y extrae info del curso
function leerDatosCurso(curso) {

    // Crear un objeto con el contenido del grupo actual
    const infoCurso= {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoCurso);
}