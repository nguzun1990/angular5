import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Car } from "./car.model";
import { CarsService } from "./cars.service";
import { Observable } from "rxjs/Observable";


@Injectable()
export class CarDetailsResolver implements Resolve<Car> {

  constructor(private carService: CarsService, private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<Car | null> {
    let id = route.params['id'];
    return this.carService.getCar(id);
    // .subscribe(car => {
    //   if(car) return car;
    //   this.router.navigate(['/not-resolved']);
    //   return null;
    // })
    // if (data) {
    //   return data;
    // } else { // id not found

    // }
  }
}