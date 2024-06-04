'use strict';

let totalKms = prompt("Ingrese el km ");

let precioKm = 0.25;
let arranque = 0.50;
let valorPagar = (precioKm * totalKms) + arranque;

alert("El valor a pagar es " + valorPagar);