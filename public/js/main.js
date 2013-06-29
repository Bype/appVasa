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
			var pos = 310;
			$('.vasa').each(function(idx, elt) {
				var angle = Math.random() * Math.PI * 2;
				$(elt).css({
					top : Math.cos(angle) * $(document).width(),
					left : Math.sin(angle) * $(document).width() * 1.2,
				});
				$('#vasa').show();
				$(elt).animate({
					left : pos,
					top : '55%',

				},Math.floor(200 + Math.random() * 1000));
				pos += $(elt).width();
				if (idx == 8)
					pos += 40;
			});

		});

	});
});

