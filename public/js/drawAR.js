define(['lib/pixastic.custom'], function() {
	var imageObj = [];
	var imgLocal = [];
	var hue = 0;
	for (var j = 0; j < 5; j++) {
		var lImg = new Image()

		lImg.onload = function() {
			Pixastic.process(this, "hsl", {
				hue : -180 + (hue * 60),
				saturation : 20,
				lightness :0
			});

			document.body.appendChild(this);
			$(this).attr('id', 't' + hue);
			$(this).addClass('shadowcanvas');
			hue += 1;
		}
		lImg.src = 'img/base3.png';
	}
	return {
		debug : function(c, markers) {
			var corners, corner, i, j;
			c.lineWidth = 1;
			for ( i = 0; i !== markers.length; ++i) {
				corners = markers[i].corners;
				c.strokeStyle = "red";
				c.beginPath();
				for ( j = 0; j !== corners.length; ++j) {
					corner = corners[j];
					c.moveTo(corner.x, corner.y);
					corner = corners[(j + 1) % corners.length];
					c.lineTo(corner.x, corner.y);
				}
				c.stroke();
				c.closePath();
				c.strokeStyle = "green";
				c.strokeRect(corners[0].x - 2, corners[0].y - 2, 4, 4);
			}
		},
		draw : function(c, markers) {
			var corners, corner, i, j;
			for ( i = 0; i !== markers.length; ++i) {
				corners = markers[i].corners;
				var c2 = document.getElementById('t' + i);
				c.drawImage(c2, corners[0].x, corners[0].y, corners[2].x - corners[0].x, corners[2].y - corners[0].y)
			}
		}
	}
});
