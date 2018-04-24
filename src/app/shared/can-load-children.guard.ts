import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

import { Observable } from 'rxjs/Rx'

@Injectable()
export class CanActivateGuard implements CanLoad {

  canLoad():Observable<boolean> {
    return Observable.of(true);
  }

}