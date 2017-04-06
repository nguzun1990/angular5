import { Inject, Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Car } from './car.model';

@Injectable()
export class CarsService {

    constructor(
        protected http: Http,
        @Inject('API_URL') private APIUrl: string
    ) {}

    getCars(): Observable<Array<Car>> {
        return this.http.get(this.APIUrl + '/cars')
            .map(response => response.json().map(this.hydrateCar))
    }

    getCar(id: number): Observable<Car> {
        return this.http.get(this.APIUrl + '/cars/' + id)
            .map(response => this.hydrateCar(response.json()))
    }

    updateCar(car: Car): Observable<Car> {
        return Observable.of(car);
        //   return Observable.throw("Some response");
    }

    hydrateCar(data: any) {
        return new Car(
            data.id || null, 
            data.brandName || null,
            data.model || null,
            data.description || null,
            data.image || null,
            data.engineCap || null,
            data.likes || null
        );
    }
}