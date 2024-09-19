// WeakMap, solo acepta objetos

const producto = {
    idProducto: 10,
};

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

// No puedo extraer la informacion que esta dentro del producto porque queda oculto

//se puede utilizar .has, .get y .delete
// no son iterables, ni se puede usar size