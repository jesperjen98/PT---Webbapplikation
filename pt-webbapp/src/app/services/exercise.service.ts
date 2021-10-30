import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum Exercises {
  handedKettlebellSwing = 345,
  benchPress = 192,
}

/**
 * These licenses allow fair use of all assets as long as appropriate credits
 * are given. Please support WGER at "https://wger.de/" and
 * "https://github.com/wger-project"
 */
export enum ExerciseLicenses {
  // "http://creativecommons.org/licenses/by/4.0/"
  CC_BY_4 = 4,
  // "https://creativecommons.org/licenses/by-sa/3.0/deed.en"
  CC_BY_SA_3 = 1,
  // "https://creativecommons.org/licenses/by-sa/4.0/deed.en"
  CC_BY_SA_4 = 2,
  // "http://creativecommons.org/publicdomain/zero/1.0/"
  CC0 = 3,
  // "https://opendatacommons.org/licenses/odbl/"
  ODbL = 5,
}

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private _baseUrl: string = 'https://wger.de/api/v2/exerciseinfo/';
  constructor(private _httpClient: HttpClient) {}

  public getExercise(exercise: Exercises): void {
    this._httpClient.get(this._baseUrl + exercise).forEach((element: any) => {
      // console.log(element['description']);

      //! License check!
      if (element.license.id in ExerciseLicenses) {
        console.log(element);
      }
    });
  }
}
