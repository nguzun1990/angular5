import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Car } from './../../models/car.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { CarsService } from 'app/cars/cars.service';

@Component({
    selector: 'detail-component',
    templateUrl: 'detail.component.html'
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {

    car: Car;

    constructor(
        private activatedRoute: ActivatedRoute,
        private service: CarsService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap
            .switchMap((params: ParamMap) => this.service.getCar(+params.get('id')))
            .subscribe(car => 
                {
                    debugger;
                    this.car = car
                });
    }

    public addLikeToCar(event: any) {
        if (!this.car.liked) {
            this.car.likes++;
            this.car.liked = true;
        }        
    }

}
