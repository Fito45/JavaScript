/*
Clases

Una clase es en javascript es una plantilla para crear objetos.

es una forma moderna y natural de trabajar con la programación orientada a objetos.

Metodo constructor: es un metodo especial que se ejecuta automaticamente cuando se crea una nueva instancia de la
clase.

Dentro del metodo constructor pasamos las propiedades y valores de la clase.

los  nombres de las clases se recomiendan escribirlas con la primera letra en mayusculas.

Las propiedades pasan como parametros y luego se asignan con "this"

Sintaxis basica 

Class NombreClase {
    //Método constructor

    constructor(par1, par2 ...) {
        this.par1 = par1;
        this.par2 = par2;
    } 
}

Instancias de clases:
Para crear un objeto usando la clase se utiliza la palabra "new", esto invoca al constructor de la clase.

new NombreClase(par1, par2 ...);

Esta intancia se asigna a una variable o constante

METODO DE CLASES

se definen dentro de una clase y se asignan automaticamente en el prototipo del objeto, es un conjunto de propiedades
de los objetos.
esto permite que todas las istancias comportan el mismo metodo.

sintaxis

nombreMetodo(parm...) {
    //codigo que se ejecuta

}
*/

//definir una clase, Mascota

class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre; // crea la propiedad nombre
        this.edad = edad;   //crea la propiedad edad
    }

    saludo(){
        console.log(`hola me llamo ${this.nombre} y tengo ${this.edad} años!`)
    }

}

// instanciar la clase Mascota. crearemos un objeto



let mascota1 = new Mascota("Manchitas", 4);
let mascota2 = new Mascota("oso", 1);

//acceder a los datos de las istancias

console.log(mascota1.nombre)
console.log(mascota1.edad)

//lanzar los metodos de los objetos

mascota1.saludo()
mascota2.saludo()