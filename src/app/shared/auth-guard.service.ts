import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    console.log('AuthGuard#canActivate called');
    return Observable.of(false).delay(2000).first();
    // return false;
  }
}
