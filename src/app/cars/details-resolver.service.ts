import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CarsService } from './cars.service';
import { Car } from './car.model';

@Injectable()
export class CarDetailsResolver implements Resolve<Car> {

  constructor(private carsService: CarsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Car> {
    let id = +route.paramMap.get('id');

    return this.carsService.getCar(id)
      .take(1)
      .map(car => {
        if(car) return car;
        this.router.navigate(['dashboard', {message: "Car not found"}]);
        return null;
      })
  }
}