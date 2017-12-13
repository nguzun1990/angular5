import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { CarsRoutingModule } from './cars-routing.module'; 

import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { Cm3ToLiters } from './pipes/cm3ToLiters.pipes';

import { CarsService } from './cars.service';
import { EditComponent } from 'app/cars/components/edit/edit.component';

@NgModule({
    imports: [ CommonModule, HttpClientModule, CarsRoutingModule, SharedModule ],
    declarations: [ ListComponent, DetailComponent, Cm3ToLiters, EditComponent],
    exports: [ ListComponent],
    providers: [ CarsService ]
})
export class CarsModule {}