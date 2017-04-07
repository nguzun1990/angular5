import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { DashboardComponent } from './dashboard/dashboard.component'

import { SearchComponent } from './search/search.component'

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [DashboardComponent, SearchComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}