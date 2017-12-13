import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    SharedModule,
    HomeModule, 
    AppRoutingModule,
    CoreModule
   ],
  declarations: [
                    AppComponent
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
