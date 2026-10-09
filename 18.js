//Métodos arrays

//Arreglo unidimensional
//No existen los arreglos asociativos en JS pero si puedes tener un arreglo de objetos
const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

//Creamos un arreglo y cada producto es un objeto
//Supongamos que tenemos un carrito de compras
const carrito = [
    { nombre: "Monitor de 20 pulgadas", precio: 500 },
    { nombre: "Televisión de 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 }
];

//Supongamos que quiero saber si "Marzo" se encuentra en el arreglo de meses
//ocuparemos un forEach y un if.
meses.forEach(function (mes) {
    if (mes == "Marzo") {
        console.log("Marzo si existe");
    }
});

//En lugar de utilizar lo anterior podemos usar Includes, solo funciona en arreglos unidimensionales
//Regresa falso o verdadero
let resultado = meses.includes("Marzo");
console.log(resultado);
const resultado1 = meses.includes("Diciembre");
console.log(resultado1);

//Para arreglos de objetos se utiliza Some
//Tienes que acceder a cada propiedad para que funcione correctamente
resultado = carrito.some(function (producto) {
    return producto.nombre === "Celular"
})
console.log(resultado);

//El código anterior se puede resumir con array function, de la siguiente manera.
resultado = carrito.some(producto => producto.nombre === "Tablet");
console.log(resultado);

//La función Reduce, saca el total de una cantidad de números.
//Sintáxis de reduce
//Investigar las partes de la función reduce
resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0);
console.log(resultado);

//Si la usamos con un array function :
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

//La función Filter, sirve para obtener un elemento, todos menos uno, o los mayores a x valor, etc.
//Es un filtro, se pueden utilizar los operadores relacionales

resultado = carrito.filter(function (producto) {
    return producto.precio > 400
});
console.log(resultado);
