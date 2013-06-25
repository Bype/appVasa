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

		var hotpx = [{
			x : 640 / 4,
			y : 480 / 3
		}, {
			x : 2 * 640 / 4,
			y : 480 / 3
		}, {
			x : 3 * 640 / 4,
			y : 480 / 3
		}, {
			x : 640 / 3,
			y : 2 * 480 / 3
		}, {
			x : 2 * 640 / 3,
			y : 2 * 480 / 3
		}]
		function draw() {
			var c = document.getElementById('can').getContext('2d');
			c.drawImage(v, 0, 0);
			c.strokeStyle = '#f00';
			for (p in hotpx) {
				var px = hotpx[p];
				c.strokeRect(px.x - 8, px.y - 8, 16, 16);
				var imgd = c.getImageData(px.x, px.y, 1, 1);
				var pix = imgd.data;
				$('.color' + p).css({
					'background-color' : 'rgb(' + pix[0] + ',' + pix[1] + ',' + pix[2] + ')'
				});
			}

			window.requestAnimationFrame(draw);
		}

		draw();
	}, onFailSoHard);
});
