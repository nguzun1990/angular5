import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { HomeModule } from './home/home.module'
import { DashboardComponent } from './home/components/dashboard/dashboard.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: DashboardComponent},
  { path: "cars", loadChildren: "app/cars/cars.module#CarsModule" }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes, { enableTracing: false }), 
    BrowserModule,
    SharedModule,
    // CarsModule,
    HomeModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
