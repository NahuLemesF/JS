// Undefined. Tengo definida una variable pero no su valor
let numero;

console.log(numero)

// Null
let numero2 = null;
console.log(numero2);
console.log(typeof numero2); // Me da object porque los null son objetos

// Null y undefined son igualados por el comparador no estricto. Errorcito
console.log(numero == numero2); // Me da true
console.log(numero === numero2); // Me da false

