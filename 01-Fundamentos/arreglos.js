/*

Son una estructura de datos que permite almancenar multiples valores en una sola variable
los elementos dentro del array tienen una posición o indice que permite acceder a ellos.

el indice comienza en cero.

los arrays pueden tener datos de cualquier tipo.

Let nombreArray = [elemento,elemento1,elemento2.elemento3]

*/

let frutasFavoritas = ["sandia", "Pera", "Uva"];
let numerosSuerte = [6, 3, 20, 6, 45];
let meQuiereNoMeQuiere = [true, false, true, false];
let misDatos = ["Adolfo", "Castro", 20, true];
let aninandoArrays = [
    ["Gato", "Perro", "pollo"],
    [20, 40, 60],
    [true, false, true]
]

/*

array -> ["sandia", "Pera", "Uva"]
indice>     0          1      2

array -> [6, 3, 20, 6, 45]
indice->  0  2  3   4  5

*/

/*

Acceder a los datos del Array

nombreArray = [indice];

*/

console.log(frutasFavoritas[1])
console.log(numerosSuerte[2])
console.log(aninandoArrays[0][2])

/*
modificiar elementos del Array
usamos la siguiente sintaxis

nombreArray[indice]= nuevoDato

*/

console.log(frutasFavoritas)

frutasFavoritas[2] = "kiwi";

console.log(frutasFavoritas)

/*
los metodos son funciones que nos sirven para trabajar con los datos de los Arrays 
su sintaxist es la siguiente:

1-nombreArray.nombreMetodo
2-nombreArray.nombreMetodo(parametro)

*/

/*
Metodo Legth nos dice cuando elementos tiene un array

frutasFavoritas.legeth
*/

console.log(frutasFavoritas.length);
console.log(numerosSuerte.length);
console.log(aninandoArrays.length);

/*
Push este medo agrega al final del array

nombreArray.Push (datoAñadido)
*/

console.log(frutasFavoritas)

frutasFavoritas.push("Coco");

console.log(frutasFavoritas)

/*
eliminar el ultimo elemento del array y lo devuelve (Pop)

nombreArray.Pop()
*/

console.log(numerosSuerte)

numerosSuerte.pop()

console.log(numerosSuerte)