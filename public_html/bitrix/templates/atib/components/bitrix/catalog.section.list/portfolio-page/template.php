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


				<ul class="flex  flex-col sm:flex-row -mb-px p-4 gap-2 text-center bg-gray_light border-gray_border rounded-[40px]" aria-labelledby="dropdownTabListButton" id="portfolio-tab" data-tabs-toggle="#portfolio-tab-content" role="tablist">
					<? foreach ($arResult['SECTIONS'] as $key => $arSection) :
						$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
						$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
					?>
						<li class="" role="presentation">

							<button class="px-4 py-1 text-lg font-medium leading-tight  text-<?= $arSection['UF_COLOR']; ?>_border aria-selected:text-white border relative group overflow-hidden  inline-block border-<?= $arSection['UF_COLOR']; ?>_border rounded-[20px] aria-selected:bg-<?= $arSection['UF_COLOR']; ?>_500" id="portfolio-<?= $arSection['ID']; ?>-tab" data-tabs-target="#portfolio-<?= $arSection['ID']; ?>" type="button" role="tab" aria-controls="portfolio-<?= $arSection['ID']; ?>" aria-selected="false">
								<span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-<?= $arSection['UF_COLOR']; ?>_500 group-hover:h-full opacity-90"></span>
								<span class="relative z-20 group-hover:text-white group-aria-selected:text-white"><?= $arSection['NAME']; ?></span>
							</button>
						</li>
					<? endforeach; ?>
				</ul>
		
	