function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};

// aca reutilizo el objeto
const juan = new Cliente ('Juan', 500);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
};
console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
};

// Creo una nueva instancia de Empresa llamada CCJ
const CCJ = new Empresa('Codigo Con Juan', 4000, 'Cursos en linea');
