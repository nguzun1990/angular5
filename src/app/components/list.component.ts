import { Component, OnInit } from '@angular/core';
import { CARS } from '../data/data';
import { Car } from '../models/car.model';


@Component({
    selector: 'list-component',
    templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {

    public cars: Array<Car>;

    ngOnInit() {
        this.cars = CARS;
    }
}
