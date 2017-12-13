import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Car } from './../../models/car.model';


@Component({
    selector: 'detail-component',
    templateUrl: 'detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {

    @Input('car') car: Car;

    constructor(private ref: ChangeDetectorRef) {
        //setInterval(() => {
        //    this.car.likes++;
        //    console.log(this.car.likes);
        //    // the following is required, otherwise the view will not be updated
        //    this.ref.markForCheck();
        //}, 1000);
    }

    public addLikeToCar(event: any) {
        if (!this.car.liked) {
            this.car.likes++;
            this.car.liked = true;
        }        
    }

}
