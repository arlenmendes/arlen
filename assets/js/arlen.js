$(document).ready(function(){
	$(".move").click(function(){
		$("html, body").animate({scrollTop: $(this.getAttribute("secao")).offset().top - 75}, 1000);
	});
	
	$(window).scroll(function(){
		if( $(document).scrollTop() > $("#header").height()) {
			$('nav').addClass("fixar");
			$("#header").css("margin-bottom", "75px");
		} else {
			$('nav').removeClass("fixar");
			$("#header").css("margin-bottom", "0px");
		}

	});

	$(".icone-mobile").click(function(){
		$("#menu").css("display", "block");
		$("#menu").addClass("menu-responsivo");
	});
});