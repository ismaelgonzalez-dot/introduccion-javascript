const producto = {
    nombreProducto: "Monitor de 20 pulgadas", //propiedad o llave del objeto, dos puntos y el valor
    precio: 300,
    disponible: true
}

//Forma anterior
//crear la variable y extraer el valor
const precioProducto = producto.precio;
console.log(precioProducto);

const nombreProducto1 = producto.nombreProducto;
console.log(nombreProducto1);

//Destructuring de objetos
//Extraer de una estructura
//Lo que hace destructuring es extraer el valor y crear la variable en un solo paso
const { precio } = producto; //extraer el precio y lo colocamos en la variable precio
console.log(precio);

const { nombreProducto } = producto;
console.log(nombreProducto);

//Cuando tienes varios elementos de un solo objeto
//(para que funcione debe tener el mismo nombre de la propiedad del objeto)
//const { precio, nombreProducto } = producto;
