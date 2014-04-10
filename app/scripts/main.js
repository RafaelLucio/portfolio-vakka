$(function () {
	var platform = navigator.platform.toLowerCase();
	if (platform.indexOf('windows') != -1 || platform.indexOf('linux') != -1) {
		if (navigator['webkitPersistentStorage']) {
			$.srSmoothscroll();
		}
	}

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});

	var heightScreen = $(window).height();

	var setOverlayToBottom = (function (documentHeight) {
		$('.overlay-bottom').css('top', (documentHeight - heightScreen));
	})($(document).height());

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
		if ($(this).scrollTop() > (heightScreen / 2)) {
			$('.logo').addClass('active');
		}
		if ($(this).scrollTop() < ((heightScreen / 2) + (heightScreen / 3))) {
			$('.logo').removeClass('active');
		}
	});
});