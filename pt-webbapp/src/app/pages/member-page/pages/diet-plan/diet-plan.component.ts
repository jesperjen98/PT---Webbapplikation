import { DietService } from '../../../../core/services/diet.service';
import { ActivatedRoute } from '@angular/router';
import { DietPlan } from '../../../../shared/models/dietPlan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.scss'],
})
export class DietPlanComponent implements OnInit {
  private _dietPlanId: string | null = null;
  dietPlan: DietPlan | null = null;
  constructor(
    private _activatedroute: ActivatedRoute,
    private _dietService: DietService
  ) {}

  async ngOnInit(): Promise<void> {
    this._dietPlanId =
      this._activatedroute.snapshot.paramMap.get('dietProgramId');
    if (this._dietPlanId) {
      this.dietPlan = await this._dietService.getDietPlan(this._dietPlanId);
    }
    // console.log(this.program);
  }
}
