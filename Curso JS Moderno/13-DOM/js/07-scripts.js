// Modificar css

// const encabezado = document.querySelector('h1');

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';

// Agregar o quitar una clase / .add y .remove
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card')
console.log(card.classList);
