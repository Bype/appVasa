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

		var colorM = [[], [], [], [], []];
		for (var idxp = 0; idxp < 5; idxp++)
			for (var idx = 0; idx < 10; idx++)
				colorM[idxp][idx] = [255, 255, 255, 0];
		var i = 0;
		function draw() {
			i = (i + 1) % 10;
			var c = document.getElementById('can').getContext('2d');
			c.drawImage(v, 0, 0);
			c.strokeStyle = '#fff';
			c.lineWidth = 3;
			for (p in hotpx) {
				var px = hotpx[p];
				c.strokeRect(px.x - 16, px.y - 16, 32, 32);
				var imgd = c.getImageData(px.x, px.y, 1, 1);
				colorM[p][i][0] = imgd.data[0];
				colorM[p][i][1] = imgd.data[1];
				colorM[p][i][2] = imgd.data[2];
				var r = 0, g = 0, b = 0;
				for (var idx = 0; idx < 10; idx++) {
					r += colorM[p][idx][0];
					g += colorM[p][idx][1];
					b += colorM[p][idx][2];
				}
				$('.color' + p).css({
					'background-color' : 'rgb(' + Math.floor(r / 10) + ',' + Math.floor(g / 10) + ',' + Math.floor(b / 10) + ')'
				});
			}

			window.requestAnimationFrame(draw);
		}

		draw();
	}, onFailSoHard);
});
