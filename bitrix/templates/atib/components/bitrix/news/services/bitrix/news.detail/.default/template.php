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
<section class=" relative services-main cursor-[url(<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_you.svg),_pointer]">

	<div class=" services-main__rect -z-10 absolute  rounded-[20px] bg-gray_500 border border-gray_border ">
		<div class=" bg-gray_light border h-full border-gray_border rounded-[20px]"></div>
	</div>
	<div class=""></div>
	<div class="flex flex-col gap-24">
		<div class="grid grid-cols-3 gap-7 border-b-gray_border">
			<div class="relative col-span-3 lg:col-span-2 pseudo-grid before:absolute before:block  before:top-[10%] before:left-[52%] before:-bottom-[10%] before:right-0">
				<div class="">
					<div class="font-bold text-white font-display text-5xl sm:text-[64px]  leading-tight text-balance ">
						<?= $arResult["PROPERTIES"]["TOTAL_NAME"]["VALUE"] ?>
					</div>
				</div>
			</div>
			<div class="col-span-3 mt-64 lg:col-span-1">
				<div class="text-lg leading-tight text-txt">
					<?= $arResult["PROPERTIES"]["TOTAL_DESCRIPTION"]["VALUE"] ?>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-3 gap-7">
			<div class="col-span-3 lg:col-span-1">
				<h4 class="text-lg leading-tight text-txt">Проектов</h4>
				<div class="font-bold text-white font-display text-5xl sm:text-[64px]  leading-tight text-balance ">
					<?= $arResult["PROPERTIES"]["PROJECTS_LEFT"]["VALUE"] ?>
				</div>
			</div>
			<div class="col-span-3 lg:col-span-1">
				<h4 class="text-lg leading-tight text-txt">Проектов</h4>
				<div class="font-bold text-white font-display text-5xl sm:text-[64px]  leading-tight text-balance ">
					<?= $arResult["PROPERTIES"]["PROJECTS_RIGHT"]["VALUE"] ?>
				</div>
			</div>
			<div class="col-span-3 lg:col-span-1">
				<h4 class="mb-4 text-lg leading-tight text-txt">Сомневаешься?</h4>
				<button type="button" data-modal-target="callback-modal" data-modal-toggle="callback-modal" class="relative items-center justify-start inline-block px-8 py-4 overflow-hidden font-medium transition-all border rounded-full shadow border-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_border bg-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_light hover:bg-white group max-w-48">
					<span class="absolute inset-0 border-0 group-hover:border-[40px] ease-linear duration-100 transition-all border-white rounded-full"></span>
					<span class="relative w-full text-base leading-tight text-white transition-colors duration-500 ease-in-out text-nowrap font-medium group-hover:text-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_500"> Задать вопрос</span>
				</button>
			</div>
		</div>
	</div>
</section>
<section class="pb-12 about-service pt-28 ">
	<div class="grid grid-cols-3 gap-7">
		<div class="col-span-3 lg:col-span-1">
			<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
				Об услуге
			</div>

		</div>
		<div class="col-span-3 lg:col-span-2">
			<div class="text-lg leading-tight text-txt about__content">
				<?= $arResult['DETAIL_TEXT']; ?>
			</div>
		</div>
	</div>
</section>
<? $APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"tariffs",
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
		"IBLOCK_ID" => "12",
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
		"PROPERTY_CODE" => array(
			0 => "ITEM_DETAILS",
			1 => "ITEM_TITLE",
			2 => "ITEM_NAME",
			3 => "ITEM_DESCRIPTION",
			4 => "ITEM_TIME",
			5 => "ITEM_PRICE",
			6 => "ITEM",
			7 => "COLOR",
			8 => "",
		),
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
		"STRICT_SECTION_CHECK" => "N",
		"COMPONENT_TEMPLATE" => "tariffs"
	),
	false
); ?>

<section class="py-7 portfolio">
	<div class="mb-5">
		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
			Портфолио
		</div>

	</div>
	<div class="w-full mb-5 md:w-2/3">

		<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
			Работы, сочетающие красоту и практичность
		</h2>
	</div>
	<div class="w-full md:w-2/3 mb-11">
		<p class="text-xl leading-tight  text-txt text-balance">Наши проекты объединяют в себе эстетику и
			функциональность для достижения оптимальных результатов.</p>

	</div>
	<div class="flex justify-between mb-7">
		<div class="relative">
			<div class="items-center hidden gap-4 sm:flex">
				<ul class="flex  flex-col sm:flex-row -mb-px p-4 gap-2 text-center bg-gray_light border-gray_border rounded-[40px]" aria-labelledby="dropdownTabListButton" id="portfolio-tab" data-tabs-toggle="#portfolio-tab-content" role="tablist">
					<li class="" role="presentation">
						<button class="px-4 py-1 text-lg font-medium leading-tight text-yellow_border aria-selected:text-white border relative group overflow-hidden  inline-block border-yellow_border rounded-[20px] aria-selected:bg-yellow_500" id="branding-tab" data-tabs-target="#branding" type="button" role="tab" aria-controls="branding" aria-selected="false">
							<span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow_500 group-hover:h-full opacity-90"></span>
							<span class="relative z-20 group-hover:text-white group-aria-selected:text-white">Брендинг</span>
						</button>
					</li>
					<li class="" role="presentation">
						<button class="px-4 py-1 text-lg font-medium leading-tight text-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_border aria-selected:text-white border relative group overflow-hidden  inline-block border-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_border rounded-[20px] aria-selected:bg-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_500" id="development-tab" data-tabs-target="#development" type="button" role="tab" aria-controls="development" aria-selected="false">
							<span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 group-hover:h-full opacity-90"></span>
							<span class="relative z-20 group-hover:text-white group-aria-selected:text-white">Разработка</span>
						</button>
					</li>
					<li class="" role="presentation">
						<button class="px-4 py-1 text-lg font-medium leading-tight text-pink_border aria-selected:text-white border relative group overflow-hidden  inline-block border-pink_border rounded-[20px] aria-selected:bg-pink_500" id="promotion-tab" data-tabs-target="#promotion" type="button" role="tab" aria-controls="promotion" aria-selected="false">
							<span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink_500 group-hover:h-full opacity-90"></span>
							<span class="relative z-20 group-hover:text-white group-aria-selected:text-white">Реклама</span>
						</button>
					</li>
				</ul>
			</div>
			<div class="flex sm:hidden">
				<!-- Dropdown button -->
				<button id="dropdownTabListButton" data-dropdown-toggle="dropdown" data-dropdown-on-hide="true" class="px-4 py-1 text-lg font-medium leading-tight text-white  border relative    inline-block border-white rounded-[20px]" type="button">Портфолио
				</button>
				<!-- Dropdown menu -->
				<div id="dropdown" class="z-10 hidden py-2">
					<ul class="flex  flex-col sm:flex-row -mb-px p-4 gap-2 text-center bg-gray_light border-gray_border rounded-[40px]" aria-labelledby="dropdownTabListButton" data-tabs-toggle="#portfolio-tab-content" role="tablist">
						<li class="" role="presentation">
							<button class="px-4 py-1 text-lg font-medium leading-tight text-yellow_border aria-selected:text-white border relative group overflow-hidden  inline-block border-yellow_border rounded-[20px] aria-selected:bg-yellow_500" id="branding-tab" data-tabs-target="#branding" type="button" role="tab" aria-controls="branding" aria-selected="false">
								<span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow_500 group-hover:h-full opacity-90"></span>
								<span class="relative z-20 group-hover:text-white group-aria-selected:text-white">Брендинг</span>
							</button>
						</li>
						<li class="" role="presentation">
							<button class="px-4 py-1 text-lg font-medium leading-tight text-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_border aria-selected:text-white border relative group overflow-hidden  inline-block border-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_border rounded-[20px] aria-selected:bg-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_500" id="development-tab" data-tabs-target="#development" type="button" role="tab" aria-controls="development" aria-selected="false">
								<span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 group-hover:h-full opacity-90"></span>
								<span class="relative z-20 group-hover:text-white group-aria-selected:text-white">Разработка</span>
							</button>
						</li>
						<li class="" role="presentation">
							<button class="px-4 py-1 text-lg font-medium leading-tight text-pink_border aria-selected:text-white border relative group overflow-hidden  inline-block border-pink_border rounded-[20px] aria-selected:bg-pink_500" id="promotion-tab" data-tabs-target="#promotion" type="button" role="tab" aria-controls="promotion" aria-selected="false">
								<span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink_500 group-hover:h-full opacity-90"></span>
								<span class="relative z-20 group-hover:text-white group-aria-selected:text-white">Реклама</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="items-center hidden gap-4 sm:flex slider__controls-btns"></div>
	</div>

	<div id="portfolio-tab-content">
		<div class="hidden" id="branding" role="tabpanel" aria-labelledby="branding-tab">
			<div class="-mx-4 branding__slider slider">
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir1.webp" type="image/webp"><img src="./images/fir1.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix1.webp" type="image/webp"><img src="./images/phoenix1.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir2.webp" type="image/webp"><img src="./images/fir2.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix2.webp" type="image/webp"><img src="./images/phoenix2.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir1.webp" type="image/webp"><img src="./images/fir1.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix1.webp" type="image/webp"><img src="./images/phoenix1.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir2.webp" type="image/webp"><img src="./images/fir2.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix2.webp" type="image/webp"><img src="./images/phoenix2.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
			</div>
		</div>
		<div class="hidden" id="development" role="tabpanel" aria-labelledby="development-tab">
			<div class="-mx-4 development__slider slider">
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir1.webp" type="image/webp"><img src="./images/fir1.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix1.webp" type="image/webp"><img src="./images/phoenix1.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir2.webp" type="image/webp"><img src="./images/fir2.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix2.webp" type="image/webp"><img src="./images/phoenix2.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir1.webp" type="image/webp"><img src="./images/fir1.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix1.webp" type="image/webp"><img src="./images/phoenix1.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir2.webp" type="image/webp"><img src="./images/fir2.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix2.webp" type="image/webp"><img src="./images/phoenix2.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
			</div>
		</div>
		<div class="hidden" id="promotion" role="tabpanel" aria-labelledby="promotion-tab">
			<div class="-mx-4 promotion__slider slider">
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir1.webp" type="image/webp"><img src="./images/fir1.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix1.webp" type="image/webp"><img src="./images/phoenix1.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir2.webp" type="image/webp"><img src="./images/fir2.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix2.webp" type="image/webp"><img src="./images/phoenix2.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir1.webp" type="image/webp"><img src="./images/fir1.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix1.webp" type="image/webp"><img src="./images/phoenix1.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">Фирменный стиль</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/fir2.webp" type="image/webp"><img src="./images/fir2.png" alt="fir" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
				<div class="px-4 slider__item sm:mr-0">
					<a href="case.html" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
						<div class="flex gap-2 px-4 mb-4">
							<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
							<p class="text-sm leading-tight text-txt">SMM-дизайн</p>
						</div>
						<div class="slider__box-img position-relative">
							<picture>
								<source srcset="./images/phoenix2.webp" type="image/webp"><img src="./images/phoenix2.png" alt="phoenix" class="slider__img" />
							</picture>
						</div>
					</a>
					<p class="text-xl font-bold leading-tight text-white font-display">
						Название проекта
					</p>
					<p class="text-lg leading-tight text-txt">Деятельность</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="py-20 sale">
	<div class="mb-4">
		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-red_light border-red_border rounded-[20px] inline-flex ">
			Выгодно!
		</div>

	</div>
	<div class="w-full mb-5 md:w-2/3">

		<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
			Специальные предложения для экономии вашего бюджета
		</h2>
	</div>
	<div class="flex flex-col justify-between gap-2 mb-10 md:flex-row">
		<div class="w-full md:w-2/3">
			<p class="text-xl leading-tight  text-txt text-balance">Наши проекты объединяют в себе эстетику и
				функциональность для достижения оптимальных результатов.</p>

		</div>
		<div class="flex items-center gap-4 sale-slider__controls-btns"></div>
	</div>
	<div class="-mx-4 sale__slider slider">
		<div class="flex flex-col h-auto   px-4 slider__item group/slider__item hover:cursor-[url(../images/icons/cursor_you.svg),_pointer] ">
			<div class="rounded-[10px] py-12 ps-7 flex-1 group-hover/slider__item:shadow-lg group-hover/slider__item:shadow-yellow_light/20  transition duration-300  gap-8 flex flex-col pe-6  border border-yellow_border group-hover/slider__item:bg-yellow_500 ">
				<div class="">
					<div class="px-4 py-1 text-sm mb-8 font-medium leading-tight border bg-yellow_500 border-yellow_border rounded-[20px] inline-flex slider__name group-hover/slider__item:bg-gray_500">
						Брендинг
					</div>
					<div class="mb-2">

						<h3 class="font-display font-bold text-[28px] leading-tight text-white">
							Фирменный
						</h3>
					</div>
					<p class="text-lg font-medium leading-tight text-txt group-hover/slider__item:text-white">
						Логотип+визитка+печать
					</p>
				</div>
				<div class="mt-auto">
					<div class="space-y-6 text-base leading-tight text-txt group-hover/slider__item:text-white">
						При заказе разработки логотипа, визитка со
						<span class="text-yellow_500 group-hover/slider__item:text-white">скидкой 50%</span>. Печать визитки
						до 5 штук бесплатно
					</div>

					<button class="font-medium px-8 py-4 rounded-[80px] border justify-center items-center gap-2.5 inline-flex text-center text-white group-hover/slider__item:text-yellow_500 group-hover/slider__item:bg-white text-base font-display border-yellow_border bg-yellow_500 text-nowrap leading-tight" type="button">
						Подробнее
					</button>
				</div>
			</div>
		</div>
		<div class="flex flex-col h-auto  px-4 slider__item group/slider__item hover:cursor-[url(../images/icons/cursor_you.svg),_pointer] ">
			<div class="rounded-[10px] py-12 ps-7 flex-1 group-hover/slider__item:shadow-lg group-hover/slider__item:shadow-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_light/20  transition duration-300  gap-8 flex flex-col pe-6  border border-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_border group-hover/slider__item:bg-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_500">
				<div class="">
					<div class="px-4 py-1 text-sm mb-8 font-medium leading-tight border bg-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 border-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_border rounded-[20px] inline-flex slider__name group-hover/slider__item:bg-gray_500">
						Разработка
					</div>
					<div class="mb-2">

						<h3 class="font-display font-bold text-[28px] leading-tight text-white">
							Кто не рискует, тот не пьет шампанское
						</h3>
					</div>
					<p class="text-lg font-medium leading-tight text-txt group-hover/slider__item:text-white">
						Экспресс-лендинг за 300 руб!*
					</p>
				</div>
				<div class="mt-auto">
					<p class="text-base leading-tight text-txt group-hover/slider__item:text-white">
						Доверься профессионалу и начни свой бизнес выгодно!
					</p>
					<p class="mb-6 text-base leading-tight text-txt group-hover/slider__item:text-white">
						*Нельзя вносить правки в макет.
					</p>

					<button class="font-medium px-8 py-4 rounded-[80px] border justify-center items-center gap-2.5 inline-flex text-center text-white group-hover/slider__item:text-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 group-hover/slider__item:bg-white text-base font-display border-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_border bg-<?= $arResult["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 text-nowrap leading-tight" type="button">
						Подробнее
					</button>
				</div>
			</div>
		</div>
		<div class="flex flex-col h-auto  px-4 slider__item group/slider__item hover:cursor-[url(../images/icons/cursor_you.svg),_pointer] ">
			<div class="rounded-[10px] py-12 ps-7 flex-1 group-hover/slider__item:shadow-lg group-hover/slider__item:shadow-pink_light/20  transition duration-300 g ap-8 flex flex-col pe-6 border border-pink_border group-hover/slider__item:bg-pink_500">
				<div class="">
					<div class="px-4 py-1 text-sm mb-8 font-medium leading-tight border bg-pink_500 border-pink_border rounded-[20px] inline-flex slider__name group-hover/slider__item:bg-gray_500">
						Реклама
					</div>
					<div class="mb-2">

						<h3 class="font-display font-bold text-[28px] leading-tight text-white">
							Креатив в подарок
						</h3>
					</div>
					<p class="text-lg font-medium leading-tight text-txt group-hover/slider__item:text-white">
						Сайт+реклама
					</p>
				</div>
				<div class="mt-auto">
					<p class="mb-6 text-base leading-tight text-txt group-hover/slider__item:text-white">
						При заказе разработки сайта, любой рекламный креатив в подарок!
					</p>

					<button class="font-medium px-8 py-4 rounded-[80px] border justify-center items-center gap-2.5 inline-flex text-center text-white group-hover/slider__item:text-pink_500 group-hover/slider__item:bg-white text-base font-display border-pink_border bg-pink_500 text-nowrap leading-tight" type="button">
						Подробнее
					</button>
				</div>
			</div>
		</div>
		<div class="flex flex-col h-auto  px-4 slider__item group/slider__item hover:cursor-[url(../images/icons/cursor_you.svg),_pointer] ">
			<div class="rounded-[10px] py-12 ps-7 flex-1 group-hover/slider__item:shadow-lg group-hover/slider__item:shadow-purple_light/20  transition duration-300  gap-8 flex flex-col pe-6 border border-purple_border group-hover/slider__item:bg-purple_500">
				<div class="">
					<div class="px-4 py-1 text-sm mb-8 font-medium leading-tight border bg-purple_500 border-purple_border rounded-[20px] inline-flex slider__name group-hover/slider__item:bg-gray_500">
						Мобильная разработка
					</div>
					<div class="mb-2">

						<h3 class="font-display font-bold text-[28px] leading-tight text-white">
							Фирменный
						</h3>
					</div>
					<p class="text-lg font-medium leading-tight text-txt group-hover/slider__item:text-white">
						Логотип+визитка+печать
					</p>
				</div>
				<div class="mt-auto">
					<p class="mb-6 text-base leading-tight text-txt group-hover/slider__item:text-white">
						При заказе разработки логотипа, визитка со
						<span>скидкой 50%</span>. Печать визитки до 5 штук бесплатно
					</p>

					<button class="font-medium px-8 py-4 rounded-[80px] border justify-center items-center gap-2.5 inline-flex text-center text-white group-hover/slider__item:text-purple_500 group-hover/slider__item:bg-white text-base font-display border-purple_border bg-purple_500 text-nowrap leading-tight" type="button">
						Подробнее
					</button>
				</div>
			</div>
		</div>
		<div class="flex flex-col h-auto  px-4 slider__item group/slider__item hover:cursor-[url(../images/icons/cursor_you.svg),_pointer] ">
			<div class="rounded-[10px] py-12 ps-7 flex-1 group-hover/slider__item:shadow-lg group-hover/slider__item:shadow-green_light/20  transition duration-300  gap-8 flex flex-col pe-6 border border-green_border group-hover/slider__item:bg-green_500">
				<div class="">
					<div class="px-4 py-1 text-sm mb-8 font-medium leading-tight border bg-green_500 border-green_border rounded-[20px] inline-flex slider__name group-hover/slider__item:bg-gray_500">
						Полиграфия
					</div>
					<div class="mb-2">

						<h3 class="font-display font-bold text-[28px] leading-tight text-white">
							Фирменный
						</h3>
					</div>
					<p class="text-lg font-medium leading-tight text-txt group-hover/slider__item:text-white">
						Логотип+визитка+печать
					</p>
				</div>
				<div class="mt-auto">
					<p class="mb-6 text-base leading-tight text-txt group-hover/slider__item:text-white">
						При заказе разработки логотипа, визитка со
						<span>скидкой 50%</span>. Печать визитки до 5 штук бесплатно
					</p>

					<button class="font-medium px-8 py-4 rounded-[80px] border justify-center items-center gap-2.5 inline-flex text-center text-white group-hover/slider__item:text-green_500 group-hover/slider__item:bg-white text-base font-display border-green_border bg-green_500 text-nowrap leading-tight" type="button">
						Подробнее
					</button>
				</div>
			</div>
		</div>
	</div>

</section>
<div class="mb-7">

	<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
		Вы получите полноценный сайт с уникальным дизайном для вашей ниши
	</h2>
</div>
<section class="py-10 contacts-form">

	<div class="grid grid-cols-12 bg-gray_light border gap-7 border-gray_border rounded-[10px] py-14 px-9">
		<div class="col-span-12 lg:col-span-6">
			<div class="mb-4 ">

				<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
					Давайте сделаем сильный проект вместе!
				</h2>
			</div>
			<div class="mb-5">
				<p class="text-xl leading-tight  text-txt text-balance">Оставьте свой телефон, и аккаунт-менеджер
					сориентирует по порядку работы стоимости</p>

			</div>
			<div class="flex flex-wrap justify-between gap-4 mb-7 sm:justify-start">
				<ul class="flex items-center justify-between gap-2 max-w-36">
					<li>
						<a href="#" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
							<img src="./images/icons/telegramm.svg" alt="telegramm" width="20" height="20" />
						</a>
					</li>
					<li>
						<a href="#" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
							<img src="./images/icons/whatsapp.svg" alt="whatsapp" width="20" height="20" />
						</a>
					</li>
					<li>
						<a href="#" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
							<img src="./images/icons/viber.svg" alt="viber" width="20" height="20" />
						</a>
					</li>
				</ul>
				<div class="flex flex-col gap-3 md:gap-1 ">
					<a data-hover="+375 (29) 305 47 00" href="tel:+375293054700" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full  leading-tight text-txt" style="background: url(./images/icons/mts.svg) no-repeat left 50% / 13px 15px"> +375 (29) 305 47 00
					</a>
					<a data-hover="+375 (33) 305 47 00" href="tel:+375333054700" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full leading-tight text-txt" style="background: url(./images/icons/a1.svg) no-repeat left 50% / 13px 15px"> +375 (33) 305 47 00
					</a>
				</div>
			</div>
			<div class="mb-4 ">
				<h3 class="text-xl font-bold leading-tight text-white font-display">Контактное лицо</h3>

			</div>
			<div class="flex flex-wrap items-center gap-7">
				<div class="flex">
					<div class="rounded-full border bg-gray_500 border-blue_500 p-1 w-[65px] h-[65px] about__box-img relative">
						<picture>
							<source srcset="./images/team1.webp" type="image/webp"><img src="./images/team1.png" alt="team" class="rounded-full" />
						</picture>
					</div>
					<div class="rounded-full border bg-gray_500 -ml-2 border-purple_500 p-1 w-[65px] h-[65px] about__box-img relative">
						<picture>
							<source srcset="./images/team7.webp" type="image/webp"><img src="./images/team7.png" alt="team" class="rounded-full" />
						</picture>
					</div>
				</div>
				<ul class="flex flex-col gap-2 text-sm leading-tight text-txt">
					<li class="">
						<div class="flex gap-2">
							<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
							<p class="text-sm leading-tight text-txt">Менеджер Елена</p>
						</div>
					</li>
					<li class="flex gap-3">
						<div class="flex gap-2">
							<span class="w-4 h-4 rounded-full border-purple_border bg-purple_500"></span>
							<p class="text-sm leading-tight text-txt">Менеджер Полина</p>
						</div>
					</li>
				</ul>



				<a href="" class="flex gap-3">
					<span class="flex items-center justify-center w-10 h-10 border rounded-full border-gray_border bg-gray_light"><img src="./images/icons/map.svg" alt="г. Минск, БЦ S.Union" /></span>
					<p class="text-sm font-medium text-txt font-display">
						г. Минск,<br />
						БЦ S.Union
					</p>
				</a>
			</div>
		</div>
		<div class="col-span-12 py-3 lg:ms-24 lg:col-span-6 lg:me-14">
			<form class="flex flex-col h-full gap-2" action="#">
				<div>
					<label for="name" class="hidden">Ваше имя</label>
					<input type="text" name="name" id="name" class="block w-full p-4 text-base leading-tight border rounded-md focus:border-white/50 focus:ring-white/50 focus:outline-none bg-gray_light border-gray_border text-txt" placeholder="Ваше имя" required="" />
				</div>
				<div>
					<label for="tel" class="hidden">Телефон</label>
					<input type="tel" name="tel" id="tel" placeholder="Телефон" class="block w-full p-4 text-base leading-tight border rounded-md focus:border-white/50 focus:ring-white/50 focus:outline-none form-phone bg-gray_light border-gray_border text-txt" required="" />
				</div>
				<div class="">
					<label for="work" class="hidden mb-2 text-sm font-medium text-white dark:text-white">Вид работы</label>
					<select id="work" class="block w-full p-4 text-base leading-tight border rounded-md focus:border-white/50 focus:ring-white/50 focus:outline-none bg-gray_light border-gray_border text-txt">
						<option selected="">Вид работы</option>
						<option>Визитки</option>
						<option>Фирменный стиль</option>
						<option>Дизайн упаковки</option>
					</select>
				</div>

				<div class="flex items-start mt-2 mb-2">
					<div class="flex items-center h-5">
						<input id="terms" aria-describedby="terms" type="checkbox" class="w-5 h-5 border rounded-sm border-gray_border bg-gray_light checked::border-blue_border checked:bg-blue_500 ring-offset-0 checked:ring-offset-0 focus:ring-offset-0 focus:border-gray_border focus:bg-gray_light focus:ring-0 focus:outline-none" required="" />
					</div>
					<div class="ml-3 text-sm">
						<label for="terms" class="text-base leading-tight text-txt">Оставляя заявку, вы соглашаетесь на
							обработку
							<a class="underline" href="#">персональных данных</a>
							и
							<a class="underline" href="#">политикой конфиденциальности</a>
						</label>
					</div>
				</div>
				<button type="submit" class="relative  overflow-hidden  transition-all  shadow  hover:bg-white group font-medium px-8 py-4 rounded-[80px] border justify-center items-center gap-2.5 inline-flex hover:text-blue_500 text-center text-white text-base font-display border-blue_border bg-blue_500 text-nowrap hover:border-white/50 leading-tight w-full mt-auto">
					<span class="absolute inset-0 border-0 group-hover:border-[40px] ease-linear duration-100 transition-all border-white rounded-full"></span>
					<span class="relative w-full text-base leading-tight text-white transition-colors duration-500 ease-in-out text-nowrap group-hover:text-blue_500">Связаться
						с нами</span>
				</button>
			</form>
		</div>
	</div>
</section>
<section class="py-24 faq">
	<div class="mb-4">

		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
			Вопрос-ответ
		</div>

	</div>
	<div class="w-full md:w-2/3 mb-9">
		<div class="mb-4">

			<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
				Если у вас возникли вопросы, то вероятно здесь вы найдете ответ
			</h2>
		</div>
		<p class="text-xl leading-tight  text-txt text-balance">Наши проекты объединяют в себе эстетику и
			функциональность для достижения оптимальных результатов.</p>

	</div>
	<div class="space-y-5" id="accordion-collapse" data-accordion="collapse">
		<div class="">
			<h2 id="accordion-collapse-heading-1 ">
				<button type="button" class="group/heading sm:text-center text-left   flex items-center justify-between w-full gap-3 p-5 font-bold font-display text-xl leading-tight text-white border-t-gray_border bg-gray_light rounded-t-[10px] " data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
					<span>От чего зависит стоимость проекта?</span>
					<span data-accordion-icon class="flex items-center justify-center w-10 h-10 border rounded-full group-aria-expanded/heading:bg-blue_500 border-gray_border">
						<svg data-accordion-icon aria-hidden="true" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M11 11L11 5L13 5L13 11L19 11L19 13L13 13L13 19L11 19L11 13L5 13L5 11L11 11Z" fill="#BDBDC0" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
				</button>
			</h2>
			<div id="accordion-collapse-body-1" class="hidden -mt-[1px]" aria-labelledby="accordion-collapse-heading-1">
				<div class="px-5   rounded-b-[10px] bg-gray_light pb-3">
					<p class="leading-tight text-txt">Стоимость зависит от объёма и сложности проекта, предполагаемых
						сроков, размера команды. В смете мы подробно прописываем каждый этап работы и его стоимость, совместно
						обсуждаем и корректируем и после согласования приступаем к работе. По обоюдной договоренности, смета
						может корректироваться уже в процессе работы.</p>
				</div>
			</div>
		</div>
		<div class="">
			<h2 id="accordion-collapse-heading-2 ">
				<button type="button" class="group/heading sm:text-center text-left   flex items-center justify-between w-full gap-3 p-5 font-bold font-display text-xl leading-tight text-white border-t-gray_border bg-gray_light rounded-t-[10px] " data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
					<span>От чего зависит стоимость проекта?</span>
					<span data-accordion-icon class="flex items-center justify-center w-10 h-10 border rounded-full group-aria-expanded/heading:bg-blue_500 border-gray_border">
						<svg data-accordion-icon aria-hidden="true" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M11 11L11 5L13 5L13 11L19 11L19 13L13 13L13 19L11 19L11 13L5 13L5 11L11 11Z" fill="#BDBDC0" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
				</button>
			</h2>
			<div id="accordion-collapse-body-2" class="hidden -mt-[1px]" aria-labelledby="accordion-collapse-heading-2">
				<div class="px-5   rounded-b-[10px] bg-gray_light pb-3">
					<p class="leading-tight text-txt">Стоимость зависит от объёма и сложности проекта, предполагаемых
						сроков, размера команды. В смете мы подробно прописываем каждый этап работы и его стоимость, совместно
						обсуждаем и корректируем и после согласования приступаем к работе. По обоюдной договоренности, смета
						может корректироваться уже в процессе работы.</p>
				</div>
			</div>
		</div>
		<div class="">
			<h2 id="accordion-collapse-heading-3 ">
				<button type="button" class="group/heading sm:text-center text-left   flex items-center justify-between w-full gap-3 p-5 font-bold font-display text-xl leading-tight text-white border-t-gray_border bg-gray_light rounded-t-[10px] " data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
					<span>От чего зависит стоимость проекта?</span>
					<span data-accordion-icon class="flex items-center justify-center w-10 h-10 border rounded-full group-aria-expanded/heading:bg-blue_500 border-gray_border">
						<svg data-accordion-icon aria-hidden="true" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M11 11L11 5L13 5L13 11L19 11L19 13L13 13L13 19L11 19L11 13L5 13L5 11L11 11Z" fill="#BDBDC0" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
				</button>
			</h2>
			<div id="accordion-collapse-body-3" class="hidden -mt-[1px]" aria-labelledby="accordion-collapse-heading-3">
				<div class="px-5   rounded-b-[10px] bg-gray_light pb-3">
					<p class="leading-tight text-txt">Стоимость зависит от объёма и сложности проекта, предполагаемых
						сроков, размера команды. В смете мы подробно прописываем каждый этап работы и его стоимость, совместно
						обсуждаем и корректируем и после согласования приступаем к работе. По обоюдной договоренности, смета
						может корректироваться уже в процессе работы.</p>
				</div>
			</div>
		</div>
		<div class="">
			<h2 id="accordion-collapse-heading-4 ">
				<button type="button" class="group/heading sm:text-center text-left   flex items-center justify-between w-full gap-3 p-5 font-bold font-display text-xl leading-tight text-white border-t-gray_border bg-gray_light rounded-t-[10px] " data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
					<span>От чего зависит стоимость проекта?</span>
					<span data-accordion-icon class="flex items-center justify-center w-10 h-10 border rounded-full group-aria-expanded/heading:bg-blue_500 border-gray_border">
						<svg data-accordion-icon aria-hidden="true" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M11 11L11 5L13 5L13 11L19 11L19 13L13 13L13 19L11 19L11 13L5 13L5 11L11 11Z" fill="#BDBDC0" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
				</button>
			</h2>
			<div id="accordion-collapse-body-4" class="hidden -mt-[1px]" aria-labelledby="accordion-collapse-heading-4">
				<div class="px-5   rounded-b-[10px] bg-gray_light pb-3">
					<p class="leading-tight text-txt">Стоимость зависит от объёма и сложности проекта, предполагаемых
						сроков, размера команды. В смете мы подробно прописываем каждый этап работы и его стоимость, совместно
						обсуждаем и корректируем и после согласования приступаем к работе. По обоюдной договоренности, смета
						может корректироваться уже в процессе работы.</p>
				</div>
			</div>
		</div>
	</div>
</section>