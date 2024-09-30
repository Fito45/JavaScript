/*

son estructuras que permiten ejecutar diferentes bloques de codigo en funcin de si una condición (expresion) es verdadero o falso
Estas estrcuturas controlan el flujo de los programaas 

1. IF (si) solo se ejecuta si la condicion que ocurre es verdarera o true, si es falsa o false el codigo dentro de if se opmite

if(condicion){
codigo que se ejecuta si es verdadera 
}
2. else (de lo contrario) este bloque ejecuta un numero cuando las condiciones anteriores no son verididas 

IF (condicion){
condicion que es verdadera o falsa 
}else{

codigo de ejecucuin que sea faksa
}

3. Else IF (si no) nos ayuda a comprobar si la condicion if es falsa por condiciones adicionales. la cantidad es demasiado

if {condicional} {
//condigo.....
} else if{
//codigo ejecutar.... 
}else if{
// codigo ejecutar...
}else{
// codigo...
}
*/

let numero = 300;

if ( numero < 20) {
    console.log("fui ejecutado porque la primera condicion resulto ser veridica");
}else if (numero > 30){
    console.log ("me ejecute porque la segunda condicion es verdadera")
} else {
    console.log("me ejecute porque las condiciones son falsa");
}