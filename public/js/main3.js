requirejs.config({
	paths : {
		jqui : "lib/jquery-ui",
	}
});

require(["jquery", "jqui"], function($) {

	function buildACube(id, leftpos, toppos) {
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

	function changeColor(lfc, tfc, rfc) {
		$('.lf').animate({
			"background-color" : lfc,
		});
		$('.tf').animate({
			"background-color" : tfc,
		});
		$('.rf').animate({
			"background-color" : rfc,
		});
	}


	$('#print').click(function() {
		var col = new Array();
		$(".moved").each(function(idx, elt) {
			var sq = {};
			var $elt = $(elt);
			if ($elt.hasClass('lf'))
				sq.type = 'lf';
			if ($elt.hasClass('tf'))
				sq.type = 'tf';
			if ($elt.hasClass('rf'))
				sq.type = 'rf';
			if ($elt.hasClass('front'))
				sq.type += ' front';
			sq.style = $elt.attr("style");
			col.push(sq);
		});
		$.post('/composave', {
			sqs : JSON.stringify(col)
		}, function(data) {
			$('#url').html('http://v.hexalab.org/apn/' + data.name);
			$('#url').fadeIn();
			setTimeout(function() {
				$('#url').fadeOut();
			}, 10000);
		});

	});

	$('#origcolor').click(function() {
		changeColor("#44e", "#ee4", "#e44");
	});

	$('#bwcolor').click(function() {
		changeColor("#444", "#eee", "#aaa");
	});

	$('#othercolor').click(function() {
		changeColor("#ffb000", "#ff00a8", "#00ff9b");
	});

	var idx = 0;
	var cols = ($(document).width() / 128) - 3;
	var rows = ($(document).height() / 100) - 4;

	for (var i = 0; i < cols; i++)
		for (var j = 0; j < rows; j++) {
			if (j % 2)
				buildACube("cube" + idx, 128 + i * 128, 200 + j * 100);
			else
				buildACube("cube" + idx, 192 + i * 128, 200 + j * 100);

			idx++;
		}

	$('.sq').draggable({
		cursorAt : {
			left : 32,
			top : 32
		},
		start : function(event, ui) {
			ui.helper.animate({
				opacity : 1
			}, 2000);
			ui.helper.addClass("moved");
		}
	});
	$('.sq').click(function() {
		$(this).toggleClass('front');
	});
	setTimeout(function() {
		$('.lf').each(function(idx, elt) {
			setTimeout(function() {
				$(elt).animate({
					top : (-32 * Math.random()) + 16 + $(document).height() - 100,
					left : (-32 * Math.random()) + 16 + $(document).width() / 4,
					opacity : .2
				}, 2000);
			}, 80 * idx);
		});
		$('.tf').each(function(idx, elt) {
			setTimeout(function() {
				$(elt).animate({
					top : (-32 * Math.random()) + 16 + $(document).height() - 100,
					left : (-32 * Math.random()) + 16 + $(document).width() / 2,
					opacity : .2
				}, 2000);
			}, 80 * idx);
		});
		$('.rf').each(function(idx, elt) {
			setTimeout(function() {
				$(elt).animate({
					top : (-32 * Math.random()) + 16 + $(document).height() - 100,
					left : (-32 * Math.random()) + 16 + 3 * $(document).width() / 4,
					opacity : .2
				}, 2000);
			}, 80 * idx);
		});
		$('.sqe').animate({
			opacity : 0
		}, 30000);
	}, 1000);
});

