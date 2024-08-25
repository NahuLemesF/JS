class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    };

    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de: $${this.saldo}`
    };

    // Propiedades estaticas
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return `Bienvenido al cajero de empresas`
    }
}

const juan = new Cliente('Juan', 4000);
const empresa = new Empresa('CDFe', 5000);
console.log(Cliente.bienvenida());
console.log(juan.mostrarInformacion());
console.log(Empresa.bienvenida());
console.log(empresa.mostrarInformacion());