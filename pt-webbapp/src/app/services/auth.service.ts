import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _angularFireAuth: AngularFireAuth) {}

  /**
   * Let the users sign in using email and password.
   * @param email The user's email adress.
   * @param password The user's password.
   */
  public signIn(email: string, password: string) {
    this._angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  /**
   *  Let the users sign up using email and password.
   * @param email The user's email adress.
   * @param password The user's password.
   */
  public signUp(email: string, password: string) {
    this._angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        console.log(res.message);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  }
}
