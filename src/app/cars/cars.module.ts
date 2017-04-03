import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from './../shared/shared.module'

import { ListComponent } from './list/list.component'
import { DetailComponent } from './detail/detail.component'

import { Cm3ToLiters } from './cm3ToLiters.pipes'


@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ListComponent, DetailComponent, Cm3ToLiters],
  exports: [ListComponent]
})
export class CarsModule {}