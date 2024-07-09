<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
// print_r($arResult);
?>
<section class="case py-14">
	<div class=" pseudo-grid mb-20 relative before:absolute before:block  before:top-[74%] before:left-[60%] before:-bottom-[168%] before:right-0">
		<div class="mb-4">
			<h2 class="font-bold text-white font-display text-5xl sm:text-[64px]  leading-tight text-balance ">
				<?= $arResult['NAME']; ?>
			</h2>
		</div>
		<div class="">
			<p class="text-xl leading-tight  text-txt text-balance"><?= $arResult["PROPERTIES"]["NAME_DESCRIPTION"]["VALUE"] ?></p>

		</div>
	</div>
	<div class="grid grid-cols-2 gap-7">
		<div class="col-span-2 py-4 lg:col-span-1">
			<div class="flex flex-col h-full gap-6">
				<div class="flex flex-col gap-2">
					<h3 class="text-xl font-bold leading-tight text-white font-display">О проекте</h3>
					<p class="text-lg leading-tight text-txt"><?= $arResult["PROPERTIES"]["ABOUT"]["VALUE"]['TEXT'] ?></p>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="text-xl font-bold leading-tight text-white font-display">Задача</h3>
					<p class="text-lg leading-tight text-txt">Разработать структуру сайта и дизайн в светлом,
						минималистичном
						стиле. Отрисовать стильные, понятные, минималистичные
						схематичные изображения работы системы HomeID. Добавить языковые версии сайта. Настроить SEO.</p>
				</div>
				<div class="flex items-center mt-auto gap-7">
					<a href="#" class="font-medium  px-8 py-4 rounded-[80px] border justify-center items-center gap-2.5 inline-flex text-center text-white text-base font-display border-blue_border bg-blue_500 text-nowrap hover:border-white/50 leading-tight max-w-48">Кейс
						на Behance</a>
					<a href="#" class="leading-tight underline text-blue_500 hover:text-blue_border">Ссылка на сайт</a>
				</div>
			</div>
		</div>
		<div class="col-span-2 lg:col-span-1 ">
			<div class="grid grid-cols-2 gap-7">
				<div class="col-span-2 lg:col-span-1 ">
					<div class="flex flex-col h-full gap-8">
						<div class="flex-grow basis-0 border bg-gray_light border-gray_border rounded-[10px] p-5">
							<div class="flex flex-col gap-2">
								<h3 class="text-xl font-bold leading-tight text-white font-display">Клиент</h3>
								<p class="text-lg leading-tight text-txt">ООО «Гмартикун»</p>
							</div>
						</div>
						<div class="flex-grow basis-0 border bg-gray_light border-gray_border rounded-[10px] p-5">
							<div class="flex flex-col gap-2">
								<h3 class="text-xl font-bold leading-tight text-white font-display">Отрасль</h3>
								<p class="text-lg leading-tight text-txt">Информационные технологии</p>
							</div>
						</div>
						<div class="flex-grow basis-0 border bg-gray_light border-gray_border rounded-[10px] p-5">
							<div class="flex flex-col gap-2">
								<h3 class="text-xl font-bold leading-tight text-white font-display">Год запуска</h3>
								<p class="text-lg leading-tight text-txt">2023</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-2 lg:col-span-1">
					<div class="border bg-gray_light border-gray_border rounded-[10px] p-5">
						<h3 class="text-xl font-bold leading-tight text-white font-display mb-2.5">Тезисно о проекте</h3>
						<ul class="space-y-2 text-lg leading-tight text-txt">
							<li class="">Web-разработка</li>
							<li class="">Сайт на Tilda</li>
							<li class="">Сайт под SEO-продвижение</li>
							<li class="">Сбор<br>семантического ядра и формирование структуры сайта</li>
							<li class="">Прототипирование</li>
							<li class="">UX/UI дизайн</li>
							<li class="">Копирайтинг</li>
							<li class="">Адаптивность</li>
							<li class="">SEO-оптимизаия</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="design py-[70px]">
	<div class="mb-4">
		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
			Дизайн элементы
		</div>

	</div>
	<div class="grid grid-cols-4">
		<div class="col-span-4 lg:col-span-3">
			<div class="mb-4">

				<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
					Мы готовы работать с разными задачами, но для примера описали самые популярные
				</h2>
			</div>
			<div class="mb-9">
				<p class="text-xl leading-tight  text-txt text-balance">Стоимость каждого проекта рассчитывается
					индивидуально, в зависимости от объёмов, сложности и сроков.</p>

			</div>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-x-7 gap-y-8">
		<div class="col-span-2 lg:col-span-1">
			<div class="pt-3 rounded-[10px] border border-gray_border  bg-gray_light">
				<div class="flex gap-2 px-4 mb-4">
					<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
					<p class="text-sm leading-tight text-txt">Цветовое решение</p>
				</div>
				<div class="">
					<picture>
						<source srcset="./images/phoenix1.webp" type="image/webp"><img src="./images/phoenix1.png" alt="phoenix" class="w-full" />
					</picture>
				</div>
			</div>
		</div>
		<div class="col-span-2 lg:col-span-1">
			<div class="pt-3 rounded-[10px] border border-gray_border  bg-gray_light">
				<div class="flex gap-2 px-4 mb-4">
					<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
					<p class="text-sm leading-tight text-txt">Типографика</p>
				</div>
				<div class="">
					<picture>
						<source srcset="./images/phoenix1.webp" type="image/webp"><img src="./images/phoenix1.png" alt="phoenix" class="w-full" />
					</picture>
				</div>
			</div>
		</div>
		<div class="col-span-2">
			<div class="pt-3 rounded-[10px] border border-gray_border  bg-gray_light">
				<div class="flex gap-2 px-4 mb-4">
					<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
					<p class="text-sm leading-tight text-txt">UI элементы</p>
				</div>
				<div class="w-full">
					<picture>
						<source srcset="./images/phoenix1.webp" type="image/webp"><img src="./images/phoenix1.png" alt="phoenix" class="w-full" />
					</picture>
				</div>
			</div>
		</div>
	</div>
</section>
</div>
<section class="py-2 result">
	<div class="container">

		<div class="px-3">
			<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
				Результат
			</div>

		</div>
		<div class="grid grid-cols-4">
			<div class="col-span-4 lg:col-span-3">
				<div class="px-3">

					<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
						Новый дизайн сайта, удовлетворяющий требованиям клиента
					</h2>
				</div>
				<div class="mb-[70px]">
					<p class="text-xl leading-tight  text-txt text-balance">Стиль, который мы разработали для сайта,
						заказчики стали использовать в различных промоматериалах для онлайн- и офлайн-активностей.</p>

				</div>
			</div>
		</div>
		<a href="#" class="pt-3 rounded-[10px] border border-gray_border  bg-gray_light">
			<div class="flex gap-2 px-4 mb-2.5">
				<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
				<p class="text-sm leading-tight text-txt">Видеопрезентация проекта</p>
			</div>
			<div class="w-full">
				<picture>
					<source srcset="./images/result1.webp" type="image/webp"><img src="./images/result1.png" alt="result" class="w-full" />
				</picture>
			</div>
		</a>
	</div>
	<div class="-mx-4 result__slider slider">
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result2.webp" type="image/webp"><img src="./images/result2.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result3.webp" type="image/webp"><img src="./images/result3.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result4.webp" type="image/webp"><img src="./images/result4.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result5.webp" type="image/webp"><img src="./images/result5.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result6.webp" type="image/webp"><img src="./images/result6.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result7.webp" type="image/webp"><img src="./images/result7.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result8.webp" type="image/webp"><img src="./images/result8.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result9.webp" type="image/webp"><img src="./images/result9.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 fslider-item">
			<picture>
				<source srcset="./images/result2.webp" type="image/webp"><img src="./images/result2.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result3.webp" type="image/webp"><img src="./images/result3.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result4.webp" type="image/webp"><img src="./images/result4.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result5.webp" type="image/webp"><img src="./images/result5.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result6.webp" type="image/webp"><img src="./images/result6.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result7.webp" type="image/webp"><img src="./images/result7.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result8.webp" type="image/webp"><img src="./images/result8.png" alt="result" class="w-full" />
			</picture>
		</div>
		<div class="px-3 mb-5 slider-item">
			<picture>
				<source srcset="./images/result9.webp" type="image/webp"><img src="./images/result9.png" alt="result" class="w-full" />
			</picture>
		</div>
	</div>
</section>
<div class="container">
	<section class="total pt-28 pb-[70px]">
		<div class="mb-4">
			<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
				Итог
			</div>

		</div>
		<div class="grid grid-cols-3 mb-[70px]">
			<div class="col-span-3 lg:col-span-2">
				<div class="">

					<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
						Ключевые моменты, которые мы решили в ходе работы
					</h2>
				</div>
			</div>
		</div>

		<ul class="flex flex-col space-y-4 text-xl leading-tight text-txt text-balance">
			<li class="relative pb-3 border-b border-solid border-b-gray_border sm:ps-24 ps-12">
				<span class="absolute flex items-center justify-center w-10 h-10 rounded-full bg-gray_light start-0">
					<svg class="w-4 h-4 text-gray_500" aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill="#31B970" fill-opacity="1.000000" fill-rule="nonzero" />
					</svg>
				</span>
				<div class="grid grid-cols-11 gap-7">
					<div class="col-span-11 lg:col-span-4">
						<h3 class="font-bold text-white font-display">Разработали четкую и понятную структуру сайта</h3>
					</div>
					<div class="col-span-11 lg:col-span-6 lg:col-start-6">
						<p class="text-lg leading-tight">На начальном этапе с SEO-специалистом собрали семантическое ядро,
							определили
							популярные запросы и составили структуру
							сайта</p>
					</div>
				</div>
			</li>
			<li class="relative pb-3 border-b border-solid border-b-gray_border sm:ps-24 ps-12">
				<span class="absolute flex items-center justify-center w-10 h-10 rounded-full bg-gray_light start-0">
					<svg class="w-4 h-4 text-gray_500" aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill="#31B970" fill-opacity="1.000000" fill-rule="nonzero" />
					</svg>
				</span>
				<div class="grid grid-cols-11 gap-7">
					<div class="col-span-11 lg:col-span-4">
						<h3 class="font-bold text-white font-display">Проработали целевую аудиторию</h3>
					</div>
					<div class="col-span-11 lg:col-span-6 lg:col-start-6">
						<p class="text-lg leading-tight">Выявили, что основной упор необходимо делать на застройщиков,
							интеграторов,
							жильцов</p>
					</div>
				</div>
			</li>
			<li class="relative pb-3 border-b border-solid border-b-gray_border sm:ps-24 ps-12">
				<span class="absolute flex items-center justify-center w-10 h-10 rounded-full bg-gray_light start-0">
					<svg class="w-4 h-4 text-gray_500" aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill="#31B970" fill-opacity="1.000000" fill-rule="nonzero" />
					</svg>
				</span>
				<div class="grid grid-cols-11 gap-7">
					<div class="col-span-11 lg:col-span-4">
						<h3 class="font-bold text-white font-display">Разработали дизайн веб-сайта</h3>
					</div>
					<div class="col-span-11 lg:col-span-6 lg:col-start-6">
						<p class="text-lg leading-tight">Отрисовали дизайн в минималистичном стиле с использованием уникальной
							графики, схем, анимации</p>
					</div>
				</div>
			</li>
			<li class="relative pb-3 border-b border-solid border-b-gray_border sm:ps-24 ps-12">
				<span class="absolute flex items-center justify-center w-10 h-10 rounded-full bg-gray_light start-0">
					<svg class="w-4 h-4 text-gray_500" aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill="#31B970" fill-opacity="1.000000" fill-rule="nonzero" />
					</svg>
				</span>
				<div class="grid grid-cols-11 gap-7">
					<div class="col-span-11 lg:col-span-4">
						<h3 class="font-bold text-white font-display">Оптимизировали сайт под поисковые системы</h3>
					</div>
					<div class="col-span-11 lg:col-span-6 lg:col-start-6">
						<p class="text-lg leading-tight">Ключевыми элементами оптимизации являются выбор ключевых слов,
							оптимизация
							контента и технические настройки сайта.</p>
					</div>
				</div>
			</li>
			<li class="relative pb-3 border-b border-solid border-b-gray_border sm:ps-24 ps-12">
				<span class="absolute flex items-center justify-center w-10 h-10 rounded-full bg-gray_light start-0">
					<svg class="w-4 h-4 text-gray_500" aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill="#31B970" fill-opacity="1.000000" fill-rule="nonzero" />
					</svg>
				</span>
				<div class="grid grid-cols-11 gap-7">
					<div class="col-span-11 lg:col-span-4">
						<h3 class="font-bold text-white font-display">Увеличили количество заявок</h3>
					</div>
					<div class="col-span-11 lg:col-span-6 lg:col-start-6">
						<p class="text-lg leading-tight">С запуском продукта число конверсий и интерес к продукту возрос</p>
					</div>
				</div>
			</li>
		</ul>
	</section>