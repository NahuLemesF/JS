// Maps
// Listas ordenadas con llave y valor
// como un objeto pero con una sola propiedad.

const cliente = new Map();

// Agrego elementos con .set
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

// Pueden tener cualquier tipo de dato como llave y como valor
cliente.set(true, true)

//Se usa .size para saber la extension
// console.log(cliente.size);

//Se puede usar .has tambien para comprobar los valores

// .get para obtener un valor a partir de una key
// console.log(cliente.get('nombre'))

// tambien se puede usar .delete y .clear
// console.log(cliente);

/*----------------*/

// Se puede crear un Map con valores ya incorporados a traves de arreglos
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

// igual se pueden asignar mas de la otra forma
paciente.set('Dr', 'Dr Asignado');

// si escribo un nuevo valor para una misma llave se reescribe
paciente.set('nombre', 'Antonio')

//Los Map tambien son iterables
paciente.forEach((datos, index) => {
    console.log(index);
    console.log(datos);
})
// console.log(paciente);