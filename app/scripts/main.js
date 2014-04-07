var heightScreen = $(window).height();

$(window).scroll(function () {
	if ($(this).scrollTop() > (heightScreen/2)) {
		$('.logo').addClass('active');
	}
	if ($(this).scrollTop() < ((heightScreen/2)+(heightScreen/3))) {
		$('.logo').removeClass('active');
	}
});