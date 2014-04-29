$(function () {
	'use strict';

	var heightScreen = $(window).height();

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.luz').addClass('active');
		}
		if ($(this).scrollTop() > 20) {
			$('.vakka').addClass('active');
			$('.grama').addClass('active');
			$('.placa').addClass('active');
			$('.luz-top').addClass('active');
			$('.home-text').addClass('active');
			$('.arrow-bottom').addClass('active');
			$('.content-moscas').addClass('active');
		}
		if ($(this).scrollTop() < 20) {
			$('.luz').removeClass('active');
			$('.vakka').removeClass('active');
			$('.grama').removeClass('active');
			$('.placa').removeClass('active');
			$('.luz-top').removeClass('active');
			$('.home-text').removeClass('active');
			$('.arrow-bottom').removeClass('active');
			$('.content-moscas').removeClass('active');
		}
		if ($(this).scrollTop() > heightScreen) {
			$('.luz-top').removeClass('active');
		}
		if ($(this).scrollTop() > heightScreen-35) {
			$('.logo').addClass('active');
		}
		if ($(this).scrollTop() < heightScreen-35) {
			$('.logo').removeClass('active');
		}
	});

	$('.navigation').on('click', function() {
		$(this).children('a').eq(0).toggleClass('active');
	});
});