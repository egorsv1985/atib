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
		<div class="flex gap-2 -mt-7 mb-3 ml-3">
			<div class="bg-green_500 border border-gray_border  w-[10px] rounded-full h-[10px]"></div>
			<div class="bg-red_500 border border-red_border  w-[10px] rounded-full h-[10px]"></div>
			<div class="bg-yellow_500 border border-yellow_border  w-[10px] rounded-full h-[10px]"></div>
		</div>
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
			<div class="col-span-3 mt-32 lg-mt-64 lg:col-span-1">
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
<?
if ($arResult['PROPERTIES']['TARIFFS']['VALUE']) :
	global $arFilterTariffs;
	$arFilterTariffs = array(
		'SECTION_ID' => $arResult['PROPERTIES']['TARIFFS']['VALUE'],
		'INCLUDE_SUBSECTIONS' => 'Y'
	);
	$APPLICATION->IncludeComponent(
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
			"FIELD_CODE" => array("", ""),
			"FILTER_NAME" => "arFilterTariffs",
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
				"ITEM_DETAILS",
				"ITEM_TITLE",
				"ITEM_NAME",
				"ITEM_DESCRIPTION",
				"ITEM_TIME",
				"ITEM_PRICE",
				"ITEM",
				"COLOR",
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
		$component
	);
endif;
?>
<?


// Получаем ID текущего раздела
$currentSectionId = $arResult['SECTION_ID'];

// Массив для хранения подразделов
$subSections = array();

// Формируем фильтр для получения подразделов
$arFilter = array(
	'IBLOCK_ID' => 4,
	'SECTION_ID' => $currentSectionId,
	'ACTIVE' => 'Y'
);

// Выбираем только нужные поля
$arSelect = array('ID', 'NAME');

// Получаем подразделы
$res = CIBlockSection::GetList(array('SORT' => 'ASC'), $arFilter, false, $arSelect);
while ($section = $res->GetNext()) {
	$subSections[] = $section['ID'];
}

// Формируем глобальный фильтр для компонента
global $arFilterGallery;
$arFilterGallery = array(
	'IBLOCK_ID' => 4, // ID инфоблока
	'SECTION_ID' => $subSections, // ID подразделов
	'ACTIVE' => 'Y' // Только активные разделы
);

$APPLICATION->IncludeComponent(
	"bitrix:catalog.section.list",
	"portfolio",
	array(
		"ADDITIONAL_COUNT_ELEMENTS_FILTER" => "additionalCountFilter",
		"ADD_SECTIONS_CHAIN" => "N",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "7200",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => "portfolio",
		"COUNT_ELEMENTS" => "Y",
		"COUNT_ELEMENTS_FILTER" => "CNT_ACTIVE",
		"FILTER_NAME" => "arFilterGallery",
		"HIDE_SECTIONS_WITH_ZERO_COUNT_ELEMENTS" => "N",
		"IBLOCK_ID" => "4",
		"IBLOCK_TYPE" => "CONTENT",
		"SECTION_CODE" => "",
		"SECTION_FIELDS" => array("", ""),
		"SECTION_ID" => "",
		"SECTION_URL" => "",
		"SECTION_USER_FIELDS" => array("UF_COLOR", ""),
		"SHOW_PARENT_NAME" => "Y",
		"TOP_DEPTH" => "2",
		"VIEW_MODE" => "LINE"
	),
	$component
);

?>

<?
if ($arResult['PROPERTIES']['ACTION']['VALUE']) :
	global $arFilterAction;
	$arFilterAction = array(
		'ID' => $arResult['PROPERTIES']['ACTION']['VALUE']
	);
	$APPLICATION->IncludeComponent(
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
			"FILTER_NAME" => "arFilterAction",
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
			"PROPERTY_CODE" => array("COLOR", "TITLE"),
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
		),
		$component
	);
endif;
?>
<div class="mb-7">

	<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
		Вы получите полноценный сайт с уникальным дизайном для вашей ниши
	</h2>
</div>
<? $APPLICATION->IncludeFile("includes/contacts-form.php", array(),);
?>
<?

	global $arFilterFaq;
	$arFilterFaq = array(
		'ID' => $arResult['PROPERTIES']['FAQ']['VALUE']
	);
	$APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"faq",
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
			"FILTER_NAME" => "arFilterFaq",
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
			"PROPERTY_CODE" => array("COLOR", "TITLE"),
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
		),
		$component
	);

?>