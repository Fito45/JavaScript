/*

Objetos es una colección de propiedades y metódos.

Las propiedades describen las caracteristicas del objeto.

Los metodos describen los comportamiento del objeto.

los objetos pueden contener distintos tipos de datos: strings, number, arrays, booleans, "undefined"
e incluso funciones.

Sintaxis:

Let nombreArray = [];
Let nombreObjeto = {
    //propiedades y métodos
    
};

//Las propiedades dentro de un objeto se escriben en pares "clave"; "valor"

Let nombre "Fito" // variable

nombre : "Fito" // Propiedad

Las propiedades de un objeto se separan por comas ´,´

Las claves de las propiedades pueden tener más de una palabra pero se deberan escribir entre comillas "" (Dobles o simples)

"Nombre real" = "Fito",

Tambien se puede escribir en camel case y sin comillas

nombreReal = "Fito
*/

/*definir un objeto*/
/*
let personaje = {
    nombre: "Tijuana Iguana",
    edad: 30,
    residencia: "una casa",
    HabilidadesHumanas: ["Cuija", "vuela", "leal"]
}
*/
/*accedemos al valor de las propiedades */
/*
console.log(personaje.nombre)
//console.log(personaje["Habilidades Humanas"][0])
console.log(personaje.HabilidadesHumanas[0])

//agregar y borrar propiedades de objetos

personaje.enemigos = ["sauron", "golum"];

delete personaje.edad;
*/

//ejercicio

let mascota = {
    nombre: "Manchitas",
    tipo: "Pato",
    edad: 4,
    fisico: {
        estatura: 76,
        peso: 41,
        color: "blanco",
    },

    //declaramos un metodo

    Saludo: function (amo) {
        //codigo que se ejecuta al invocar la funcion
        alert(`Cuack Cuack me llamo ${this.nombre}  y mi amo es ${amo}`)
    },
}

console.log(mascota.fisico.color)
console.log(mascota.fisico.estatura)
console.log(mascota.fisico.peso)
//nombramos al objeto anidado y lo definimos con las llaves y dentro se declaran las propiedades en pares "clave" : "valor"

mascota.fisico.ColorOjos = "marron";

delete mascota.fisico.peso;

/*
Metodo:
un metodo es una funcion que se define como propiedad de un objeto.

Sintaxis

nombreClave : funtion(parametros){
    codigo que se ejecuta
}

this es una palabra recervada que se refiere al objeto actual es decir cuando estamos y este objeto, y siver para accder 
a sus propiedades del mismo.

*/
//accedemos al metdo saludo del objeto mascota

mascota.Saludo("Fito");
