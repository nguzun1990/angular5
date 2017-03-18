import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from "./components/list.component";
import { DetailComponent } from "./components/detail.component";
import { LikeComponent } from "./components/like.component";
import { ZoomImageDirective } from './directives/zoomImage.directive';
import { Cm3ToLiters } from './pipes/cm3ToLiters.pipes';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
                    AppComponent,
                    ListComponent,
                    DetailComponent,
                    LikeComponent,
                    ZoomImageDirective,
                    Cm3ToLiters
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
