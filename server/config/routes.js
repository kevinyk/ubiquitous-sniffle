var Pizzas = require('./../controllers/pizzas.js');
module.exports = function(app){
	app.get('/api/pizzas', Pizzas.index);
	app.post('/api/pizzas', Pizzas.create);
}
