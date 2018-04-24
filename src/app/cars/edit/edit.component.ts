import { Component, OnInit} from '@angular/core';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: 'edit.component.html',
  styles: [`
  .ng-valid[required], .ng-valid.required  {
    border-left: 5px solid #42A948; /* green */
  }
  
  .ng-invalid:not(form)  {
    border-left: 5px solid #a94442; /* red */
  }
  `]
})
export class EditComponent implements OnInit {
  car: Car = null;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.switchMap(
      (map: ParamsMap) => this.carsService.getCar(+map.get("id"))
    )
    .subscribe(car => this.car = car);
  }

  onSubmit() {
    debugger;
  }
}