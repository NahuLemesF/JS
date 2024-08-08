// Como obtener los datos de localStorage, usamos getItem
const nombre = localStorage.getItem('nombre');

// Si intento traer un objeto o un array me lo va a traer como string
const productoJSON = localStorage.getItem('productoJSON');
const meses = localStorage.getItem('meses');
console.log(productoJSON);

//Para volver un string a object o array es con .parse
console.log(JSON.parse(productoJSON));
console.log(JSON.parse(meses));
