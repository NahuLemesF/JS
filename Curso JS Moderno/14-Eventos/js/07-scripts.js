// detener Event Bubbling con Delegation

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en Titulo');
    } 
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en Titulo');
    } 
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en Titulo');
    }
})