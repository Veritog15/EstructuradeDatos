'use strict'
/*Utilizando una expresion de funcion crear un algoritmo que reciba 
el año de nacimiento y devuelva la edad*/
//Función expresión
let edad = function (yearofBirth, year){
    return year - yearofBirth;
};
//crear datos y  llamar función
let age = edad(prompt("Ingresa tu año de nacimiento "), prompt("El año actual es: "))
//alerta
alert("Tu edad es => " + age)

/*Crear una expresion de funcion que reciba un numero y muestre 
la tabla de multiplicar del numero ingresado */
//Expresión de una función
let tablaM = function (number){
    alert("Tabla de Multiplicar de " + number);
    for (var i = 1; i <= 10; i++) {
        let result = number * i;
        alert(number + " x " + i + " = " + result);
    };
};
//llamar a la función
alert(tablaM(prompt("Ingresa el número que deseas sea multiplicado => ")));

//Crear una funcion flecha que convierta en unidades de temperatura celcius a farenheit
let celcius = (a) => a * (9/5) + 32;
let gradosCelsius = prompt("Ingresa los grados Celsius que deseas convertir a Fahrenheit:");
let fahrenheit = celcius(parseFloat(gradosCelsius));
alert("El grado Fahrenheit de " + gradosCelsius + " es => " + fahrenheit);

