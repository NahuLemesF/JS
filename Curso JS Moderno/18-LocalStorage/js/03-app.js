// Eliminar y actualizar elementos de localStorage

//Eliminar
localStorage.removeItem('nombre');

// Actualizar un registro

//Primero tengo que obtenerlo
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

//Lo actualizo
mesesArray.push('Nuevo mes');
console.log(mesesArray);

// Y vuelvo a pasarlo con stringify
localStorage.setItem('meses', JSON.stringify(mesesArray));

//Limpiar todo el localStorage
localStorage.clear();