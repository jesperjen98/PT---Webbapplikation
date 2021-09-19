import { Observable, of } from 'rxjs';

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
import { switchMap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  /**
   * Will only work if the user recently signed in. In order to work correctly
   * the user needs to be re-authenticated.
   */
  public async updateEmail(newEmail: string): Promise<StatusCodes> {
    const user: firebase.User | null = firebase.auth().currentUser;

    if (user) {
      const result: StatusCodes = await user
        .updateEmail(newEmail)
        .then(() => {
          return StatusCodes.Success;
        })
        .catch((error) => {
          return StatusCodes.Error;
        });
      return result;
    }
    return StatusCodes.Error;
  }
}
