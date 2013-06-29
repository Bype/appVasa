requirejs.config({
	paths : {
	}
});

require(["jquery"], function($) {
	$(function() {
		var botx = $('#bot').position().left;
		$('#bot').css({
			left : -$(document).width()
		});
		var topx = $('#top').position().left;
		$('#top').css({
			left : $(document).width()
		})
		$('#logo').fadeIn(2000);
		$('#bot').css({
			opacity : 1
		});
		$('#bot').animate({
			opacity : 1,
			left : botx
		}, 500);
		$('#top').css({
			opacity : 1
		});
		$('#top').animate({
			left : topx
		}, 500, function() {
			$("#a1").animate({
				top : "20%"
			});
			$("#a2").animate({
				top : "45%"
			});
			$("#a3").animate({
				top : "70%"
			});
			var t = 'FONDATION VASARELY';
			$('#vasa').hide();
			for (var i = 0; i < t.length; i++) {
				$('#vasa').append('<p class="vasa">' + t[i] + '</p>');
			}
			var factor = 1;
			var fonda = function() {
				if (factor < 3)
					factor *= 1.2;
				var pos = 80;
				$('.vasa').each(function(idx, elt) {
					var angle = Math.random() * Math.PI * 2;
					$(elt).animate({
						top : Math.cos(angle) * $(document).width(),
						left : Math.sin(angle) * $(document).width()*1.1,
					}, 1000 * factor, function() {
						$('#vasa').show();

						$(elt).animate({
							left : pos,
							top : '80%',

						}, factor * Math.floor(2000 + Math.random() * 1000));
						pos += .9 * $(elt).width();
						if (idx == 8)
							pos += 40;
					});
				});
			}
			fonda();
			setInterval(fonda, 10000);

		});
	});
});

