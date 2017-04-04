import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module'
import { SharedModule } from './shared/shared.module'
import { NavbarModule } from './navbar/navbar.module'

import { AppRoutingModule } from './app-routing.module';
import { CarsModule } from './cars/cars.module'


@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    DashboardModule,
    SharedModule,
    CarsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
