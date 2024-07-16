// querySelector, retorna el primero que encuentre

// para seleccionar una clase con querySelector
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores espeficicos como en css
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Para seleccionar un id con querySelector
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);