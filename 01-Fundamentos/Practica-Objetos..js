/*

Practica Objetos y clases

*/

class arma {
    constructor(nombre, tipo, daño) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.daño = daño;
    }

    describir() {
        console.log(` Arma ${this.nombre} tipo ${this.tipo}  Daño ${this.daño}`)
    }
}

let armas = [];

let arsenal = {

    agregarArma: function (armas) {
        let arma1 = new armas("Gunter", "larga", 60);
        let arma2 = new armas("Platano", "ametralladora", 999);
        let arma3 = new armas("Lanzaguisantes", "Pesada", 250);

    }
}

armas.push(this.agregarArma)


