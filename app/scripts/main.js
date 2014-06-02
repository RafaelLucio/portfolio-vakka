/**
 *    Portfolio Vakka
 *
 *    @author Rafael Antonio Lucio <rafaelantoniolucio@gmail.com>
 */
$(function () {
	'use strict';

	var heightScreen = $(window).height(),
		widthScreen = $(window).width(),
		documentHeight = $(document).height(),
		$homeId = $('#home'),
		$logo = $('.logo'),
		$jobs = $('.jobs'),
		$navigation = $('.navigation'),
		$placaSombra = $('.placa-sombra'),
		$arrowBottom = $('.arrow-bottom');

	$('html').niceScroll({
		cursoropacitymin: 1,
		cursorwidth: 10
	});

	if (heightScreen > 480 && widthScreen > 480) {
		$(window).stellar({
			horizontalScrolling: false,
			verticalScrolling: $homeId
		});
	}

	$jobs.css({marginTop: heightScreen+100});

	$(window).scroll(function () {
		heightScreen = $(window).height();
		documentHeight = $(document).height();
		var scrollPos = documentHeight - (heightScreen + 50);

		if ($(this).scrollTop() >= scrollPos) {
			$navigation.find('a').eq(0).addClass('active');
			$logo.addClass('inside-about');
		} else {
			$navigation.find('a').eq(0).removeClass('active');
			$logo.removeClass('inside-about');
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
			$('html, body').animate({
				scrollTop: position
			}, 2000);
		});
	};

	scrollTo($logo, 0);
	scrollTo($arrowBottom, heightScreen);

	window.scrollTo(0,0);
});