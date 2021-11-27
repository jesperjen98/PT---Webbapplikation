import { DietPlan } from '../../shared/models/dietPlan';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DietService {
  constructor(private _angularFirestore: AngularFirestore) {}

  /**
   * Fetches all diet plans.
   * @param dietPlans An array of diet plan uids
   * @returns An array of diet plans
   */
  public async getDietPlans(
    dietPlans: Array<string>
  ): Promise<Array<DietPlan>> {
    const userDietPlans: Array<DietPlan> = [];
    dietPlans.forEach(async (dietPlan_uid) => {
      const dietPlanDocRef: AngularFirestoreDocument<DietPlan> =
        this._angularFirestore.collection('dietPlans').doc(dietPlan_uid);
      const dietPlan = await dietPlanDocRef
        .get()
        .toPromise()
        .then((doc) => {
          if (doc.exists) {
            const dietPlan = doc.data();
            if (dietPlan) {
              dietPlan['uid'] = doc.id;
              return dietPlan;
            }
          }
          return null;
        });
      if (dietPlan) {
        userDietPlans.push(dietPlan);
      }
    });
    return userDietPlans;
  }

  /**
   * Fetches the diet plan based on diet plan uid. If non exists it will return null.
   * @param dietPlan_uid Diet plan uid.
   * @returns null or diet plan.
   */
  public async getDietPlan(dietPlan_uid: string): Promise<DietPlan | null> {
    const dietPlanDocRef: AngularFirestoreDocument<DietPlan> =
      this._angularFirestore.collection('dietPlans').doc(dietPlan_uid);
    const dietPlan = await dietPlanDocRef
      .get()
      .toPromise()
      .then(async (doc) => {
        if (doc.exists) {
          const dietPlan = doc.data();
          if (dietPlan) {
            dietPlan['uid'] = doc.id;
            return dietPlan;
          }
        }
        return null;
      });
    return dietPlan;
  }
}
