//Funciones con parámetros y argumentos
//Funciones con parámetros.
function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}

//argumentos o valores reales
//se puede reutilizar
//La forma en que coloques los argumentos, toma los valores en la función.
sumar(10, 10);
sumar(3, 3);
sumar(8, 15);

const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);

//Si en algunas funciones no le pasas el total de parámetros especificados, existen los parámetros
//por default.
//En caso de que no este presente algún valor toma el asignado por default
function sumar3(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}
sumar3(10);
