'use strict'
/*Escribir una funcion que reciba como argumentos la edad
 de una persona y devuelva true si es mayor a 18 
 y false si es menor.*/

 function calculoEdad(edad){
   /* if (edad < 18){
        return false;
    }else{
        return true;
    }*/

    //Las condiciones devuelven true or false
    return (edad >=18);

 }
 let edadIngresada = Number(prompt("Tu edad es: "));
 let result = calculoEdad(edadIngresada);
 alert("Valor " + result);

 