/*

Ejemplo con if/ if else

-declaramos una variable edad y le asignamos un valor numerico
-comproblamos si edad es igual o mayor que 18, mostramos el mensaje "Eres mayor de edad", si no mostramos 
el mensaje "eres un bebé"

*/

/*
let edad = 23;

if (edad >= 18 ){
    console.log("eres mayor de edad");
} else{
    console.log("eres un peque");
}
*/

/*

Operdar ternario es una forma más concisa de escribir una condicion else if/ else.
trabaja con tres operandos :

-condicion 
-la condicion es verdadera
-la condicion es falsa

condicion ? Expresion si es verdadera : Si es Falso

*/

let edad = 20;

let resultado = edad >= 18 ? "Eres mayor de edad" : "Eres un Peque";

console.log(resultado)