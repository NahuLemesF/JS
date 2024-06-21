const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);

// Acá el comparador si va a ser estricto
console.log(boolean1 == boolean3); // me va a dar false


// Otra forma de crear booleans como objetos
const boolean4 = new Boolean(true);
console.log(typeof boolean4); // Es tipo objeto