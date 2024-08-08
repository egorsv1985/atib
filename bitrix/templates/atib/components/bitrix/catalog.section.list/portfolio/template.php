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
<section class="portfolio">
	<div class="flex justify-between mb-7">
		<div class="relative">
			<div class="items-center hidden gap-4 sm:flex">
				<ul class="flex flex-col sm:flex-row -mb-px p-4 gap-2 text-center bg-gray_light border-gray_border rounded-[40px]" aria-labelledby="dropdownTabListButton" id="portfolio-tab" data-tabs-toggle="#portfolio-tab-content" role="tablist">
					<? foreach ($arResult['SECTIONS'] as $key => $arSection) :
						$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
						$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
					?>
						<li class="" role="presentation">
							<button class="portfolio__tab px-4 py-1 text-lg font-medium leading-tight text-<?= $arSection['UF_COLOR']; ?>_border aria-selected:text-white border relative group overflow-hidden inline-block border-<?= $arSection['UF_COLOR']; ?>_border rounded-[20px] aria-selected:bg-<?= $arSection['UF_COLOR']; ?>_500" id="portfolio-<?= $arSection['ID']; ?>-tab" data-tabs-target="#portfolio-<?= $arSection['ID']; ?>" type="button" role="tab" aria-controls="portfolio-<?= $arSection['ID']; ?>" aria-selected="false">
								<span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-<?= $arSection['UF_COLOR']; ?>_500 group-hover:h-full opacity-90"></span>
								<span class="relative z-20 group-hover:text-white group-aria-selected:text-white"><?= $arSection['NAME']; ?></span>
							</button>
						</li>
					<? endforeach; ?>
				</ul>
			</div>
			<div class="flex sm:hidden">
				<!-- Dropdown button -->
				<button id="dropdownTabListButton" data-dropdown-toggle="dropdown" data-dropdown-on-hide="true" class="px-4 py-1 text-lg font-medium leading-tight text-white border relative inline-block border-white rounded-[20px]" type="button">Портфолио
				</button>
				<!-- Dropdown menu -->
				<div id="dropdown" class="z-10 hidden py-2">
					<ul class="flex flex-col sm:flex-row -mb-px p-4 gap-2 text-center bg-gray_light border-gray_border rounded-[40px]" aria-labelledby="dropdownTabListButton" id="portfolio-tab" data-tabs-toggle="#portfolio-tab-content" role="tablist">
						<? foreach ($arResult['SECTIONS'] as $key => $arSection) :
							$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
							$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
						?>
							<li class="" role="presentation">
								<button class="portfolio__tab px-4 py-1 text-lg font-medium leading-tight text-<?= $arSection['UF_COLOR']; ?>_border aria-selected:text-white border relative group overflow-hidden inline-block border-<?= $arSection['UF_COLOR']; ?>_border rounded-[20px] aria-selected:bg-<?= $arSection['UF_COLOR']; ?>_500" id="portfolio-<?= $arSection['ID']; ?>-tab" data-tabs-target="#portfolio-<?= $arSection['ID']; ?>" type="button" role="tab" aria-controls="portfolio-<?= $arSection['ID']; ?>" aria-selected="false">
									<span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-<?= $arSection['UF_COLOR']; ?>_500 group-hover:h-full opacity-90"></span>
									<span class="relative z-20 group-hover:text-white group-aria-selected:text-white"><?= $arSection['NAME']; ?></span>
								</button>
							</li>
						<? endforeach; ?>
					</ul>
				</div>
			</div>
		</div>
		<? foreach ($arResult['SECTIONS'] as $key => $arSection) :
			$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
			$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
		?>
			<div class="items-center hidden gap-4 <?= $arSection['CODE']; ?>-slider__controls-btns controls" id="controls-<?= $arSection['ID']; ?>"></div>
		<? endforeach; ?>
	</div>
	<? foreach ($arResult['SECTIONS'] as $key => $arSection) :
		$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
		$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
	?>
		<div class="hidden portfolio__item" id="portfolio-<?= $arSection['ID']; ?>" role="tabpanel" aria-labelledby="portfolio-<?= $arSection['ID']; ?>-tab">
			<div class="-mx-4 <?= $arSection['CODE']; ?>__slider slider">
				<? $APPLICATION->IncludeComponent(
					"bitrix:news.list",
					"portfolio-item",
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
						"COMPONENT_TEMPLATE" => "portfolio-item",
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
						"FILTER_NAME" => "arrFilter",
						"HIDE_LINK_WHEN_NO_DETAIL" => "N",
						"IBLOCK_ID" => "4",
						"IBLOCK_TYPE" => "CONTENT",
						"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
						"INCLUDE_SUBSECTIONS" => "Y",
						"MESSAGE_404" => "",
						"NEWS_COUNT" => "20", // Увеличьте количество элементов, если нужно
						"PAGER_BASE_LINK_ENABLE" => "N",
						"PAGER_DESC_NUMBERING" => "N",
						"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
						"PAGER_SHOW_ALL" => "N",
						"PAGER_SHOW_ALWAYS" => "N",
						"PAGER_TEMPLATE" => ".default",
						"PAGER_TITLE" => "Новости",
						"PARENT_SECTION" => $arSection['ID'], // Фильтр по разделу
						"PARENT_SECTION_CODE" => "",
						"PREVIEW_TRUNCATE_LEN" => "",
						"PROPERTY_CODE" => array(
							0 => "BEHANCE",
							1 => "YEAR",
							2 => "DESIGN_DESCRIPTION",
							3 => "VIDEO_NAME",
							4 => "TASK",
							5 => "TOTAL",
							6 => "TOTAL_TITLE",
							7 => "TOTAL_NAME",
							8 => "TOTAL_DESCRIPTION",
							9 => "CLIENT",
							10 => "NAME_IMAGE",
							11 => "ABOUT",
							12 => "NAME_DESCRIPTION",
							13 => "DESCRIPTION_IMAGE",
							14 => "SECTOR",
							15 => "SECTION_IMAGE",
							16 => "SIZE",
							17 => "RESULT_DESCRIPTION",
							18 => "VIDEO_LINK",
							19 => "LINK",
							20 => "STYLE",
							21 => "SUMMARY",
							22 => "COLOR",
							23 => "DESIGN_ELEMENTS",
							24 => "",
							25 => "",
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
						"INCLUDE_SUBSECTIONS" => "Y",
					),
					false
				); ?>
			</div>
		</div>
	<? endforeach; ?>
	<? foreach ($arResult['SECTIONS'] as $key => $arSection) :
		$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
		$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
	?>
		<script>
			$(document).ready(function() {
				$('.<?= $arSection['CODE']; ?>__slider').slick({
					infinite: true,
					speed: 500,
					autoplay: false,
					autoplaySpeed: 5000,
					swipe: true,
					arrows: true,
					cssEase: 'linear',
					slidesToShow: 2,
					slidesToScroll: 1,
					appendArrows: $('.<?= $arSection['CODE']; ?>-slider__controls-btns'),
					responsive: [{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
						},
					}],
				});


			});
		</script>
	<? endforeach; ?>
</section>
<script>
	$(document).ready(function() {
		$('.portfolio__tab').on('click', function() {
			// Устанавливаем aria-selected для всех вкладок в false
			$('.portfolio__tab').attr('aria-selected', 'false');
			// Устанавливаем aria-selected для текущей вкладки в true
			$(this).attr('aria-selected', 'true');

			// Удаляем класс controls-active у всех блоков управления
			$('.controls').removeClass('controls-active');

			// Добавляем класс controls-active к соответствующему блоку управления
			var targetId = $(this).data('tabs-target');
			var targetControlsId = '#controls-' + targetId.split('-')[1];
			$(targetControlsId).addClass('controls-active');

			// Скрываем все элементы портфолио
			$('.portfolio__item').addClass('hidden');
			// Показываем только активный элемент портфолио
			$(targetId).removeClass('hidden');
		});

		// Устанавливаем первую вкладку активной по умолчанию
		if ($('.portfolio__tab').length > 0) {
			$('.portfolio__tab').first().click();
		}
	});
</script>