import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Rx'

@Injectable()
export class CanActivateGuard implements CanActivate {

  canActivate():Observable<boolean> {
    return Observable.of(true);
  }

}