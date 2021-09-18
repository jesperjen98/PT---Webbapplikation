import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { take } from 'rxjs/operators';

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
  private _firstName: string | null = null;
  private _lastName: string | null = null;

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

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {
    this._authService.user$
      .pipe(take(1))
      .toPromise()
      .then((user) => {
        if (user) {
          this._firstName = user.firstName;
          this._lastName = user.lastName;
        }
      });
  }

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
    this.saveAsPDF();
  }

  // TODO: Implement this function.
  private saveAsPDF(): void {
    throw new Error('saveAsPDF not implemented.');
    // const PDF = new jsPDF();
    // PDF.text(
    //   this._firstName + ' ' + this._lastName + ' - Hälsodeklaration',
    //   10,
    //   10
    // );
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();
    // PDF.text(dd + '/' + mm + '/' + yyyy, 10, 17);
    // PDF.text();
    // PDF.save('angular-demo.pdf');
    // var splitTitle = healthDeclarationPDF.splitTextToSize(
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius suscipit facilisis. Nunc aliquet posuere pellentesque. Sed dapibus',
    //   180
    // );
    // healthDeclarationPDF.text(splitTitle, 10, 20);
    // healthDeclarationPDF.save('a4.pdf');
    // parentdiv is the html element which has to be converted to PDF
    // const DATA: HTMLElement | null = document.getElementById(
    //   'medical-history-section'
    // );
    // // let PDF = new jsPDF('p', 'mm', 'a4');
    // let fileWidth = 208;
    // if (DATA) {
    //   html2canvas(DATA).then(async (canvas) => {
    //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
    //     const FILEURI = canvas.toDataURL('image/png');
    //     await this._authService.user$
    //       .pipe(take(1))
    //       .toPromise()
    //       .then((user) => {
    //         if (user) {
    //           this._firstName = user.firstName;
    //           this._lastName = user.lastName;
    //         }
    //       });
    //     healthDeclarationPDF.text(
    //       this._firstName + ' ' + this._lastName,
    //       10,
    //       10
    //     );
    //     healthDeclarationPDF.text(new Date().toDateString(), 10, 20);
    //     // PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    //     healthDeclarationPDF.addImage(
    //       FILEURI,
    //       'PNG',
    //       0,
    //       30,
    //       fileWidth,
    //       fileHeight
    //     );
    //     healthDeclarationPDF.save('angular-demo.pdf');
    //   });
    // }
  }
}
