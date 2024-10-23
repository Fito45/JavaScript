/*
funciones
son bloques de codigo funcionales ya que realizan una funcion especifica

en lugar de escribir el mismo codigo podemos deficinir una funcion solo una vez y usarla solo cuando la necesitamos

conceptos de las funciones:

-definir: creamor la funcion con un nombre y los datos que llamamos parametros

-invocar: llamamos la funcion cuando se necesita de su codigo, es decir cuando hagan su tarea

-retorna: es que puede devolver un resultado la funcion

sintaxis

function nombreFuncion( param1, param2, param3 ) {
//codigo que se va a ejecutar
return resultado;
}

funtion ->palabra clave para declarar una funcion
nombreFuncion-> nombre que le otorgamos a la funcion y es el nombre para invocarla
Param1,param2-> son los datos que le pasamos a la funcion para que trabaje con ellos en su bloque de codigo [opcional]
cuerpo de la funcion-> codigo que se ejecuta y realiza su tarea de la funcion
return-> retorna un resultado [opcional]

*/

function saludo() {
    console.log("Hola nariz de bola!")
}

/*saludo();*/

function saludoPersonalizado(nombre) {
    console.log(`¡Hola querido ${nombre} tienes nariz de bola!`)
}

/*
saludoPersonalizado("Fito");
saludoPersonalizado("Bola");
*/

function sumar(a, b) {
    return a + b
}

let resultado = sumar(10, 20);

console.log(resultado * 5);