//NOTIFICACIONES

/* ----------------- Selectores ----------------- */
const inputPaciente = document.querySelector('#paciente');
const inputPropietario = document.querySelector('#propietario');
const inputEmail = document.querySelector('#email');
const inputFecha = document.querySelector('#fecha');
const inputSintomas = document.querySelector('#sintomas');
const formInput = document.querySelector('#formulario-cita input[type="submit"]')
const form = document.querySelector('#formulario-cita');

const contenedorCitas = document.querySelector('#citas');

let editing = false;

// Objeto de Citas
const citaObj = {
    id: idGenerator(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
};

/* ----------------- Eventos ----------------- */
cargarEventos();
function cargarEventos() {
    inputPaciente.addEventListener('change', datosDeCita);
    inputPropietario.addEventListener('change', datosDeCita);
    inputEmail.addEventListener('change', datosDeCita);
    inputFecha.addEventListener('change', datosDeCita);
    inputSintomas.addEventListener('change', datosDeCita);
    form.addEventListener('submit', registrarPaciente)
}

/* ----------------- Clases ----------------- */
class Notification {
    constructor({ text, typeOfNotification }) {
        this.text = text;
        this.typeOfNotification = typeOfNotification;
        this.mostrarNotificacion();
    };
    mostrarNotificacion() {
        // Crear la notificacion
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        // Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        // Condicion if con ? (encadenamiento opcional)
        alertaPrevia?.remove();

        // Si es de typeOfNotification error, agrega una clase
        this.typeOfNotification === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        // Mensaje de error
        alerta.textContent = this.text

        // Insertar en el DOM con traversing
        form.parentElement.insertBefore(alerta, form);

        // Quitar despues de 3 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    };
};

class AdminCitas {
    constructor() {
        this.citas = [];
    };

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        this.mostrarCita();
    };

    editDate(updatedCita) {
        this.citas = this.citas.map(cita => cita.id === updatedCita.id ? updatedCita : cita);
        this.mostrarCita();
    }

    delete(id) {
        this.citas = this.citas.filter( cita => cita.id !== id)
        this.mostrarCita();
        
    }

    mostrarCita() {
        // Limpiar HTML previo
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        };

        if(this.citas.length === 0) {
            contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
            return;
        };

        // Funcion que crea el parrafo para generar las citas
        function crearParrafo(key, value) {
            const parrafo = document.createElement('p');
            parrafo.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            parrafo.innerHTML = `<span class="font-bold uppercase">${key} </span> ${value}`;
            return parrafo;
        }
        // Generar citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl', 'p-3');

            const paciente = crearParrafo('Paciente', cita.paciente);
            const propietario = crearParrafo('Propietario', cita.propietario);
            const email = crearParrafo('Email', cita.email);
            const fecha = crearParrafo('Fecha', cita.fecha);
            const sintomas = crearParrafo('Síntomas', cita.sintomas);

            //Delete and Edit Buttons
            const editButton = document.createElement('button');
            editButton.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            editButton.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            //Event Handle con structuredClone 
            editButton.onclick = () => loadEdition(structuredClone(cita));

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            deleteButton.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            deleteButton.onclick = () => this.delete(cita.id)
            // Contenedor de botones
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'flex justify-between mt-10';

            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(buttonContainer);

            contenedorCitas.appendChild(divCita);
        });
    };
};


/* ----------------- Funciones ----------------- */

// Funcion reutilizable para agregar los datos de los eventos al objeto
function datosDeCita(e) {
    citaObj[e.target.name] = e.target.value;
};

const citas = new AdminCitas();

function registrarPaciente(e) {
    e.preventDefault();

    const { paciente, propietario, email, fecha, sintomas } = citaObj;

    // Una forma es con if, si todos son vacios entonces, etc.

    // ESTA FORMA ES MAS SIMPLE (con some y object.values)
    if (Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notification({
            text: 'Todos los campos son obligatorios',
            typeOfNotification: 'error',
        });
        return;
    };

    if (editing) {
        citas.editDate({ ...citaObj });
        new Notification({
            text: 'Datos actualizados',
            typeOfNotification: 'success',
        });
    } else {
        // Llamo la funcion agregar cita
        citas.agregarCita({ ...citaObj });
        //Notificacion de Exito
        new Notification({
            text: 'Paciente registrado',
            typeOfNotification: 'success',
        });
    };

    //Reiniciar formulario despues de agregar o editar una cita
    form.reset();
    // Vacia el objeto
    reiniciarObjCita();
    formInput.value = 'Registrar Paciente';
    editing = false;
};

function reiniciarObjCita() {
    Object.assign(citaObj, {
        id: idGenerator(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: '',
    })
};

function idGenerator() {
    return Math.random().toString(36).substring(2) + Date.now()
};

function loadEdition(cita) {
    Object.assign(citaObj, cita);

    inputPaciente.value = cita.paciente;
    inputPropietario.value = cita.propietario;
    inputEmail.value = cita.email;
    inputFecha.value = cita.fecha;
    inputSintomas.value = cita.sintomas;

    editing = true;
    formInput.value = 'Actualizar datos de la cita';
};

