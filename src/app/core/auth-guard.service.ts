import { Injectable }       from '@angular/core';
import {
    Router, Route,
    ActivatedRouteSnapshot,
    CanLoad
}                           from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(private router: Router) {

    }

    canLoad(route: Route): Observable<boolean> {
        return Observable.of(true);
    }
}