import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';



@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.css']
})
export class PizzasListComponent implements OnInit {
  pizzas: any[]=[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	this._dataService.pizzasData.subscribe((dataFromService: any)=>{

  		this.pizzas = dataFromService;
      console.log(this.pizzas);
  	})
  }

}
