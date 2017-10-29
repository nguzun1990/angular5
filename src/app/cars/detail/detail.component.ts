import { Component, OnInit, Input } from '@angular/core';
import { Car } from './../car.model';
import { LikeComponent } from './../../shared/like/like.component'

import { Router, ActivatedRoute } from '@angular/router';

import { CarsService } from './../cars.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'detail-component',
    templateUrl: 'detail.component.html',
})
export class DetailComponent {

    // @Input('car') car: Car;
    public car: Car;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: CarsService) {}

    ngOnInit() {
        this.route.paramMap
            .switchMap(params => this.service.getCar(+params.get('id')))
            .subscribe(
                car => this.car = car, 
                err => console.error("BACKEND RETURNED ERROR"), 
                () => console.log("Done")
            );
    }

    navigateToEdit() {
        this.router.navigate([ 'cars', this.car.id, 'edit' ]);
    }
    // public addLikeToCar(event: any) {
    //     if (!this.car.liked) {
    //         this.car.likes++;
    //         this.car.liked = true;
    //     }        
    // }
}
