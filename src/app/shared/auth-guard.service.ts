import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    console.log('AuthGuard#canActivate called');
    return Observable.of(true);
  }
}