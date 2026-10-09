const producto = {
    nombreProducto: "Monitor de 20 pulgadas", //propiedad o llave del objeto, dos puntos y el valor
    precio: 300,
    disponible: true
}
//no te permite agregar, eliminar o modificar un valor a las propiedades del objeto

Object.freeze(producto);

producto.imagen = "imagen.jpg";

//Método para saber que un objeto esta sellado (no puedes agregar propiedades)
console.log(Object.isFrozen(producto));

console.log(producto);

//Ahora con la función "seal"
const producto2 = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
//no te permite agregar y eliminar las propiedades del objeto
//pero si te permite modificar

Object.seal(producto2);

producto2.imagen = "imagen.jpg";
producto2.precio = 350; //esto sí se permite

//Método para saber que un objeto esta sellado (no puedes agregar propiedades)
console.log(Object.isSealed(producto2));

console.log(producto2);
