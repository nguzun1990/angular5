import { Component, OnInit } from '@angular/core';
// import { CARS } from './../../data/data';
import { Car } from './../car.model';

import { CarsService } from './../cars.service';
// import { LoggerService } from './../../shared/logger.service';

import 'rxjs/add/operator/map'

@Component({
    selector: 'car-menu-component',
    templateUrl: 'car-menu.component.html',
    providers: [CarsService]
})
export class CarMenuComponent implements OnInit {

    public cars;

    public selectedCar: Car;

    constructor(private carsService: CarsService) {

    }

    ngOnInit() {
        // this.cars = CARS;
        this.carsService.getCars()
            .map(response => response.json())
            .subscribe(cars => {
                this.cars = cars;
                this.selectedCar = this.cars[0]
            });      
        ;
    }

    public onSelectCar(car: Car) {
        this.selectedCar = car;
    }
}
