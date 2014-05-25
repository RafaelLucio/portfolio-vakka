/**
 *    Portfolio Vakka
 *
 *    @author Rafael Antonio Lucio <rafaelantoniolucio@gmail.com>
 */
$(function () {
	'use strict';

	var heightScreen = $(window).height(),
		userAgent = navigator.userAgent.match('Chrome'),
		$homeId = $('#home'),
		$logo = $('.logo'),
		$luz = $('.luz'),
		$luzTop = $('.luz-top'),
		$placaSombra = $('.placa-sombra'),
		$navigation = $('.navigation'),
		elemPos = $('#about').position().top;

	if (userAgent > 0 || userAgent !== null) {
		$('html').niceScroll();
	}

	$(window).stellar({
		verticalScrolling: $homeId
	});

	$(window).scroll(function () {
		var scrollPos = $(document).scrollTop();

		if (scrollPos >= (elemPos - 50)) {
			$navigation.find('a').eq(0).addClass('active');
		} else {
			$navigation.find('a').eq(0).removeClass('active');
		}

		if ($(window).width() > 480) {
			if ($(this).scrollTop() > 0) {
				$luz.addClass('active');
				$luzTop.addClass('active');
			}
			if ($(this).scrollTop() > 20) {
				$placaSombra.addClass('active');
			}
			if ($(this).scrollTop() < 20) {
				$placaSombra.removeClass('active');
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