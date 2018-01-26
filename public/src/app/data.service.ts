import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  pizzasData: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) { 
  	this.getAllPizzas();
  }
  getAllPizzas(){
  	console.log('getAllPizzas');
  	this._http.get('/api/pizzas')
  	.subscribe((responseData:any)=>{
  		this.pizzasData.next(responseData);
  	})
  }
  
  createPizza(pizza){
  	console.log('createPizza', pizza)
  	this._http.post('/api/pizzas', pizza)
  	.subscribe((data:any)=>{
  		console.log('got a response', data);
  		this.getAllPizzas();
  	})
  }
}
