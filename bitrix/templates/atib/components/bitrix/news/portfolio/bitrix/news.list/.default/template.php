<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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
// Загрузка разделов вручную
$arSections = [];
$sectionFilter = ['IBLOCK_ID' => $arParams['IBLOCK_ID'], 'ACTIVE' => 'Y'];
$sectionSelect = ['ID', 'NAME', 'SECTION_PAGE_URL'];
$sectionResult = CIBlockSection::GetList(['SORT' => 'ASC'], $sectionFilter, false, $sectionSelect);
while ($section = $sectionResult->GetNext()) {
	$arSections[$section['ID']] = $section;
}
?>
<?
// Проверяем, есть ли разделы
if (!empty($arSections)) :
	foreach ($arSections as $arSection) :
		$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
		$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
?>
		<div class="hidden portfolio__item" id="portfolio-<?= $arSection['ID']; ?>" role="tabpanel" aria-labelledby="portfolio-<?= $arSection['ID']; ?>-tab">
			<div class="-mx-4 <?= $arSection['CODE']; ?>__slider slider">
				<?
				foreach ($arResult["ITEMS"] as $arItem) :
					if ($arItem["IBLOCK_SECTION_ID"] == $arSection['ID']) :
						$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
						$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));

						if (CModule::IncludeModule("millcom.phpthumb")) {
							$arItem["PREVIEW_PICTURE"]["WEBP"] = CMillcomPhpThumb::generateImg($arItem["PREVIEW_PICTURE"]["SRC"], 7);
							$arItem["PREVIEW_PICTURE"]["PNG"] = CMillcomPhpThumb::generateImg($arItem["PREVIEW_PICTURE"]["SRC"], 8);
						}
				?>
						<div class="px-4 slider__item sm:mr-0">
							<a href="<?= $arItem['LIST_PAGE_URL'] ?>" class="pt-3 block rounded-[10px] border border-gray_border mb-2 bg-gray_light">
								<div class="flex gap-2 px-4 mb-4">
									<span class="w-4 h-4 rounded-full border-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border bg-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_500"></span>
									<p class="text-sm leading-tight text-txt"><?= $arItem["PROPERTIES"]["STYLE"]["VALUE"] ?></p>
								</div>
								<div class="slider__box-img position-relative">
									<picture>
										<source srcset="<?= $arItem["PREVIEW_PICTURE"]["WEBP"] ?>" type="image/webp"><img src="<?= $arItem["PREVIEW_PICTURE"]["PNG"] ?>" alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>" class="slider__img" />
									</picture>
								</div>
							</a>
							<p class="text-xl font-bold leading-tight text-white font-display">
								<?= $arItem["NAME"] ?>
							</p>
							<p class="text-lg leading-tight text-txt"><?= $arItem["PREVIEW_TEXT"] ?></p>
						</div>
					<? endif;					?>
				<? endforeach;				?>
			</div>
		</div>
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
					}, ],
				})
			})
		</script>
	<? endforeach;	?>
<? endif; ?>