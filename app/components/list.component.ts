import { Component, OnInit } from '@angular/core';

const CARS = [
    "Mercedes B180",
    "Mercedes B200",
    "Mercedes C200",
    "Mercedes E220",
    "Mercedes S180",
    "BMW 520d"
];

@Component({
    selector: 'list-component',
    templateUrl: 'app/components/list.component.html',
})
export class ListComponent implements OnInit {

    public cars: Array<string>;

    ngOnInit() {
        this.cars = CARS;
    }
}
