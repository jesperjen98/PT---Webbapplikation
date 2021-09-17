import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-health-declaration-page',
  templateUrl: './health-declaration-page.component.html',
  styleUrls: ['./health-declaration-page.component.scss'],
})
export class HealthDeclarationPageComponent implements OnInit {
  public personalInformationformError: string | null = null;
  public lifestylePhysicalFormError: string | null = null;
  public goalsFormError: string | null = null;
  public error: string | null = null;

  public personalInformationform: FormGroup = this._formBuilder.group({
    age: [null, Validators.required],
    profession: [null],
  });

  public medicalHistoryForm: FormGroup = this._formBuilder.group({
    diseases: [null],
    diagnoses: [null],
    operations: [null],
    allergies: [null],
    injuries: [null],
    medications: [null],
    perceptionOfHealth: [null],
  });

  public lifestylePhysicalForm: FormGroup = this._formBuilder.group({
    activeLevel: [null, Validators.required],
    traningLevel: [null, Validators.required],
    typeOfTraning: [null],
  });

  public lifestylesubstanceUseForm: FormGroup = this._formBuilder.group({
    smoking: [false],
    snusing: [false],
    nicotine: [false],
    alcoholConsumption: [null, Validators.required],
  });

  public goalsForm: FormGroup = this._formBuilder.group({
    goals: [null, Validators.required],
    whyIhaveMyGoals: [null, Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  /**
   * Will validate all forms and set correct error message if
   * something isn't right. Then it will return true or false.
   * @returns boolean
   */
  private _validateForms(): boolean {
    this.personalInformationform.invalid
      ? (this.personalInformationformError = 'Ålder är viktigt och måste anges')
      : (this.personalInformationformError = null);
    this.lifestylePhysicalForm.invalid
      ? (this.lifestylePhysicalFormError =
          'Ange både aktivitetsnivå och hur många gånger i veckan du tränar')
      : (this.lifestylePhysicalFormError = null);
    this.goalsForm.invalid
      ? (this.goalsFormError =
          'Beskriv dina mål och varför du har satt dessa mål')
      : (this.goalsFormError = null);

    if (
      this.personalInformationform.invalid ||
      this.lifestylePhysicalForm.invalid ||
      this.goalsForm.invalid
    ) {
      return false;
    }
    return true;
  }

  public submit(): void {
    if (!this._validateForms()) {
      this.error = 'Alla obligatoriska fält måste fyllas i';
      return;
    }
    this.error = null;
    console.log(this.personalInformationform.value);
    console.log(this.medicalHistoryForm.value);
    console.log(this.lifestylePhysicalForm.value);
    console.log(this.lifestylesubstanceUseForm.value);
    console.log(this.goalsForm.value);
  }
}
