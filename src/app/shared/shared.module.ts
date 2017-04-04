import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { LikeComponent } from './like/like.component'
import { NotFoundComponent } from './notfound/notfound.component'

import { ZoomImageDirective } from './zoomImage.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LikeComponent, ZoomImageDirective, NotFoundComponent],
  exports: [LikeComponent, ZoomImageDirective, NotFoundComponent]
})
export class SharedModule {}