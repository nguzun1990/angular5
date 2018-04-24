import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { DetailsOutletComponent } from './details-outlet/details-outlet.component';
import { CanActivateChildGuard } from '../shared/can-activate-child.guard';
import { CarDetailsResolver } from './details-resolver.service';

// import { CanActivateGuard } from './../shared/can-activate.guard'

const CarsRoutes: Routes = [
  { path: 'cars', component: ListComponent, canActivateChild: [CanActivateChildGuard], children: [
    { path: ':id', component: DetailsOutletComponent, resolve: { car: CarDetailsResolver }, children: [
      { path: '', component: DetailComponent, data: {title: "Some title added by me"} },
      { path: 'edit', component: EditComponent }
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(CarsRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {}