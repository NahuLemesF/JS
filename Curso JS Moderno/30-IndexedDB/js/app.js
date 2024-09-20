document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});

function crmDB() {
    // Crear base de datos version 1.0 con indexedDB
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function() {
        console.log("Hubo un Error");
    };

    // Si esta bien configurada
    crmDB.onsuccess = function() {
        console.log('Base de datos creada');
    };

    // Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath
        })
    };
};