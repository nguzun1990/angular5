import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { SharedModule } from './../shared/shared.module'

import { CarMenuComponent } from './car-menu/car-menu.component'
import { DetailComponent } from './detail/detail.component'

import { Cm3ToLiters } from './cm3ToLiters.pipes'

import { CarsRoutingModule } from './cars.routing';
import { ListComponent } from './list/list.component';

import { CarsService } from './cars.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [HttpModule, FormsModule,   CommonModule, CarsRoutingModule, SharedModule],
  declarations: [CarMenuComponent, DetailComponent, Cm3ToLiters, ListComponent, EditComponent],
  exports: [CarMenuComponent],
  providers: [CarsService]
})
export class CarsModule {}