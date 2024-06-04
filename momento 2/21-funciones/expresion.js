'use strict'

//forma mas comun
function sum (a, b){
    return a + b;
}

//forma expresion de funcion
let sumEx = function (a, b){
    return a + b;
}

//Funcion flecha
let sumFle = (a, b) => a + b;

//llamar o invocar a las funciones
let result = sum(5 , 6);
alert("Funcion común " + result);
let result1 = sumEx(8, 8);
alert("Expresión de función " + result1);
let result2 = sumFle(7, 3);
alert("Función Flecha " + result2);