'use strict'

let estacionamiento = 2;
let precioU = prompt("Ingresa el precio unitario del producto: ");
let cantidad = prompt("Ingrese la cantidad que adquirio: ");

let total = (precioU * cantidad);

if (total > 20){
    estacionamiento = 0;
    alert("tu valor total es " + total);
    alert("Tu valor a pagar de estacionamiento es " + estacionamiento);
}else{
    alert("Tu valor toral es de: " + total);
    alert("Tu valor a pagar es " + estacionamiento)
}