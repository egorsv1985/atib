<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();
?>
<? if (TYPE_PAGE == 'CONTACTS') : ?>

	
<? else :
	$APPLICATION->IncludeFile("includes/contacts.php", array(),);
endif; ?>

</div>
</main>
<footer class="py-3 footer">
	<div class="container">
		<div class="grid grid-cols-12 py-4 border-t gap-7 border-t-gray_border">
			<div class="col-span-12 lg:col-span-5">
				<div class="flex mb-10 gap-7">
					<a href="/" class="block max-w-full text-center">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/logo.svg" alt="logo" class="max-w-full" />
					</a>
					<small class="text-sm leading-tight text-txt">
						©<a href="#" class=""> Дизайн-студия АТИБ, 2023</a>
					</small>
				</div>
				<div class="flex flex-wrap items-center justify-center gap-7 sm:justify-between sm:gap-1">
					<div class="">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Alfa.svg" alt="Alfa" class="" />
					</div>
					<div class="">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Visa.svg" alt="Visa" class="" />
					</div>
					<div class="">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Visa_secure.svg" alt="Visa secure" class="" />
					</div>
					<div class="">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Master.svg" alt="Master" class="" />
					</div>
					<div class="">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Master_ID.svg" alt="Master ID" class="" />
					</div>
					<div class="">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Pay.svg" alt="Pay" class="" />
					</div>
					<div class="">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/samsung_pay.svg" alt="Samsung pay" class="" />
					</div>
					<div class="">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Белкарт.svg" alt="Белкарт" class="" />
					</div>
					<div class="">
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/icons/Белкарт_Интернет.svg" alt="Белкарт Интернет" class="" />
					</div>
				</div>
			</div>
			<div class="flex flex-col col-span-12 lg:col-span-7 lg:ms-24">
				<div class="flex flex-col mb-10 lg:self-end lg:mr-9">
					<a href="#" target="_blank" class="text-sm leading-tight text-txt">
						Политика конфиденциальности</a>
					<a href="#" target="_blank" class="text-sm leading-tight text-txt"> Способы оплаты</a>
				</div>
				<p class="text-sm leading-tight text-txt">
					Информация, размещенная на сайте, не является публичной офертой!
				</p>
			</div>
		</div>
	</div>
</footer>
</div>

<!-- Main modal -->
<div id="callback-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[9999999] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
	<div class="relative w-full max-w-4xl max-h-full p-4">
		<!-- Modal content -->
		<div class="relative bg-gray_light rounded-[10px] py-10 px-24">
			<!-- Modal header -->
			<div class="flex items-center justify-between mb-10">
				<h3 class="text-white font-display text-[64px] font-bold">
					Бриф
				</h3>
				<button type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm text-white bg-transparent rounded-lg ms-auto " data-modal-hide="callback-modal">
					<svg class="w-7 h-7" aria-hidden="true" width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<path id="Vector" d="M0.16 -0.05C1.01 -0.9 2.39 -0.9 3.24 -0.05L13.52 10.23L23.8 -0.05C24.65 -0.9 26.03 -0.9 26.88 -0.05C27.74 0.81 27.74 2.19 26.88 3.04L16.61 13.32L26.88 23.59C27.74 24.44 27.74 25.83 26.88 26.68C26.03 27.53 24.65 27.53 23.8 26.68L13.52 16.4L3.24 26.68C2.39 27.53 1.01 27.53 0.16 26.68C-0.69 25.83 -0.69 24.44 0.16 23.59L10.44 13.32L0.16 3.04C-0.69 2.19 -0.69 0.81 0.16 -0.05Z" fill="#BDBDC0" fill-opacity="1.000000" fill-rule="nonzero" />
						<path id="Vector" d="M12.82 9.52L3.24 -0.05C2.39 -0.9 1.01 -0.9 0.16 -0.05C-0.69 0.81 -0.69 2.19 0.16 3.04L9.73 12.61L10.44 13.32L9.73 14.02L0.16 23.59C-0.69 24.44 -0.69 25.83 0.16 26.68C1.01 27.53 2.39 27.53 3.24 26.68L12.82 17.11L13.52 16.4L14.23 17.11L23.8 26.68C24.65 27.53 26.03 27.53 26.88 26.68C27.74 25.83 27.74 24.44 26.88 23.59L17.31 14.02L16.61 13.32L17.31 12.61L26.88 3.04C27.74 2.19 27.74 0.81 26.88 -0.05C26.03 -0.9 24.65 -0.9 23.8 -0.05L14.23 9.52L13.52 10.23L12.82 9.52ZM1.7 0.24Q2.12 0.24 2.54 0.66L13.52 11.65L24.51 0.66Q24.92 0.24 25.34 0.24Q25.76 0.24 26.18 0.66Q26.59 1.08 26.59 1.5Q26.59 1.91 26.18 2.33L15.19 13.32L26.18 24.3Q26.59 24.72 26.59 25.13Q26.59 25.55 26.18 25.97Q25.76 26.39 25.34 26.39Q24.92 26.39 24.51 25.97L13.52 14.98L2.54 25.97Q2.12 26.39 1.7 26.39Q1.29 26.39 0.87 25.97Q0.45 25.55 0.45 25.13Q0.45 24.72 0.87 24.3L11.85 13.32L0.87 2.33Q0.45 1.91 0.45 1.5Q0.45 1.08 0.87 0.66Q1.29 0.24 1.7 0.24Z" fill="#1E1E1E" fill-opacity="1.000000" fill-rule="evenodd" />
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
			</div>
			<!-- Modal body -->
			<form class="flex flex-col" action="#">
				<div class="mb-4">
					<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-purple_light border-purple_border rounded-[20px] inline-flex ">
						Контактные данные
					</div>

				</div>
				<div class="grid grid-cols-2 mb-6 gap-x-7 gap-y-5">
					<div class="col-span-2 lg:col-span-1">
						<div>
							<label for="name" class="hidden">Фамилия и имя*</label>
							<input type="text" name="name" id="name" class="block w-full p-4 text-base leading-tight border rounded-md focus:border-white/50 focus:ring-white/50 focus:outline-none bg-gray_light border-gray_border text-txt" placeholder="Фамилия и имя*" required="" />
						</div>
					</div>
					<div class="col-span-2 lg:col-span-1">
						<div>
							<label for="mail" class="hidden">Почта*</label>
							<input type="email" name="mail" id="mail" placeholder="Почта*" class="block w-full p-4 text-base leading-tight border rounded-md focus:border-white/50 focus:ring-white/50 focus:outline-none bg-gray_light border-gray_border text-txt" required="" />
						</div>
					</div>
					<div class="col-span-2 lg:col-span-1">
						<div>
							<label for="company" class="hidden">Компания</label>
							<input type="text" name="company" id="company" class="block w-full p-4 text-base leading-tight border rounded-md focus:border-white/50 focus:ring-white/50 focus:outline-none bg-gray_light border-gray_border text-txt" placeholder="Компания" required="" />
						</div>
					</div>
					<div class="col-span-2 lg:col-span-1">
						<div>
							<label for="tel" class="hidden">Телефон</label>
							<input type="tel" name="tel" id="tel" placeholder="Телефон" class="block w-full p-4 text-base leading-tight border rounded-md focus:border-white/50 focus:ring-white/50 focus:outline-none form-phone bg-gray_light border-gray_border text-txt" required="" />
						</div>
					</div>
				</div>
				<div class="mb-4">
					<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-pink_light border-pink_border rounded-[20px] inline-flex ">
						Услуги
					</div>

				</div>
				<div class="mb-8">
					<label for="services" class="hidden mb-2 text-sm font-medium text-white ">Вид
						услуги</label>
					<select id="services" class="block w-full p-4 text-base leading-tight border rounded-md focus:border-white/50 focus:ring-white/50 focus:outline-none bg-gray_light border-gray_border text-txt">
						<option value="Вид услуги" selected="">Вид услуги</option>
						<option value="Дизайн лендинга">Дизайн лендинга</option>
						<option value="Сайт на Тильда">Сайт на Тильда</option>
						<option value="Разработка логотипа">Разработка логотипа</option>
						<option value="Многостраничный сайт на cms">Многостраничный сайт на cms</option>
						<option value="Оформление соц.сетей">Оформление соц.сетей</option>
						<option value="Сайт-визитка">Сайт-визитка</option>
					</select>
				</div>
				<div class="mb-4">
					<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-green_light border-green_border rounded-[20px] inline-flex ">
						Несколько слов о проекте
					</div>

				</div>
				<div class="mb-3">
					<label for="message" class="hidden">Описание</label>
					<textarea id="message" rows="4" class="block w-full p-4 text-base leading-tight border rounded-md focus:border-white/50 focus:ring-white/50 focus:outline-none bg-gray_light border-gray_border text-txt" placeholder="Описание"></textarea>
				</div>
				<div class="mb-6">
					<label for="file" class="flex justify-center border items-center w-full h-full gap-3 py-3 text-sm border-dashed border-gray_border rounded-[5px] text-txt text-balance">
						<span>Перетащите или <span class="text-blue_500">выберите файл</span></span>
					</label>
					<input class="hidden" aria-describedby="upload_file" id="file" type="file" />
				</div>
				<div class="mb-4">
					<div class="px-4 py-1 text-lg font-medium leading-tight text-white border bg-yellow_light border-yellow_border rounded-[20px] inline-flex ">
						Бюджет
					</div>

				</div>
				<ul class="flex flex-col gap-3 mb-10 lg:flex-row">
					<li>
						<input type="radio" id="price-1" name="hosting" value="менее 1 000 br" class="hidden price" required />
						<label for="price-1" class="inline-flex rounded-[20px] items-center justify-between w-full px-4 py-2 text-white leading-tight border border-gray_border cursor-pointer price-checked:border-blue_border price-checked:text-blue_border hover:text-white hover:bg-blue_light">
							<div class="block">
								<div class="w-full ">менее 1 000 br</div>
							</div>
						</label>
					</li>
					<li>
						<input type="radio" id="price-2" name="hosting" value="1 000 - 1 500 br" class="hidden price" required />
						<label for="price-2" class="inline-flex rounded-[20px] items-center justify-between w-full px-4 py-2 text-white leading-tight border border-gray_border cursor-pointer price-checked:border-blue_border price-checked:text-blue_border hover:text-white hover:bg-blue_light">
							<div class="block">
								<div class="w-full ">1 000 - 1 500 br</div>
							</div>
						</label>
					</li>
					<li>
						<input type="radio" id="price-3" name="hosting" value="1 500 - 2 000 br" class="hidden price" required />
						<label for="price-3" class="inline-flex rounded-[20px] items-center justify-between w-full px-4 py-2 text-white leading-tight border border-gray_border cursor-pointer price-checked:border-blue_border price-checked:text-blue_border hover:text-white hover:bg-blue_light">
							<div class="block">
								<div class="w-full ">1 500 - 2 000 br</div>
							</div>
						</label>
					</li>
					<li>
						<input type="radio" id="price-4" name="hosting" value="более 2 000 br" class="hidden price" required />
						<label for="price-4" class="inline-flex rounded-[20px] items-center justify-between w-full px-4 py-2 text-white leading-tight border border-gray_border cursor-pointer price-checked:border-blue_border price-checked:text-blue_border hover:text-white hover:bg-blue_light">
							<div class="block">
								<div class="w-full ">более 2 000 br</div>
							</div>
						</label>
					</li>

				</ul>

				<button type="submit" class="relative  overflow-hidden  transition-all  shadow  hover:bg-white group font-medium px-8 py-4 rounded-[80px] border justify-center items-center gap-2.5 inline-flex hover:text-blue_500 text-center text-white text-base font-display border-blue_border bg-blue_500 text-nowrap hover:border-white/50 leading-tight w-full max-w-64 self-center">
					<span class="absolute inset-0 border-0 group-hover:border-[40px] ease-linear duration-100 transition-all border-white rounded-full"></span>
					<span class="relative w-full text-base leading-tight text-white transition-colors duration-500 ease-in-out text-nowrap group-hover:text-blue_500">Отправить</span>
				</button>
			</form>
		</div>
	</div>
</div>
</body>

</html>