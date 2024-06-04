'use strict';

// Función suma
function sumar(primerNumero, segundoNumero) {
    let result = primerNumero + segundoNumero;
    alert("La suma es: " + result);
    return result;
}

// Función resta
function restar(primerNumero, segundoNumero) {
    let result = primerNumero - segundoNumero;
    alert("La resta es: " + result);
    return result;
}

// Función para realizar la operación
function operacion(primerNumero, segundoNumero, callback) {
    return callback(primerNumero, segundoNumero);
}

// Función calculo
function calc(op, numero1, numero2, sumar, restar) {
    if (op === 'suma') {
        operacion(numero1, numero2, sumar);
    } else if (op === 'resta') {
        operacion(numero1, numero2, restar);
    } else {
        alert("Operación no válida. Por favor, ingresa 'suma' o 'resta'.");
    }
}

// Llamado
let operacionSeleccionada = prompt("¿Qué operación deseas realizar? Escribe 'suma' o 'resta'").toLowerCase();
let numero1 = Number(prompt("Ingresa un valor"));
let numero2 = Number(prompt("Ingresa otro valor"));

// Llamada a la función calc
calc(operacionSeleccionada, numero1, numero2, sumar, restar);

