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

//Pueden ser utilizado únicamente en arreglos
//Se ejecutan una vez por cada elemento que exista en el arreglo, no tienes que escribir una condición
//que evalúe cada vez que se esta iterando
//En JS se utilizan mucho.

//ForEach
//Recorre el arreglo
//La function() puede o no llevar parámetros
carrito.forEach(function () {
    console.log("Una vez por cada elemento");
});
carrito.forEach(function (producto) {
    console.log(producto);
});
//Si quieres acceder al elemento, utiliza la sintáxis punto (producto.nombre o producto.precio)
carrito.forEach(function (producto) {
    console.log(producto.nombre);
    console.log(producto.precio);
});

//Puede utilizarse con un arrow function
carrito.forEach(producto => { console.log(producto); });

//Map
//Funciona igual que el forEach
carrito.map(producto => { console.log(producto); });

//La diferencia entre forEach y map principalmente es su uso.
//Cuando quieras iterar sobre un listado, mostrar los elementos en pantalla, enviarlos a la consola o
//imprimirlos en el html, utiliza el forEach
//Si quieres crear un nuevo arreglo utiliza el map, puedes utilizarlo para filtros.

//Ejemplo
const arreglo1 = carrito.forEach(producto => producto.nombre);

const arreglo2 = carrito.map(producto => producto.nombre);

//Si se imprime, solamente el segundo muestra información
console.log(arreglo1);  //undefined
console.log(arreglo2);
