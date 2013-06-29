define([], function() {
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

		var v = document.querySelector('video');
		v.src = window.URL.createObjectURL(localMediaStream);
		v.addEventListener('play', function() {
			// Ready to go. Do some stuff.

			$('#can').fadeIn(1000, function() {
			});

			$('#back').animate({
				bottom : '3%'
			}, 1000);
			$('#logo').animate({
				bottom : '3%'
			}, 1000);
		});

		var hotpx = [{
			x : -50 + 640 / 4,
			y : 50 + 480 / 3
		}, {
			x : 2 * 640 / 4,
			y : 480 / 3 - 70
		}, {
			x : 50 + 3 * 640 / 4,
			y : 50 + 480 / 3
		}, {
			x : 640 / 3,
			y : 70 + 2 * 480 / 3
		}, {
			x : 2 * 640 / 3,
			y : 70 + 2 * 480 / 3
		}]
		var nbval = 25;
		var colorM = [[], [], [], [], []];
		for (var idxp = 0; idxp < 5; idxp++)
			for (var idx = 0; idx < nbval; idx++)
				colorM[idxp][idx] = [255, 255, 255, 0];
		var i = 0;

		function draw() {
			var c = document.getElementById('can').getContext('2d');

			i = (i + 1) % nbval;
			c.drawImage(v, 0, 0);
			c.lineWidth = 2;
			for (p in hotpx) {
				var px = hotpx[p];
				var imgd = c.getImageData(px.x, px.y, 1, 1);
				colorM[p][i][0] = imgd.data[0];
				colorM[p][i][1] = imgd.data[1];
				colorM[p][i][2] = imgd.data[2];
				var r = 0, g = 0, b = 0;
				for (var idx = 0; idx < nbval; idx++) {
					r += colorM[p][idx][0];
					g += colorM[p][idx][1];
					b += colorM[p][idx][2];
				}
				c.fillStyle = 'rgb(' + Math.floor(r / nbval) + ',' + Math.floor(g / nbval) + ',' + Math.floor(b / nbval) + ')';
				c.fillRect(px.x - 16, px.y - 16, 32, 32);
				c.strokeStyle = "#000";
				c.strokeRect(px.x - 16, px.y - 16, 32, 32);

				$('.color' + p).css({
					'background-color' : 'rgb(' + Math.floor(r / nbval) + ',' + Math.floor(g / nbval) + ',' + Math.floor(b / nbval) + ')'
				});
			}

			window.requestAnimationFrame(draw);
		}

		draw();
	}, onFailSoHard);
});
