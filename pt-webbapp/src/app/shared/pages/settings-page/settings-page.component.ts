import { StatusCodes } from '../../../models/status-codes';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  isLoaded: boolean = false;
  firstName: string | null = null;
  lastName: string | null = null;
  email: string | null = null;
  uid: string | null = null;
  emailError: string | null = null;
  passwordError: string | null = null;
  closeResult: string = '';
  passwordForm: FormGroup = this._formBuilder.group({
    password: [null, Validators.required],
  });
  newEmailForm: FormGroup = this._formBuilder.group({
    email: [null, Validators.required],
  });
  newPasswordForm: FormGroup = this._formBuilder.group({
    password: [null, Validators.required],
  });

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private modalService: NgbModal,
    private _formBuilder: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    await this._authService.user$
      .pipe(take(1))
      .toPromise()
      .then((user) => {
        if (user) {
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.email;
          this.uid = user.uid;
        }
      });
    this.isLoaded = true;
  }

  private async _updatePassword(): Promise<void> {
    if (this.newPasswordForm.valid && this.passwordForm.valid && this.email) {
      if (this.newPasswordForm.value.password.length < 6) {
        this.passwordError = 'Lösenordet måste minst vara 6 karaktärer långt';
        return;
      }
      const isReauthenticated = await this._authService.reauthenticate(
        this.email,
        this.passwordForm.value.password
      );
      if (isReauthenticated) {
        const statusCode: StatusCodes = await this._userService.updatePassword(
          this.newPasswordForm.value.password
        );
        switch (statusCode) {
          case StatusCodes.Success:
            this.passwordError = null;
            this.newPasswordForm.reset();
            break;
          case StatusCodes.Error:
            this.passwordError = 'Lösenordet är otillåtet, försök igen';
            break;
          default:
            this.passwordError = 'Något gick fel, prova igen senare';
            break;
        }
      }
    }
  }

  private async _updateEmail(): Promise<void> {
    if (this.newEmailForm.valid && this.passwordForm.valid && this.email) {
      const isReauthenticated = await this._authService.reauthenticate(
        this.email,
        this.passwordForm.value.password
      );
      if (isReauthenticated) {
        const statusCode: StatusCodes = await this._userService.updateEmail(
          this.newEmailForm.value.email
        );
        switch (statusCode) {
          case StatusCodes.InvalidEmail:
            this.emailError = 'Emailadressen är otillåten';
            break;
          case StatusCodes.EmailAlreadyInUse:
            this.emailError = 'Emailadressen är otillåten';
            break;
          case StatusCodes.Success:
            this.email = this.newEmailForm.value.email;
            this.emailError = null;
            this.newEmailForm.reset();
            break;
          default:
            this.emailError = 'Något gick fel, prova igen senare';
            break;
        }
      }
    } else {
      this.emailError =
        'Något gick fel, fyll i uppgifterna på nytt och försök igen';
    }
  }

  public open(content: any): void {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this._update();
        },
        (dismissedReason) => {
          this.closeResult = `Dismissed ${this._getDismissReason(
            dismissedReason
          )}`;
        }
      );
  }

  public async deleteAccount(): Promise<void> {
    this.modalService.dismissAll();

    if (this.passwordForm.valid && this.email && this.uid) {
      const isReauthenticated = await this._authService.reauthenticate(
        this.email,
        this.passwordForm.value.password
      );
      if (isReauthenticated) {
        const statusCode: StatusCodes = await this._userService.deleteUser();
        switch (statusCode) {
          case StatusCodes.Success:
            console.log('Användare raderad');
            window.location.reload();
            break;
          case StatusCodes.Error:
            console.log('Något gick fel');
            break;
          default:
            console.log('Något gick fel (default)');

            break;
        }
      }
    } else {
      console.log('Något gick fel (else)');
    }
  }

  private _getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  /**
   * Based on the status of the forms different
   * update functions will be called.
   */
  private async _update(): Promise<void> {
    if (this.newEmailForm.valid) {
      await this._updateEmail();
    }
    if (this.newPasswordForm.valid) {
      await this._updatePassword();
    }
  }
}
