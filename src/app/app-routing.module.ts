import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from 'app/core/auth-guard.service';


const routes: Route[] = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'cars',
    loadChildren: 'app/cars/cars.module#CarsModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: '**',
    component: NotFoundComponent
  }];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}