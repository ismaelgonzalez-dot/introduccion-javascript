//Variables

//crear variables
//utilizando la palabra reservada var, sigue con un nombre y la asignación de un
//valor y termina con un ;
//Iniciar variable y asignar valor
var producto = "Audífonos Gamer";

//Las variables pueden ser creadas sin ningún valor
//iniciamos la variable sin valor
var disponible;

//En JS no se tiene que declarar el tipo de dato a la variable, al momento de asignarle el valor
//el tipo de dato. JS es un lenguaje de tipo dinámico, guarda el tipo de dato en el valor que tiene
//y no en la variable.

//Se puede reasignar el valor de la variable
producto = true;
disponible = false;

//Se pueden declarar múltiples variables.
var producto1 = "Computadora",
    disponible1 = true,
    categoria = "Computadoras";

//Estilos para las variables
var nombre_producto = "Monitor";  //underscore
var nombreProducto = "Monitor HD"; //Camelcase
var NombreProducto = "Monitor";   //Pascal case
var nombreproducto = "Monitor";   //lower case

//La consola ayuda a ver el valor de una variable
console.log(disponible);
