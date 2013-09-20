requirejs.config({
	paths : {
		jqui : "lib/jquery-ui"
	}
});

require(["jquery", "jqui"], function($) {

	function buildACube(id, toppos, leftpos) {
		var $cube = $(document.createElement('div')).attr("id", id);

		var $lfe = $(document.createElement('div')).addClass("sqe lfe");
		var $rfe = $(document.createElement('div')).addClass("sqe rfe");
		var $tfe = $(document.createElement('div')).addClass("sqe tfe");
		$lfe.css({
			top : toppos,
			left : leftpos
		});
		$rfe.css({
			top : toppos,
			left : leftpos + 64
		});
		$tfe.css({
			top : toppos - 52,
			left : leftpos + 32
		});
		$cube.append($lfe).append($tfe).append($rfe);

		var $lf = $(document.createElement('div')).addClass("sq lf");
		var $rf = $(document.createElement('div')).addClass("sq rf");
		var $tf = $(document.createElement('div')).addClass("sq tf");
		$lf.css({
			top : toppos,
			left : leftpos
		});
		$rf.css({
			top : toppos,
			left : leftpos + 64
		});
		$tf.css({
			top : toppos - 50,
			left : leftpos + 32
		});
		$cube.append($lf).append($tf).append($rf);

		$('body').append($cube);
	}

	buildACube("cube1", 300, 300);
	buildACube("cube2", 300, 428);
	buildACube("cube3", 300, 556);
	buildACube("cube3", 200, 492);

	$('.sq').draggable({
		cursorAt : {
			left : 32,
			top : 32
		},
		start : function(event, ui) {
			ui.helper.animate({
				opacity : 1
			});
		}
	});
	setTimeout(function() {
		$('.sq').each(function(idx, elt) {
			$(elt).animate({
				top : (-32 * Math.random()) + 16 + $(document).height() - 100,
				left : (-32 * Math.random()) + 16 + $(document).width() / 4 + idx * $(document).width() / 24,
				opacity : .5
			},2000);
		})
	}, 1000);

});

