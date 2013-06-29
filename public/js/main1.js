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

require(['jquery', 'underscore', 'bootstrap','lib/ga'], function($, _) {
	$(function() {
		require(['circles','webcam'], function(circles,webcam) {

		});
		
	});
});
