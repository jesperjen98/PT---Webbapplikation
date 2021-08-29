import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { Roles } from '../models/roles';
import { AuthService } from '../services/auth.service';

/**
 * AdminGuard will check if the user is of role admin.
 * if true the user is allowed to continue.
 */
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate(
    _1: ActivatedRouteSnapshot,
    _2: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // TODO: What if a user types "admin" in searchbar? should we redirect to login then?
    return this._authService.user$.pipe(
      take(1),
      map((user) => (user && user.role == Roles.Admin ? true : false)),
      tap((isAdmin) => {
        if (isAdmin) {
          console.log('Access (admin)');
        }
        if (!isAdmin) {
          console.log('Cant access (admin)');
          this._router.navigate(['/login']);
        }
      })
    );
  }
}
