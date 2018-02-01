var mongoose = require('mongoose');
// WHOOPS
var Pizza = mongoose.model('Pizza');
module.exports = {
	index: function(req,res){
		Pizza.find({},function(err, allPizzas){
			if(err){
				console.log('something blew up');
				res.json(err);
			}else{
				res.json(allPizzas);
			}
		})
	},
	create: function(req,res){
		var newPizza = new Pizza(req.body);
		newPizza.save(function(err){
			if(err){
				console.log('something went wrong');
				res.json(err);
			}else{
				console.log('saved a pizza!');
				// res.json({message:'success'});
				res.json(newPizza);
			}
		})
	},
	show: function(req,res){
		console.log('Pizzas.show');
		Pizza.findOne({_id: req.params.id}, function(err, foundPizza){
			if(err){
				console.log('something blew up');
				res.json(err);
			}else{
				console.log('fresh from the oven');
				res.json(foundPizza);
			}
		})
	}













}