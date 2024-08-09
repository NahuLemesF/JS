// Moment JS (ver datos en momentjs.com)
const diaDeHoy = new Date();

moment.locale('es');

// Instanciamos todo en espaniol
console.log(moment().format('MMMM Do YYYY h:mm:ss'));