//for... in
//for of itera sobre arreglos, for in sobre objetos

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

// UNA FORMA

// for (let propiedad in automovil) {
//     console.log(`${automovil[propiedad]}`);
// }

// NUEVA FORMA en ECMA7. object.entries

for(let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
    console.log(llave);
}