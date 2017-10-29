import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars.service'; 

@Component({
  selector: 'cars-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public cars: Array<any> = [];
  public err: any = null;
  public loading: boolean = true;
  
  constructor( private service: CarsService ) { }

  ngOnInit() {
    this.service.getCars()
      .subscribe(
        cars => this.cars = cars,
        err => this.err = err,
        () => this.loading = false
      );
  }

}
