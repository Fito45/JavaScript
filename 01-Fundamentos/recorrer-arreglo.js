/*
Recorrer arreglos

podemos acceder a cada dato de un arreglo a través de sus indice. Ya sea para obtener el dato o hacer algo con ese índice.
*/

/*
Definir un Array
*/

let colores = ["amarillo", "naranja", "azul", "morado", "Rosa"]

/*imprimimos los colores en la consola*/
/*
console.log(colores[0])

console.log(colores[1])

console.log(colores[2])
*/

/*recorrer el array con el bucle for*/

for (let indice = 0; indice < 3; indice++) {
    console.log(colores[indice])
}

/* 

Blucle for..of
es una manera simple y moderna de recorrer arrays en  js
esto nor permites acceder directamente ak valor de cada elemento sin necesidad de usar indicces;

for(const de un elemento) {
        //codigo a ejecutar por cada elemento en su array
}
*/

for (const color of colores) [
    console.log(`colorcito: ${color}`)
]

// Ejercicio de arreglos

let animal = ["Tigre", "Oso", "Pato", "Cangura", "zorro"]

for (const color of animal) [
    console.log(`Animalito: ${animal}`)
]