const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

console.log(numeros);

// Para arreglos puedo verlo como una tabla con console.table
console.table(numeros);

// Acceder a una posición del arreglo
console.log(numeros[2]);
console.log(numeros[0]);
console.log(numeros[20]); // Da undefined porque esa posicion no está definida.
console.log(numeros[5][2]); // Acceder a un arreglo dentro de un arreglo