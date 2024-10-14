/* Introcciones condicionales IF,IF ELSE/

1. crear una variable y asignarle un valor numerico
2. con las sentencias if/ if else, evaluar el valor de la variable Día con las siguientes condiciones

dia == 1 // lunes
dia == 2 // Martes
dia == 3 // Miercoles
dia == 4 // Jueves
dia == 5 // Viernes
dia == ? // Día no valido

*/
/*
let dia = 1;

if (dia == 1) {
    console.log("Lunes");
} else if (dia == 2) {
    console.log("Martes");
} else if (dia == 3) {
    console.log("Miercoles");
} else if (dia == 4) {
    console.log("Jueves");
} else if (dia == 5) {
    console.log("viernes");
} else{
    console.log("Día no valído");
}
*/

/* Swicth 
Es una estructura de control de flujo condicional pero se utiliza cuando tenemos multiples casos para evaluar 
una expresión

es pas eficiente en situaciones donde se quiere comparar una sola variable con varios valores posibles.

sintaxis:

Switch(expresion){
    case valor1
            // codigo que se ejecuta
            break;
    case valor2
            // codigo que se ejecuta
            break;
    case valor3
            // codigo que se ejecuta
            break;
    default:
            // codigo que se ejecuta por default
}
*/

let dia = 1;

switch (dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    default:
        console.log("Día no valído");
}

/* 

ejercio switch 

1- crear una variable pokémon y asignarle un valor en string con el nombre de un pokemon

*/

let pokemon = "Typhlosion";

switch (pokemon) {
    case "Pikachu":
        console.log(`Tu pokémon es ${pokemon} y es tipo electrico`);
        break;
    case "Typhlosion":
        console.log(`Tu pokémon es ${pokemon} y es tipo fuego y  lo condenaran a cadena perpetua`);
        break;
    case "Incineroar":
        console.log(`Tu pokémon es ${pokemon} y  es tipo fuego y siniestro, roar`);
        break;
    default:
        console.log(`Tu pokémon es tan irrelevante que ni funa o casos tiene`);
}