import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { LikeComponent } from './like/like.component'

import { ZoomImageDirective } from './zoomImage.directive';

// import { APIUrl } from './config.js'

@NgModule({
  imports: [CommonModule],
  declarations: [LikeComponent, ZoomImageDirective],
  exports: [LikeComponent, ZoomImageDirective],
  providers: [{
    provide: 'API_URL', useValue: "http://localhost:3000"
  }]
})
export class SharedModule {}