import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ListComponent as CarsListComponent } from './components/list/list.component';
import { DetailComponent as CarDetailsComponent, DetailComponent } from './components/detail/detail.component';

const routes: Route[] = [{
    path: 'cars',
    component: CarsListComponent,
    children: [
        {
            // path: '',
            // children: [
            //     {
                    path: ':id',
                    component: CarDetailsComponent
                // }
            // ]
        }
    ]
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarsRoutingModule {}