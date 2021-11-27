import { Program } from '../../shared/models/program';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  constructor(private _angularFirestore: AngularFirestore) {}

  /**
   * Fetches all programs.
   * @param programs An array of program uids
   * @returns An array of programs
   */
  public async getPrograms(programs: Array<string>): Promise<Array<Program>> {
    const userPrograms: Array<Program> = [];
    programs.forEach(async (program_uid) => {
      const programDocRef: AngularFirestoreDocument<Program> =
        this._angularFirestore.collection('programs').doc(program_uid);
      const program = await programDocRef
        .get()
        .toPromise()
        .then((doc) => {
          if (doc.exists) {
            const program = doc.data();
            if (program) {
              program['uid'] = doc.id;
              return program;
            }
          }
          return null;
        });
      if (program) {
        userPrograms.push(program);
      }
    });
    return userPrograms;
  }

  /**
   * Fetches the program based on program uid. If non exists it will return null.
   * @param program_uid Program uid.
   * @returns null or Program.
   */
  public async getProgram(program_uid: string): Promise<Program | null> {
    const programDocRef: AngularFirestoreDocument<Program> =
      this._angularFirestore.collection('programs').doc(program_uid);
    const program = await programDocRef
      .get()
      .toPromise()
      .then(async (doc) => {
        if (doc.exists) {
          const program = doc.data();
          if (program) {
            program['uid'] = doc.id;
            return program;
          }
        }
        return null;
      });
    return program;
  }
}
