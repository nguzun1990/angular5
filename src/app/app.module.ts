import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { CarsModule } from './cars/cars.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    SharedModule,
    HomeModule, 
    CarsModule,
    AppRoutingModule
   ],
  declarations: [
                    AppComponent
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
