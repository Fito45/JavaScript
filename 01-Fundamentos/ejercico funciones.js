/*
definir una variable llamada heroe que tenga un dato en string' con el nombre de un superheroe

define una funcion llamada superpoder

esta definicion recibe el parametro heroe que sea validado en el cuerpo de la funcion

si en el cuerpo de la funcion el parametro "heroe" es igual a superman, mostrar por consola "tu poder es superfuerza"
si "heroe" es igual a flash, por consola "tu poder es supervelocidad"
si "heroe" es igual a batman, por consola "tu poder es supermillonaria"
si nada es igual entonces, "no te invitaron a la fiesta"

invocar a la funcion con su parametro "heroe"
*/

let myHeroe = prompt("eligre un heroe!");

function obtenerSuperpoder(heroe) {
    if (heroe == "superman") {
        console.log("tu poder es superfuerza");
    } else if (heroe == "flash") {
        console.log("tu poder es supervelocidad");
    } else if (heroe == "batman") {
        console.log("tu poder es supermillonario");
    } else {
        console.log("no te invitaron a la fiesta");
    }
}

obtenerSuperpoder (myHeroe);