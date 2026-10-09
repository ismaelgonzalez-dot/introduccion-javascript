//Métodos para los string

const tweet = "Monitor de 20 pulgadas";
const producto2 = "Monitor HD";

//Lo compruebas con
console.log(tweet);
console.log(producto2);

//Cantidad de caracteres en una cadena
//length es para la extensión
console.log(tweet.length);

//Verificar si una palabra existe en una cadena de texto, te retorna una posición.
//IndexOf, en que posición se encuentra un texto que se esta buscando
console.log(tweet.indexOf("de"));
console.log(producto2.indexOf("de")); //si el valor es menor a un número entero significa que no existe

//includes
//retorna true o false
console.log(tweet.includes("de"));
console.log(producto2.includes("de")); //si el valor es menor a un número entero significa que no existe

//Podemos usar estas funciones para validación de correo
const email = "correo@correo.com";
console.log(email.indexOf("@"));
