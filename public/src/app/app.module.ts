import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PizzasNewComponent } from './pizzas-new/pizzas-new.component';
import { PizzasListComponent } from './pizzas-list/pizzas-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { PizzasShowComponent } from './pizzas-show/pizzas-show.component';
import { PizzasMainComponent } from './pizzas-main/pizzas-main.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzasNewComponent,
    PizzasListComponent,
    PizzasShowComponent,
    PizzasMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
