"use strict"
/* Escribir una funcion que multiplique dos
numeros y devuelva el resultado.
N: usar solo la operacion + */
let multiplicador = Number(prompt("El numero que quieres multiplicar"));
let multiplicando = Number(prompt("sera multiplicado por"));
let result = 0;
let temporal = 0;
for (let i = 0; i < multiplicador; i++){
    //acumular el saldo
    temporal = result;
    //sumar el mismo numero una vez
    result = multiplicando + temporal;
}

alert ("Tu resultado es: " + result);