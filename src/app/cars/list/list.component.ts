import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from './../car.model';
import { CarsService } from './../cars.service';

@Component({
    selector: 'list-component',
    templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {

    public cars: Array<Car>;
    public selectedCar: Car;

    constructor(
        protected service: CarsService,
        protected router: Router
    ) {}

    ngOnInit() {
        this.cars = this.service.getCars();
        this.selectedCar = this.cars[0];
    }

    public onSelectCar(car: Car) {
        this.router.navigate(['cars', car.id]);
        // this.selectedCar = car;

    }
}
