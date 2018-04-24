import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from './../shared/shared.module';

import { CarsService } from './cars.service';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

import { Cm3ToLiters } from './cm3ToLiters.pipes';
import { DetailsOutletComponent } from './details-outlet/details-outlet.component';
import { CarDetailsResolver } from './details-resolver.service';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule, CarsRoutingModule],
  declarations: [ListComponent, DetailComponent, EditComponent, Cm3ToLiters, DetailsOutletComponent],
  exports: [ListComponent],
  providers: [CarsService, CarDetailsResolver]

})
export class CarsModule {}