import { Component, OnInit } from '@angular/core';
import { Car } from './../../models/car.model';
import { CarsService } from './../../cars.service';


@Component({
    selector: 'list-component',
    templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {

    public cars: Car[];

    public selectedCar: Car;

    constructor(private service: CarsService) {}

    ngOnInit() {
        this.service.getCars()
            .subscribe((cars: Car[]) => {
                this.cars = cars
                this.selectedCar = this.cars[0];
            },
        err => console.log(err));

    }

    public onSelectCar(car: Car) {
        this.selectedCar = car;
    }
}
