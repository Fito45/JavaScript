/*
Bucle o ciclos nos permiten ejecutar un bloque de codigo varias veces, esto facilita tareas repetitivas y ahorra tiempo y codigo.
hay varios tipos de bucles:
*/

/*
 for -> tiene tres partes claves
    inicialisación de la variable
    tiene una condicion que valua la condicion de la variable
    actualizacion de la variable

        for( inicialisacion ;condificon ;actualización ) {
            //codigo que se ejecuta
        }
*/

for (let i = 1; i <= 10; i++) {
    // codigo que se ejecuta
    console.log("mensaje: " + i)
}

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

/*
2 while ->ejecuta su bloque de codigo mientras la condicion espeficada sea verdadera
su sintaxis es la siguiente

    se define la variable fuera del ciclo

    let nombre variable = valor;

    while(condicion){
        condigo a ejecutar
        nombre variale++ //actualización
    }
*/

let contador = 0;

while (contador < 3) {
    console.log("Gato" + contador);
}

contador++;

let veces = 5;

while (veces > 2) {
    console.log("veces: " + veces);
}

veces--;

/*
3 do...while 

es similiar al while pero garantiza que el bloque de codigo se ejecute al menos una vez

promero se ejecuta el codigo y luego se verifica la condición.

do {
    codigo que se ejecuta
    nombre de variable
} while (condicion);
*/

let numero = 0;

do {
    //codigo que se ejecuta al menos una vez
    console.log("el numero es :" + numero);

    numero++;
} while (numero < 6);
