$(document).ready(function(){
	$('#slick').slick({
		nextArrow: $('.next'),
		prevArrow: $('.prev'),
		draggable: true,
		dots: true,
		dotsClass: 'dots',
		appendDots: $('#dots'),
		pauseOnDotsHover: true,
		lazyLoaded: $('#slick').show(),
		cssEase: 'cubic-bezier(.4,0,.2,1)',
		speed: 1000,
	});
	
	$('#context').html(generateContext());

	$('#slick').on('beforeChange', function() {
		$('#context').fadeOut();
	});

	$('#slick').on('afterChange', function() {
		$('#context').html(generateContext()).fadeIn(1000);
		$('.slick-current img').css('transform', 'rotateY(-10deg) rotateX(-10deg) rotateZ(-1deg) scale(1)');
		$('.card:not(.slick-current) img').css('transform', 'rotateY(0) rotateX(0) rotateZ(0) scale(1)');
	});

	$('.slick-current img').css('transform', 'rotateY(-10deg) rotateX(-10deg) rotateZ(-1deg) scale(1)');

	$('.dots li').html('');

	function generateContext() {
		return "<a target='_blank' href='" + $('.slick-current').attr('taglink') + "'>" + $('.slick-current').attr('tagline') + "</a>";
	}
});

