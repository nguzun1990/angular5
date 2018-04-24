import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LikeComponent } from './like/like.component'
import { NotFoundComponent } from './notfound/notfound.component'
import { NavbarComponent } from './navbar/navbar.component'

import { ZoomImageDirective } from './zoomImage.directive';
import { FeedsComponent } from './feeds/feeds.component';
import { CanActivateGuard } from './can-activate.guard';
import { CanActivateChildGuard } from './can-activate-child.guard';

// import { APIUrl } from './config.js'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LikeComponent, ZoomImageDirective, NotFoundComponent, NavbarComponent, FeedsComponent],
  exports: [LikeComponent, ZoomImageDirective, NotFoundComponent, NavbarComponent, FeedsComponent],
  providers: [{
    provide: 'API_URL', useValue: "http://localhost:3000"
  }, CanActivateGuard, CanActivateChildGuard ]
})
export class SharedModule {}