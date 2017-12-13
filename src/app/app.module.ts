import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { CarsModule } from './cars/cars.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ListComponent as CarsListComponent } from './cars/components/list/list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Route[] = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'cars',
  component: CarsListComponent
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(routes) ,
    SharedModule,
    HomeModule, 
    CarsModule ],
  declarations: [
                    AppComponent
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
