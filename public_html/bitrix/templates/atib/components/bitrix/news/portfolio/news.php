<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}
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
<section class="py-11 portfolio">
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
		<p class="text-xl leading-tight  text-txt text-balance">Наши проекты объединяют в себе эстетику и функциональность для достижения оптимальных результатов.</p>
	</div>
	<div class="flex justify-between mb-7">
		<div class="relative">
			<div class="items-center hidden gap-4 sm:flex">
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
						"COMPONENT_TEMPLATE" => "portfolio",
						"COUNT_ELEMENTS" => "Y",
						"COUNT_ELEMENTS_FILTER" => "CNT_ACTIVE",
						"FILTER_NAME" => "",
						"HIDE_SECTIONS_WITH_ZERO_COUNT_ELEMENTS" => "N",
						"IBLOCK_ID" => "4",
						"IBLOCK_TYPE" => "CONTENT",
						"SECTION_CODE" => "",
						"SECTION_FIELDS" => array(0 => "", 1 => "",),
						"SECTION_ID" => "",
						"SECTION_URL" => "",
						"SECTION_USER_FIELDS" => array(0 => "UF_COLOR", 1 => "",),
						"SHOW_PARENT_NAME" => "Y",
						"TOP_DEPTH" => "2",
						"VIEW_MODE" => "LINE"
					)
				); ?>
			</div>
			<div class="flex sm:hidden">
				<!-- Dropdown button -->
				<button id="dropdownTabListButton" data-dropdown-toggle="dropdown" data-dropdown-on-hide="true" class="px-4 py-1 text-lg font-medium leading-tight text-white  border relative    inline-block border-white rounded-[20px]" type="button">Портфолио
				</button>
				<!-- Dropdown menu -->
				<div id="dropdown" class="z-10 hidden py-2">
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
							"COMPONENT_TEMPLATE" => "portfolio",
							"COUNT_ELEMENTS" => "Y",
							"COUNT_ELEMENTS_FILTER" => "CNT_ACTIVE",
							"FILTER_NAME" => "",
							"HIDE_SECTIONS_WITH_ZERO_COUNT_ELEMENTS" => "N",
							"IBLOCK_ID" => "4",
							"IBLOCK_TYPE" => "CONTENT",
							"SECTION_CODE" => "",
							"SECTION_FIELDS" => array(0 => "", 1 => "",),
							"SECTION_ID" => "",
							"SECTION_URL" => "",
							"SECTION_USER_FIELDS" => array(0 => "UF_COLOR", 1 => "",),
							"SHOW_PARENT_NAME" => "Y",
							"TOP_DEPTH" => "2",
							"VIEW_MODE" => "LINE"
						)
					); ?>
				</div>
			</div>
		</div>
		<div class="items-center hidden gap-4 sm:flex slider__controls-btns"></div>
	</div>
	<div id="portfolio-tab-content">


		<? $APPLICATION->IncludeComponent(
			"bitrix:news.list",
			"",
			array(
				"IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
				"IBLOCK_ID" => $arParams["IBLOCK_ID"],
				"NEWS_COUNT" => $arParams["NEWS_COUNT"],
				"SORT_BY1" => $arParams["SORT_BY1"],
				"SORT_ORDER1" => $arParams["SORT_ORDER1"],
				"SORT_BY2" => $arParams["SORT_BY2"],
				"SORT_ORDER2" => $arParams["SORT_ORDER2"],
				"FIELD_CODE" => $arParams["LIST_FIELD_CODE"],
				"PROPERTY_CODE" => $arParams["LIST_PROPERTY_CODE"],
				"SET_TITLE" => $arParams["SET_TITLE"],
				"SET_LAST_MODIFIED" => $arParams["SET_LAST_MODIFIED"],
				"MESSAGE_404" => $arParams["MESSAGE_404"],
				"SET_STATUS_404" => $arParams["SET_STATUS_404"],
				"SHOW_404" => $arParams["SHOW_404"],
				"FILE_404" => $arParams["FILE_404"],
				"INCLUDE_IBLOCK_INTO_CHAIN" => $arParams["INCLUDE_IBLOCK_INTO_CHAIN"],
				"ADD_SECTIONS_CHAIN" => $arParams["ADD_SECTIONS_CHAIN"],
				"CACHE_TYPE" => $arParams["CACHE_TYPE"],
				"CACHE_TIME" => $arParams["CACHE_TIME"],
				"CACHE_FILTER" => $arParams["CACHE_FILTER"],
				"CACHE_GROUPS" => $arParams["CACHE_GROUPS"],
				"DISPLAY_TOP_PAGER" => $arParams["DISPLAY_TOP_PAGER"],
				"DISPLAY_BOTTOM_PAGER" => $arParams["DISPLAY_BOTTOM_PAGER"],
				"PAGER_TITLE" => $arParams["PAGER_TITLE"],
				"PAGER_TEMPLATE" => $arParams["PAGER_TEMPLATE"],
				"PAGER_SHOW_ALWAYS" => $arParams["PAGER_SHOW_ALWAYS"],
				"PAGER_DESC_NUMBERING" => $arParams["PAGER_DESC_NUMBERING"],
				"PAGER_DESC_NUMBERING_CACHE_TIME" => $arParams["PAGER_DESC_NUMBERING_CACHE_TIME"],
				"PAGER_SHOW_ALL" => $arParams["PAGER_SHOW_ALL"],
				"PAGER_BASE_LINK_ENABLE" => $arParams["PAGER_BASE_LINK_ENABLE"],
				"PAGER_BASE_LINK" => $arParams["PAGER_BASE_LINK"],
				"PAGER_PARAMS_NAME" => $arParams["PAGER_PARAMS_NAME"],
				"DISPLAY_DATE" => $arParams["DISPLAY_DATE"],
				"DISPLAY_NAME" => "Y",
				"DISPLAY_PICTURE" => $arParams["DISPLAY_PICTURE"],
				"DISPLAY_PREVIEW_TEXT" => $arParams["DISPLAY_PREVIEW_TEXT"],
				"PREVIEW_TRUNCATE_LEN" => $arParams["PREVIEW_TRUNCATE_LEN"],
				"ACTIVE_DATE_FORMAT" => $arParams["LIST_ACTIVE_DATE_FORMAT"],
				"USE_PERMISSIONS" => $arParams["USE_PERMISSIONS"],
				"GROUP_PERMISSIONS" => $arParams["GROUP_PERMISSIONS"],
				"FILTER_NAME" => $arParams["FILTER_NAME"],
				"HIDE_LINK_WHEN_NO_DETAIL" => $arParams["HIDE_LINK_WHEN_NO_DETAIL"],
				"CHECK_DATES" => $arParams["CHECK_DATES"],
				"STRICT_SECTION_CHECK" => $arParams["STRICT_SECTION_CHECK"],

				"PARENT_SECTION" => $arResult["VARIABLES"]["SECTION_ID"],
				"PARENT_SECTION_CODE" => $arResult["VARIABLES"]["SECTION_CODE"],
				"DETAIL_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["detail"],
				"SECTION_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["section"],
				"IBLOCK_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
			),
			$component
		); ?>
	</div>
</section>