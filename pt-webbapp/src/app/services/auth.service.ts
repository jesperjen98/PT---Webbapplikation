import { StatusCodes } from './../models/status-codes';
import { Genders } from './../models/genders';
import { Roles } from './../models/roles';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import firebase from 'firebase';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _angularFirestore: AngularFirestore
  ) {}

  /**
   * Let the users sign in using email and password. It will set the '
   * idToken' in sessionStorage.
   * @param email The user's email adress.
   * @param password The user's password.
   * @returns Promise StatusCodes used to deduce what happend.
   */
  public async signIn(email: string, password: string): Promise<StatusCodes> {
    const result: StatusCodes = await this._angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential: firebase.auth.UserCredential) => {
        if (userCredential.user) {
          const idToken: string | null = await userCredential.user
            .getIdToken()
            .then((token: string) => {
              return token;
            })
            .catch(() => {
              return null;
            });

          idToken && sessionStorage.setItem('idToken', idToken);
        }
        return StatusCodes.Success;
      })
      .catch((error: any) => {
        if (error.code == 'auth/user-not-found') {
          return StatusCodes.NotFound;
        } else if (error.code == 'auth/invalid-email') {
          return StatusCodes.InvalidEmail;
        } else if (error.code == 'auth/wrong-password') {
          return StatusCodes.CantAccess;
        }
        return StatusCodes.Error;
      });
    return result;
  }

  /**
   * Let the user sign up using email and password as well as some basic information about themselves.
   * @param firstName The user's first name.
   * @param lastName The user's last name.
   * @param birthdate The user's birthdate in string format.
   * @param gender The user's gender.
   * @param email The user's email adress.
   * @param password The user's password.
   * @returns Promise StatusCodes used to deduce what happend.
   */
  public async signUp(
    firstName: string,
    lastName: string,
    birthdate: string,
    gender: Genders,
    email: string,
    password: string
  ): Promise<StatusCodes> {
    const result: StatusCodes = await this._angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: firebase.auth.UserCredential) => {
        let user: firebase.User | null = userCredential.user;
        if (user) {
          user.updateProfile({
            displayName: firstName + ' ' + lastName,
          });
          const userRef: AngularFirestoreDocument<unknown> =
            this._angularFirestore.collection('users').doc(user.uid);
          //! role must always be Roles.User
          userRef.set({
            role: Roles.User,
            firstName: firstName,
            lastName: lastName,
            birthdate: birthdate,
            gender: gender,
          });
          return StatusCodes.Success;
        }
        return StatusCodes.Error;
      })
      .catch((error: any) => {
        if (error.code == 'auth/email-already-in-use') {
          return StatusCodes.EmailAlreadyInUse;
        } else if (error.code == 'auth/invalid-email') {
          return StatusCodes.InvalidEmail;
        }
        return StatusCodes.Error;
      });
    return result;
  }

  /**
   *  Checks if the current user is authenticated at Firebase.
   * @returns Boolean value indicating if the user is signed in or not.
   */
  public async isAuthenticated(): Promise<boolean> {
    return false;
  }
}
