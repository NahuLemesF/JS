const resultado = document.getElementById('resultado');
const year = document.getElementById('year');
const marca = document.getElementById('marca');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');
const yearMax = new Date().getFullYear();
const yearMin = yearMax - 10;



document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra lista de autos

    llenarSelectYear(); // Llena el select de la opcion Año
});

const datosBuscador = {
    marca: '',
    year: null,
    minimo: null,
    maximo: null,
    puertas: '',
    transmision: '',
    color: '',
}

const propiedadesBuscador = [marca, year, minimo, maximo, puertas, transmision, color];
propiedadesBuscador.forEach(propiedad => {
    propiedad.addEventListener('change', buscador);
});
function buscador(e) {
    if (e.target.id === 'year' || e.target.id === 'minimo' || e.target.id === 'maximo') {
        datosBuscador[e.target.id] = parseInt(e.target.value);
    } else {
        datosBuscador[e.target.id] = e.target.value;
    }
    filtroBusqueda();
}


function mostrarAutos(autos) {
    limpiarHTML();

    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoEnHTML = document.createElement('P');

        autoEnHTML.textContent = `
        ${marca} ${modelo} - ${year} - Puertas: ${puertas} - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        resultado.appendChild(autoEnHTML);
    });
};

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    };
};
function llenarSelectYear() {
    for (let i = yearMax; i >= yearMin; i--) {
        const opciones = document.createElement('option');
        opciones.value = i;
        opciones.innerHTML = i;
        year.appendChild(opciones);
    }
};

function filtroBusqueda() {
    const filtro = autos.filter(filtroMarca).filter(filtroYear).filter(filtroMinimo).filter(filtroMaximo).filter(filtroPuertas).filter(filtroTransmision).filter(filtroColor);

    if (filtro.length) {
        mostrarAutos(filtro);
    } else {
        noResultado();
    };
};

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados para su búsqueda';
    resultado.appendChild(noResultado);
};

function filtroMarca(auto) {
    const { marca } = datosBuscador;
    if (marca) {
        return auto.marca === marca;
    };
    return true;
};

function filtroYear(auto) {
    const { year } = datosBuscador;
    if (year) {
        return auto.year === year;
    };
    return true;
};

function filtroMinimo(auto) {
    const { minimo } = datosBuscador;
    if (minimo) {
        return auto.precio >= minimo;
    };
    return true;
}

function filtroMaximo(auto) {
    const { maximo } = datosBuscador;
    if (maximo) {
        return auto.precio <= maximo;
    };
    return true;
};

function filtroPuertas(auto) {
    const { puertas } = datosBuscador;
    if (puertas) {
        return auto.puertas === puertas;
    };
    return true;
};

function filtroTransmision(auto) {
    const { transmision } = datosBuscador;
    if (transmision) {
        return auto.transmision === transmision;
    };
    return true;
};

function filtroColor(auto) {
    const { color } = datosBuscador;
    if (color) {
        return auto.color === color;
    };
    return true;
};