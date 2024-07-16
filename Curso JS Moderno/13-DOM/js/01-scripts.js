let elemento;

// document es la documento HTML
elemento = document;
// .all selecciona todo lo del documento
elemento = document.all;
// .head para seleccionar el head
elemento = document.head;
// .body para seleccionar el body
elemento = document.body;
// .domain para seleccionar el dominio
elemento = document.domain;
// .forms para seleccionar y listar formularios
elemento = document.forms;
    // [] para acceder a algo dentro de un Html Collection, funciona como un arreglo
    elemento = document.forms[0];
    // .id para acceder al id
    elemento = document.forms[0].id;
    // .method para acceder al metodo
    elemento = document.forms[0].method;
    // .classList para listar clases dentro de un HTML collection
    elemento = document.forms[0].classList;
    // .className retorna clases como STRING
    elemento = document.forms[0].className;
    // .action para acceder al action
    elemento = document.forms[0].action;
// .links para acceder a enlaces (<a>)
elemento = document.links;
// .images para saber cuantas imagenes tengo y listarlas
elemento = document.images;
// .scripts para listas los scripts
elemento = document.scripts;



console.log(elemento);