const producto = 'Monitor 20 Pulgadas';

console.log(producto);

// Para reemplazar una palabra con otra
console.log(producto.replace(' Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// Para cortar .slice
console.log(producto.slice(0, 10));
console.log(producto.slice(8)); //corta desde donde marco hasta el final
console.log(producto.slice(2, 1)); // no va a cortar hacia atras, por eso no muestra nada

// Alternativa a Slice .substring
console.log(producto.substring(2, 1)); // subString invierte los caracteres si los pongo al revés
// Diferencia entre Slice y Substring: si le pasas un numero mayor de inicio, slice no hace nada, substring modifica

// para cortar la primera letra, para índice.
const usuario = 'Juan';
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));

