/**
 *    Portfolio Vakka
 *
 *    @author Rafael Antonio Lucio <rafaelantoniolucio@gmail.com>
 */
$(function () {
	'use strict';

	var heightScreen = $(window).height(),
		documentHeight = $(document).height(),
		userAgent = navigator.userAgent.match('Chrome'),
		$homeId = $('#home'),
		$logo = $('.logo'),
		$navigation = $('.navigation'),
		$placaSombra = $('.placa-sombra');

	$('html').niceScroll({
		cursoropacitymin: 1,
		cursorwidth: 10
	});

	$(window).stellar({
		verticalScrolling: $homeId
	}).scroll(function () {
		heightScreen = $(window).height();
		documentHeight = $(document).height();
		var scrollPos = documentHeight - (heightScreen + 50);

		if ($(this).scrollTop() >= scrollPos) {
			$navigation.find('a').eq(0).addClass('active');
			$logo.addClass('inside-abooute');
		} else {
			$navigation.find('a').eq(0).removeClass('active');
			$logo.removeClass('inside-abooute');
		}

		if ($(this).scrollTop() > 70) {
			$placaSombra.addClass('active');
		}
		if ($(this).scrollTop() < 70) {
			$placaSombra.removeClass('active');
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

	var scrollTo = function ($element, position) {
		$element.on('click', function (ev) {
			ev.preventDefault();
			$('html, body').animate({scrollTop:position}, 2000);
		});
	};

	scrollTo($logo, 0);
	scrollTo($('.navigation-link-home'), 0);
	scrollTo($('.navigation-link-about'), $(document).height());

});