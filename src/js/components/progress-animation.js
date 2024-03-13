$(document).ready(function () {
	// Функция для анимации прогресса
	function animateProgress($progressBar, percentageText, smoothness) {
		var progress = 0 // Инициализация переменной для отслеживания прогресса
		var $progressCount = $progressBar.find('.ProgressBar-percentage--count') // Нахождение элемента для отображения прогресса

		// Функция для обновления прогресса
		function updateProgress() {
			progress += 1 // Увеличение значения прогресса
			$progressCount.text(Math.floor(progress) + '%') // Обновление текста прогресса
			var rotation = 'rotate(' + progress * 3.6 + 'deg)' // Рассчет угла поворота для анимации прогресса
			$progressBar
				.find('.ProgressBar-circle')
				.css('transform', rotation)
				.css('opacity', 1) // Установка анимации прогресса

			// Если прогресс достиг максимального значения
			if (progress >= percentageText) {
				progress = 0 // Сброс прогресса
				$progressBar
					.find('.ProgressBar-circle')
					.css('transform', 'rotate(0deg)')
					.css('opacity', 0) // Скрытие анимации прогресса
			}
		}

		// Запуск анимации с заданной плавностью
		var animationInterval = setInterval(updateProgress, smoothness)
	}

	// Для каждого элемента прогресс-бара
	$('.ProgressBar').each(function () {
		var $progressBar = $(this) // Получение текущего прогресс-бара
		var percentageText = parseInt($progressBar.attr('data-progress')) // Получение значения прогресса из атрибута

		animateProgress($progressBar, percentageText, 100) // Запуск анимации с плавностью по умолчанию
	})
})
