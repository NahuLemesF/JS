// Variables

//Esta es la ventana del carrito
const carrito = document.querySelector('#carrito');
// Esta es la tabla donde van los cursos en el carrito
const tableCarrito = document.querySelector('#lista-carrito tbody');
//Este es el boton que vacia el carrito
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
// Esta la lista de cursos
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners() {
    // Escucha el boton "Agregar al carrito" de cada curso
    listaCursos.addEventListener('click', agregarCurso)
    // Escucha el boton "Vaciar carrito" del carrito
    btnVaciarCarrito.addEventListener('click', vaciarCarrito)
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        
    }
}

function vaciarCarrito() {
    console.log('Carrito Vaciado');
}