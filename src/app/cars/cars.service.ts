import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './models/car.model';

import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {

    constructor(
        @Inject('API_URI') private apiUri: string,
        private http: HttpClient
    ) {
    }

    getCars() {
        return this.http
            .get(`${this.apiUri}/cars`)
            .map((cars: Object[]) => cars.map(this.hydrate));
    }

    private hydrate(car): Car {

        return new Car(
            car.id, 
            car.brandName,
            car.model, 
            car.description,  
            car.image, 
            car.engineCap, 
            car.likes, 
            car.liked
        );
    }
}