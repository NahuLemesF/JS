const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// Convertir string a número entero
console.log(Number.parseInt(numero1));

// Convertir string a número flotante
console.log(Number.parseFloat(numero2));

// Retorna NaN, porque la palabra uno no es un número
console.log(Number.parseFloat(numero3));

// Revisar si un numero es entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));

