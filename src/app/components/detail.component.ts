import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../models/car.model';


@Component({
    selector: 'detail-component',
    templateUrl: 'detail.component.html',
})
export class DetailComponent {

    @Input('car') car: Car;

}
