import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { FeedsComponent } from './shared/feeds/feeds.component';

const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { pageTitle: "Homepage" }
  },
  {
    path: 'feeds',
    component: FeedsComponent,
    outlet: 'feeds'
  },
  // { 
  //   path: 'cars', 
  //   loadChildren: 'app/cars/cars.module#CarsModule'
  // },
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
export class AppRoutingModule { }