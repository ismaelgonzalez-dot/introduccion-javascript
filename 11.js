const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

console.log(nombreProducto);
console.log(precio);
console.log(disponible);

//Crear objetos
const producto = {
    nombreProducto: "Monitor de 20 pulgadas", //propiedad o llave del objeto, dos puntos y el valor
    precio: 300,
    disponible: true
}

console.log(producto);

//acceder a un determinado elemento del objeto producto
console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.disponible);

//acceder a un determinado elemento con []
console.log(producto["precio"]);
