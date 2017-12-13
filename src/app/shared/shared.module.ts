import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeComponent } from './components/like/like.component';
import { ZoomImageDirective } from './../shared/directives/zoom-image/zoomImage.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { API_URI } from './config';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ LikeComponent, ZoomImageDirective, NotFoundComponent ],
    exports: [ LikeComponent, ZoomImageDirective, NotFoundComponent ],
    providers: [{
        provide: 'API_URI',
        useValue: API_URI
    }]
})
export class SharedModule {}