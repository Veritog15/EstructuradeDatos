"use strict";

let a = Number (prompt("Ingrese un valor ")); //Declarado y asignando
let b = Number (prompt("ingrese el segundo valor "));
let result;

//Almacenar en la variable result la suma de a y b y mostrar el result
result = (a + b); 
alert("La suma es "+result);

//Multiplicar los valores de a y b y guardar el resultado
result = a * b;
alert("La multiplicación es " + result)

//Hallar el resto de a para b
result = a % b;
alert("El resto es " + result)

//Crear una variable a2 y asignar un valor de a en negativo
//Mostrar el resultado de a2
let a2 = -a;
alert("El valor negativo de a es " + a2);

//Incrementar el valor de a een 1
a++;
alert("Incremento igual " + a);

//Decrementar el valor de b
b--;
alert("Incremento igual " + b);
