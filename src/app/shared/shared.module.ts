import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LikeComponent } from './components/like/like.component';
import { ZoomImageDirective } from './../shared/directives/zoom-image/zoomImage.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { API_URI } from './config';

@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [ LikeComponent, ZoomImageDirective, NotFoundComponent, NavbarComponent ],
    exports: [ LikeComponent, ZoomImageDirective, NotFoundComponent, NavbarComponent ],
    providers: [{
        provide: 'API_URI',
        useValue: API_URI
    }]
})
export class SharedModule {}