import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-pizzas-new',
  templateUrl: './pizzas-new.component.html',
  styleUrls: ['./pizzas-new.component.css']
})
export class PizzasNewComponent implements OnInit {
  newPizza: any = {toppings:'', price: '0'};
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  submitPizza(){
  	console.log('submitPizza', this.newPizza);
  	this._dataService.createPizza(this.newPizza);
  	this.newPizza = {toppings:'', price: '0'};
  }

}
