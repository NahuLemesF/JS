const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// // Para acceder al texto de HTML, 3 formas
// console.log(encabezado.innerText); // No encuentra texto oculto
// console.log(encabezado.textContent); // Este si encuentra texto oculto
// console.log(encabezado.innerHTML); // No solo se trae el texto, se trae todo el HTML

// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'