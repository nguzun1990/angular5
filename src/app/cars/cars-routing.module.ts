import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const CarsRoutes: Routes = [
  { path: 'cars',  component: ListComponent },
  { path: 'cars/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(CarsRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {}