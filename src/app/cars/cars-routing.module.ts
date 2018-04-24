import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { CanActivateCarsRoute } from './can-activate-cars-route.guard';
import { CarDetailsResolver } from './car-details.resolver';

const CarsRoutes: Routes = [
  { path: 'cars',  component: ListComponent, canActivate: [CanActivateCarsRoute] children: [
    { path: ':id', resolve: {car: CarDetailsResolver}, component: DetailComponent },
    { path: ':id/edit', component: EditComponent }
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(CarsRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {}