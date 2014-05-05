/**
 *    Portfolio Vakka
 *
 *    @author Rafael Antonio Lucio <rafaelantoniolucio@gmail.com>
 */

$(function () {
	'use strict';

	var heightScreen = $(window).height();

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});

	$(window).scroll(function () {
		if ($(window).width() > 480) {
			if ($(this).scrollTop() > 0) {
				$('.luz').addClass('active');
				$('.luz-top').addClass('active');

				$('.vakka').children('img').attr('src', 'images/blur_vaca.png');
				$('.placa').children('img').attr('src', 'images/blur_placa.png');
				$('.grama').children('img').attr('src', 'images/blur_grama.png');
			}
			if ($(this).scrollTop() > 20) {
				$('.vakka').addClass('active');
				$('.grama').addClass('active');
				$('.placa').addClass('active');
				$('.home-text').addClass('active');
				$('.placa-sombra').addClass('active');
				$('.arrow-bottom').addClass('active');
				$('.content-moscas').addClass('active');
			}
			if ($(this).scrollTop() < 20) {
				$('.vakka').children('img').attr('src', 'images/vakka.png');
				$('.grama').children('img').attr('src', 'images/grama.png');
				$('.placa').children('img').attr('src', 'images/placa.png');

				$('.luz').removeClass('active');
				$('.vakka').removeClass('active');
				$('.grama').removeClass('active');
				$('.placa').removeClass('active');
				$('.luz-top').removeClass('active');
				$('.home-text').removeClass('active');
				$('.placa-sombra').removeClass('active');
				$('.arrow-bottom').removeClass('active');
				$('.content-moscas').removeClass('active');
			}
			if ($(this).scrollTop() > heightScreen) {
				$('.luz-top').removeClass('active');
			}
		}
		if ($(this).scrollTop() > heightScreen-50) {
			$('.logo').addClass('active');
		}
		if ($(this).scrollTop() < heightScreen-50) {
			$('.logo').removeClass('active');
		}
	});

	$('.navigation').on('click', function() {
		$(this).children('a').eq(0).toggleClass('active');
	});
});