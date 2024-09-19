// WeakSet
// A diferencia de un set que acepta cualquier valor, un WeakSet solo acepta OBJETOS

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
};

// tiene algunos metodos similares al set como .add, .has
// .delete
weakset.add(cliente);

console.log(weakset);
//OTRA DIFERENCIA CON EL SET: NO EXISTE EL .SIZE NI ES ITERABLE
