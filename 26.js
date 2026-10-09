//Estructuras de control condicional
//Utilizan los operadores relacionales <,>,==,!=, etc.
const puntaje = 1000;
//Simple
if (puntaje == 1000) //==, es comparación.
{
    console.log("Si el puntaje es 1000");
}

//Doble
if (puntaje === 1001) //===, compara y revisa que el tipo de dato sea igual que el valor de comparación.
{
    console.log("Si el puntaje es 1000");
}
else {
    console.log("No es igual");
}

const efectivo = 1000;
const carrito = 800;
if (efectivo > carrito) {
    console.log("El usuario puede pagar");
}
else {
    console.log("Fondos insuficientes");
}

//Múltiples
const rol = "Admin";
if (rol == "Admin") {
    console.log("Acceso al sistema");
}
else if (rol == "Editor") {
    console.log("Eres editor");
}
else {
    console.log("No tiene acceso");
}
