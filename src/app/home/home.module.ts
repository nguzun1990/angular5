import { NgModule } from '@angular/core';

import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class HomeModule {}