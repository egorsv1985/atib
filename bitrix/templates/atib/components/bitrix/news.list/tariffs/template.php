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
?>
<section class="py-12 tariffs">
	<div class="mb-4">
		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex">
			Тарифы
		</div>
	</div>
	<div class="w-full md:w-2/3 mb-9">
		<div class="mb-4">
			<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
				Мы готовы работать с разными задачами, но для примера описали самые популярные
			</h2>
		</div>
		<p class="text-xl leading-tight text-txt text-balance">Стоимость каждого проекта рассчитывается
			индивидуально, в зависимости от объёмов, сложности и сроков.</p>
	</div>
	<div class="grid grid-cols-3 gap-7 mb-11">
		<div class="col-span-3 lg:col-span-1">
			<? foreach ($arResult["ITEMS"] as $key => $arItem) : ?>
				<div class="tariff-detail  border bg-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 border-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border  shadow-lg px-7 py-12" id="tariff-detail-<?= $arItem['ID']; ?>">
					<div class=" px-4 mb-6 py-1 text-sm leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex">
						Детали по проекту
					</div>
					<ul class="space-y-2 text-lg font-medium leading-tight text-white">
						<? if (is_array($arItem["PROPERTIES"]["ITEM_DETAILS"]["VALUE"])) : ?>
							<? foreach ($arItem["PROPERTIES"]["ITEM_DETAILS"]["VALUE"] as $detail) : ?>
								<li><?= $detail ?></li>
							<? endforeach; ?>
						<? endif; ?>
					</ul>
				</div>
			<? endforeach; ?>
		</div>
		<div class="col-span-3 lg:col-span-2">
			<div class="flex items-center justify-between mb-4">
				<ul class="flex flex-wrap border-gray_border bg-gray_light rounded-[40px] -mb-px text-lg font-medium leading-tight text-center text-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border p-4 gap-2" id="tariffs-tab" data-tabs-toggle="#tariffs-tab-content" role="tablist">
					<? foreach ($arResult["ITEMS"] as $key => $arItem) : ?>
						<li role="presentation">
							<button class="tariff-tab text-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border inline-block py-1 px-4 border border-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border rounded-[20px] aria-selected:bg-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 aria-selected:text-white  hover:bg-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 hover:text-white " id="tariffs-<?= $arItem['ID']; ?>-tab" data-tabs-target="#tariffs-<?= $arItem['ID']; ?>" type="button" role="tab" aria-controls="tariffs-<?= $arItem['ID']; ?>" aria-selected="true"><?= $arItem['NAME']; ?></button>
						</li>
					<? endforeach; ?>
				</ul>
				<a href="" class="flex gap-3">
					<span class="flex items-center justify-center w-10 h-10 border rounded-full border-gray_border bg-gray_500"><img src="/images/icons/question.svg" alt="question" /></span>
					<p class="leading-tight text-txt">
						В чем отличие

						данных CMS?
					</p>
				</a>
			</div>
			<div id="tariffs-tab-content">
				<? foreach ($arResult["ITEMS"] as $key => $arItem) :
					$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
					$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
				?>
					<div class="hidden" id="tariffs-<?= $arItem['ID']; ?>" role="tabpanel" aria-labelledby="tariffs-<?= $arItem['ID']; ?>-tab">
						<div class="flex flex-col gap-5">
							<?
							$tariffs = $arItem["PROPERTIES"]["ITEM"]["VALUE"];
							$color = $arItem["PROPERTIES"]["COLOR"]["VALUE"];
							?>
							<? if (is_array($tariffs) && !empty($tariffs)) : ?>
								<? foreach ($tariffs as $item) : ?>
									<div class="flex flex-wrap gap-7 border border-gray_border rounded-[10px] py-6 px-7">
										<div class="flex flex-col w-3/5">
											<div class="mb-2 text-xl font-bold leading-tight text-white font-display"><?= $item["SUB_VALUES"]["ITEM_TITLE"]["VALUE"] ?></div>
											<div class="mb-5 leading-tight text-txt"><?= $item["SUB_VALUES"]["ITEM_NAME"]["VALUE"] ?></div>
											<div class="text-sm leading-tight text-txt"><?= $item["SUB_VALUES"]["ITEM_DESCRIPTION"]["VALUE"] ?></div>
										</div>
										<div class="flex flex-col gap-5">
											<div class="flex flex-col gap-2">
												<div class="leading-tight text-txt">Цена</div>
												<div class="text-xl font-bold leading-tight text-white font-display"><?= $item["SUB_VALUES"]["ITEM_PRICE"]["VALUE"] ?></div>
											</div>
											<div class="flex flex-col gap-2">
												<div class="leading-tight text-txt">Сроки</div>
												<div class="text-xl font-bold leading-tight text-white font-display"><?= $item["SUB_VALUES"]["ITEM_TIME"]["VALUE"] ?></div>
											</div>
										</div>
									</div>
								<? endforeach; ?>
							<? endif; ?>
						</div>
					</div>
				<? endforeach; ?>
			</div>
		</div>
	</div>
</section>
<script>
	$(document).ready(function() {
		$('.tariff-tab').on('click', function() {
			var targetId = $(this).data('tabs-target');
			var targetDetailId = '#tariff-detail-' + targetId.split('-')[1];

			// Удаляем класс detail-active у всех блоков
			$('.tariff-detail').removeClass('detail-active');

			// Добавляем класс detail-active к соответствующему блоку
			$(targetDetailId).addClass('detail-active');
		});

		
	});
</script>