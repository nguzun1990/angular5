import { Component, OnInit } from '@angular/core';
import { CARS } from './../../../data/data';
import { Car } from './../../car.model';
import { CarsService } from './../../cars.service';

// import {Observable} from 'rxjs/Observable'

@Component({
    selector: 'menu-component',
    templateUrl: 'menu.component.html',
})
export class MenuComponent implements OnInit {

    public cars: any;

    public selectedCar: Car;

    constructor(private carsService: CarsService) {

    }

    ngOnInit() {
        // this.cars = this.carsService.getCars().then;
        // this.selectedCar = this.cars[0];
    }

    public onSelectCar(car: Car) {
        this.selectedCar = car;
    }
}
