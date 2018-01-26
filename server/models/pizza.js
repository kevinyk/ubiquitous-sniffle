var mongoose = require('mongoose');
var PizzaSchema = new mongoose.Schema({
	price: {type:Number},
	toppings: {type: String}
})

mongoose.model('Pizza', PizzaSchema);