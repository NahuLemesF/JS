
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

// Instanciando
const pedro = new Cliente('Pedro', 6000);

console.log(pedro.tipoCliente());
console.log(pedro.mensajeDatosCliente());
// Reduce el saldo en 1000
pedro.retiraSaldo(1000);
console.log(pedro.mensajeDatosCliente());
console.log(pedro);