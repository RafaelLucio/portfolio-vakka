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
			$('.home-text').addClass('active');
			$('.arrow-bottom').addClass('active');
		}
		if ($(this).scrollTop() < 20) {
			$('.luz').removeClass('active');
			$('.vakka').removeClass('active');
			$('.grama').removeClass('active');
			$('.placa').removeClass('active');
			$('.home-text').removeClass('active');
			$('.arrow-bottom').removeClass('active');
		}
		if ($(this).scrollTop() > heightScreen-100) {
			$('.logo').addClass('active');
		}
		if ($(this).scrollTop() < heightScreen-100) {
			$('.logo').removeClass('active');
		}
	});
});