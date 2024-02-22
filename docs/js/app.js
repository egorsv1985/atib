// // Предотвращение повторной отправки форм
// form.addEventListener('submit', () => {
// 	submitButton.disabled = true

// 	// Fix for Firefox. It persists the dynamic disabled state without this hack.
// 	submitButton.autocomplete = 'off'

// 	// We are using setTimeout for page-reload submit.
// 	// For AJAX, use await and try-finally to enable submit the button again.
// 	setTimeout(() => {
// 		submitButton.disabled = false
// 	}, 2000)
// })
//  form.addEventListener('submit', async () => {
//    await fetch(…)
//    try {
//      showLoader()
//      await fetch(…)
//    } catch (e) {
//      showError(e)
//    } finally {
//      hideLoader()
//    }
//   })

$(document).ready(function () {
	var settings = {
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 5000,
		swipe: true,
		arrows: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	// Инициализация слайдеров
	$(
		'.page-branding__slider, .page-development__slider, .page-promotion__slider, team__slider'
	).slick(settings)

	// Обработчик события изменения размера окна
	$(window).on('resize', function () {
		if ($(window).width() > 640) {
			$(
				'.page-branding__slider, .page-development__slider, .page-promotion__slider, team__slider'
			).slick('unslick')
			return
		}
		$(
			'.page-branding__slider, .page-development__slider, .page-promotion__slider, team__slider'
		)
			.not('.slick-initialized')
			.slick(settings)
	})
})

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
})

$(document).ready(function () {
	// Проверяем поддержку формата WebP
	function supportsWebP() {
		var elem = document.createElement('canvas')

		if (!!(elem.getContext && elem.getContext('2d'))) {
			// Was able or not to get WebP representation
			return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
		}

		// Very old browser like IE 8, canvas not supported
		return false
	}

	// Проверяем поддержку формата AVIF
	function supportsAvif() {
		var elem = document.createElement('canvas')

		if (!!(elem.getContext && elem.getContext('2d'))) {
			// Was able or not to get AVIF representation
			return elem.toDataURL('image/avif').indexOf('data:image/avif') == 0
		}

		// Very old browser like IE 8, canvas not supported
		return false
	}

	// Добавляем классы в зависимости от поддержки форматов
	if (supportsWebP()) {
		$('body').addClass('webp')
	}

	if (supportsAvif()) {
		$('body').addClass('avif')
	}
})
