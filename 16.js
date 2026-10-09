//Arreglos o arrays
const numeros = [10, 20, 40, 50];
console.log(numeros);

//Mejor forma de mostrar los elementos en un arreglo
console.table(numeros);

//También los puedes crear con el constructor
const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");
console.log(meses);
console.table(meses);

//En un arreglo puedes mezclar todo tipo de datos
const arreglo = ["Hola", 10, true, "si", null, { nombre: "Yara", trabajo: "Profesora" }, [1, 2, 3]];
console.log(arreglo);

//Acceder a los valores de un arreglo
//se utiliza el índice
console.log(numeros[4]);
console.log(numeros[0]);
//Si accedes a una propiedad no existente no te marca error, solo te muestra "no definido"
console.log(numeros[200]);

//Conocer la extensión de un arreglo.
console.log(meses.length); //Me dice cuantos elementos hay en un arreglo

numeros.forEach(function (numero) {
    console.log(numero);
})
