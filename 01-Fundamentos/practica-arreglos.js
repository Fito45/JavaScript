/*
Practica Arreglos- Liga superheroes

-decidir un arreglo llamado "heroes" que contenga cinco nombres de superheroes
-la linea crece y agregamos un nuevo heroe al final del array
-eliminar al primer heroe
-cambiamos al tercer heroe por otro más poderoso
-ordenar alfabeticamente la lista
-crear nuevo array llamado "enemigos" con tres elementos con el metodo.

*/

let heroes = ["Shrek", "Superman", "Iron Man", "Wolverine", "Moon Girl"];

heroes.push("Deku");

heroes.shift();

heroes.splice(2, "Popeye");

heroes.sort();

let Enemigos = heroes.splice(2,5);

console.log(heroes);

console.log(Enemigos);