import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { Car } from './../car.model';
import { LikeComponent } from './../../shared/like/like.component'
import { CarsService } from './../cars.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/debounce';

@Component({
    selector: 'detail-component',
    templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {

    // @Input('car') car: Car;
    protected car: Car;

    constructor(
        protected service: CarsService,
        protected route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.service.getCar(+params['id']))
            .subscribe(car => {
                this.car = car;
            })
    }

    public addLikeToCar(event: any) {
        if (!this.car.liked) {
            this.car.likes++;
            this.car.liked = true;
        }        
    }
}
