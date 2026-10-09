function sumar(n1, n2) {
    return n1 + n2; //Regresa el valor
}

const resultado = sumar(2, 3); //Toma el valor de retorno y lo asigna a otra variable
console.log(resultado);

//Supongamos que tenemos un total a pagar (carrito de compras)
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return 1.16 * total;
}
total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);
console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de: ${totalPagar}`);
