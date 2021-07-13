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

  constructor(private _formBuilder: FormBuilder) {}

  public login(): void {
    console.log(this.loginForm.value);
  }
}
