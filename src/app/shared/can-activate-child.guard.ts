import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs/Rx'

@Injectable()
export class CanActivateChildGuard implements CanActivateChild {

  canActivateChild():Promise<boolean> {
    return Observable.of(true).toPromise();
  }

}