import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './like/like.component';
import { LoggerService } from './logger.service';
import { ZoomImageDirective } from './zoomImage.directive';
import { Car } from './../cars/car.model';

// import { CarsModule } from './../cars/cars.module';

const myFact = () => {
  return new Car(1, "Mercedes", "200C", "Description", "", 200, 100, true);
}

@NgModule({
  imports: [CommonModule],
  declarations: [LikeComponent, ZoomImageDirective],
  exports: [LikeComponent, ZoomImageDirective],
  providers: [
    LoggerService,{
      provide: 'API_URI', useValue: "http://localhost:3000"
    }]
})
export class SharedModule {}