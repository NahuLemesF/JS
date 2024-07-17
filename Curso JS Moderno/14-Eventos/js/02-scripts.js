const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('Entrando en la navegacion');
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
})
nav.addEventListener('click', () => {
    console.log('Click en la navegacion');
})

// Otros eventos:
// mousedown - similar al click
// mouseup - cuando sueltas el mouse
// dblclick - dobleclick