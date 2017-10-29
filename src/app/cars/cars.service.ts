import { Injectable, Inject } from '@angular/core';

import { Http } from '@angular/http';

import { Car } from './car.model';

import { LoggerService } from './../shared/logger.service';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CarsService {

  constructor(
    private http: Http,
    @Inject('API_URI') private apiUri: string
  ) {
  }

  getCars() {
    return this.http.get(`${this.apiUri}/cars`)
      .map(response => response.json());
  }

  getCar(id: number): Observable<Car> {
    return this.http.get(`${this.apiUri}/cars/${id}`)
      .map(response => response.json() as Car);
  }

  save(car: Car) {
    return this.http.patch(`${this.apiUri}/cars`, car);
  }
}