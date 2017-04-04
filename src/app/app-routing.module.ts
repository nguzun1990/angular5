import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ListComponent as CarsListComponent } from './cars/list/list.component';
import { DetailComponent as CarsDetailComponent } from './cars/detail/detail.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';

const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cars',
    component: CarsListComponent,
    children: [
      {
        path: ":id",
        component: CarsDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}