requirejs.config({
	paths : {
		underscore : 'lib/underscore',
		backbone : 'lib/backbone',
		bootstrap : 'lib/bootstrap'
	},
	shim : {
		'backbone' : {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps : ['underscore', 'jquery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports : 'Backbone'
		},
		'underscore' : {
			exports : '_'
		}
	}
});

require(['backbone','bootstrap'], function(Backbone) {
	$(function() {

	});
});
