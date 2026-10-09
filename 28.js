//Ciclos
//For loop
//Ejecuta el código mientras la condición sea verdadera
//Sintaxis, inicio, condición, incremento.
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`El número ${i} es par`);
    }
    else {
        console.log(`El número ${i} es impar`);
    }
}

//El ciclo for se utiliza para iterar sobre un arreglo

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}
