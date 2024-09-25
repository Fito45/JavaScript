/*
Operadores

son simbolo para realizar operaciones sobre varoles y variables

Aritmeticos
asignacion
comparacion

*/

/*

operadores aritmeticos
se utilizan para realizar calculos matematicos lineales
*/
//suma "+"

let suma = 16 + 6; // 22

console.log(suma);

//resta "-"

let resta = 54 - 15; // 39

console.log(resta);

//multipicacion "*"

let multiplicar = 4 * 8; // 38

console.log(multiplicar);

// division "/" divide al primer valor por el segundo

let division = 20 / 4 // 5

console.log(division);

//modulo "%" devuelve el resto de valores de la division entre dos valores

let mod = 7 % 2 // 1
let modo = 3 % 3 // 0

console.log(mod);
console.log(modo);

// exponenciacion "**" eleva un numero a la otencia del otro.

let expo = 3 ** 2 // 9
let expo2 = 5 ** 12 // 244140625

console.log(expo);
console.log(expo2);

// incremento "++" incrementa el valor de una unidad

let x = 2;
x++;
console.log(x);

// Decremento "--" decrementa el valor de una unidad

let y = 6;
y--;
console.log(y);


/*

Operadores de Asignación

Estos operadores asignan valores a las variables 

*/

// asignación (=): asigna un valor a una variable

let w = 45;

// Asignación con suma (+=): asigna un valor mientras hace una suma

w += 5; //50

console.log(w)

// asignación con resta (-=): asigna un valor mientras hace una resta

w -= 15; // 35

console.log(w)

// asignación con multiplicación (*=): asigna un valor mientras hace una multpiclicacion 

w *= 2; // 70

console.log(w)

// asignación con división (/=): asigna un valor mientras hace una división

w /= 10; // 7

console.log(w)


/*

Comparacion
estos operadores comparan dos valores y devuelven "true" o "false" 

*/

//igualdad (==) : comparada dos valores para ver si si son iguales sin tener en cuenta el tipo de datos

let valor = "5";
let compara = 5 == valor; // true

console.log(compara)

// igualdad estricta (===): compara dos valores y el tipo para ver si son iguales.

compara = 5 === valor;

console.log(compara)

// desigualdad ( !=) : verifica si los valores no son iguales

let valor1 = "10";
let valor2 = 10;

console.log(valor1 != valor2)

// desigualdad estricta (!==) : verifica si dos valores y sus tipos no son iguales

valor1 = "10";
valor2 = 10;

console.log(valor1 !== valor2)

// Mayor que (>): verifica si el primer valor es mayor que el segundo valor

compara1 = 5 > 5;

console.log(compara1); // true

//mayor o igual que (>=): verificar si el rpimer valor es mayor o igual que el segundo valor

compara2 = 5 >= 5;

console.log(compara2); // true

// menor que (<): vereficia si el primer valor es menor que el segundo valor

console.log(3 < 8); // true
console.log(10 < 8); // false
console.log("5" < 5); // false

//menor o igual que (<=): verifica si el primer valor es menor o igual que el segundo valor

console.log(4 <= 10); // true
console.log(20 <= 100); // false
console.log("45" <= 7); // false
console.log(8 <= 8); // true