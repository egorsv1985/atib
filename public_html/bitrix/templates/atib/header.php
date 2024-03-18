<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();

use \Bitrix\Main\Page\Asset;

$asset = Asset::getInstance();

$asset->addJs('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
$asset->addJs('https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.5/jquery.inputmask.min.js');

$asset->addJs('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');

$asset->addJs('https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js');

$asset->addCss('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');

$asset->addJs(SITE_TEMPLATE_PATH . '/scripts.js');
?>

<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<? $APPLICATION->ShowHead(); ?>
	<title><? $APPLICATION->ShowTitle(); ?></title>
	<link rel="apple-touch-icon" sizes="180x180" href="<?= SITE_TEMPLATE_PATH ?>/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?= SITE_TEMPLATE_PATH ?>/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?= SITE_TEMPLATE_PATH ?>/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?= SITE_TEMPLATE_PATH ?>/favicon/site.webmanifest">
	<link rel="mask-icon" href="<?= SITE_TEMPLATE_PATH ?>/favicon/safari-pinned-tab.svg" color="#005154">
</head>

<body class="bg-gray_500 body font-SFUIText">
	<div id="panel">
		<? $APPLICATION->ShowPanel(); ?>
	</div>

	<div class="wrapper">
		<header class="fixed py-4 header z-[9999] left-0 right-0 top-0 before:absolute before:inset-0 before:bg-gray_500 before:transition-opacity before:duration-500 before:ease-out backdrop-blur-lg before:opacity-80 before:-z-10">
			<div class="container px-2">
				<div class="z-40 flex items-center justify-between pb-3 border-b border-b-gray_border">
					<div class="w-1/3 mr-3 sm:w-1/4 lg:w-1/6 max-[400px]:w-1/2">
						<a href="/" class="block max-w-full text-center">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/logo.svg" alt="logo" class="max-w-full" />
						</a>
					</div>
					<div class="hidden w-1/2 mr-3 md:mr-7 md:w-1/5 sm:block">
						<button id="menuDropdownButton" data-dropdown-toggle="menuDropdown" data-dropdown-trigger="hover" class="gap-2 bg-white rounded-[5rem] px-8 py-4 text-center flex items-center" type="button">
							<div class="grid grid-flow-row gap-[3px] grid-cols-2 grid-rows-2">
								<div class="bg-blue_500  w-[5px] rounded-full h-[5px]"></div>
								<div class="bg-green_500  w-[5px] rounded-full h-[5px]"></div>
								<div class="bg-red_500  w-[5px] rounded-full h-[5px]"></div>
								<div class="bg-yellow_500  w-[5px] rounded-full h-[5px]"></div>
							</div>

							<span class="text-base font-medium text-gray_500 font-display">
								Услуги
							</span>
						</button>
						<!-- Dropdown menu -->
						<div id="menuDropdown" class="text-gray_light z-10 py-4 px-10 dropdown-menu hidden  bg-white rounded-[10px]">
							<div class="flex items-center gap-2 text-center">
								<div class="grid grid-flow-row gap-[3px] grid-cols-2 grid-rows-2">
									<div class="bg-blue_500  w-[5px] rounded-full h-[5px]"></div>
									<div class="bg-green_500  w-[5px] rounded-full h-[5px]"></div>
									<div class="bg-red_500  w-[5px] rounded-full h-[5px]"></div>
									<div class="bg-yellow_500  w-[5px] rounded-full h-[5px]"></div>
								</div>

								<span>Услуги</span>
							</div>
							<ul class="py-2 text-sm border-0 " aria-labelledby="menuDropdownButton">
								<li class="mb-2">

									<div class="flex items-center gap-2">
										<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
										<a href="services-page.html" data-hover="Брендинг" class="relative  before:absolute before:top-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-yellow_border before:text-yellow_500  before:transition-[width] before:duration-500 hover:before:w-full">Брендинг</a>
									</div>

								</li>
								<li class="mb-2">

									<div class="flex items-center gap-2">
										<span class="w-4 h-4 rounded-full border-green_border bg-green_500"></span>
										<a href="services-page.html" data-hover="Полиграфия" class="relative  before:absolute before:top-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-green_border before:text-green_500  before:transition-[width] before:duration-500 hover:before:w-full">Полиграфия</a>
									</div>

								</li>
								<li class="mb-2">
									<div class="flex items-center gap-2">
										<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
										<a href="services-page.html" data-hover="Разработка" class="relative  before:absolute before:top-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-blue_border before:text-blue_500  before:transition-[width] before:duration-500 hover:before:w-full">Разработка</a>
									</div>
								</li>
								<li class="mb-2">
									<div class="flex items-center gap-2">
										<span class="w-4 h-4 rounded-full border-purple_border bg-purple_500"></span>
										<a href="services-page.html" data-hover="Мобильная разработка" class="relative  before:absolute before:top-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-purple_border before:text-purple_500  before:transition-[width] before:duration-500 hover:before:w-full">Мобильная
											разработка</a>
									</div>
								</li>
								<li class="mb-2">
									<div class="flex items-center gap-2">
										<span class="w-4 h-4 rounded-full border-pink_border bg-pink_500"></span>
										<a href="services-page.html" data-hover="Реклама" class="relative  before:absolute before:top-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-pink_border before:text-pink_500  before:transition-[width] before:duration-500 hover:before:w-full">Реклама</a>
									</div>
								</li>
								<li class="mb-2">
									<div class="flex items-center gap-2">
										<span class="w-4 h-4 rounded-full border-red_border bg-red_500"></span>
										<a href="services-page.html" data-hover="Motion-дизайн" class="relative  before:absolute before:top-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-red_border before:text-red_500  before:transition-[width] before:duration-500 hover:before:w-full">Motion-дизайн</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="lg:w-[12.6%] md:w-1/6 sm:w-1/5 w-1/3 md:mr-7 mr-3 max-[400px]:hidden">
						<ul class="flex items-center justify-between gap-2 max-w-36">
							<li>
								<a href="#" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/telegramm.svg" alt="telegramm" />
								</a>
							</li>
							<li>
								<a href="#" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/whatsapp.svg" alt="whatsapp" />
								</a>
							</li>
							<li>
								<a href="#" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/viber.svg" alt="viber" />
								</a>
							</li>
						</ul>

					</div>
					<div class="hidden w-1/4 mr-7 lg:w-1/6 lg:block">
						<div class="flex flex-col gap-3 md:gap-1 ">
							<a data-hover="+375 (29) 305 47 00" href="tel:+375293054700" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full  leading-tight text-txt" style="background: url(<?= SITE_TEMPLATE_PATH ?>/images/icons/mts.svg) no-repeat left 50% / 13px 15px"> +375 (29) 305 47 00
							</a>
							<a data-hover="+375 (33) 305 47 00" href="tel:+375333054700" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full leading-tight text-txt" style="background: url(<?= SITE_TEMPLATE_PATH ?>/images/icons/a1.svg) no-repeat left 50% / 13px 15px"> +375 (33) 305 47 00
							</a>
						</div>
					</div>
					<div class="hidden w-1/6 lg:block">
						<button data-modal-target="callback-modal" data-modal-toggle="callback-modal" class="relative items-center justify-start inline-block px-8 py-4 overflow-hidden font-medium transition-all border rounded-full shadow border-gray_border bg-gray_light hover:bg-white group" type="button">
							<span class="absolute inset-0 border-0 group-hover:border-[40px] ease-linear duration-100 transition-all border-white rounded-full"></span>
							<span class="relative w-full text-base leading-tight text-white transition-colors duration-500 ease-in-out text-nowrap group-hover:text-gray_500">Работать
								с нами</span>
						</button>
					</div>
					<div class="w-1/4 md:w-1/12">
						<button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center justify-end w-full gap-3 p-2 ml-1 font-medium text-white rounded-lg font-display focus:outline-none " aria-controls="mobile-menu-2" aria-expanded="true">
							<div class="flex flex-col gap-[3px]">
								<div class="bg-blue_500 w-[5px] h-[5px]"></div>
								<div class="bg-red_500 w-[5px] h-[5px]"></div>
								<div class="bg-yellow_500 w-[5px] h-[5px]"></div>
							</div>
							<span class="">Меню</span>
						</button>

					</div>
				</div>
				<nav class="hidden w-full " id="mobile-menu-2">
					<div class="grid grid-cols-10 gap-3 py-4 md:gap-7">
						<div class="col-span-10 md:col-span-2">
							<ul class="flex flex-col gap-2 text-xl font-bold leading-tight text-white md:gap-4 font-display">
								<li>
									<a href="about-page.html" class="relative inline-block transition-colors duration-300 group text-txt hover:text-blue-500">
										<span class="relative z-10 text-nowrap">
											О студии
										</span>
										<span class="absolute bottom-0 left-0 w-full h-px transition-transform duration-300 origin-left transform scale-x-0 bg-white group-hover:scale-x-100"></span>
									</a>
								</li>
								<li>
									<a href="portfolio-page.html" class="relative inline-block transition-colors duration-300 group text-txt hover:text-blue-500">
										<span class="relative z-10 text-nowrap">
											Портфолио
										</span>
										<span class="absolute bottom-0 left-0 w-full h-px transition-transform duration-300 origin-left transform scale-x-0 bg-white group-hover:scale-x-100"></span>
									</a>
								</li>
								<li>
									<a href="contacts.html" class="relative inline-block transition-colors duration-300 group text-txt hover:text-blue-500">
										<span class="relative z-10 text-nowrap">
											Контакты
										</span>
										<span class="absolute bottom-0 left-0 w-full h-px transition-transform duration-300 origin-left transform scale-x-0 bg-white group-hover:scale-x-100"></span>
									</a>
								</li>
							</ul>
						</div>
						<div class="col-span-10 col-start-1 md:col-span-12 md:col-start-6">
							<div class="flex flex-col gap-5">
								<span class="text-xl font-bold leading-tight text-white font-display">Услуги</span>
								<ul class="grid grid-flow-row grid-cols-1 grid-rows-3 text-lg leading-tight md:grid-cols-2 text-txt">
									<li class="mb-2">

										<div class="flex items-center gap-2">
											<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
											<a href="services-page.html" data-hover="Брендинг" class="relative  before:absolute before:bottom-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-yellow_border before:text-yellow_500  before:transition-[width] before:duration-500 hover:before:w-full">Брендинг</a>
										</div>
									</li>
									<li class="mb-2">
										<div class="flex items-center gap-2">
											<span class="w-4 h-4 rounded-full border-green_border bg-green_500"></span>
											<a href="services-page.html" data-hover="Полиграфия" class="relative  before:absolute before:bottom-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-green_border before:text-green_500  before:transition-[width] before:duration-500 hover:before:w-full">Полиграфия</a>
										</div>
									</li>
									<li class="mb-2">
										<div class="flex items-center gap-2">
											<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
											<a href="services-page.html" data-hover="Разработка" class="relative  before:absolute before:bottom-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-blue_border before:text-blue_500  before:transition-[width] before:duration-500 hover:before:w-full">Разработка</a>
										</div>
									</li>
									<li class="mb-2">
										<div class="flex items-center gap-2">
											<span class="w-4 h-4 rounded-full border-purple_border bg-purple_500"></span>
											<a href="services-page.html" data-hover="Мобильная разработка" class="relative  before:absolute before:bottom-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-purple_border before:text-purple_500  before:transition-[width] before:duration-500 hover:before:w-full">Мобильная
												разработка</a>
										</div>
									</li>
									<li class="mb-2">
										<div class="flex items-center gap-2">
											<span class="w-4 h-4 rounded-full border-pink_border bg-pink_500"></span>
											<a href="services-page.html" data-hover="Реклама" class="relative  before:absolute before:bottom-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-pink_border before:text-pink_500  before:transition-[width] before:duration-500 hover:before:w-full">Реклама</a>
										</div>
									</li>
									<li class="mb-2">
										<div class="flex items-center gap-2">
											<span class="w-4 h-4 rounded-full border-red_border bg-red_500"></span>
											<a href="services-page.html" data-hover="Motion-дизайн" class="relative  before:absolute before:bottom-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-red_border before:text-red_500  before:transition-[width] before:duration-500 hover:before:w-full">Motion-дизайн</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="block col-span-10 md:col-span-12 md:hidden">
							<div class="flex flex-col gap-3 md:gap-1 ">
								<a data-hover="+375 (29) 305 47 00" href="tel:+375293054700" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full  leading-tight text-txt" style="background: url(<?= SITE_TEMPLATE_PATH ?>/images/icons/mts.svg) no-repeat left 50% / 13px 15px"> +375 (29) 305 47 00
								</a>
								<a data-hover="+375 (33) 305 47 00" href="tel:+375333054700" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full leading-tight text-txt" style="background: url(<?= SITE_TEMPLATE_PATH ?>/images/icons/a1.svg) no-repeat left 50% / 13px 15px"> +375 (33) 305 47 00
								</a>
							</div>
						</div>
						<div class="block col-span-10 md:col-span-12 md:hidden">
							<ul class="flex items-center justify-between gap-2 max-w-36">
								<li>
									<a href="#" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
										<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/telegramm.svg" alt="telegramm" />
									</a>
								</li>
								<li>
									<a href="#" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
										<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/whatsapp.svg" alt="whatsapp" />
									</a>
								</li>
								<li>
									<a href="#" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
										<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/viber.svg" alt="viber" />
									</a>
								</li>
							</ul>

						</div>
					</div>
				</nav>
			</div>
		</header>
		<main>
			<div class="container">

				<section class="hero cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_you.svg),_pointer]">
					<div class="grid grid-cols-2 ">
						<div class="col-span-2 md:col-span-1">
							<div class="flex flex-col hero__box py-[30%] md:py-[27vh] relative pseudo-grid before:absolute before:block   before:top-[21%] before:left-[14%] before:bottom-[12%] before:-right-[24%]">
								<h1 class="lg:text-[64px]  text-5xl font-bold text-white font-display leading-tight mb-2"> Дизайн-студия
								</h1>
								<div class="relative mb-7 hero__box-logo">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/corner_logo.svg" alt="atib" class="" />
								</div>
								<h2 class="mb-12 text-2xl leading-tight tracking-wider text-txt text-balance"> Создаем дизайн, который
									вдохновляет </h2>

								<button data-modal-target="callback-modal" data-modal-toggle="callback-modal" class="rounded-[80px]  justify-center items-center gap-2.5 text-center text-white text-base font-display  bg-blue_500 text-nowrap hover:border-white/50 leading-tight max-w-48 relative  inline-block px-8 py-4 overflow-hidden font-medium transition-all border shadow border-blue_border  hover:bg-white group" type="button">
									<span class="absolute inset-0 border-0 group-hover:border-[40px] ease-linear duration-100 transition-all border-white rounded-full"></span>
									<span class="relative w-full text-base leading-tight text-white transition-colors duration-500 ease-in-out text-nowrap group-hover:text-blue_500">Связаться
										с нами</span>
								</button>
							</div>
						</div>
						<div class="relative col-span-2 md:col-span-1 aspect-square before:h-[30%] after:h-[30%] md:before:h-[27vh] md:after:h-[27vh] before:-top-px after:-bottom-px hero__gradient  md:aspect-[5/8]">
							<div class="relative flex flex-col h-full overflow-hidden ">
								<div class="z-10 relative  hero__animation flex min-w-full flex-[0_0_auto] items-center flex-col  animate-translate">
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right0 -left-48">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Adobe_Photoshop.svg" alt="Adobe Photoshop" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right1">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/tilda.svg" alt="tilda" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right2 -right-44">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Microsoft_Office.svg" alt="Microsoft Office" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right3 left-7">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/bitrix.svg" alt="bitrix" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right4 -left-24">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Adobe_Illustrator.svg" alt="Adobe Illustrator" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right5 -right-52">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/MODX.svg" alt="MODX" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right6 left-28">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/figma.svg" alt="Figma" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right7 -left-3">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Wordpress.svg" alt="Wordpress" class="" />
									</div>
								</div>
								<div class="z-10 relative hero__animation flex min-w-full flex-[0_0_auto] items-center flex-col  animate-translate">
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right0 -left-48">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Adobe_Photoshop.svg" alt="Adobe Photoshop" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right1">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/tilda.svg" alt="tilda" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right2 -right-44">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Microsoft_Office.svg" alt="Microsoft Office" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right3 left-7">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/bitrix.svg" alt="bitrix" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right4 -left-24">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Adobe_Illustrator.svg" alt="Adobe Illustrator" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right5 -right-52">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/MODX.svg" alt="MODX" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right6 left-28">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/figma.svg" alt="Figma" class="" />
									</div>
									<div class="relative flex items-center justify-center w-20 overflow-hidden transition duration-300 ease-out border rounded-full group aspect-square sm:w-24 md:w-32 p-7 bg-gray_light hover:bg-gray_light/50 border-gray_border animate-left-right7 -left-3">
										<img width="50" height="50" src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Wordpress.svg" alt="Wordpress" class="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>