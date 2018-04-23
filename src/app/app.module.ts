import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module'
import { SharedModule } from './shared/shared.module'

import { AppRoutingModule } from './app-routing.module';
import { CarsModule } from './cars/cars.module'


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardModule,
    SharedModule,
    CarsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
