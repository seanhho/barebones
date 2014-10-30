module.exports = function(app){
	app.route('/')
		.get(require('./controllers/rootController.js').get);
}