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
		slidesToScroll: 1,
		appendArrows: $('.slider__controls-btns'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
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
		slidesToScroll: 1,
		appendArrows: $('.slider__controls-btns'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
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
		slidesToScroll: 1,
		appendArrows: $('.slider__controls-btns'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.sale__slider').slick({
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.sale-slider__controls-btns'),
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.reviews__slider').slick({
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 100,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 5,
		slidesToScroll: 1,
		appendArrows: $('.reviews-slider__controls-btns'),
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.services__slider1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000, // Интервал автопрокрутки в миллисекундах
		vertical: true, // Вертикальная ориентация
		verticalSwiping: true, // Возможность вертикального свайпа
		infinite: true, // Бесконечная прокрутка
		arrows: false,
		centerMode: true,
		centerPadding: '0',
	})
	$('.services__slider2').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000, // Интервал автопрокрутки в миллисекундах
		vertical: true, // Вертикальная ориентация
		verticalSwiping: true, // Возможность вертикального свайпа
		infinite: true, // Бесконечная прокрутка
		arrows: false,
		centerMode: true,
		centerPadding: '0',
	})
})
