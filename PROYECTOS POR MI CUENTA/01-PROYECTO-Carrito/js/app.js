const carrito = document.querySelector('#carrito');
const tableCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let arrayCursos = [];

cargarAddEventListeners();
function cargarAddEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
    carrito.addEventListener('click', eliminarCurso);
};


function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    };

};

function haciendoClick() {
    console.log('Click');
};

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('p span').textContent,
        cantidad: 1,
        id: curso.querySelector('a').getAttribute('data-id'),
    };
    const cursoExiste = arrayCursos.some(curso => curso.id === infoCurso.id);
    if (cursoExiste) {
        arrayCursos = arrayCursos.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
            };
            return curso;
        });
    } else {
        arrayCursos.push(infoCurso);
    }
    mostrarCarrito();
};

function mostrarCarrito() {
    vaciarCarrito();
    arrayCursos.forEach(curso => {
        const row = document.createElement('tr');
        const { imagen, precio, nombre, cantidad, id } = curso;
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="100" >
        </td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;
        tableCarrito.appendChild(row);
    });
};

function vaciarCarrito() {
    while (tableCarrito.firstChild) {
        tableCarrito.removeChild(tableCarrito.firstChild);
    };
};

function eliminarCurso(e) {
    e.preventDefault();
    const btnEliminarCurso = e.target.classList.contains('borrar-curso');
    const idDelCurso = e.target.getAttribute('data-id');
    if (btnEliminarCurso) {
        arrayCursos = arrayCursos.filter(curso => curso.id !== idDelCurso);
        mostrarCarrito();
    };
};