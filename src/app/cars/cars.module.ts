import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from './../shared/shared.module';

import { CarsService } from './cars.service';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

import { Cm3ToLiters } from './cm3ToLiters.pipes';
import { CanActivateCarsRoute } from './can-activate-cars-route.guard';
import { CarDetailsResolver } from './car-details.resolver';


@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, CarsRoutingModule],
  declarations: [ListComponent, DetailComponent, Cm3ToLiters, EditComponent],
  exports: [ListComponent],
  providers: [CarsService, CanActivateCarsRoute, CarDetailsResolver]

})
export class CarsModule {}