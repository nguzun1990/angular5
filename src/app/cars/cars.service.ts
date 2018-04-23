import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Car } from './car.model';

@Injectable()
export class CarsService {

  constructor(
    protected http: HttpClient,
    @Inject('API_URL') private APIUrl: string
  ) { }

  getCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.APIUrl + '/cars')
      .map(response => response.map(this.hydrateCar));
  }

  getCar(id: number): Observable<Car> {
    return this.http.get(this.APIUrl + '/cars/' + id)
      .map(response => this.hydrateCar(response))
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