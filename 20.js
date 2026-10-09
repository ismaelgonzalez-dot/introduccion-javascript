//Diferencias entre el tipo de funciones

//Primera forma (declaración): funciona aunque se llame antes de crearla
sumar();
function sumar() {
    console.log(10 + 10);
}

//Segunda forma (expresión): si la llamas antes de crearla, manda error
//sumar2();   <- Descomenta esta línea para ver el error:
//               "Cannot access 'sumar2' before initialization"
const sumar2 = function () {
    console.log(3 + 3);
}
sumar2(); //llamada correcta (después de la creación)
