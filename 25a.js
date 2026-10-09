//Arrow function

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

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

meses.forEach(mes => {
    if (mes == "Marzo") {
        console.log("Marzo si existe");
    }
});

let resultado;
resultado = carrito.some(producto => producto.nombre === "Celular");
console.log(resultado);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== "Celular");
console.log(resultado);
