//Crear objetos
const producto = {
    nombreProducto: "Monitor de 20 pulgadas", //propiedad o llave del objeto, dos puntos y el valor
    precio: 300,
    disponible: true
}

console.log(producto);

//Agregar nuevas propiedades a un objeto
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar propiedades a un objeto
delete producto.disponible;
console.log(producto);
