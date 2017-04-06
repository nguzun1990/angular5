import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { LikeComponent } from './like/like.component'
import { NotFoundComponent } from './notfound/notfound.component'
import { NavbarComponent } from './navbar/navbar.component'

import { ZoomImageDirective } from './zoomImage.directive';

import { AuthGuard } from './auth-guard.service'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LikeComponent, ZoomImageDirective, NotFoundComponent, NavbarComponent],
  exports: [LikeComponent, ZoomImageDirective, NotFoundComponent, NavbarComponent],
  providers: [
    AuthGuard,
    { provide: 'API_URL', useValue: "http://localhost:3000" }]
})
export class SharedModule {}