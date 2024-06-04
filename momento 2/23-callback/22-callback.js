'use strict'

//Declaracion de funcion
function validateField(isVisible, show, hide){
    if (isVisible){
        show();
    }else{
        hide();
    }
}

//Expresion de funcion
let showField = function(){
    alert("Campo visible");
}

//Funcion Flecha
let hideField = () => alert("Campo oculto")
              //Parametros
validateField(true, showField, hideField) //--> Calbacks fuction