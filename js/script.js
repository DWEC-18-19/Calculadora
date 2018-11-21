const calculadoraHtml= document.querySelector('.calculator');
const teclas = calculadoraHtml.querySelector('.calculator__keys');
const pantalla = document.querySelector('.calculator__display');
const calcular = new Calculadora();

teclas.addEventListener('click', e => {
 const tecla = e.target;
 const accion = tecla.dataset.action; 
 const contenidoTecla = tecla.textContent;
 const contenidoPantalla = pantalla.textContent;
 /* evento producido al pulsar una tecla */
 if (tecla.matches('button')) {
   if ( accion === 'suma' ||
  		accion === 'resta' ||
  		accion === 'multiplicar' ||
  		accion === 'dividir'
	) {
  	    console.log('operación');
	    pantalla.textContent += ` ${contenidoTecla} `;
	}
	 
	if(accion === 'decimal'){
		 console.log('decimal');
		 pantalla.textContent += contenidoTecla;
	}
	 
	if(accion === 'limpiar'){
		 console.log('limpiar');
		 pantalla.textContent = 0;
	}
	 
	if(accion === 'calcular'){
		 console.log('calcular');
		 pantalla.textContent = calcular.evaluar(pantalla.textContent);
	}
	     
	
    if (!accion) {  
	  console.log('número');
	 if (contenidoPantalla === '0') {
		 pantalla.textContent = contenidoTecla;
	 }
	 else {
		  pantalla.textContent += contenidoTecla;
	 } 
	} // fin if (!accion)
	 
  } // fin if (tecla.matches('button')) 
	
});