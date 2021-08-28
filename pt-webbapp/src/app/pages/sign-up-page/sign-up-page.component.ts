import { StatusCodes } from './../../models/status-codes';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genders } from 'src/app/models/genders';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  public error: string | null = null;

  /**
   * signUpForm contains firstName, lastName, birthdate,
   * gender, email, password and repeatPassword
   *
   * Password must be at least 6 characters long.
   */
  public signUpForm: FormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthdate: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  public signUp(): void {
    if (
      this.signUpForm.valid &&
      this.signUpForm.value.password == this.signUpForm.value.repeatPassword
    ) {
      this.error = null;
      this._authService
        .signUp(
          this.signUpForm.value.firstName,
          this.signUpForm.value.lastName,
          this.signUpForm.value.birthdate,
          this.signUpForm.value.gender,
          this.signUpForm.value.email,
          this.signUpForm.value.password
        )
        .then((result: StatusCodes) => {
          switch (result) {
            case StatusCodes.Success: {
              this._router.navigate(['member']);
              this.error = null;
              break;
            }
            case StatusCodes.EmailAlreadyInUse: {
              this.error = 'Emailadressen används redan';
              break;
            }
            case StatusCodes.InvalidEmail: {
              this.error = 'E -postadressen är dåligt formaterad.';
              break;
            }
            case StatusCodes.Error: {
              this.error = 'Något gick fel, prova igen senare.';
              break;
            }
            default: {
              this.error = 'Något gick fel, prova igen senare.';
              break;
            }
          }
        })
        .catch((_: Error) => {
          this.error = 'Något gick fel, prova igen senare.';
        });
    } else if (
      this.signUpForm.value.password != this.signUpForm.value.repeatPassword
    ) {
      this.error = 'Lösenorden måste stämma överens.';
    } else {
      this.error = 'Alla fält är obligatoriska.';
    }
  }

  public getAllGenders() {
    return Object.values(Genders);
  }
}
