import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { LikeComponent } from './like/like.component'

import { ZoomImageDirective } from './zoomImage.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LikeComponent, ZoomImageDirective],
  exports: [LikeComponent, ZoomImageDirective]
})
export class SharedModule {}