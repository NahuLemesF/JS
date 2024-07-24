const busqueda = document.querySelector('.busqueda');


// //Keydown, cuando presiono una tecla
// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo...');
// })

// //Keyup, cuando dejo de presionarla
// busqueda.addEventListener('keyup', () => {
//     console.log('Dejando de escribir...');
// })

// //Blur, cuando salgo del modo escribir
// busqueda.addEventListener('blur', () => {
//     console.log('Saliendo de modo escritura');
// })

// //Copy para copiar, cut para cortar, paste para pegar
// busqueda.addEventListener('copy', () => {
//     console.log('Archivo copiado');
//     alert('Copiado');
// })

// Input, todos los eventos anteriores salvo el blur
busqueda.addEventListener('input', (e) => {  // e es Evento
    console.log(e.type);
})
