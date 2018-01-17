var smallSizeNavBackground = false;

function scroll_to(el){
	if ($(el).offset()) {
		$('html, body').animate({
			scrollTop: $(el).offset().top - 80
		}, 750);
	} else {
		console.log('El elemento referenciado no existe o no tiene una propiedad offset');
	}
}

function backgroundNavbar() {
	var scrollTop = $(document).scrollTop();
	var maxLimit = 200;

	$('.navbar').css({ backgroundColor: 'rgba(34, 34, 34, 0.90)' });

	if (scrollTop < maxLimit && !smallSizeNavBackground) {
		var transparencia = scrollTop / maxLimit;
		$('.navbar').css({ backgroundColor: 'rgba(34, 34, 34, ' + transparencia * 0.90 +')' });
	}
}

$(document).ready(()=>{
	backgroundNavbar();

	$(document).on('scroll', backgroundNavbar);

	$('.container-fluid').on('click', () => {
		$('.navbar-collapse').collapse('hide');
	});

	$('.navbar-nav>li>a').on('click', () => {
	    $('.navbar-collapse').collapse('hide');
	});

	$('.navbar-collapse').on('show.bs.collapse', () => {
		smallSizeNavBackground = true;
		$('.navbar').css({ backgroundColor: 'rgba(34, 34, 34, 0.90)' });
	});

	$('.navbar-collapse').on('hide.bs.collapse', () => {
		smallSizeNavBackground = false;
	});

});

particlesJS.load('inicio-background', 'js/particles.json', () => {
  console.log('callback - particles.js config loaded');
});