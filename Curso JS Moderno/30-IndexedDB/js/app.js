let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 1000 * 5);
});

function crmDB() {
    // Crear base de datos version 1.0 con indexedDB
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function() {
        console.log("Hubo un Error al crear la base de datos");
    };

    // Si esta bien configurada
    crmDB.onsuccess = function() {
        console.log('Base de datos creada!');

        DB = crmDB.result;
    };

    // Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true,
        })
        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
    
        console.log('Columnas creadas');
    };

};

function crearCliente() {
    let transaction = DB.transaction('crm', 'readwrite');

    transaction.oncomplete = function () {
        console.log('Transaccion completada');
    };

    transaction.onerror = function () {
        console.log('Hubo un error en la transaccion');
    };

    const objectStore = transaction.objectStore('crm');

    const newClient = {
        telefono: 1235678,
        nombre: 'Nahuel',
        email: 'correo@correo.com',
    };

    const petition = objectStore.add(newClient);

    console.log(petition);
};