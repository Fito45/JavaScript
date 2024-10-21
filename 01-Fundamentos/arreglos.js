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

/*

unshift= agrega un elemento al inicio del array 

nombreArray.unshift(elemento nuevo)

*/

console.log(frutasFavoritas);

frutasFavoritas.unshift("platano");

console.log(frutasFavoritas);

/*

Shift -> elimina el primer elemento del array

nombrearray.shift()

*/

console.log(numerosSuerte);

let quitarPrimero = numerosSuerte.shift();

console.log(numerosSuerte);
console.log(quitarPrimero);

/*
indexOf() -> encuentra el indice de un elemento en el array

nombreArray.indexOf(dato);

*/

let indicar = frutasFavoritas.indexOf("kiwi");

console.log(indicar);

/*

splice() -> elimina o agrega elementos al array desde una posicion especifica

Eliminar:

NombreArray.Splice(indiceInicio, IndiceFinal);

Agregar:

NombreArray.Splice(indiceInicio, pasos, valor1, valor2);

*/

console.log(frutasFavoritas);

frutasFavoritas.splice(1, 2);

console.log(frutasFavoritas);

frutasFavoritas.splice( 1, 0, "manzana", "melon")

/*

slice -> se crea un nuevo array, se tiene que asignar a una variable

nombreArray.slice(nombreInicio, IndiceFinal)

*/

let frutasCopia = frutasFavoritas.slice(3,5)

console.log(frutasCopia);

/*

sort() - ordena los elementos de un array de mayor a menor

nombreArray.sort() -de primeras no pasamos ningun dato entre los parentesis

*/

console.log(frutasFavoritas);

frutasFavoritas.sort();

console.log(frutasFavoritas);

console.log(numerosSuerte);

numerosSuerte.sort();

console.log(numerosSuerte);