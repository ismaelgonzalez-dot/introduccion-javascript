//Declaración y asignación en arreglos
const numeros = [10, 20, 40, 50];
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");
console.table(meses);

//Agrega un nuevo elemento al final del arreglo, método push()
numeros.push(60);
console.table(numeros);

//Se pueden agregar múltiples elementos
numeros.push(70, 80, 90);
console.table(numeros);

//El método unshift, agrega elementos al inicio del arreglo
numeros.unshift(-10, -20, -30);
console.table(numeros);

//Eliminar el último elemento de un arreglo, método pop()
meses.pop();
console.table(meses);

//Eliminar el primer elemento de un arreglo, método shift()
meses.shift();
console.table(meses);

//Elimina varios elementos en el arreglo
meses.splice(2, 1); //El índice del elemento donde comienza a eliminar, cantidad de elementos a eliminar
console.table(meses);

//Rest operator o Spread operator
//Tomando como base el arreglo meses
//Agrega elementos al final sin modificar el arreglo original
const nuevoArreglo = [...meses, "Junio"];
console.table(nuevoArreglo);

//Si cambiamos los elementos, ahora lo agrega al inicio sin modificar los datos iniciales.
const nuevoArreglo1 = ["Junio", ...meses];
console.table(nuevoArreglo1);
