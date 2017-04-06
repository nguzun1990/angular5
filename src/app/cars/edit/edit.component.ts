import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Car } from './../car.model';
import { CarsService } from './../cars.service';

@Component({
    templateUrl: 'edit.component.html'
})
export class EditComponent implements OnInit {

    protected car: Car = null;
    protected loading: boolean = true;
    protected formGroup: FormGroup;
    protected submitted: boolean = false;
    protected successMsg: string = null;
    protected errorMsg: string = null;

    constructor(
        protected service: CarsService,
        protected route: ActivatedRoute,
        protected router: Router,
        protected fb: FormBuilder
    ) {}

    ngOnInit() {
        this.route.paramMap
            .switchMap(paramMap => this.service.getCar(+paramMap.get("id")))
            .switchMap((car: Car) => {
                this.car = car
                this.loading = false;
                this.buildForm(car);

                return this.formGroup.valueChanges
                    .map(values => values.brandName);
            })
            .subscribe(brandName => {
                console.log(brandName)
            });

    }

    buildForm(car: Car): void {
        this.formGroup = this.fb.group({
            brandName: [car.brandName, [Validators.required, Validators.minLength(2)]],
            model: [car.model, [Validators.required, Validators.minLength(2)]],
            description: [car.description, [Validators.required, Validators.minLength(10)]],
            image: [car.image, [Validators.required]],
            engineCap: [car.engineCap, [Validators.required]]
        });
    }

    onFormCancel() {
        this.router.navigate(['cars', this.car.id]);
    }

    onSubmit() { 
        const saveCar = this.prepareCar();
        this.service.updateCar(saveCar)
            .map(carObj => new Car(
                carObj.id, carObj.brandName, carObj.model,
                carObj.description,
                carObj.image, carObj.engineCap,
                carObj.likes, carObj.liked
            ))
            .subscribe((car: Car) => {
                this.car = car;
                this.buildForm(car);
                this.successMsg = "The car has been successfully saved!";
            }, () => {
                this.errorMsg = "There was an error during the saving process.";
            })
    }

    prepareCar(): Car {
        const formModel = this.formGroup.value;

        const saveCar = {
            id: this.car.id,
            brandName: formModel.brandName as string,
            model: formModel.model as string,
            description: formModel.description,
            image: formModel.image,
            engineCap: formModel.engineCap,
            likes: 0,
            liked: false
        }

        return saveCar as Car;
    }
}