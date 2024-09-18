/*
Tipos de Datos

los tipos de datos se dividen en dos categorías:

"Primitvos y Conplejos"

1- Tipos de datos primitivos:

son datos basicos que no se consideran "objetos" y no tienen "metodos".

Tipo Number o Numero

*Representación de valores numericos, ya sea enteros o decimales (punto flotante).

*String o cadena de caracteres:  su uso es para generar texto, se coloca en comillas dobles o simples "texto" text

*Boolean: Estos representan un valor logico que puede ser "true" o "false".

*Undefined o Indefinido

es el valor que se le asigna a una variable que se la ha sido declarada pero no iniciada.

*arrer o arrego son un conjunto de datos que los almacenas en una lista ordenada de elementos 

los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas ""
*/

let miNumero = 29;
let miNumeroDecimal = 1.50;

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */

let miNombre = "Adolfo";
let miApellido = "Castro Orozco";

console.log(miNombre);
console.log(miApellido);

/* Boolean */

let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentira);

/* undefined o Indefinido */

let x; //declarar una variable sin inicializarla

console.log(x);

x = prompt("cual es tu numero favorito?");

console.log(x); //valor que el usuario introduzca

/* array */ 

let misFrutasFavoritas = ["Pera","Platano","Manzana"];

let misNumerosSuerte = [45,10,13,29];

let OtroArray = ["Fito",29,true];

console.log(misFrutasFavoritas);
console.log(misNumerosSuerte);
console.log(OtroArray);