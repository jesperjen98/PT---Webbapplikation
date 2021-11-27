import { AuthService } from '../../../../core/services/auth.service';
import { ProgramService } from '../../../../core/services/program.service';
import { Program } from '../../../../shared/models/program';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-programs-page',
  templateUrl: './programs-page.component.html',
  styleUrls: ['./programs-page.component.scss'],
})
export class ProgramsPageComponent implements OnInit {
  programs: Array<Program> | null = null;
  isLoaded: boolean = false;
  private _program_uids: Array<string> | null = null;

  constructor(
    private _programService: ProgramService,
    private _authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    await this._authService.user$
      .pipe(take(1))
      .toPromise()
      .then((user) => {
        if (user) {
          this._program_uids = user.programs;
        }
      });
    this.isLoaded = true;
    if (this._program_uids) {
      this.programs = await this._programService.getPrograms(
        this._program_uids
      );
    }
  }
}
