import { take } from 'rxjs/operators';
import { Roles } from '../../../models/roles';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  displayName: string | null = null;
  // TODO: User should always have a role, however we should check for this regardless. As of now you could in theory be of role null
  role: Roles | null = null;
  isSignedIn: boolean = false;
  isLoaded: boolean = false;
  constructor(private _authService: AuthService, private _router: Router) {}
  async ngOnInit(): Promise<void> {
    await this._authService.user$
      .pipe(take(1))
      .toPromise()
      .then((user) => {
        if (user) {
          this.displayName = user.firstName;
          this.role = user.role;
          this.isSignedIn = true;
        }
      });
    this.isLoaded = true;
  }

  public signOut(): void {
    this._authService.signOut();
  }
}
