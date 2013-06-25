requirejs.config({
	paths : {
		underscore : 'lib/underscore',
		bootstrap : 'lib/bootstrap'
	},
	shim : {
		'underscore' : {
			exports : '_'
		}
	}
});

require(['jquery', 'underscore', 'bootstrap'], function($, _) {
	$(function() {
		var radius = $(document).height() * .9;
		$('#circle01').css({
			top : '6%',
			left : 0,
			width : radius,
			height : radius,
			"border-radius" : radius
		});

		$('.circle').not('#circle01').each(function() {
			radius = Math.floor((75 + (Math.random() * 10)) / 100 * radius);
			$(this).css({
				top : 6 + Math.floor(Math.random() * 10) - 5 + '%',
				left : Math.floor(Math.random() * 10) - 5 + '%',
				width : radius,
				height : radius,
				"border-radius" : radius
			});
		});
	});
});
