// Arrow functions - Funcion flecha

const aprendiendo = function (tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'Node.js');

//Esto es un arrow function, cuando es un parametro solo puedo sacar los parentesis
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('JavaScript', 'Node.js'));

