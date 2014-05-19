/**
 *    Portfolio Vakka
 *
 *    @author Rafael Antonio Lucio <rafaelantoniolucio@gmail.com>
 */
$(function () {
	'use strict';

	var heightScreen = $(window).height(),
		userAgent = navigator.userAgent.match('Chrome'),
		$logo = $('.logo'),
		$luz = $('.luz'),
		$luzTop = $('.luz-top'),
		$vakka = $('.vakka'),
		$placa = $('.placa'),
		$grama = $('.grama'),
		$homeText = $('.home-text'),
		$placaSombra = $('.placa-sombra'),
		$arrowBottom = $('.arrow-bottom'),
		$contentMoscas = $('.content-moscas'),
		$navigation = $('.navigation'),
		srcVakka = $vakka.children().attr('src').replace('blur_vaca', 'vakka'),
		srcPlaca = $placa.children().attr('src').replace('blur_placa', 'placa'),
		srcGrama = $grama.children().attr('src').replace('blur_grama', 'grama'),
		srcVakkaBlur = $vakka.children().attr('src').replace('vakka', 'blur_vaca'),
		srcPlacaBlur = $placa.children().attr('src').replace('placa', 'blur_placa'),
		srcGramaBlur = $grama.children().attr('src').replace('grama', 'blur_grama'),
		elemPos = $('#about').position().top;

	if (userAgent > 0 || userAgent !== null) {
		$('html').niceScroll();
	}

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});

	$(window).scroll(function () {
		var scrollPos = $(document).scrollTop();

		if (scrollPos >= (elemPos-50)) {
			$navigation.find('a').eq(0).addClass('active');
		} else {
			$navigation.find('a').eq(0).removeClass('active');
		}

		if ($(window).width() > 480) {
			if ($(this).scrollTop() > 0) {
				$luz.addClass('active');
				$luzTop.addClass('active');

				$vakka.children('img').attr('src', srcVakkaBlur);
				$placa.children('img').attr('src', srcPlacaBlur);
				$grama.children('img').attr('src', srcGramaBlur);
			}
			if ($(this).scrollTop() > 20) {
				$vakka.addClass('active');
				$grama.addClass('active');
				$placa.addClass('active');
				$homeText.addClass('active');
				$placaSombra.addClass('active');
				$arrowBottom.addClass('active');
				$contentMoscas.addClass('active');
			}
			if ($(this).scrollTop() < 20) {
				$vakka.children('img').attr('src', srcVakka);
				$grama.children('img').attr('src', srcGrama);
				$placa.children('img').attr('src', srcPlaca);

				$luz.removeClass('active');
				$vakka.removeClass('active');
				$grama.removeClass('active');
				$placa.removeClass('active');
				$luzTop.removeClass('active');
				$homeText.removeClass('active');
				$placaSombra.removeClass('active');
				$arrowBottom.removeClass('active');
				$contentMoscas.removeClass('active');
			}
			if ($(this).scrollTop() > heightScreen) {
				$luzTop.removeClass('active');
			}
		}
		if ($(this).scrollTop() > heightScreen - 50) {
			$logo.addClass('active');
		}
		if ($(this).scrollTop() < heightScreen - 50) {
			$logo.removeClass('active');
		}
	});

	$navigation.on('click', function () {
		$(this).children('a').eq(0).toggleClass('active');
	});
});