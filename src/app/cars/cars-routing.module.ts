import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const CarsRoutes: Routes = [
  {
    path: "",
    component: ListComponent,
  }
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class CarsRoutingModule {}