/* ----------------- Variables ----------------- */
const formulario = document.querySelector('#cotizar-seguro');
const yearList = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 20;

/* ----------------- Event Listeners ----------------- */
cargarEventListeners();
function cargarEventListeners() {
    formulario.addEventListener('submit', cotizarSeguro);
};

/* ---------------- Constructores ---------------- */

// Constructor para Seguro
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
};

// Constructor para UI
function UI() { }

/* ---------------- Prototypes de UI ---------------- */

// Llenar las opciones de los anios
UI.prototype.llenarAnios = () => {
    for (let i = maxYear; i > minYear; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearList.appendChild(option);
    };
};

// Muestra alertas en pantalla
UI.prototype.mostrarAlerta = (alerta, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = alerta;

    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 2000);
};

UI.prototype.mostrarCotizacion = (total, seguro) => {
    const {marca, year, tipo} = seguro;

    let textoMarca;

    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiático';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }

    // Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
    <p class="font-bold">Año del Auto: <span class="font-normal"> ${year}</span></p>
    <p class="font-bold">Tipo de Seguro: <span class="font-normal capitalize"> ${tipo}</span></p>
    <p class="font-bold">Total: <span class="font-normal"> $${total}</span></p>
    `;

    const divResultado = document.querySelector('#resultado');

    // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.classList.remove('hidden');

    setTimeout(() => {
        spinner.classList.add('hidden');
        divResultado.appendChild(div); // Se muestra el resultado
    }, 2000);
};

/* ---------------- Prototypes de Seguro ---------------- */

// Realizacion de la cotizacion del seguro
Seguro.prototype.cotizacionCalculo = function () {
    /*
        1: Americano = 1.15
        2: Asiatico = 1.05
        3: Europeo = 1.35
    */

    let cotizacion;
    const base = 2000;
    switch (this.marca) {
        case '1':
            cotizacion = base * 1.15;
            break;
        case '2':
            cotizacion = base * 1.05;
            break;
        case '3':
            cotizacion = base * 1.35;
            break;

        default:
            break;
    };

    // Leer el anio
    const diferencia = new Date().getFullYear() - this.year;

    // Reducir un 3% cada anio
    cotizacion -= ((diferencia * 3) * cotizacion) / 100;

    /*  Sumar porcentaje de acuerdo al tipo de seguro
        Si es basico 30%
        Si es completo 50% */

    if (this.tipo === 'basico') {
        cotizacion *= 1.30;
    } else {
        cotizacion *= 1.50;
    }
    return cotizacion.toFixed(2);

}

/* --------------- Instanciando UI --------------- */
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarAnios();
});


/* --------------- Funciones --------------- */

function cotizarSeguro(e) {
    e.preventDefault();

    const marca = document.querySelector('#marca').value;
    const year = document.querySelector('#year').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }
    ui.mostrarAlerta('Cotizando...', 'correcto');

    // Ocultar las cotizaciones previas
    const cotizacionesPrevias = document.querySelector('#resultado div');
    if (cotizacionesPrevias !== null) {
        cotizacionesPrevias.remove();
    }

    // Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizacionCalculo();

    // Utilizar el prototype que pasa la cotizacion
    ui.mostrarCotizacion(total, seguro);
};