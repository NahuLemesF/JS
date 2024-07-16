// .querySelectorAll - Selecciona TODOS los elementos con el nombre del selector

// Va a mostrar todas las cards
const card = document.querySelectorAll('.card');
console.log(card);

// Tambien funciona con ID aunque deberia haber un solo id por elemento

// Si un elemento no existe. Retorna un nodeList vacio
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);