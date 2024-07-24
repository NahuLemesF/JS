// OPERADOR TERNARIO (IF '?') (ELSE ':') 

const autenticado = false;
const puedePagar = true;

// Ejemplo con un AND
console.log( autenticado && puedePagar ? 'Esta autenticado' : 'No esta autenticado');

// IF ANIDADO EN UN TERNARIO, UN IF DENTRO DE UN IF
console.log( autenticado ? puedePagar ? 'Esta autenticado y puede pagar' : 'Esta autenticado pero no puede pagar' : 'No esta autenticado');
