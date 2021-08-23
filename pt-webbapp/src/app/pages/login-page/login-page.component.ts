import { StatusCodes } from './../../models/status-codes';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public error: string | null = null;
  public loginForm: FormGroup = this._formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {}

  public login(): void {
    if (this.loginForm.valid) {
      this._authService
        .signIn(this.loginForm.value.email, this.loginForm.value.password)
        .then((result: StatusCodes) => {
          switch (result) {
            case StatusCodes.Success: {
              this._router.navigate(['member']);
              this.error = null;
              break;
            }
            case StatusCodes.NotFound: {
              this.error = 'Användaren existerar inte';
              break;
            }
            case StatusCodes.CantAccess: {
              this.error = 'Fel lösenord';
              break;
            }
            case StatusCodes.InvalidEmail: {
              this.error = 'E-postadressen är fel';
              break;
            }
            default: {
              this.error = 'Något gick fel, prova igen senare.';
              break;
            }
          }
        });
    } else {
      this.error = 'Alla fälten är obligatoriska';
    }
  }
}
