import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { Car } from './../car.model';
import { LikeComponent } from './../../shared/like/like.component'
import { CarsService } from './../cars.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'detail-component',
  templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {

  // @Input('car') car: Car;
  protected car: Car = null;

  constructor(
    protected service: CarsService,
    protected route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data:any) => this.car = data.car);
  }

  public addLikeToCar(event: any) {
    if (!this.car.liked) {
      this.car.likes++;
      this.car.liked = true;
    }
  }
}
