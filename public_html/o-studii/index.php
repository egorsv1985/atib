<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("О студии");
?>
<section class="pb-16 pt-7 about-page">
	<div class="mb-14">
		<h2 class="font-bold text-white font-display text-5xl sm:text-[64px]  leading-tight text-balance ">
			Мы проявляем креативность, разрабатываем дизайн и осуществляем твои желания
		</h2>
	</div>
	<div class="grid grid-cols-2 gap-7">
		<div class="col-span-2 pt-2 lg:col-span-1">
			<? $APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"quote",
				array(
					"ACTIVE_DATE_FORMAT" => "d.m.Y",
					"ADD_SECTIONS_CHAIN" => "N",
					"AJAX_MODE" => "N",
					"AJAX_OPTION_ADDITIONAL" => "",
					"AJAX_OPTION_HISTORY" => "N",
					"AJAX_OPTION_JUMP" => "N",
					"AJAX_OPTION_STYLE" => "Y",
					"CACHE_FILTER" => "N",
					"CACHE_GROUPS" => "Y",
					"CACHE_TIME" => "7200",
					"CACHE_TYPE" => "A",
					"CHECK_DATES" => "Y",
					"DETAIL_URL" => "",
					"DISPLAY_BOTTOM_PAGER" => "Y",
					"DISPLAY_DATE" => "Y",
					"DISPLAY_NAME" => "Y",
					"DISPLAY_PICTURE" => "Y",
					"DISPLAY_PREVIEW_TEXT" => "Y",
					"DISPLAY_TOP_PAGER" => "N",
					"FIELD_CODE" => array(
						0 => "",
						1 => "",
					),
					"FILTER_NAME" => "",
					"HIDE_LINK_WHEN_NO_DETAIL" => "N",
					"IBLOCK_ID" => "3",
					"IBLOCK_TYPE" => "CONTENT",
					"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
					"INCLUDE_SUBSECTIONS" => "Y",
					"MESSAGE_404" => "",
					"NEWS_COUNT" => "1",
					"FILTER" => array(
						"ID" => "17"
					),
					"PAGER_BASE_LINK_ENABLE" => "N",
					"PAGER_DESC_NUMBERING" => "N",
					"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
					"PAGER_SHOW_ALL" => "N",
					"PAGER_SHOW_ALWAYS" => "N",
					"PAGER_TEMPLATE" => ".default",
					"PAGER_TITLE" => "Новости",
					"PARENT_SECTION" => "",
					"PARENT_SECTION_CODE" => "",
					"PREVIEW_TRUNCATE_LEN" => "",
					"PROPERTY_CODE" => array(
						0 => "POSITION",
						1 => "",
					),
					"SET_BROWSER_TITLE" => "Y",
					"SET_LAST_MODIFIED" => "N",
					"SET_META_DESCRIPTION" => "Y",
					"SET_META_KEYWORDS" => "Y",
					"SET_STATUS_404" => "N",
					"SET_TITLE" => "Y",
					"SHOW_404" => "N",
					"SORT_BY1" => "SORT",
					"SORT_BY2" => "SORT",
					"SORT_ORDER1" => "DESC",
					"SORT_ORDER2" => "ASC",
					"STRICT_SECTION_CHECK" => "N",
					"COMPONENT_TEMPLATE" => "quote"
				),
				false
			); ?>
		</div>
		<div class="col-span-2 lg:col-span-1">
			<div class="flex flex-col space-y-5 text-lg leading-tight text-txt">
				<p>Мы предлагаем полный цикл разработки сайта - от создания дизайна до наполнения контентом и
					продвижения в
					поисковых
					системах. Каждый проект мы рассматриваем индивидуально, учитывая особенности бизнеса и потребности
					клиента.
				</p>
				<p>Наш подход к работе основан на современных технологиях и трендах веб-разработки. Мы используем только
					проверенные
					инструменты и платформы, чтобы обеспечить высокую производительность и безопасность сайта.</p>
				<p>Сотрудничество с нами - это возможность получить профессиональный и уникальный сайт, который будет
					соответствовать всем
					требованиям и ожиданиям. Мы гарантируем индивидуальный подход к каждому клиенту, высокое качество
					работы и
					своевременное
					выполнение проектов.</p>
			</div>
		</div>
	</div>
</section>
<section class="relative pb-24 pt-72 map-page ">
	<div class="absolute top-0 bottom-0 left-24 right-24 ">
		<picture>
			<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/map.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/map.png" alt="" class="w-full h-full">
		</picture>
	</div>
	<div class="w-1/4">
		<h3 class="mb-2 text-xl font-bold leading-tight text-white font-display">География<br> деятельности</h3>
		<ul class="flex flex-col gap-2 text-lg leading-tight text-txt">
			<li class="">
				<div class="flex gap-2">
					<span class="w-4 h-4 rounded-full border-red_border bg-red_500"></span>
					<span class="">Беларусь</span>
				</div>
			</li>
			<li class="">
				<div class="flex gap-2">
					<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
					<span class="">Россия</span>
				</div>
			</li>
			<li class="">
				<div class="flex gap-2">
					<span class="w-4 h-4 rounded-full border-green_border bg-green_500"></span>
					<span class="">Казахстан</span>
				</div>
			</li>
		</ul>
	</div>
</section>
<section class="pt-32 pb-16 instrument">
	<div class="mb-4">
		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
			Инструменты
		</div>

	</div>
	<div class="grid grid-cols-12 mb-10">
		<div class="col-span-12 lg:col-span-7">
			<div class="mb-4">

				<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
					Технологии, которые мы используем для создания качественных веб-решений
				</h2>
			</div>
			<div class="">
				<p class="text-xl leading-tight text-txt text-balance">Знакомьтесь с людьми, которые делают ваш проект
					возможным</p>

			</div>
		</div>
	</div>
	<div class="grid grid-cols-12 gap-7 ">
		<div class="col-span-12 lg:col-span-7">
			<div class="border bg-gray_light border-gray_border h-full  rounded-[10px]">
				<div class="grid h-full grid-cols-7 gap-7">
					<div class="col-span-7 py-6 md:col-span-4 px-7">
						<div class="mb-2">
							<h3 class="text-xl font-bold leading-tight text-white font-display text-balance"> CMS системы
							</h3>
						</div>
						<div class="mb-8 text-lg leading-tight text-txt">
							<p class="">Мы работаем с известными CMS для управления сайтами. Мы готовы помочь вам создать и
								управлять
								вашим сайтом, используя
								лучшие практики и инструменты CMS.</p>
						</div>
						<ul class="flex mb-4 space-x-3 leading-tight">
							<li class="text-blue_500">Битрикс</li>
							<li class="text-green_500">ModX</li>
							<li class="text-pink_500">Wordpress</li>
							<li class="text-red_500">Tilda</li>
						</ul>
						<ul class="flex space-x-4">
							<li class="">
								<div class="flex items-center justify-center border rounded-full bg-gray_light border-gray_border w-[50px] h-[50px]">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/bitrix.svg" alt="bitrix" class="w-[19px] h-[19px]" />
								</div>
							</li>
							<li class="">
								<div class="flex items-center justify-center border rounded-full bg-gray_light border-gray_border w-[50px] h-[50px]">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/MODX.svg" alt="MODX" class="w-[19px] h-[19px]" />
								</div>
							</li>
							<li class="">
								<div class="flex items-center justify-center border rounded-full bg-gray_light border-gray_border w-[50px] h-[50px]">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Wordpress.svg" alt="Wordpress" class="w-[19px] h-[19px]" />
								</div>
							</li>
							<li class="">
								<div class="flex items-center justify-center border rounded-full bg-gray_light border-gray_border w-[50px] h-[50px]">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/tilda.svg" alt="tilda" class="w-[19px] h-[19px]" />
								</div>
							</li>
						</ul>
					</div>
					<div class="h-full col-span-7 md:col-span-3">
						<div class="h-full hover:cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_programmer.svg),_pointer]">
							<picture>
								<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/cms.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/cms.png" alt="cms" class="mt-7">
							</picture>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-12 md:col-span-6 lg:col-span-5 ">
			<div class="border bg-gray_light border-gray_border h-full hover:cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_programmer.svg),_pointer]  rounded-[10px]">
				<div class="pt-8 mb-3 instrument__slider slider">
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/sass.svg" alt="sass" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/js.svg" alt="js" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/php.svg" alt="php" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/sql.svg" alt="sql" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/html.svg" alt="html" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/css.svg" alt="css" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/sass.svg" alt="sass" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/js.svg" alt="js" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/php.svg" alt="php" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/sql.svg" alt="sql" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/html.svg" alt="html" class="w-[30px] h-[30px]" />
						</div>
					</div>
					<div class="mb-4 slider-item">
						<div class="flex items-center justify-center w-20 h-20 border rounded-full aspect-square bg-gray_light border-gray_border">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/css.svg" alt="css" class="w-[30px] h-[30px]" />
						</div>
					</div>
				</div>
				<div class="px-6">
					<div class="mb-2">
						<h3 class="text-xl font-bold leading-tight text-white font-display text-balance"> Front / Back-end
						</h3>
					</div>
					<div class="mb-6 text-lg leading-tight text-txt">
						<p class="">Языки, фреймворки, библиотеки, серверные технологии и базы данных</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-12 md:col-span-6 lg:col-span-4">
			<div class="border bg-gray_light hover:cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_designer.svg),_pointer] border-gray_border h-full p-7  rounded-[10px]">
				<div class="mb-3">
					<h3 class="text-xl font-bold leading-tight text-white font-display text-balance"> Дизайн </h3>
				</div>
				<ul class="pl-5 text-lg font-medium leading-tight list-square mb-7">
					<li class="mb-2 text-blue_500">
						<span class="leading-tight text-txt">Figma</span>
					</li>
					<li class="mb-2 text-blue_500">
						<span class="leading-tight text-txt">Adobe Photoshop</span>
					</li>
					<li class="mb-2 text-blue_500">
						<span class="leading-tight text-txt">Adobe Illustrator</span>
					</li>
				</ul>
				<div class="flex flex-col gap-3">
					<div class="flex gap-2 border justify-between items-center border-gray_border rounded-[10px] shadow-inset p-5  ">
						<div class="w-[30px] h-[30px] border border-purple_border shadow-inner shadow-purple_light/50 rounded-full bg-purple_light">
						</div>
						<div class="w-[30px] h-[30px] border border-pink_border shadow-inner shadow-pink_light/50 rounded-full bg-pink_light">
						</div>
						<div class="w-[30px] h-[30px] border border-blue_border shadow-inner shadow-blue_light/50 rounded-full bg-blue_light">
						</div>
						<div class="w-[30px] h-[30px] border border-green_border shadow-inner shadow-green_light/50 rounded-full bg-green_light">
						</div>
						<div class="w-[30px] h-[30px] border border-yellow_border shadow-inner shadow-yellow_light/50 rounded-full bg-yellow_light">
						</div>
						<div class="w-[30px] h-[30px] border border-red_border shadow-inner shadow-red_light/50 rounded-full bg-red_light">
						</div>
					</div>
					<div class="flex max-[400px]:flex-col flex-row justify-between gap-2">
						<div class="flex flex-col border items-center border-gray_border rounded-[10px] shadow-inset py-2 px-6">
							<span class="block text-[40px] leading-tight font-display text-white font-bold text-center">Aa</span>
							<p class="text-sm leading-tight text-center text-white">
								Brand font
							</p>
						</div>
						<div class="flex gap-1 flex-col border items-center border-gray_border rounded-[10px] shadow-inset py-4 px-7">
							<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/company_name.svg" alt="Company name" class="" />
							<p class="text-sm leading-tight text-center text-white">
								Company name
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-12 md:col-span-6 lg:col-span-3">
			<div class="border bg-gray_light hover:cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_seo.svg),_pointer] border-gray_border h-full p-7  rounded-[10px] relative">
				<div class="mb-2">
					<h3 class="text-xl font-bold leading-tight text-white font-display text-balance"> SEO-продвижение
					</h3>
				</div>
				<div class="mb-6 text-lg leading-tight text-txt">
					<p class="">Мы оптимизируем и улучшим ваши позиции в поисковых системах</p>
				</div>
				<div class="border bg-gray_light border-gray_border py-6 px-8 rounded-[10px]">
					<div class="border relative progress__border transition duration-500 ease-in-out rounded-full p-2.5 aspect-square flex items-center justify-center">
						<div class="progress" data-progress="100">
							<span class="text-xl font-bold leading-tight text-white font-display progress__percentage progress__percentage--count"></span>
							<svg class="absolute top-0 left-0 progress-ring " viewBox="0 0 132.5 132.5" width="100%" height="100%">
								<circle class="origin-center -rotate-90 progress-ring__circle" stroke="#fff" stroke-width="10" cx="50%" cy="50%" r="46.25" fill="transparent" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-12 md:col-span-6 lg:col-span-5">
			<div class="border bg-gray_light hover:cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_analyst.svg),_pointer] border-gray_border h-full py-6 px-8  rounded-[10px]">
				<div class="mb-2">
					<h3 class="text-xl font-bold leading-tight text-white font-display text-balance"> Веб-аналитика</h3>
				</div>
				<div class="mb-2 text-lg leading-tight text-txt">
					<p class="">Предоставим вам статистику по сайту и получим информацию о поведении пользователей на
						сайте</p>
				</div>
				<ul class="flex mb-4 space-x-3 leading-tight">
					<li class="text-blue_500">Google ADS</li>
					<li class="text-red_500">Яндекс.Метрика</li>
				</ul>
				<div class="border bg-gray_light border-gray_border rounded-[10px]">
					<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/chart.svg" alt="chart" class="">
				</div>
			</div>
		</div>
	</div>
</section>
<section class="py-12 team">
	<div class="mb-4">
		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
			Команда
		</div>

	</div>
	<div class="grid grid-cols-12 mb-10">
		<div class="col-span-12 lg:col-span-5">
			<div class="mb-6">

				<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
					Команда увлеченных и вовлеченных
				</h2>
			</div>
			<div class="">
				<p class="text-xl leading-tight text-txt text-balance">Знакомьтесь с людьми, которые делают ваш проект
					возможным</p>

			</div>
		</div>
	</div>

	<div class="gap-5 sm:grid sm:grid-cols-4 team__slider slider">
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
		<div class="mr-8 slider__item sm:mr-0">
			<div class="p-5 rounded-[10px] border border-gray_border mb-2 bg-gray_light">
				<div class="mb-3 slider__box-img position-relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/camanda.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/camanda.png" alt="team" class="slider__img" />
					</picture>
				</div>
				<p class="mb-2 text-xl font-bold leading-tight text-txt font-display"> Фамилия Имя </p>
				<p class="leading-tight text-txt text-nowrap">Руководитель/Разработчик</p>
			</div>
		</div>
	</div>
</section>
<section class="relative py-20 quote">
	<? $APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"quote",
		array(
			"ACTIVE_DATE_FORMAT" => "d.m.Y",
			"ADD_SECTIONS_CHAIN" => "N",
			"AJAX_MODE" => "N",
			"AJAX_OPTION_ADDITIONAL" => "",
			"AJAX_OPTION_HISTORY" => "N",
			"AJAX_OPTION_JUMP" => "N",
			"AJAX_OPTION_STYLE" => "Y",
			"CACHE_FILTER" => "N",
			"CACHE_GROUPS" => "Y",
			"CACHE_TIME" => "7200",
			"CACHE_TYPE" => "A",
			"CHECK_DATES" => "Y",
			"DETAIL_URL" => "",
			"DISPLAY_BOTTOM_PAGER" => "Y",
			"DISPLAY_DATE" => "Y",
			"DISPLAY_NAME" => "Y",
			"DISPLAY_PICTURE" => "Y",
			"DISPLAY_PREVIEW_TEXT" => "Y",
			"DISPLAY_TOP_PAGER" => "N",
			"FIELD_CODE" => array(
				0 => "",
				1 => "",
			),
			"FILTER_NAME" => "",
			"HIDE_LINK_WHEN_NO_DETAIL" => "N",
			"IBLOCK_ID" => "3",
			"IBLOCK_TYPE" => "CONTENT",
			"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
			"INCLUDE_SUBSECTIONS" => "Y",
			"MESSAGE_404" => "",
			"NEWS_COUNT" => "1",
			"FILTER" => array(
				"ID" => "17"
			),
			"PAGER_BASE_LINK_ENABLE" => "N",
			"PAGER_DESC_NUMBERING" => "N",
			"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
			"PAGER_SHOW_ALL" => "N",
			"PAGER_SHOW_ALWAYS" => "N",
			"PAGER_TEMPLATE" => ".default",
			"PAGER_TITLE" => "Новости",
			"PARENT_SECTION" => "",
			"PARENT_SECTION_CODE" => "",
			"PREVIEW_TRUNCATE_LEN" => "",
			"PROPERTY_CODE" => array(
				0 => "POSITION",
				1 => "",
			),
			"SET_BROWSER_TITLE" => "Y",
			"SET_LAST_MODIFIED" => "N",
			"SET_META_DESCRIPTION" => "Y",
			"SET_META_KEYWORDS" => "Y",
			"SET_STATUS_404" => "N",
			"SET_TITLE" => "Y",
			"SHOW_404" => "N",
			"SORT_BY1" => "SORT",
			"SORT_BY2" => "SORT",
			"SORT_ORDER1" => "DESC",
			"SORT_ORDER2" => "ASC",
			"STRICT_SECTION_CHECK" => "N",
			"COMPONENT_TEMPLATE" => "quote"
		),
		false
	); ?>
</section>
</div>
<section class="py-10 reviews">
	<div class="container">
		<div class="mb-4">
			<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
				Отзывы
			</div>

		</div>
		<h2 class="font-bold text-white font-display text-3xl sm:text-[40px] leading-tight mb-5 w-2/3">
			Что говорят наши клиенты?
		</h2>
		<div class="flex flex-col justify-between gap-2 mb-12 md:flex-row">
			<p class="w-full text-xl leading-tight md:w-2/3 text-txt">
				Наши проекты объединяют в себе эстетику и функциональность для
				достижения оптимальных результатов.
			</p>
			<div class="flex items-center gap-4 reviews-slider__controls-btns"></div>
		</div>
	</div>
	<? $APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"reviews-slider",
		array(
			"ACTIVE_DATE_FORMAT" => "d.m.Y",
			"ADD_SECTIONS_CHAIN" => "N",
			"AJAX_MODE" => "N",
			"AJAX_OPTION_ADDITIONAL" => "",
			"AJAX_OPTION_HISTORY" => "N",
			"AJAX_OPTION_JUMP" => "N",
			"AJAX_OPTION_STYLE" => "Y",
			"CACHE_FILTER" => "N",
			"CACHE_GROUPS" => "Y",
			"CACHE_TIME" => "7200",
			"CACHE_TYPE" => "A",
			"CHECK_DATES" => "Y",
			"DETAIL_URL" => "",
			"DISPLAY_BOTTOM_PAGER" => "Y",
			"DISPLAY_DATE" => "Y",
			"DISPLAY_NAME" => "Y",
			"DISPLAY_PICTURE" => "Y",
			"DISPLAY_PREVIEW_TEXT" => "Y",
			"DISPLAY_TOP_PAGER" => "N",
			"FIELD_CODE" => array("", ""),
			"FILTER_NAME" => "",
			"HIDE_LINK_WHEN_NO_DETAIL" => "N",
			"IBLOCK_ID" => "7",
			"IBLOCK_TYPE" => "CONTENT",
			"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
			"INCLUDE_SUBSECTIONS" => "Y",
			"MESSAGE_404" => "",
			"NEWS_COUNT" => "20",
			"PAGER_BASE_LINK_ENABLE" => "N",
			"PAGER_DESC_NUMBERING" => "N",
			"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
			"PAGER_SHOW_ALL" => "N",
			"PAGER_SHOW_ALWAYS" => "N",
			"PAGER_TEMPLATE" => ".default",
			"PAGER_TITLE" => "Новости",
			"PARENT_SECTION" => "",
			"PARENT_SECTION_CODE" => "",
			"PREVIEW_TRUNCATE_LEN" => "",
			"PROPERTY_CODE" => array("COLOR", ""),
			"SET_BROWSER_TITLE" => "Y",
			"SET_LAST_MODIFIED" => "N",
			"SET_META_DESCRIPTION" => "Y",
			"SET_META_KEYWORDS" => "Y",
			"SET_STATUS_404" => "N",
			"SET_TITLE" => "Y",
			"SHOW_404" => "N",
			"SORT_BY1" => "ACTIVE_FROM",
			"SORT_BY2" => "SORT",
			"SORT_ORDER1" => "DESC",
			"SORT_ORDER2" => "ASC",
			"STRICT_SECTION_CHECK" => "N"
		)
	); ?>
</section>
<div class="container">
	<section class="py-14 logos">
		<? $APPLICATION->IncludeComponent(
			"bitrix:news.list",
			"logos",
			array(
				"ACTIVE_DATE_FORMAT" => "d.m.Y",
				"ADD_SECTIONS_CHAIN" => "N",
				"AJAX_MODE" => "N",
				"AJAX_OPTION_ADDITIONAL" => "",
				"AJAX_OPTION_HISTORY" => "N",
				"AJAX_OPTION_JUMP" => "N",
				"AJAX_OPTION_STYLE" => "Y",
				"CACHE_FILTER" => "N",
				"CACHE_GROUPS" => "Y",
				"CACHE_TIME" => "7200",
				"CACHE_TYPE" => "A",
				"CHECK_DATES" => "Y",
				"DETAIL_URL" => "",
				"DISPLAY_BOTTOM_PAGER" => "Y",
				"DISPLAY_DATE" => "Y",
				"DISPLAY_NAME" => "Y",
				"DISPLAY_PICTURE" => "Y",
				"DISPLAY_PREVIEW_TEXT" => "Y",
				"DISPLAY_TOP_PAGER" => "N",
				"FIELD_CODE" => array("", ""),
				"FILTER_NAME" => "",
				"HIDE_LINK_WHEN_NO_DETAIL" => "N",
				"IBLOCK_ID" => "8",
				"IBLOCK_TYPE" => "CONTENT",
				"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
				"INCLUDE_SUBSECTIONS" => "Y",
				"MESSAGE_404" => "",
				"NEWS_COUNT" => "100",
				"PAGER_BASE_LINK_ENABLE" => "N",
				"PAGER_DESC_NUMBERING" => "N",
				"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
				"PAGER_SHOW_ALL" => "N",
				"PAGER_SHOW_ALWAYS" => "N",
				"PAGER_TEMPLATE" => ".default",
				"PAGER_TITLE" => "Новости",
				"PARENT_SECTION" => "",
				"PARENT_SECTION_CODE" => "",
				"PREVIEW_TRUNCATE_LEN" => "",
				"PROPERTY_CODE" => array("COLOR", ""),
				"SET_BROWSER_TITLE" => "Y",
				"SET_LAST_MODIFIED" => "N",
				"SET_META_DESCRIPTION" => "Y",
				"SET_META_KEYWORDS" => "Y",
				"SET_STATUS_404" => "N",
				"SET_TITLE" => "Y",
				"SHOW_404" => "N",
				"SORT_BY1" => "ACTIVE_FROM",
				"SORT_BY2" => "SORT",
				"SORT_ORDER1" => "DESC",
				"SORT_ORDER2" => "ASC",
				"STRICT_SECTION_CHECK" => "N"
			)
		); ?>
	</section>

	<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>