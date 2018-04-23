import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { CarsModule } from './cars/cars.module'


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CarsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
