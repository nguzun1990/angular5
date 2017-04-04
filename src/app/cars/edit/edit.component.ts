import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Car } from './../car.model';
import { CarsService } from './../cars.service';

@Component({
    templateUrl: 'edit.component.html'
})
export class EditComponent implements OnInit {

    protected car: Car = null;
    protected loading: boolean = true;
    protected formGroup: FormGroup;

    constructor(
        protected service: CarsService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {}

    ngOnInit() {
        this.route.paramMap
            .switchMap(paramMap => this.service.getCar(+paramMap.get("id")))
            .subscribe((car: Car) => {
                this.car = car
                this.loading = false;
                this.formGroup = this.getCarForm(car);
            });
    }

    getCarForm(car: Car): FormGroup {
        return new FormGroup({
            brandName: new FormControl(car.brandName, [Validators.required, Validators.minLength(2)]),
            model: new FormControl(car.model, [Validators.required, Validators.minLength(2)]),
            description: new FormControl(car.description, [Validators.required, Validators.minLength(10)]),
            image: new FormControl(car.image, [Validators.required]),
            engineCap: new FormControl(car.engineCap, [Validators.required])
        });
    }

    onFormCancel() {
        this.formGroup.reset();
        this.router.navigate(['cars', this.car.id]);
    }
}