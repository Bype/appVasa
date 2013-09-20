/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title : 'Express'
	});
};

exports.app1 = function(req, res) {
	res.render('app1', {
		title : 'Express'
	});
};

exports.app2 = function(req, res) {
	res.render('app2', {
		title : 'Express'
	});
};

exports.app3 = function(req, res) {
	res.render('app3', {
		title : 'Express'
	});
};

exports.marker = function(req, res) {
	var data = {
		t1 : req.params.r[0],
		t2 : req.params.r[1],
		t3 : req.params.r[2],
		t4 : req.params.r[3],
		t5 : req.params.r[4],
	}
	res.render('marker', data);
};
exports.randommarker = function(req, res) {
	var data = {
		t1 : Math.floor(4*Math.random()),
		t2 : Math.floor(4*Math.random()),
		t3 : Math.floor(4*Math.random()),
		t4 : Math.floor(4*Math.random()),
		t5 : Math.floor(4*Math.random()),
	}
	console.log(data);
	res.render('marker', data);
};