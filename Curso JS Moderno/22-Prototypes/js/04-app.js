
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};


// Crear un prototype
Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Silver';
    } else {
        tipo = 'Normal';
    };
    return tipo;
};

// Puedo llamar mi prototype dentro de otro nuevo prototype
Cliente.prototype.mensajeDatosCliente = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
};

// Otro prototype
Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono) {
    // Metodo para heredar A TRAVES DE CALL
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Para pasar funciones de Cliente a Persona
Persona.prototype = Object.create(Cliente.prototype);

// Para pasar el constructor de Cliente a persona
Persona.prototype.constructor = Cliente;

// Instanciando Persona
const juan = new Persona('Juan', 10000, 344764123);

// Ahora esta persona tiene las funciones y el constructor de Cliente
console.log(juan);