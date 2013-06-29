
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.app1 = function(req, res){
  res.render('app1', { title: 'Express' });
};