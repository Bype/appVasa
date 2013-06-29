define([], function() {

	var radius = $(document).height() * .75;
	$('#circle01').css({
		top : 0,
		left : 0,
		width : radius,
		height : radius,
		"border-radius" : radius
	});
	$('.circle').not('#circle01').each(function(idx) {
		radius = Math.floor((75 + (Math.random() * 10)) / 100 * radius);
		$(this).css({
			top : 6 + Math.floor(Math.random() * 10) - 5 + '%',
			left : Math.floor(Math.random() * 10) - 5 + '%',
			"border-radius" : radius,
			width : radius,
			height : radius
		});

	});
	$('.circle').each(function(idx, elt) {
		$(elt).fadeIn(100 * (idx + 1));
	});

});

