requirejs.config({
	paths : {
		jqui : "lib/jquery-ui"
	}
});

require(["jquery", "jqui"], function($) {

	function buildACube(id, toppos, leftpos) {
		var $cube = $(document.createElement('div')).attr("id", id);
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

	$('.sq').draggable();

});

