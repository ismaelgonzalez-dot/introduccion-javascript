//While loop
//Lleva todas las partes del for pero se colocan de diferente manera
//Difiere en sintaxis con el for pero el resultado es el mismo
console.log("Ciclo while");

let i = 0;  //valor inicial
while (i <= 10) {   //condición
    console.log(i);
    i++;    //incremento
}

let j = 0;  //valor inicial
while (j <= 10) {   //condición
    if (j % 2 == 0) {
        console.log(j);
    }

    j++;    //incremento
}

//Do...while loop
console.log("Ciclo Do..while");
let k = 0;
do {
    console.log(k);
    k++;
} while (k <= 10);
