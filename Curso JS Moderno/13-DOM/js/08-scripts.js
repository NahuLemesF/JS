// Traversing the DOM

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
// console.log(navegacion.childNodes); // Muestra los elementos y los espacios entre ellos
// console.log(navegacion.children); // Muestra solo los elementos. MEJOR

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

 /* -------------NAVEGAR HACIA LOS HIJOS-------------- */
// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);

/* --------------------AL REVES--------------------- */
// Traversing the DOM hijo al padre

// console.log(card.parentNode); // Toma en cuenta los espacios en blanco
// console.log(card.parentElement); // MEJOR


// /*---------------Recorrer a elementos hermanos---------------*/
// console.log(card);
// console.log(card.nextElementSibling); // Pasa a la siguiente card
// console.log(card.nextElementSibling); // Pasa a la siguiente card
// console.log(card.nextElementSibling); // Pasa a la siguiente card

/*---------------Recorrer a anteriores---------------*/
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);