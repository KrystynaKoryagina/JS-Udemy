$(document).ready(function() {

		$('.main_btna, .main_btn, .main_nav a[href="#shedule"]').on('click', function() {
			$(document.body).css('overflow','hidden');
			$('.overlay').fadeIn('slow');
			$('.modal').slideDown('slow');
		});

		$('.modal .close').on('click', function() {
			$(document.body).css('overflow','');
			$('.overlay').fadeOut('slow');
			$('.modal').slideUp('slow');
		});
});