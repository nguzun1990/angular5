import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ListComponent as CarsListComponent } from './components/list/list.component';
import { DetailComponent as CarDetailsComponent, DetailComponent } from './components/detail/detail.component';
import { EditComponent } from 'app/cars/components/edit/edit.component';

const routes: Route[] = [{
    path: '',
    component: CarsListComponent,
    children: [
        {
            path: ':id',
            component: CarDetailsComponent
        },
        {
            path: ':id/edit',
            component: EditComponent
        }
    ]
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarsRoutingModule {}