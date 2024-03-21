<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

?>
<section class="py-6 contacts">

	<div class="grid grid-cols-6 gap-7">
		<div class="flex flex-col col-span-6 pb-6 lg:col-span-3">

			<div class="mb-4">
				<h2 class="font-bold text-white font-display text-5xl sm:text-[64px]  leading-tight text-balance ">
					Контакты
				</h2>
			</div>
			<div class="mb-12">
				<p class="text-xl leading-tight text-txt text-balance">Для сотрудничества, оставьте заявку на сайте, или
					свяжитесь с нами любым удобным способом:</p>

			</div>
			<div class="mb-4 text-xl font-bold leading-tight text-white font-display">
				Менеджеры
			</div>
			<div class="flex flex-wrap items-center gap-7 mb-14">
				<div class="flex">
					<div class="rounded-full border bg-gray_500 border-blue_500 p-1 w-[65px] h-[65px] about__box-img relative">
						<picture>
							<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team1.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team1.png" alt="team" class="rounded-full" />
						</picture>
					</div>
					<div class="rounded-full border bg-gray_500 -ml-2 border-purple_500 p-1 w-[65px] h-[65px] about__box-img relative">
						<picture>
							<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/team7.webp" type="image/webp"><img src="<?= SITE_TEMPLATE_PATH ?>/images/team7.png" alt="team" class="rounded-full" />
						</picture>
					</div>
				</div>
				<ul class="flex flex-col gap-2 text-sm leading-tight text-txt">
					<li class="">
						<div class="flex gap-2">
							<span class="w-4 h-4 rounded-full border-blue_border bg-blue_500"></span>
							<p class="text-sm leading-tight text-txt">Елена</p>
						</div>
					</li>
					<li class="flex gap-3">
						<div class="flex gap-2">
							<span class="w-4 h-4 rounded-full border-purple_border bg-purple_500"></span>
							<p class="text-sm leading-tight text-txt">Полина</p>
						</div>
					</li>
				</ul>
				<div class="flex gap-3">
					<span class="flex items-center justify-center w-10 h-10 border rounded-full border-gray_border bg-gray_500">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/alarm.svg" alt="Пн-Чт: 09:00 - 18:00 Пт: 09:00 - 17:00 Сб-Вс: выходной" />
					</span>
					<p class="text-sm font-medium leading-tight text-txt font-display">
						Пн-Чт: 09:00 - 18:00<br>
						Пт: 09:00 - 17:00<br>
						Сб-Вс: выходной<br>
					</p>
				</div>
			</div>
			<div class="grid grid-cols-6 gap-7">
				<div class="col-span-6 lg:col-span-3"></div>
				<div class="col-span-6 lg:col-span-3"></div>
			</div>
			<h3 class="mb-4 text-xl font-bold leading-tight text-white font-display">
				Мы в социальных сетях
			</h3>
			<?
			$be_link = \Victory\Options\CVictoryOptions::getOptionValue('be_link_' . SITE_ID);
			$dr_link = \Victory\Options\CVictoryOptions::getOptionValue('dr_link_' . SITE_ID);
			$insta_link = \Victory\Options\CVictoryOptions::getOptionValue('insta_link_' . SITE_ID);
			$in_link = \Victory\Options\CVictoryOptions::getOptionValue('in_link_' . SITE_ID);
			if ($be_link || $dr_link || $insta_link || $in_link) :
			?>
				<ul class="flex items-center justify-between gap-2 max-w-48">
					<? if ($be_link) : ?>
						<li class="social__item">
							<a href="<?= $be_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
								<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/Behance.svg" width="20" height="20" alt="Behance" />
							</a>
						</li>
					<? endif; ?>
					<? if ($dr_link) : ?>
						<li class=" social__item">
							<a href="<?= $dr_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
								<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/dribbble.svg" width="20" height="20" alt="dribbble" />
							</a>
						</li>
					<? endif; ?>
					<? if ($insta_link) : ?>
						<li class="social__item">
							<a href="<?= $insta_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
								<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/inst.svg" width="20" height="20" alt="instagram" />
							</a>
						</li>
					<? endif; ?>
					<? if ($in_link) : ?>
						<li class="social__item">
							<a href="<?= $in_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
								<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/Linkedin.svg" width="20" height="20" alt="Linkedin" />
							</a>
						</li>
					<? endif; ?>
				</ul>
			<? endif; ?>

			<div class="grid grid-cols-6 mt-4 lg:mt-auto gap-7">
				<div class="col-span-6 md:col-span-3 lg:col-span-2">
					<a href="" class="flex gap-3">
						<span class="flex items-center justify-center w-10 h-10 border rounded-full border-gray_border bg-gray_500">
							<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/map.svg" alt="адрес офиса г. Минск, БЦ S.Union" />
						</span>
						<p class="text-sm font-medium leading-tight text-txt font-display">
							г. Минск,<br />
							БЦ S.Union
						</p>
					</a>
				</div>
				<div class="col-span-6 md:col-span-3 lg:col-span-4">

					<form class="flex gap-3">
						<label for="file" class="flex items-center w-full h-full gap-3 text-sm text-txt font-display text-balance">
							<span class="flex items-center justify-center w-10 h-10 border rounded-full min-w-10 border-gray_border bg-gray_500">
								<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/upload-file.svg" alt="загрузите файл" />
							</span>
							<span>Если у вас есть ТЗ, вы можете прислать его нам и мы оценим
								проект</span>
						</label>
						<input class="hidden" aria-describedby="upload_file" id="file" type="file" />
					</form>
				</div>
			</div>
		</div>
		<div class="col-span-6 lg:col-span-3">
			<div class="grid grid-cols-6 gap-x-9 gap-y-7">
				<div class="col-span-6 sm:col-span-3 min-h-72">
					<div class="border rounded-[10px] border-gray_border h-full flex flex-col py-6 px-7">
						<h3 class="mb-2 text-lg font-medium leading-tight text-white">
							Начать<br />
							переписку
						</h3>
						<p class="leading-tight text-txt">
							Выбери удобный для себя мессенджер
						</p>
						<div class="mt-auto">
							<?
							$tg_link = \Victory\Options\CVictoryOptions::getOptionValue('tg_link_' . SITE_ID);
							$wa_link = \Victory\Options\CVictoryOptions::getOptionValue('wa_link_' . SITE_ID);
							$vb_link = \Victory\Options\CVictoryOptions::getOptionValue('vb_link_' . SITE_ID);
							if ($tg_link || $wa_link || $vb_link) :
							?>
								<ul class="flex items-center justify-between gap-2 max-w-36">
									<? if ($tg_link) : ?>
										<li class="social__item">
											<a href="<?= $tg_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
												<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/telegramm.svg" width="20" height="20" alt="telegramm" />
											</a>
										</li>
									<? endif; ?>
									<? if ($wa_link) : ?>
										<li class=" social__item">
											<a href="<?= $wa_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
												<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/whatsapp.svg" width="20" height="20" alt="whatsapp" />
											</a>
										</li>
									<? endif; ?>
									<? if ($vb_link) : ?>
										<li class="social__item">
											<a href="<?= $vb_link ?>" class="flex items-center justify-center w-10 h-10 transition duration-500 border rounded-full group/messengers border-gray_border bg-gray_light hover:border-gray_light hover:bg-gray_border">
												<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/viber.svg" width="20" height="20" alt="viber" />
											</a>
										</li>
									<? endif; ?>
								</ul>
							<? endif; ?>
						</div>
					</div>
				</div>
				<div class="col-span-6 sm:col-span-3 min-h-72">
					<div class="border rounded-[10px] border-gray_border h-full flex flex-col py-6 px-7">
						<h3 class="text-lg font-medium leading-tight text-white">
							Поговорить по телефону
						</h3>

						<div class="mt-auto">
							<div class="flex flex-col gap-3 md:gap-1 ">
								<?
								$phone1 = \Victory\Options\CVictoryOptions::getOptionValue('phone1_' . SITE_ID);
								$phone2 = \Victory\Options\CVictoryOptions::getOptionValue('phone2_' . SITE_ID);
								?>
								<a data-hover="<?= $phone1 ?>" href="tel:<?= str_replace(array(' ', '(', ')', '-'), '', $phone1); ?>" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full  leading-tight text-txt" style="background: url(<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/mts.svg) no-repeat left 50% / 13px 20px"> <?= $phone1 ?>
								</a>
								<a data-hover="<?= $phone2 ?>" href="tel:<?= str_replace(array(' ', '(', ')', '-'), '', $phone2); ?>" class="pl-5 relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:pl-5 before:duration-300 before:text-white before:transition-[height] hover:before:h-full  leading-tight text-txt" style="background: url(<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/a1.svg) no-repeat left 50% / 13px 20px"> <?= $phone2 ?>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-6 sm:col-span-3 min-h-72">
					<div class="border rounded-[10px] border-gray_border h-full flex flex-col py-6 px-7">
						<h3 class="text-lg font-medium leading-tight text-white">
							Написать на почту
						</h3>

						<div class="mt-auto">
							<?
							$email = \Victory\Options\CVictoryOptions::getOptionValue('email_' . SITE_ID);

							?>
							<a href="mailto:<?= $email ?>" class="flex items-center gap-3">
								<span class="flex items-center justify-center w-10 h-10 border rounded-full border-gray_border bg-gray_500">
									<img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/mail.svg" alt="почта для связи" />
								</span>
								<p data-hover="<?= $email ?>" class="relative before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:duration-300 before:text-white before:transition-[height] hover:before:h-full leading-tight text-txt">
									<?= $email ?></p>
							</a>
						</div>
					</div>
				</div>
				<div class="col-span-6 sm:col-span-3 min-h-72">
					<div class="border rounded-[10px] border-gray_border h-full flex flex-col py-6 px-7">
						<h3 class="text-lg font-medium leading-tight text-white">
							Заполнить бриф
						</h3>
						<form class="flex items-center gap-3 mt-auto">
							<label for="download" class="flex items-center gap-3 cursor-pointer">
								<span class="flex items-center justify-center w-10 h-10 border rounded-full border-gray_border bg-gray_500 min-w-10"><img src="<?= SITE_TEMPLATE_PATH ?><?= SITE_TEMPLATE_PATH ?>/images/icons/download.svg" alt="Заполнить бриф" /></span>
								<span data-hover="Заполнить бриф" class="relative block before:content-[attr(data-hover)] before:absolute before:top-0 before:left-0 before:overflow-hidden  before:h-0 before:duration-300 before:text-white before:transition-[height] hover:before:h-full leading-tight w-full h-full text-txt">Заполнить
									бриф</span>
							</label>
							<input class="hidden" aria-describedby="upload_file" id="download" type="file" />
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="relative py-14 quote">
	<? $APPLICATION->IncludeComponent(
		"bitrix:news.list",
		"quote",
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
			"FIELD_CODE" => array(
				0 => "",
				1 => "",
			),
			"FILTER_NAME" => "",
			"HIDE_LINK_WHEN_NO_DETAIL" => "N",
			"IBLOCK_ID" => "3",
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
			"PROPERTY_CODE" => array(
				0 => "POSITION",
				1 => "",
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
			"COMPONENT_TEMPLATE" => "quote"
		),
		false
	); ?>
</section>
<? $APPLICATION->IncludeComponent(
	"bitrix:map.yandex.view",
	"",
	array(
		"API_KEY" => "",
		"CONTROLS" => array("ZOOM"),
		"INIT_MAP_TYPE" => "MAP",
		"MAP_DATA" => "a:3:{s:10:\"yandex_lat\";s:7:\"55.7383\";s:10:\"yandex_lon\";s:7:\"37.5946\";s:12:\"yandex_scale\";i:10;}",
		"MAP_HEIGHT" => "500",
		"MAP_ID" => "",
		"MAP_WIDTH" => "100%",
		"OPTIONS" => array("ENABLE_SCROLL_ZOOM", "ENABLE_DBLCLICK_ZOOM", "ENABLE_DRAGGING")
	)
); ?>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>