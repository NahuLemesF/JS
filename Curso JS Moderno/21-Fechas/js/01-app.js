// Fechas. usamos new Date()
const diaDeHoy = new Date();

let valor;

valor = diaDeHoy;

// Para mostrar el anio 
valor = diaDeHoy.getFullYear();
// Para obtener el mes actual (se cuenta desde 0)
valor = diaDeHoy.getMonth();
// Para obtener los minutos de la hora
valor = diaDeHoy.getMinutes();
// Para obtener solo la hora (sin minutos)
valor = diaDeHoy.getHours();
// Para obtener valor en milisegundos desde 1/1/70 a hoy
valor = diaDeHoy.getTime();
// Para setear esa Date usamos set
valor = diaDeHoy.setFullYear(2010);


console.log(diaDeHoy);



