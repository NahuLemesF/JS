// Crear nuevos elementos en HTML desde javaScript

const enlace = document.createElement('A'); // La a es de enlace

// Agregando texto
enlace.textContent = 'Nuevo Enlace';

// Agregando href
enlace.href = '/nuevo-enlace';

// Agregando target
enlace.target = '_blank';

// Agregando setAttribute
enlace.setAttribute('data-enlace', 'nuevo-enlace') //Nombre del atributo, valor del atributo

// Agregando clase
enlace.classList.add('alguna-clase');

console.log(enlace);

// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');

// Colocar el enlace al final de la nav
navegacion.appendChild(enlace);
// Para insertarlo antes de...
navegacion.insertBefore(enlace, navegacion.children[1]);


/*------------Creando un card-----------------*/

// Creando los parrafos
const parrafo1 = document.createElement('P'); //P es de parrafo
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase info (para poner la card dentro)
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alternativo';

// Crear el card
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);
