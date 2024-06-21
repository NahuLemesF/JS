const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si dos números son iguales ==

console.log(numero1 == numero3);
console.log(numero1 == numero2); //Este comparador solo toma el valor, no es escricto

// Comparador estricto
console.log(numero1 === numero2); // Va a dar false porque se fija en el tipo de dato

console.log(typeof numero1); // Me va a decir que es un Numero
console.log(typeof numero2); // Me va a decir que es un string

console.log(numero1 === parseInt(numero2)); // Convierto a numero y me da true

// Comparar si son diferentes
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // Me da true porque son diferentes
console.log(numero1 != numero2); // Comparador no estricto
console.log(numero1 !== numero2); // Comparador estricto


