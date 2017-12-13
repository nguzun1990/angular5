import { NgModule } from '@angular/core';
import { AuthGuard } from 'app/core/auth-guard.service';

@NgModule({
    providers: [AuthGuard]
})
export class CoreModule {}