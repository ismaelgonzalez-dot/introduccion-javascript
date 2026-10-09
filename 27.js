//Switch
const metodoPago = "tarjeta";
//Switch-case
switch (metodoPago) {
    case "tarjeta":
        console.log("Pagaste con tarjeta");
        break;   //Indica el final del case
    case "cheque":
        console.log("Pagaste con cheque");
        break;
    case "efectivo":
        console.log("Pagaste con efectivo");
        break;

    default:   //Ejecuta cuando ningún caso se cumpla
        console.log("Aún no has pagado");
        break;
}

//Puedes agregar múltiples casos, todos los que necesites.
//Tiene una sintáxis más clara.
