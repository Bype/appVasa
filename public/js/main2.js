requirejs.config({
	paths : {
		underscore : 'lib/underscore',
		bootstrap : 'lib/bootstrap',
		cv : 'lib/cv',
		aruco : 'lib/aruco'
	},
	shim : {
		'underscore' : {
			exports : '_'
		}
	}
});

require(['jquery', 'underscore', 'bootstrap', 'lib/ga', 'cv', 'aruco'], function($, _) {
	$(function() {
		require(['drawAR'], function(drawar) {
			var onFailSoHard = function(e) {
				console.log('Reeeejected!', e);
			};

			function hasGetUserMedia() {
				// Note: Opera is unprefixed.
				return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
			}

			if (hasGetUserMedia()) {
				// Good to go!
			} else {
				alert('getUserMedia() is not supported in your browser');
			}

			navigator.webkitGetUserMedia({
				video : true,
				audio : false
			}, function(localMediaStream) {

				var detector = new AR.Detector();
				var v = document.querySelector('video');
				v.src = window.URL.createObjectURL(localMediaStream);
				v.addEventListener('play', function() {
					// Ready to go. Do some stuff.
					$('#can').css({
						width:$(document).width(),
						height:$(document).width()*3/4,
						'z-index':-1000
					});
					$('#can').fadeIn(1000, function() {
					});

					$('#back').animate({
						bottom : '3%'
					}, 1000);
					$('#logo').animate({
						bottom : '3%'
					}, 1000);
				});

				function draw() {
					var canvas = document.getElementById('can')
					var c = document.getElementById('can').getContext('2d');
					c.drawImage(v, 0, 0);
					imageData = c.getImageData(0, 0, canvas.width, canvas.height);
					var markers = detector.detect(imageData);
					drawar.draw(c, markers);
					//drawar.debug(c, markers);
					window.requestAnimationFrame(draw);
				}

				draw();
			}, onFailSoHard);
		});
	});
});

