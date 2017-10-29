import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../car.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  brands:Array<string> = ["Mercedes", "BMW", "Toyota"];
  car: Car;

  constructor(
    private service: CarsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.service.getCar(+params.get('id')))
      .subscribe(car => this.car = car);
  }

  onSubmit() {
    this.service.save(this.car)
      .subscribe( () => {
        console.log("Success!");
      }, err => console.error(err) );  
  }

}
