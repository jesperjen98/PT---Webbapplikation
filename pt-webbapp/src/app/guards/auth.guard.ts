import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase';

/**
 * AuthGuard will listen to firebase onIdTokenChange
 * for updates regarding the user. If the returned
 * user object is null it will return false otherwise it will return true.
 * If false it will redirect the user to /login.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, _) => {
      firebase.auth().onIdTokenChanged((user) => {
        if (user) {
          console.log('user is logged in');
          resolve(true);
        } else {
          console.log('user is logged out');
          this._router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
