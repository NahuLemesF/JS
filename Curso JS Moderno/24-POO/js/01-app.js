// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    };

    // Metodos

    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de: $${this.saldo}`
    };

    // Propiedades estaticas
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

// Instanciando mi clase
const juan = new Cliente('Juan', 4000);
console.log(juan.mostrarInformacion());


// Class Expression
const Cliente2 = class {
}

