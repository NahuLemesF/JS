const autenticado = true;

if(autenticado) { // Aca no es necesario poner el true porque ya esta explicitado
    console.log('El usuario esta autenticado');
}


/* ------------------------------------ */

const puntaje = 500;

// ESTO ESTA MAL, DEBERIA ESTAR PRIMERO EL EXCELENTE

    // if(puntaje > 300) {
    //     console.log('Buen puntaje... felicidades');
    // } else if (puntaje > 400) {
    //     console.log('Excelente!');
    // }

// ESTO ESTA MEJOR...

    // if (puntaje > 400) {
    //     console.log('Excelente!');
    // } 

    // if (puntaje > 300) {
    //     console.log('Buen puntaje... felicidades');
    // }

// PERO MEJOR ES HACERLO CON UNA FUNCION Y RETURN

function revisarPuntaje() {
    if (puntaje > 400) {
        console.log('Excelente!');
        return; // Es importante el return
    } 
    
    if (puntaje > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisarPuntaje();