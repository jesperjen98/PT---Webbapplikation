import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
/**
 * LoginPageComponent
 *
 * @author Johan Ehinger (https://github.com/johanehinger)
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public loginForm: FormGroup = this._formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {}

  public login(): void {
    console.log(this.loginForm.value);
    this._router.navigate(['member']);
    this._authService.signIn(
      this.loginForm.value.email,
      this.loginForm.value.email
    );
  }
}
