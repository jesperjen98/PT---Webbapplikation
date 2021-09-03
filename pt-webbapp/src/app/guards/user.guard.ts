import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap, take, map } from 'rxjs/operators';
import { Roles } from '../models/roles';

/**
 * UserGuard will check if the user is of role user.
 * if true the user is allowed to continue.
 */
@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate(
    _1: ActivatedRouteSnapshot,
    _2: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // TODO: What if a admin types "user" in searchbar? should we redirect to login then?
    return this._authService.user$.pipe(
      take(1),
      map((user) => (user && user.role == Roles.User ? true : false)),
      tap((isUser) => {
        if (isUser) {
          console.log('Access (user)');
        }
        if (!isUser) {
          console.log('Cant access (user)');
          this._router.navigate(['/']);
        }
      })
    );
  }
}
