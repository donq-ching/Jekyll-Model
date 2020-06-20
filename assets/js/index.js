$(document).ready(function() {
			$('#column').hide();
			$(window).scroll(function() {
				if($(this).scrollTop() < 650) {
					$("#daohang").addClass("daohang");
				} else {
					$("#daohang").removeClass("daohang");
				}
				if($(this).scrollTop() > 200) {
					$('#column').fadeIn();
				} else {
					$('#column').fadeOut();
				}
			});
			$('#column').click(function() {
				$('html ,body').animate({
					scrollTop: 0
				}, 300);
				return false;
			});
		});