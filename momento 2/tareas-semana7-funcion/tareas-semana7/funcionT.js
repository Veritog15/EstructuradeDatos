'use strict'
//Funcion sin parametros y sin valor de retorno
function saludo(){
    alert("HOLA, BIENVENIDO");
}
saludo();

//Funcion con parametros y sin valor de retorno
function suma(n1,n2){
    let result = n1 + n2;
    alert("La suma de los dos numeros es: " + result);
}
suma(3, 9);

//Funcion sin parametros y con valor de retorno
function resta(a, b){
    return a - b;
}
let resultResta = resta(8, 9);
alert("La resta de los dos numeros es: " + resultResta);

//Funcion con parametros y con valor de retorno
function calcularArea(base, altura){
    let area = base * altura;
    return area;
}
let baseA = 9;
let alturaA = 15;
let resultArea = calcularArea(baseA, alturaA);
alert("El area de los dos numeros es:" + resultArea);