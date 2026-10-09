//Las funciones en cualquier lenguaje de programación son una serie de procedimientos o
//instrucciones que realizan una acción.
//Una ventaja es que permite ordenar el código y es más fácil de mantener
//Las funciones son reutilizables.

//Existen tres formas de crear funciones.

//Primera forma de crear funciones.
//Declaración de la función.
//Sintáxis : Inica con la palabra reservada function, nombre de la función, paréntesis(argumentos), llaves
function sumar() {
    console.log(10 + 10);
}

//Invocación o llamada de la función
sumar();

//Segunda forma de crear funciones.
//Expresión de la función.
const sumar2 = function () {
    console.log(3 + 3);
}
//Invocación o llamada de la función.
sumar2();

//Tercera forma de crear funciones.
//Esta forma no necesita invocarse o llamarse, se invocan ellas mismas
//Este tipo de funciones no son muy recomendadas para reutilizarse, se utilizan para proteger las variables.
//IIFE
(function () {
    console.log("Esto es una función");
})();
