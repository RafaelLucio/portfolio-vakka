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
		$navigation = $('.navigation'),
		elemPos = $('#about').position().top;

	if (userAgent > 0 || userAgent !== null) {
		$('html').niceScroll({
			cursoropacitymin: 1,
			cursorwidth: 10
		});
	}

	$(window).stellar({
		verticalScrolling: $homeId
	}).scroll(function () {
		var scrollPos = $(document).scrollTop();

		if (scrollPos >= (elemPos - 50)) {
			$navigation.find('a').eq(0).addClass('active');
		} else {
			$navigation.find('a').eq(0).removeClass('active');
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