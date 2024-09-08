/* --------------- Variables y Selectores --------------- */
const formulario = document.querySelector('#agregar-gasto');
const listaGastos = document.querySelector('#gastos ul');

/* --------------- Eventos --------------- */
cargarEventListeners();
function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGastos);
}

/* --------------- Clases --------------- */
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    };

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    };

    calcularRestante() {
        const totalGastos = this.gastos.reduce((total, gasto) => total + gasto.valorGasto, 0);
        this.restante = this.presupuesto - totalGastos;
    };
    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id)
        this.calcularRestante();
    };
};

class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad;

        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    };
    imprimirAlerta(mensaje, tipoMensaje) {
        // Creo el mensaje
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert', 'alerta');

        // Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alerta');
        alertaPrevia?.remove();

        // Validar tipo de mensaje
        tipoMensaje === 'error' ? divMensaje.classList.add('alert-danger') : divMensaje.classList.add('alert-success');


        // Agrego el mensaje
        divMensaje.textContent = mensaje;

        // Insertar en el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    };
    listarGasto(gastos) {
        this.borrarHTML();

        gastos.forEach(gasto => {
            // Destructuring
            const { nombreGasto, valorGasto, id } = gasto;

            // Crear el LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id', id);  ESTA NO, mejor la que sigue
            nuevoGasto.dataset.id = id;

            //Insertar el gasto en HTML
            nuevoGasto.innerHTML = `${nombreGasto} <span class="badge badge-primary badge-pill"> $${valorGasto} </span>`;

            // Boton para eliminar
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'X';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            };
            // Agrego el boton al nuevo gasto
            nuevoGasto.appendChild(btnBorrar);

            // Agregar todo al html
            listaGastos.appendChild(nuevoGasto);
        });
    };
    borrarHTML() {
        while (listaGastos.firstChild) {
            listaGastos.removeChild(listaGastos.firstChild)
        };
    };
    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    };
    colorBannerRestante(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;

        // Me traigo el div con la clase de restante
        const restanteDiv = document.querySelector('.restante');

        if ((presupuesto * 0.25) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ((presupuesto * 0.50) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-warning', 'alert-danger');
            restanteDiv.classList.add('alert-success');
        }
    };
};

/* --------------- Instancias --------------- */
const ui = new UI;
let presupuesto;

/* --------------- Funciones --------------- */
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');

    if (presupuestoUsuario === null || presupuestoUsuario.trim() === '' || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    };

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGastos(e) {
    e.preventDefault();

    // Leer datos del formulario
    const nombreGasto = document.querySelector('#gasto').value;
    const valorGasto = Number(document.querySelector('#cantidad').value);

    // Validacion
    if (nombreGasto === '' || valorGasto === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
        return;
    } else if (valorGasto <= 0 || isNaN(valorGasto)) {
        ui.imprimirAlerta('Ingrese un monto valido', 'error');
        return;
    };

    // Creo un obj literal enhacement con los datos del gasto
    const gasto = {
        nombreGasto,
        valorGasto,
        id: Date.now(), // Para crear un numero aleatorio para cada ID, el Date.now() es ideal porque no se repite.
    };
    // Agregando el gasto
    presupuesto.nuevoGasto(gasto);

    //Mensaje de exito para gasto anyadido
    ui.imprimirAlerta('Gasto añadido con éxito');

    // Destructuring de presupuesto para las instancias de UI posteriores
    const { gastos, restante } = presupuesto;

    // Instancia de listar gastos
    ui.listarGasto(gastos);

    // Instancia para actualizar restante
    ui.actualizarRestante(restante);

    // Instancia de la comprobacion del restante para cambiar el color
    ui.colorBannerRestante(presupuesto); // paso el objeto entero

    // Resetear formulario
    formulario.reset();
};

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);

    const { gastos, restante } = presupuesto;
    ui.listarGasto(gastos);
    ui.actualizarRestante(restante);
    ui.colorBannerRestante(presupuesto);
    ui.imprimirAlerta('Gasto eliminado');
}