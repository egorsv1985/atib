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
print_r($arResult);
?>
<ul class="py-2 text-sm border-0" >
	<? foreach ($arResult["ITEMS"] as $arItem) : ?>
		<li class="mb-2">
			<div class="flex items-center gap-2">
				<span class="w-4 h-4 rounded-full border-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border bg-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_500"></span>
				<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" class="relative before:absolute before:bottom-0 before:left-0 before:overflow-hidden before:w-0 before:border-b-2 before:border-b-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border hover:text-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 before:transition-[width] before:duration-500 hover:before:w-full"><?= $arItem["NAME"] ?></a>
			</div>
		</li>
	<? endforeach; ?>
</ul>