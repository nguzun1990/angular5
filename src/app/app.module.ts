import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { CarsModule } from './cars/cars.module'


@NgModule({
  imports:      [ 
    BrowserModule,
    SharedModule,
    CarsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
