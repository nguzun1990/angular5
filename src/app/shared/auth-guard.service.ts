import { Injectable } from '@angular/core';
import { Route, CanLoad } from '@angular/router'

@Injectable()
export class AuthGuard implements CanLoad {
  
  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return true;
  }

  // checkLogin(url: string): boolean {
  //   console.info(url);
  //   return false;
  // }
}
