$(function(){
	
	//EFECTO MENÚ//
	$('.menu a').each(function(index,elemento){//La función anónima se ejecutará a todos los enlaces del header
								//each(function(index,elemento){});
		$(this).css({          //Este elemento seleccionado osea .menu a subelos hacia arriba y pues se ocultan todos los enlaces del header
			'top':'-200px'
		});//Sube todos los elementos
		
		$(this).animate({//baja index[0] en 1500ms, baja index[1] en 2000ms, baja index[2] en 2500ms, baja index[3] en 3000ms
			top:'0'
		},1000+(index*500));
	});
	
	
	//EFECTO HEADER//
	if($(window).width()>800){  //$(window).width() es el tamaño de la pantalla, si la pantalla es mayor a 800px entonces se ejecuta la función
		$('header .textos').css({//Lo ocultamos, es decir opacidad a cero
			opacity:0,
			marginTop:0
		});
		
		$('header .textos').animate({
			opacity:1,//Lo mostramos
			marginTop:'-52px'//Y lo subimos
		},1500);
	}
	
	//EFECTO SCROLL ELEMENTOS MENÚ//
	var acercaDe=$('#acerca-de').offset().top, //Adquiriendo la posición en pantalla de la sección acerca de
		menu=$('#platillos').offset().top,
		galeria=$('#galeria').offset().top,
		ubicacion=$('#ubicacion').offset().top;
		
	$('#btn-acerca-de').on('click',function(e){//Cuando apretemos el enlace de Acerca de
		e.preventDefault();
		$('html,body').animate({     //Anima con el body
			scrollTop:acercaDe           //Y desplazate hasta la posición de acerca de
		},500);
	});
	
	$('#btn-menu').on('click',function(e){//Cuando apretemos el enlace de Menú de
		e.preventDefault();
		$('html,body').animate({     //Anima con el body
			scrollTop:menu           //Y desplazate hasta la posición de Menú
		},500);
	});
	
	$('#btn-galeria').on('click',function(e){//Cuando apretemos el enlace de Galeria de
		e.preventDefault();
		$('html,body').animate({     //Anima con el body
			scrollTop:galeria           //Y desplazate hasta la posición de Galeria
		},500);
	});
	
	$('#btn-ubicacion').on('click',function(e){//Cuando apretemos el enlace de Ubicacion de
		e.preventDefault();
		$('html,body').animate({     //Anima con el body
			scrollTop:ubicacion           //Y desplazate hasta la posición de Ubicacion
		},500);
	});
});