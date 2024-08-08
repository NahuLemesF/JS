//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let arrayTweets = [];


//Eventos
cargarEventListeners();
function cargarEventListeners() {
    // Escucha el submit del formulario
    formulario.addEventListener('submit', agregarTweet);
    // Escucha la carga del DOM
    document.addEventListener('DOMContentLoaded', () => {
        // Llama a tweets del localStorage o crea uno nuevo si no lo hay: '||'
        arrayTweets = JSON.parse(localStorage.getItem('tweets')) || [];
        mostrarTweets();
    })
}


function agregarTweet(e) {
    e.preventDefault();

    //Text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion
    if (tweet === '') {
        mostrarError('No puede agregar un Tweet vacío');
        return;
    }

    // creo un objeto del Tweet dandole un id con Date.now()
    const tweetObj = {
        id: Date.now(),
        texto: tweet,
    }
    // Añadir al arreglo de tweets
    arrayTweets.push(tweetObj);

    // Llama la funcion que muestra los Tweets en HTML
    mostrarTweets();
    mostrarMensaje('Se ha agregado un nuevo tweet');

    // Reiniciar el Formulario
    formulario.reset();
}

// Mostrar tweets
function mostrarTweets() {
    limpiarHTML();
    if (arrayTweets.length > 0) {
        arrayTweets.forEach(tweet => {
            // Crear un boton para eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            // Aniadir funcion de eliminar Tweet
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el html
            const nuevoTweet = document.createElement('li');

            //Aniade el texto
            nuevoTweet.textContent = tweet.texto;

            //Aniade el boton
            nuevoTweet.appendChild(btnEliminar);

            // Lo manda al HTML
            listaTweets.appendChild(nuevoTweet);
        });
    };
    sentToStorage();
};

// Limpiar HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    };
};

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.classList.add('error');
    mensajeError.textContent = error;

    formulario.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
};

// Mostrar mensaje de exito
function mostrarMensaje(mensaje) {
    const mensajeExito = document.createElement('p');
    mensajeExito.classList.add('success');
    mensajeExito.textContent = mensaje;

    formulario.appendChild(mensajeExito);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeExito.remove();
    }, 3000);
}

// Enviar arrayTweets al localStorage
function sentToStorage() {
    localStorage.setItem('tweets', JSON.stringify(arrayTweets));
};

//Borrar Tweet
function borrarTweet(id) {
    arrayTweets = arrayTweets.filter(tweet => tweet.id !== id);
    mostrarTweets();
    mostrarMensaje('El tweet ha sido eliminado');
}
