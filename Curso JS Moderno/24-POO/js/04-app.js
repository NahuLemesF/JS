class Cliente {

    // Para hacer que una propiedad sea privada
    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente ${this.#nombre}, tu saldo es de: $${this.saldo}`
    };

    // Propiedades estaticas
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

const juan = new Cliente('Juan', 4000);
console.log(juan.mostrarInformacion());