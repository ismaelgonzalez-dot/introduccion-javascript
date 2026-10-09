//Creamos 2 objetos
const producto = {
    nombreProducto: "Monitor de 20 pulgadas", //propiedad o llave del objeto, dos puntos y el valor
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

//Unir dos objetos
//para eso tenemos un spread operator
//consta de tres puntos seguidos del objeto que queremos agregar y si quieres agregar más
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);
