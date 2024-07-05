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
?>
<section class=" contacts py-14">
	<div class="flex flex-col gap-24">
		<?
		foreach ($arResult["ITEMS"] as $arItem) : ?>
			<div class="grid grid-cols-3 gap-7 border-b-gray_border">
				<div class="relative col-span-3 lg:col-span-2 pseudo-grid before:absolute before:block  before:top-[10%] before:left-[52%] before:-bottom-[10%] before:right-0">
					<div class="">
						<h2 class="font-bold text-white font-display text-5xl sm:text-[64px]  leading-tight text-balance ">
							<?= $arItem["PROPERTIES"]["TOTAL_NAME"]["VALUE"] ?>
						</h2>
					</div>
				</div>
				<div class="col-span-3 mt-64 lg:col-span-1">
					<p class="text-lg leading-tight text-txt">
						<?= $arItem["PROPERTIES"]["TOTAL_DESCRIPTION"]["VALUE"] ?>

					</p>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-7">
				<div class="col-span-3 lg:col-span-1">
					<h4 class="text-lg leading-tight text-txt">Проектов</h4>
					<h2 class="font-bold text-white font-display text-5xl sm:text-[64px]  leading-tight text-balance ">
						<?= $arItem["PROPERTIES"]["PROJECTS_LEFT"]["VALUE"] ?>
					</h2>
				</div>
				<div class="col-span-3 lg:col-span-1">
					<h4 class="text-lg leading-tight text-txt">Проектов</h4>
					<h2 class="font-bold text-white font-display text-5xl sm:text-[64px]  leading-tight text-balance ">
						<?= $arItem["PROPERTIES"]["PROJECTS_RIGHT"]["VALUE"] ?>
					</h2>
				</div>
				<div class="col-span-3 lg:col-span-1">
					<h4 class="mb-4 text-lg leading-tight text-txt">Сомневаешься?</h4>
					<button type="button" id="" class="font-medium px-8 py-4 rounded-[80px] border justify-center items-center gap-2.5 inline-flex text-center text-white text-base font-display border-blue_border bg-blue_500 text-nowrap hover:border-white/50 leading-tight max-w-48">
						Задать вопрос
					</button>
				</div>
			</div>
		<? endforeach; ?>
	</div>
</section>