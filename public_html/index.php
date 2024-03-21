<?
define('TYPE_PAGE', 'MAIN');
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
$APPLICATION->SetTitle("Главная");
?>
<section class="py-14 services">
	<div class="mb-5">
		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
			Услуги
		</div>
	</div>
	<div class="mb-6">
		<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
			Направления работы
		</h2>
	</div>
	<div class="w-full mb-16 md:w-2/3">
		<p class="text-xl leading-tight text-txt text-balance">Стоимость каждого проекта рассчитывается индивидуально, в зависимости от объёмов, сложности и сроков</p>
	</div>
	<div class="grid grid-cols-3 gap-7">
		<div class="col-span-3 lg:col-span-2">
			<div class="grid grid-cols-3 gap-7">
				<div class="col-span-3">
					<div class="border bg-gray_light border-gray_border pt-6 pb-11 px-7 services__content rounded-[10px]">
						<div class="px-4 py-1 text-xl font-medium leading-tight text-white border bg-yellow_500 border-yellow_border rounded-[20px] inline-flex relative -top-10">
							Брендинг
						</div>
						<div class="grid justify-center grid-cols-2 gap-7">
							<div class="col-span-2 md:col-span-1">
								<? $APPLICATION->IncludeComponent(
									"bitrix:news.list",
									"services",
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
										"IBLOCK_ID" => "1",
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
										"PARENT_SECTION" => "1",
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
							</div>
							<div class="col-span-2 md:col-span-1">
								<div class="flex gap-4 border justify-between items-center border-gray_border rounded-[10px] shadow-inset p-[30px] -mt-5 lg:mb-[30px] mb-3">
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
								<div class="flex max-[400px]:flex-col flex-row justify-between lg:gap-2 gap-3">
									<div class="flex gap-1 flex-col border items-center border-gray_border rounded-[10px] shadow-inset py-4 px-7">
										<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/company_name.svg" alt="Company name" class="" />
										<img alt="Company name" src="/bitrix/templates/atib/images/icons/company_name.svg">
										<p class="text-sm leading-tight text-center text-white">
											Company name
										</p>
									</div>
									<div class="flex flex-col border items-center border-gray_border rounded-[10px] shadow-inset py-2 px-8">
										<span class="block text-[40px] leading-tight font-display text-white font-bold text-center">Aa</span>
										<p class="text-sm leading-tight text-center text-white">
											Brand font
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-3">
					<div class="border px-7 bg-gray_light border-gray_border services__content rounded-[10px]">
						<div class="grid grid-cols-2 gap-7">
							<div class="col-span-2 md:col-span-1">
								<div class="px-4 py-1 text-xl font-medium leading-tight text-white border bg-pink_500 border-pink_border rounded-[20px] inline-flex relative -top-4">
									Дизайн рекламы
								</div>
								<div class="pt-6">
									<? $APPLICATION->IncludeComponent(
										"bitrix:news.list",
										"services",
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
											"IBLOCK_ID" => "1",
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
											"PARENT_SECTION" => "2",
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
								</div>
							</div>
							<div class="col-span-2 md:col-span-1">
								<? $APPLICATION->IncludeComponent(
									"bitrix:news.list",
									"services-slider",
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
										"IBLOCK_ID" => "2",
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
										"PROPERTY_CODE" => array("IMAGES", ""),
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-3 lg:col-span-1">
			<div class="border px-7 h-full bg-gray_light border-gray_border services__content rounded-[10px] pb-4">
				<div class="px-4 py-1 text-xl font-medium leading-tight text-white border bg-blue_500 border-blue_border rounded-[20px] inline-flex relative -top-4">
					Разработка
				</div>
				<div class="grid grid-cols-2 gap-4 md:gap-7 lg:gap-4">
					<div class="col-span-2 md:col-span-1 lg:col-span-2 md:order-1 lg:order-none">
						<div class="flex flex-col border px-5 py-6 bg-gray_light border-gray_border cursor-[url(<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_development2.svg),_pointer] rounded-[10px]">
							<div class="flex items-center justify-between mb-4">
								<div class="flex items-center gap-2">
									<div>
										<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/figma_small.svg" alt="figma" class="" />
									</div>
									<p class="leading-tight text-txt">Project</p>
								</div>
								<div class="flex">
									<div class="w-4 h-4 border rounded-full bg-green_500 border-green_border"></div>
									<div class="w-4 h-4 bg-blue-500 border rounded-full border-blue_border"></div>
								</div>
							</div>
							<div class="relative pb-16 ">
								<img src="<?= SITE_TEMPLATE_PATH ?>/images/development.png" alt="" class="w-full cursor-[url(<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_development1.svg),_pointer]" />
							</div>
						</div>
					</div>
					<div class="col-span-2 md:col-span-1 lg:col-span-2">
						<div class="pt-6">
							<? $APPLICATION->IncludeComponent(
								"bitrix:news.list",
								"services",
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
									"IBLOCK_ID" => "1",
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
									"PARENT_SECTION" => "3",
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
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="relative py-24 quote">
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
<? $APPLICATION->IncludeComponent(
	"bitrix:catalog.section.list",
	"portfolio",
	array(
		"ADDITIONAL_COUNT_ELEMENTS_FILTER" => "additionalCountFilter",
		"ADD_SECTIONS_CHAIN" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "7200",
		"CACHE_TYPE" => "A",
		"COUNT_ELEMENTS" => "Y",
		"COUNT_ELEMENTS_FILTER" => "CNT_ACTIVE",
		"FILTER_NAME" => "",
		"HIDE_SECTIONS_WITH_ZERO_COUNT_ELEMENTS" => "N",
		"IBLOCK_ID" => "4",
		"IBLOCK_TYPE" => "CONTENT",
		"SECTION_CODE" => "",
		"SECTION_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"SECTION_ID" => "",
		"SECTION_URL" => "",
		"SECTION_USER_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"SHOW_PARENT_NAME" => "Y",
		"TOP_DEPTH" => "2",
		"VIEW_MODE" => "LINE",
		"COMPONENT_TEMPLATE" => "portfolio"
	),
	false
); ?>
<section class="py-[75px] about">
	<div class="mb-5">
		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex ">
			О студии
		</div>

	</div>
	<div class="mb-12">
		<h2 class="font-bold text-white font-display text-3xl sm:text-[40px] leading-tight text-balance">
			Мы компания, которая специализируется на создании <span class="relative lg:inline-block text-blue_500 lg:before:absolute lg:before:bg-no-repeat lg:before:bg-center lg:before:bg-cover">качественного
				и эффективного дизайна</span> для веб-сайтов. Мы предоставляем
			полный спектр услуг в области веб-дизайна, начиная от разработки концепции и создания дизайн-макетов, до
			верстки и
			программирования сайтов.
		</h2>
	</div>
	<div class="grid grid-cols-12 gap-7 mb-11">
		<div class="col-span-12 lg:col-span-6">
			<div class="mb-6 text-xl font-bold leading-tight text-white font-display">
				Команда для вашего проекта:
			</div>
			<div class="flex flex-wrap mb-5 -space-x-2.5 gap-y-3">
				<div class="rounded-full border bg-gray_500 border-blue_500 p-1 w-[85px] h-[85px] about__box-img relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team1.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team1.png" alt="team" class="rounded-full" />
					</picture>
				</div>
				<div class="rounded-full border bg-gray_500  border-purple_500 p-1 w-[85px] h-[85px] about__box-img relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team2.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team2.png" alt="team" class="rounded-full" />
					</picture>
				</div>
				<div class="rounded-full border bg-gray_500  border-yellow_500 p-1 w-[85px] h-[85px] about__box-img relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team3.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team3.png" alt="team" class="rounded-full" />
					</picture>
				</div>
				<div class="rounded-full border bg-gray_500  border-green_500 p-1 w-[85px] h-[85px] about__box-img relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team4.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team4.png" alt="team" class="rounded-full" />
					</picture>
				</div>
				<div class="rounded-full border bg-gray_500  border-red_500 p-1 w-[85px] h-[85px] about__box-img relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team5.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team5.png" alt="team" class="rounded-full" />
					</picture>
				</div>
				<div class="rounded-full border bg-gray_500  border-pink_500 p-1 w-[85px] h-[85px] about__box-img relative">
					<picture>
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team6.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team6.png" alt="team" class="rounded-full" />
					</picture>
				</div>
			</div>
			<div class="grid w-2/3 grid-cols-2 gap-3">
				<div class="col-span-2 sm:col-span-1">
					<ul class="flex flex-col gap-3 text-sm leading-tight text-txt">
						<li class="">
							<div class="flex gap-2">
								<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
								<p class="text-sm leading-tight text-txt">Менеджер</p>
							</div>
						</li>
						<li class="">
							<div class="flex gap-2">
								<span class="w-4 h-4 rounded-full border-purple_border bg-purple_500"></span>
								<p class="text-sm leading-tight text-txt">Аналитик</p>
							</div>
						</li>
						<li class="">
							<div class="flex gap-2">
								<span class="w-4 h-4 rounded-full border-yellow_border bg-yellow_500"></span>
								<p class="text-sm leading-tight text-txt">Маркетолог</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-span-2 sm:col-span-1">
					<ul class="flex flex-col gap-3 text-sm leading-tight text-txt">
						<li class="">
							<div class="flex gap-2">
								<span class="w-4 h-4 rounded-full border-green_border bg-green_500"></span>
								<p class="text-sm leading-tight text-txt">Дизайнер</p>
							</div>
						</li>
						<li class="">
							<div class="flex gap-2">
								<span class="w-4 h-4 rounded-full border-red_border bg-red_500"></span>
								<p class="text-sm leading-tight text-txt">Программист</p>
							</div>
						</li>
						<li class="">
							<div class="flex gap-2">
								<span class="w-4 h-4 rounded-full border-pink_border bg-pink_500"></span>
								<p class="text-sm leading-tight text-txt">Копирайтер</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-span-12 lg:col-span-6">
			<div class="space-y-5 text-lg leading-tight text-txt about__content">
				<p>
					Наша команда состоит из опытных дизайнеров, разработчиков и
					маркетологов, которые работают вместе, чтобы создавать уникальные и
					привлекательные веб-сайты для наших клиентов. Мы понимаем, что
					каждый бизнес уникален, поэтому мы создаем индивидуальные решения
					для каждого проекта.
				</p>
				<p>
					Мы уверены, что наша работа помогает нашим клиентам привлекать
					больше посетителей на свои сайты и увеличивать свой бизнес.
				</p>
			</div>
		</div>
	</div>
	<div class="mb-6">
		<h2 class="text-xl font-bold leading-tight text-white font-display">
			Этапы работы
		</h2>
	</div>
	<div class="grid grid-cols-12 gap-7">
		<div class="col-span-12 lg:col-span-6">
			<ul class="relative flex flex-col text-lg leading-tight steps__list ms-7 text-txt ">
				<li class="flex svg-animation transition duration-300 ease-in-out steps__item gap-11 py-4 -start-5 items-center relative cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_you.svg),_pointer] before:absolute before:-z-10 before:bg-no-repeat before:bg-center before:bg-cover ">
					<span class="relative flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out rounded-full after:bg-gray_border after:h-full after:w-px after:absolute after:left-1/2 after:top-full after:-z-10 bg-gray_light aspect-square last:after:hidden">
						<svg class="w-4 h-4 transition duration-300 text-gray_500 fill-red_500 " aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
					<h3 class="">Обсуждение</h3>
				</li>
				<li class="flex svg-animation transition duration-300 ease-in-out steps__item gap-11 py-4 -start-5 items-center relative cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_you.svg),_pointer] before:absolute before:-z-10 before:bg-no-repeat before:bg-center before:bg-cover ">
					<span class="relative flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out rounded-full after:bg-gray_border after:h-full after:w-px after:absolute after:left-1/2 after:top-full after:-z-10 bg-gray_light aspect-square last:after:hidden">
						<svg class="w-4 h-4 transition duration-300 text-gray_500 fill-red_500 " aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
					<h3 class="">Оценка проекта</h3>
				</li>
				<li class="flex svg-animation transition duration-300 ease-in-out steps__item gap-11 py-4 -start-5 items-center relative cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_you.svg),_pointer] before:absolute before:-z-10 before:bg-no-repeat before:bg-center before:bg-cover ">
					<span class="relative flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out rounded-full after:bg-gray_border after:h-full after:w-px after:absolute after:left-1/2 after:top-full after:-z-10 bg-gray_light aspect-square last:after:hidden">
						<svg class="w-4 h-4 transition duration-300 text-gray_500 fill-red_500 " aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
					<h3 class="">Подписание договора и предоплата</h3>
				</li>
				<li class="flex svg-animation transition duration-300 ease-in-out steps__item gap-11 py-4 -start-5 items-center relative cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_you.svg),_pointer] before:absolute before:-z-10 before:bg-no-repeat before:bg-center before:bg-cover ">
					<span class="relative flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out rounded-full after:bg-gray_border after:h-full after:w-px after:absolute after:left-1/2 after:top-full after:-z-10 bg-gray_light aspect-square last:after:hidden">
						<svg class="w-4 h-4 transition duration-300 text-gray_500 fill-red_500 " aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
					<h3 class="">Работа над проектом</h3>
				</li>
				<li class="flex svg-animation transition duration-300 ease-in-out steps__item gap-11 py-4 -start-5 items-center relative cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_you.svg),_pointer] before:absolute before:-z-10 before:bg-no-repeat before:bg-center before:bg-cover ">
					<span class="relative flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out rounded-full after:bg-gray_border after:h-full after:w-px after:absolute after:left-1/2 after:top-full after:-z-10 bg-gray_light aspect-square last:after:hidden">
						<svg class="w-4 h-4 transition duration-300 text-gray_500 fill-red_500 " aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
					<h3 class="">Согласование и внесение правок</h3>
				</li>
				<li class="flex svg-animation transition duration-300 ease-in-out steps__item gap-11 py-4 -start-5 items-center relative cursor-[url(.<?= SITE_TEMPLATE_PATH ?>/images/icons/cursor_you.svg),_pointer] before:absolute before:-z-10 before:bg-no-repeat before:bg-center before:bg-cover ">
					<span class="relative flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out rounded-full after:bg-gray_border after:h-full after:w-px after:absolute after:left-1/2 after:top-full after:-z-10 bg-gray_light aspect-square last:after:hidden">
						<svg class="w-4 h-4 transition duration-300 text-gray_500 fill-red_500 " aria-hidden="true" width="16.666664" height="16.666748" viewBox="0 0 16.6667 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<path d="M8.33333 16.6667C3.73083 16.6667 0 12.9358 0 8.33325C0 3.73071 3.73083 0 8.33333 0C12.9358 0 16.6667 3.73071 16.6667 8.33325C16.6667 12.9358 12.9358 16.6667 8.33333 16.6667ZM8.33333 15C10.1014 15 11.7971 14.2976 13.0474 13.0474C14.2976 11.7971 15 10.1016 15 8.33325C15 6.56519 14.2976 4.86963 13.0474 3.61938C11.7971 2.36914 10.1014 1.66675 8.33333 1.66675C6.56522 1.66675 4.86953 2.36914 3.61929 3.61938C2.36905 4.86963 1.66667 6.56519 1.66667 8.33325C1.66667 10.1016 2.36905 11.7971 3.61929 13.0474C4.86953 14.2976 6.56522 15 8.33333 15ZM7.5025 11.6667L3.96667 8.13086L5.145 6.95239L7.5025 9.31006L12.2158 4.59595L13.395 5.77417L7.5025 11.6667Z" fill-opacity="1.000000" fill-rule="nonzero" />
						</svg>
					</span>
					<h3 class="">Доработка и передача проекта со всеми необходимыми исходниками</h3>
				</li>
			</ul>
		</div>
		<div class="relative col-span-12 pt-3 lg:col-span-6 pseudo-grid before:absolute before:block  before:-top-[15%] before:left-[17%] before:-bottom-[19%] before:right-0">
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
						0 => "ID",
						1 => "",
					),
					"FILTER_NAME" => "Filter",
					"HIDE_LINK_WHEN_NO_DETAIL" => "N",
					"IBLOCK_ID" => "3",
					"IBLOCK_TYPE" => "CONTENT",
					"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
					"INCLUDE_SUBSECTIONS" => "Y",
					"MESSAGE_404" => "",
					"NEWS_COUNT" => "1",
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
					"SORT_BY1" => "ACTIVE_FROM",
					"SORT_BY2" => "SORT",
					"SORT_ORDER1" => "DESC",
					"SORT_ORDER2" => "ASC",
					"STRICT_SECTION_CHECK" => "N",
					"COMPONENT_TEMPLATE" => "quote"
				),
				false
			); ?>
		</div>
	</div>
</section>
<section class="py-10 contacts-form">
	<div class="grid grid-cols-12 bg-gray_light border gap-7 border-gray_border rounded-[10px] py-14 px-9">
		<div class="col-span-12 lg:col-span-6">
			<div class="mb-4 ">
				<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
					Давайте сделаем сильный проект вместе!
				</h2>
			</div>
			<div class="mb-5">
				<p class="text-xl leading-tight text-txt text-balance">Оставьте свой телефон, и аккаунт-менеджер
					сориентирует по порядку работы стоимости</p>
			</div>
			<div class="flex flex-wrap justify-between gap-4 mb-7 sm:justify-start">
				<?
				$tg_link = \Victory\Options\CVictoryOptions::getOptionValue('tg_link_' . SITE_ID);
				$wa_link = \Victory\Options\CVictoryOptions::getOptionValue('wa_link_' . SITE_ID);
				$vb_link = \Victory\Options\CVictoryOptions::getOptionValue('vb_link_' . SITE_ID);
				if ($tg_link || $wa_link || $vb_link) :
				?>
					<ul class="flex items-center justify-between gap-2 max-w-36">
						<? if ($tg_link) : ?>
							<li class="social__item">
								<a href="<?= $tg_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/telegramm.svg" width="20" height="20" alt="telegramm" />
								</a>
							</li>
						<? endif; ?>
						<? if ($wa_link) : ?>
							<li class=" social__item">
								<a href="<?= $wa_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/whatsapp.svg" width="20" height="20" alt="whatsapp" />
								</a>
							</li>
						<? endif; ?>
						<? if ($vb_link) : ?>
							<li class="social__item">
								<a href="<?= $vb_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
									<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/viber.svg" width="20" height="20" alt="viber" />
								</a>
							</li>
						<? endif; ?>
					</ul>
				<? endif; ?>
				<div class="flex flex-col gap-3 md:gap-1 ">
					<?
					$phone1 = \Victory\Options\CVictoryOptions::getOptionValue('phone1_' . SITE_ID);
					$phone2 = \Victory\Options\CVictoryOptions::getOptionValue('phone2_' . SITE_ID);
					?>
					<a data-hover="<?= $phone1 ?>" href="tel:<?= str_replace(array(' ', '(', ')', '-'), '', $phone1); ?>" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full  leading-tight text-txt" style="background: url(<?= SITE_TEMPLATE_PATH ?>/images/icons/mts.svg) no-repeat left 50% / 13px 20px"> <?= $phone1 ?>
					</a>
					<a data-hover="<?= $phone2 ?>" href="tel:<?= str_replace(array(' ', '(', ')', '-'), '', $phone2); ?>" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full  leading-tight text-txt" style="background: url(<?= SITE_TEMPLATE_PATH ?>/images/icons/a1.svg) no-repeat left 50% / 13px 20px"> <?= $phone2 ?>
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
							<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team1.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team1.png" alt="team" class="rounded-full" />
						</picture>
					</div>
					<div class="rounded-full border bg-gray_500 -ml-2 border-purple_500 p-1 w-[65px] h-[65px] about__box-img relative">
						<picture>
							<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team7.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team7.png" alt="team" class="rounded-full" />
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
					<span class="flex items-center justify-center w-10 h-10 border rounded-full border-gray_border bg-gray_light"><img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/map.svg" alt="г. Минск, БЦ S.Union" /></span>
					<p class="text-sm font-medium text-txt font-display">
						г. Минск,<br />
						БЦ S.Union
					</p>
				</a>
			</div>
		</div>
		<div class="col-span-12 py-3 lg:ms-24 lg:col-span-6 lg:me-14">
			<? $APPLICATION->IncludeComponent(
				"bitrix:iblock.element.add.form",
				"form-contacts",
				array(
					"CUSTOM_TITLE_DATE_ACTIVE_FROM" => "",
					"CUSTOM_TITLE_DATE_ACTIVE_TO" => "",
					"CUSTOM_TITLE_DETAIL_PICTURE" => "",
					"CUSTOM_TITLE_DETAIL_TEXT" => "",
					"CUSTOM_TITLE_IBLOCK_SECTION" => "",
					"CUSTOM_TITLE_NAME" => "Ваше имя",
					"CUSTOM_TITLE_PREVIEW_PICTURE" => "",
					"CUSTOM_TITLE_PREVIEW_TEXT" => "",
					"CUSTOM_TITLE_TAGS" => "",
					"DEFAULT_INPUT_SIZE" => "30",
					"DETAIL_TEXT_USE_HTML_EDITOR" => "N",
					"ELEMENT_ASSOC" => "CREATED_BY",
					"GROUPS" => array(
						0 => "2",
					),
					"IBLOCK_ID" => "5",
					"IBLOCK_TYPE" => "CONTENT",
					"LEVEL_LAST" => "Y",
					"LIST_URL" => "",
					"MAX_FILE_SIZE" => "0",
					"MAX_LEVELS" => "100000",
					"MAX_USER_ENTRIES" => "100000",
					"PREVIEW_TEXT_USE_HTML_EDITOR" => "N",
					"PROPERTY_CODES" => array(
						0 => "11",
						1 => "12",
						2 => "NAME",
					),
					"PROPERTY_CODES_REQUIRED" => array(
						0 => "11",
						1 => "NAME",
					),
					"RESIZE_IMAGES" => "N",
					"SEF_MODE" => "N",
					"STATUS" => "ANY",
					"STATUS_NEW" => "N",
					"USER_MESSAGE_ADD" => "Спасибо, Ваша заявка успешно сохранена!",
					"USER_MESSAGE_EDIT" => "Спасибо, Ваша заявка успешно сохранена!",
					"USE_CAPTCHA" => "N",
					"AJAX_MODE" => "Y",
					"AJAX_OPTION_SHADOW" => "Y",
					"AJAX_OPTION_JUMP" => "N",
					"AJAX_OPTION_STYLE" => "N",
					"AJAX_OPTION_HISTORY" => "N",
					"COMPONENT_TEMPLATE" => "form-contacts"
				),
				false
			); ?>
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
			<p class="text-xl leading-tight text-txt text-balance">Наши проекты объединяют в себе эстетику и
				функциональность для достижения оптимальных результатов.</p>

		</div>
		<div class="flex items-center gap-4 sale-slider__controls-btns"></div>
	</div>
	<? $APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"sale-slider",
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
			"IBLOCK_ID" => "6",
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
			"PROPERTY_CODE" => array(
				0 => "COLOR",
				1 => "TITLE",
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
			"STRICT_SECTION_CHECK" => "N"
		)
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

	

<?
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php');
?>