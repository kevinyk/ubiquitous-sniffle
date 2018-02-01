import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzasMainComponent } from './pizzas-main/pizzas-main.component';
import { PizzasShowComponent } from './pizzas-show/pizzas-show.component';

const routes: Routes = [
	{path: '', component: PizzasMainComponent},
	{path: 'pizzas/:id', component: PizzasShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
