// JavaScript Document
$(window).load(function() {
	//inicia sliders
	$('.slider').nivoSlider({
		effect:'sliceDown',
		keyboardNav:true, //Use left & right arrows
		pauseOnHover:true, //Stop animation while hovering
		directionNavHide:true,
		controlNav:false,
		manualAdvance:true, //Force manual transitions
		captionOpacity:1, //Universal caption opacity
		animSpeed:500,
		pauseTime:5000
	});
	//inicia tooltip
	$(".servicio").tipTip({maxWidth: "auto", defaultPosition: "top", delay: 100, edgeOffset: 1});
	//divide lista de clientes en 3
	$('#clientes').easyListSplitter({ colNumber: 3});
	//scroll ahcia arriba
	$('.scrolltop').click(function(){ $('html, body').animate({scrollTop:0}, 'slow'); return false; });
	//modifica mail
	$('span.mailme').mailme();
	//carga tweets
	$(".tweet").tweet({
		join_text: "auto",
        username: "universoweb",
        count: 1,
        auto_join_text_default: "dijimos:", 
        auto_join_text_ed: "nosotros",
        auto_join_text_ing: "estabamos",
        auto_join_text_reply: "respondimos",
        auto_join_text_url: "comprobando",
        loading_text: "cargando..."
    });
	//gestion trabajos
	//funcion alternativa
	var s1_switch = 1;
	var s2_switch = 1;
	var s3_switch = 1;
	var s4_switch = 1;
	var s5_switch = 1;
	var s6_switch = 1;
	//funcion que devuelve los elementos de clase
	/* Inspirado en el portfolio http://www.laureanoendeiza.com.ar, mejorado ya que ahora solo borra trabajos cuando todos los botones de los servicios de ese trabajo están inactivos */
	//function evaluaTrabajos(visible, servicio){
	function evaluaTrabajos(s_switch,servicio){
		/*alert('El valor del boton de s1 es: '+s1_switch);
		alert('El valor del boton de s2 es: '+s2_switch);
		alert('El valor del boton de s3 es: '+s3_switch);
		alert('El valor del boton de s4 es: '+s4_switch);
		alert('El valor del boton de s5 es: '+s5_switch);
		alert('El valor del boton de s6 es: '+s6_switch);*/
		$('.trabajo').each(function() {
			var ocultar = '';
    		var classList =$(this).attr('class').split(' ');
			//alert(classList);
			$.each(classList,function(index, item){
				//alert(index+':'+item);
				/*if (item===servicio) {
				   alert('La clase del trabajo guardada en bbdd y el servicio escogido coinciden');
				}*/
				if(item == 's1'){
					if(s1_switch == 0){
						ocultar = 1;
					} else {
						ocultar = 0;
						return false;
					}
				}
				if(item == 's2'){
					if(s2_switch == 0){
						ocultar = 1;
					} else {
						ocultar = 0;
						return false;
					}
				}
				if(item == 's3'){
					if(s3_switch == 0){
						ocultar = 1;
					} else {
						ocultar = 0;
						return false;
					}
				}
				if(item == 's4'){
					if(s4_switch == 0){
						ocultar = 1;
					} else {
						ocultar = 0;
						return false;
					}
				}
				if(item == 's5'){
					if(s5_switch == 0){
						ocultar = 1;
					} else {
						ocultar = 0;
						return false;
					}
				}
				if(item == 's6'){
					if(s6_switch == 0){
						ocultar = 1;
					} else {
						ocultar = 0;
						return false;
					}
				}
			});
			if(ocultar == 1) {
			   $(this).hide();
			} else {
			   $(this).show();
			}
  		});
		/*var lays = $("."+servicio);
		//console.log(lays);
		for (var i = 0 ; i < lays.length ; i++){
			//busca elementos en el documento que tengan la clase pasada
			if (visible == 1)
				lays[i].style.display = '';
				//$(lays[i]).show(500);
			else
				lays[i].style.display = 'none';
				//$(lays[i]).hide(500);
		}*/
	}
	//cambio fondo imagenes y click-toggle asociado
	$("#li01 a").css("background","transparent url(img/menu2.png) no-repeat 0 -52px").toggle(function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 0");
	  //var visible = 0;
	  s1_switch = 0;
	  evaluaTrabajos(s1_switch,'s1');
	}, function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -52px");
	  //var visible = 1;
	  s1_switch = 1;
	  evaluaTrabajos(s1_switch,'s1');
	});
	$("#li02 a").css("background","transparent url(img/menu2.png) no-repeat 0 -156px").toggle(function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -104px");
	  //var visible = 0;
	  s2_switch = 0;
	  evaluaTrabajos(s2_switch,'s2');
	}, function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -156px");
	  //var visible = 1;
	  s2_switch = 1;
	  evaluaTrabajos(s2_switch,'s2');
	});
	$("#li03 a").css("background","transparent url(img/menu2.png) no-repeat 0 -260px").toggle(function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -208px");
	  //var visible = 0;
	  s3_switch = 0;
	  evaluaTrabajos(s3_switch,'s3');
	}, function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -260px");
	  //var visible = 1;
	  s3_switch = 1;
	  evaluaTrabajos(s3_switch,'s3');
	});
	$("#li04 a").css("background","transparent url(img/menu2.png) no-repeat 0 -364px").toggle(function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -312px");
	  //var visible = 0;
	  s4_switch = 0;
	  evaluaTrabajos(s4_switch,'s4');
	}, function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -364px");
	  //var visible = 1;
	  s4_switch = 1;
	  evaluaTrabajos(s4_switch,'s4');
	});
	$("#li05 a").css("background","transparent url(img/menu2.png) no-repeat 0 -468px").toggle(function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -416px");
	  //var visible = 0;
	  s5_switch = 0;
	  evaluaTrabajos(s5_switch,'s5');
	}, function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -468px");
	  //var visible = 1;
	  s5_switch = 1;
	  evaluaTrabajos(s5_switch,'s5');
	});
	$("#li06 a").css("background","transparent url(img/menu2.png) no-repeat 0 -572px").toggle(function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -520px");
	  //var visible = 0;
	  s6_switch = 0;
	  evaluaTrabajos(s6_switch,'s6');
	}, function() {
	  $(this).css("background","transparent url(img/menu2.png) no-repeat 0 -572px");
	  //var visible = 1;
	  s6_switch = 1;
	  evaluaTrabajos(s6_switch,'s6');
	});
});