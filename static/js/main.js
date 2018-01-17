$(document).ready(()=>{
	$('.container-fluid').on('click', () => {
		$('.navbar-collapse').collapse('hide');
	});

	$('.navbar-nav>li>a').on('click', function(){
	    $('.navbar-collapse').collapse('hide');
	});
});


function scroll_to(el){
	if ($(el).offset()) {
		$('html, body').animate({
			scrollTop: $(el).offset().top - 80
		}, 500);
	} else {
		console.log('El elemento referenciado no existe o no tiene una propiedad offset');
	}
}