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
<section class=" py-14 tariffs">
	<div class="mb-4">
		<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex">
			Тарифы
		</div>
	</div>
	<div class="w-full md:w-2/3 mb-9">
		<div class="mb-6">
			<h2 class="font-bold text-white text-balance font-display text-3xl sm:text-[40px] leading-tight">
				Мы готовы работать с разными задачами, но для примера описали самые популярные
			</h2>
		</div>
		<p class="text-xl leading-tight text-txt text-balance">Стоимость каждого проекта рассчитывается
			индивидуально, в зависимости от объёмов, сложности и сроков.</p>
	</div>
	<div class="grid grid-cols-3 gap-x-7 gap-y-5 mb-11">
		<div class="col-span-3 lg:col-span-1 lg:row-span-2 ">
			<? foreach ($arResult["ITEMS"] as $key => $arItem) : ?>
				<div class="tariff-detail rounded-[10px]  border bg-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 border-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border  shadow-lg px-7 py-12" id="tariff-detail-<?= $arItem['ID']; ?>">
					<div class=" px-4 mb-9 py-1 text-sm leading-tight text-white border bg-gray_light border-gray_border rounded-[20px] inline-flex">
						Детали по проекту
					</div>
					<ul class="space-y-2 ps-4 list-square text-lg font-medium leading-tight text-white">
						<? if (is_array($arItem["PROPERTIES"]["ITEM_DETAILS"]["VALUE"])) : ?>
							<? foreach ($arItem["PROPERTIES"]["ITEM_DETAILS"]["VALUE"] as $detail) : ?>
								<li><?= $detail ?></li>
							<? endforeach; ?>
						<? endif; ?>
					</ul>
				</div>
			<? endforeach; ?>
		</div>
		<div class="col-span-3 lg:col-span-2 -order-1 lg:order-0">
			<div class="flex items-center justify-between ">
				<ul class="flex flex-wrap border-gray_border bg-gray_light rounded-[40px] -mb-px text-lg font-medium leading-tight text-center text-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border p-4 gap-2" id="tariffs-tab" data-tabs-toggle="#tariffs-tab-content" role="tablist">
					<? foreach ($arResult["ITEMS"] as $key => $arItem) : ?>
						<li role="presentation">
							<button class="tariff-tab text-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border inline-block py-1 px-4 border border-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_border rounded-[20px] aria-selected:bg-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 aria-selected:text-white  hover:bg-<?= $arItem["PROPERTIES"]["COLOR"]["VALUE"] ?>_500 hover:text-white " id="tariffs-<?= $arItem['ID']; ?>-tab" data-tabs-target="#tariffs-<?= $arItem['ID']; ?>" type="button" role="tab" aria-controls="tariffs-<?= $arItem['ID']; ?>" aria-selected="true"><?= $arItem['NAME']; ?></button>
						</li>
					<? endforeach; ?>
				</ul>
				<!-- Modal toggle -->
				<button data-modal-target="question-modal" data-modal-toggle="question-modal" class="flex gap-3 max-w-44" type="button">
					<span class="flex items-center justify-center min-w-10 w-10 h-10 border rounded-full border-gray_border bg-gray_500"><img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/question.svg" alt="question" /></span>
					<p class="leading-tight text-txt">
						В чем отличие

						данных CMS?
					</p>
				</button>
				<? foreach ($arResult["ITEMS"] as $key => $arItem) : ?>
					<!-- Main modal -->
					<div id="question-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
						<div class="relative p-4 w-full max-w-2xl max-h-full">
							<!-- Modal content -->
							<div class="relative bg-white rounded-lg shadow ">
								<!-- Modal header -->
								<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
									<button type="button" class=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="question-modal">
										<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
										</svg>
									</button>
								</div>
								<!-- Modal body -->
								<div class="p-4">
									<?= $arItem['DETAIL_TEXT']; ?>
								</div>

							</div>
						</div>
					</div>
				<? endforeach; ?>
			</div>
		</div>
		<div class="col-span-3 lg:col-span-2">
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
									<div class="flex flex-wrap gap-10 border border-gray_border rounded-[10px] py-6 px-7">
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
			// Устанавливаем aria-selected для всех вкладок в false
			$('.tariff-tab').attr('aria-selected', 'false');
			// Устанавливаем aria-selected для текущей вкладки в true
			$(this).attr('aria-selected', 'true');

			// Удаляем класс detail-active у всех блоков
			$('.tariff-detail').removeClass('detail-active');

			// Добавляем класс detail-active к соответствующему блоку
			var targetId = $(this).data('tabs-target');
			var targetDetailId = '#tariff-detail-' + targetId.split('-')[1];
			$(targetDetailId).addClass('detail-active');
		});

		// Устанавливаем первую вкладку активной по умолчанию
		if ($('.tariff-tab').length > 0) {
			$('.tariff-tab').first().click();
		}
	});
</script>