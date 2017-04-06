import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module'
import { SharedModule } from './shared/shared.module'

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/auth-guard.service'


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    DashboardModule,
    SharedModule,
    AppRoutingModule    
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuard]
})
export class AppModule { }
