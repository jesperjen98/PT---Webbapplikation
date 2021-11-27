import { AuthService } from '../../../../core/services/auth.service';
import { DietService } from '../../../../core/services/diet.service';
import { Component, OnInit } from '@angular/core';
import { DietPlan } from 'src/app/shared/models/dietPlan';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-diet-plans',
  templateUrl: './diet-plans.component.html',
  styleUrls: ['./diet-plans.component.scss'],
})
export class DietPlansComponent implements OnInit {
  private _dietPlan_uids: Array<string> | null = null;
  dietPlans: Array<DietPlan> | null = null;
  isLoaded: boolean = false;
  constructor(
    private _dietService: DietService,
    private _authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    await this._authService.user$
      .pipe(take(1))
      .toPromise()
      .then((user) => {
        if (user) {
          this._dietPlan_uids = user.dietPlans;
        }
      });
    if (this._dietPlan_uids) {
      this.dietPlans = await this._dietService.getDietPlans(
        this._dietPlan_uids
      );
    }
    this.isLoaded = true;
  }
}
