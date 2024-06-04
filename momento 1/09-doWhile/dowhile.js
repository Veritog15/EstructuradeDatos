'use strict'
let premio = Number(7);
let num;
let contador = 0;
do {
    contador++
    num = Number(prompt("ingrese su numero"));
}
while (num != premio && contador < 3);

if (contador == 3 && num != premio ){
    alert("Tus intentos fueron de " + contador + " Perdiste");
}else{
    alert("Felicidades Ganaste")
    alert("Tus intentos fueron de " + contador);
};
   
