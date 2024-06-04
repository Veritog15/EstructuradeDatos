'use strict';
//1. Declaro la funcion
function mostrarMensaje(){
    alert("hola");
}

//2. llamar a la funcion
mostrarMensaje();


function mostrarMensajeConNombre(nombre){
    alert ("hola " + nombre);
}
mostrarMensajeConNombre("Juan"); //Juan es argumento


function generarfrase(){
    return "hola mundo";
}
let result
result = alert("El valor de retorno de la funcion es: " + generarfrase());

//4 Funciones y practica parametros y retornos
function sumar(n1, n2){
    let nFinal = n1 + n2;
   return(nFinal);
}
alert(sumar(3, 5));

