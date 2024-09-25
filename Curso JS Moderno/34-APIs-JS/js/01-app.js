        // PARA SOLICITAR NOTIFICACIONES
//Capturo el boton de notificar
//Le agrego un add event para que al darle click cree una nueva Notification
// esta notification tiene que tener un requestPermission()
// si el permiso es concedido (.then) entonces el resultado va a ser granted
const notificationBtn = document.getElementById('notificar');

notificationBtn.addEventListener('click', () => {
    Notification
    .requestPermission()
    .then(result => {
        console.log(`Permiso concedido, //${result}//` );
    })
})

        // PARA VER LA NOTIFICACION
// Capturo el boton de ver notificacion
// agrego eventlistener para que al darle click me lleve a un condicional
// en este if si la Notification.permission es granted (si la noti fue permitida)
// entonces creo una constante notificacion que es una nueva notificacion
// y ahi entre parentesis le paso los parametros, como el texto y un objeto que tenga un icon, o body)
// finalmente puedo llamar esa constante con un .onclick y sacar un arrow que llame a un window.open para dirigirme a alguna pagina
const viewNotificationBtn = document.getElementById('verNotificacion');

viewNotificationBtn.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notification = new Notification('Codigo con Juan', {
            icon: 'img/ccj.png',
            body: 'Cursos de Programacion'
        }) 
        notification.onclick = () => {
            window.open('https://www.codigoconjuan.com')
        }
    }

})