'use strict';
//Taximetro Dia
//Variables
let totalKmsd = prompt("Ingrese el km ");
let precioKmd = 0.25;
let arranqued = 0.55;
let valorPagard = (precioKmd * totalKmsd) + arranqued;
//Proceso
if (valorPagard <= 1.50){
    valorPagard =  1.50
}
    
alert("Su valor a pagar es " + valorPagard);

//taximetro Noche
//Variables
let totalKmsN = prompt("Ingrese el km ");
let precioKmN = 0.25;
let arranqueN = 0.55;
let valorPagarN = (precioKmN * totalKmsN) + arranqueN;
//Proceso
if (valorPagarN <= 1.75){
    valorPagarN =  1.75
}
    
alert("Su valor a pagar es " + valorPagarN);