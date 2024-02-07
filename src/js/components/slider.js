$(document).ready(function () {
	$('.branding__slider').slick({
		infinite: true,
		speed: 500,

		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 2,
		slidesToScroll: 2,
		appendArrows: $('.slider__controls-btns'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	})
	$('.development__slider').slick({
		infinite: true,
		speed: 500,

		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 2,
		slidesToScroll: 2,
		appendArrows: $('.slider__controls-btns'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	})
	$('.promotion__slider').slick({
		infinite: true,
		speed: 500,

		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 2,
		slidesToScroll: 2,
		appendArrows: $('.slider__controls-btns'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	})
})
