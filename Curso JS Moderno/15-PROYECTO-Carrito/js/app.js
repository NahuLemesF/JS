// Variables
const carrito = document.querySelector('#carrito'); //Esta es la ventana del carrito
const tableCarrito = document.querySelector('#lista-carrito tbody'); // Esta es la tabla donde van los cursos en el carrito
const btnVaciarCarrito = document.querySelector('#vaciar-carrito'); //Este es el boton que vacia el carrito
const listaCursos = document.querySelector('#lista-cursos');  // Esta la lista de cursos
let arrayCursos = [];  // Esta es la lista donde se van a sumar los cursos en el carrito


cargarEventListeners();
function cargarEventListeners() {
    // Escucha el boton "Agregar al carrito" de cada curso
    listaCursos.addEventListener('click', agregarCurso);
    // Escucha el boton "Vaciar carrito" del carrito
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
    // Escucha el boton de eliminar en cada curso
    carrito.addEventListener('click', eliminarCurso);
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        // Variable del curso con traversing
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosDeCurso(cursoSeleccionado);
    }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    // Event bubbling, accedo solo al boton
    if (e.target.classList.contains('borrar-curso')) {
        const idDelCurso = e.target.getAttribute('data-id');
        arrayCursos = arrayCursos.filter((curso) => curso.id !== idDelCurso); // Elimina articulo del carrito
        mostrarCarritoHTML(); // Llamo a la funcion que limpia el carrito, itera y muestra lo que queda

    }
}

// Funcion que lee datos del curso
function leerDatosDeCurso(curso) {

    // Creo el objeto de info del curso
    const infoDelCurso = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    // Revisa si un elemento ya existe en el carrito con .some
    const cursoExiste = arrayCursos.some((curso) => curso.id === infoDelCurso.id);
    // si existe actualiza la cantidad, sino lo agrega

    if (cursoExiste) {
        arrayCursos = arrayCursos.map(curso => {
            if (curso.id === infoDelCurso.id) {
                curso.cantidad++;
            }
            return curso;
        });
    } else {

        // Agrega los elementos al array del Carrito
        // arrayCursos = [...arrayCursos, infoDelCurso]

        // Esto, segun gpt, serviria mas
        arrayCursos.push(infoDelCurso);
    }

    mostrarCarritoHTML();
}

// Muestra el carrito de compras en el HTML
function mostrarCarritoHTML() {

    //Limpiar el HTML llamando la funcion vaciarCarrito
    vaciarCarrito();

    //Generar el HTML
    arrayCursos.forEach((curso) => {
        // Destructuring de curso para que se vea mas limpio
        const { imagen, nombre, precio, cantidad, id } = curso;
        // Agregando el curso a las ROW de la tabla de HTML
        const row = document.createElement('tr');
        // Aca armo el HTML con un template y el innerHTML
        row.innerHTML = `
        <td>
            <img src = "${imagen}" width ="100">
        </td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a> 
        </td>
        `;

        // Agregar el HTML del carrito en la table body con appendChild()
        tableCarrito.appendChild(row);
    });
}

// Elimina los cursos del Tbody 
function vaciarCarrito() {

    // Forma Lenta
    // tableCarrito.innerHTML = '';

    while (tableCarrito.firstChild) {
        tableCarrito.removeChild(tableCarrito.firstChild)
    }
}