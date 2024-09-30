/*
Operadores logicos: permiten evaluar por expresiones que dan como resultado "verdadero" o "falso"
una expresion es un trozo de codigo que evalua, es decir, resulta en "true" o "false"

1. AND (&&) este operador devuelve true solo si ambos operandos son verdaderos
2. OR (||) este operador devuekve true si almenos uno de los operandos es verdadero
3. NOT (!) este operador invierte el valor boleano se escribe del lado izquierdo de la variable sin espacios
*/

let a = 5 < 1;
let b = 5 < 7;

//console.log(a && b); // true

//console.log( a || b); //false

console.log(!b);//false