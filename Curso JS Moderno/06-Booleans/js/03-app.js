// Si tenemos un if con una variable declarada, no poner el true en el if
const autenticado = true;

if(autenticado /*=== true, esto no*/) {
    console.log('Si puedes ver netflix')
} else {
    console.log('No, no puedes ver Netflix')
}

// Operador ternario
console.log(autenticado ? 'Si está autenticado' : 'No está autenticado')