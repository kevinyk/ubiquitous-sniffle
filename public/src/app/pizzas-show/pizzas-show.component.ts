import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from  './../data.service';

@Component({
  selector: 'app-pizzas-show',
  templateUrl: './pizzas-show.component.html',
  styleUrls: ['./pizzas-show.component.css']
})
export class PizzasShowComponent implements OnInit {
  pizza: any={};
  constructor(private _dataService: DataService, private _route: ActivatedRoute) { }

  ngOnInit() {
  	this._route.paramMap.subscribe((params)=>{
  		console.log(params.get('id'));
  		var id = params.get('id');
  		this._dataService.singlePizzaData.subscribe((pizzaFromService:any)=>{
  			this.pizza = pizzaFromService;
  		})
  		this._dataService.getOnePizza(id);
  	})
  }

}
