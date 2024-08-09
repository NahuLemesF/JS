// Prototypes

// Dos formas de crear objetos

// 1. Object Literal, mas estatica
const cliente = {
    nombre: 'Bebito',
    saldo: 1000000,
}
console.log(cliente);

// 2. Object Constructor, mas dinamica y reutilizable
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};

// aca reutilizo el objeto
const bebito = new Cliente ('Bebito', 1000000);
console.log(bebito);