"use strict";

const Calculadora = function() {
  this.evaluar = cadena => {
  	 // TODO: borrar eval y completar el código
  	 var expresion = eval(cadena);

     return expresion; 
  }
};