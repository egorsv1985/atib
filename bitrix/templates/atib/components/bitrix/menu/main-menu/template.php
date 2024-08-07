<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<? if (!empty($arResult)) :

?>
	<ul class="flex flex-col gap-2 text-xl font-bold leading-tight text-white md:gap-4 font-display">
		<?
		foreach ($arResult as $arItem) :
			if ($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
				continue;
		?>
			<li>
				<a href="<?= $arItem["LINK"] ?>" class="relative inline-block transition-colors duration-300 group text-txt hover:text-blue-500">
					<span class="relative z-10 text-nowrap">
						<?= $arItem["TEXT"] ?>
					</span>
					<span class="absolute bottom-0 left-0 w-full h-px transition-transform duration-300 origin-left transform scale-x-0 bg-white group-hover:scale-x-100"></span>
				</a>
			</li>
		<? endforeach ?>
	</ul>
<? endif ?>