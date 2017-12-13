import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeComponent } from './components/like/like.component';
import { ZoomImageDirective } from './../shared/directives/zoom-image/zoomImage.directive';

import { API_URI } from './config';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ LikeComponent, ZoomImageDirective ],
    exports: [ LikeComponent, ZoomImageDirective ],
    providers: [{
        provide: 'API_URI',
        useValue: API_URI
    }]
})
export class SharedModule {}