import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { CarsModule } from './cars/cars.module';
import { ObservablesComponent } from './observables/observables.component'


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CarsModule
  ],
  declarations: [AppComponent, ObservablesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
