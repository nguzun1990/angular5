import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from './../shared/shared.module';

import { CarsService } from './cars.service';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { Cm3ToLiters } from './cm3ToLiters.pipes';


@NgModule({
  imports: [CommonModule, SharedModule, CarsRoutingModule],
  declarations: [ListComponent, DetailComponent, Cm3ToLiters],
  exports: [ListComponent],
  providers: [CarsService]

})
export class CarsModule {}