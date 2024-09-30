/*
Concatenacion es un proceso para unir o combinar dos o más cadenas de texto en una sola.

hay dos formas de hacer la concatenacion.

1. operador (+) este es el metoo más común para concatenar cadenas de textos
2. templetate strings; plantillas de cadenas  o literares (´´) los usamos para 

*/

//concatenar con operador (+)

let nombre = "Fito";
let apellido = "castro";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

let saludo = `Hola ${nombre} ${apellido}! ¿como estas? sabias que  2 + 2 es igual a ${2+2}`;

console.log (saludo)