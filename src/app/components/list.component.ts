import { Component, OnInit } from '@angular/core';
import { CARS } from '../data/data';
import { Car } from '../models/car.model';

@Component({
    selector: 'list-component',
    templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {

    public cars: Array<Car>;

    public selectedCar: Car;

    ngOnInit() {
        this.cars = CARS;
        this.selectedCar = this.cars[0];
    }

    public onSelectCar(car: Car) {
        this.selectedCar = car;

    }
}
