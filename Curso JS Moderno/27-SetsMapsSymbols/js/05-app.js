// Symbols
// Crean una propiedad unica. No hay dos symbols iguales

const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
    console.log('Son iguales');
} else {
    console.log('No son iguales');
} // Nos dice que no son iguales, porque ningun symbol es igual

// console.log(sym);

const nombre = Symbol();
const apellido = Symbol()

const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'Perez';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
// Los dos simbolos se agregan como propiedades pero
// para acceder a ellos no lo hago con sintaxis de punto
// sino con []
console.log(persona[nombre]);

// Las propiedades que utilizan symbol NO SON ITERABLES

/*------------------*/

// Definir una descripcion del Symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);