import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const CarsRoutes: Routes = [
  { path: 'cars', component: ListComponent, children: [
    { path: ':id', component: DetailComponent },
    { path: ':id/edit', component: EditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(CarsRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {}