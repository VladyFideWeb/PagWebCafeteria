$(function(){
	$(window).scroll(function(){//Cuando el usuario dé scroll en la ventana, se ejecuta todo esto de abajo:
		var windowWidth=$(window).width();
		
		if(windowWidth>800){//si la pantalla es mayor a 800px entonces se ejecuta la función
			var scroll=$(window).scrollTop();//$(window).scrollTop() es el valor del scroll, si no le bajas nada a ala pag web,entonces scrollTop()=0
			
			$('header .textos').css({//Modificando nombre y lema
				'transform':'translate(0px,'+scroll/2+'%)'
				//traslate(0px,40%)=translate(0px,'+scroll/2'+%)
			});
			
			$('.acerca-de article').css({//Modificando el Acerca de y su contenido
				'transform':'translate(0px,-'+scroll/4+'%)'
				//traslate(0px,40%)=translate(0px,'+scroll/2'+%)
			});
		}
	});
});