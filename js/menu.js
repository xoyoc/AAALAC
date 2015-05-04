$(document).ready(main);

var contador = 1;

function main (){
	$('.boton__barra').click(function(){
		if(contador == 1){
			$('.encabezado__menu').animate({
				left:'0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.encabezado__menu').animate({
				left:'-100%'
			});
		};

	});
};