// Eventos en el scroll

window.addEventListener('scroll', () => {




    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // Brinda datos del elemento, coordenadas, y cuanto falta para llegar a el

    if (ubicacion.top < 748) {
        console.log('El elemento esta visible');
    } else {
        console.log('Aun no, da mas scroll');
    }
})