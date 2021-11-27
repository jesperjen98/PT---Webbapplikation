import { Program } from '../../../../shared/models/program';
import { ProgramService } from '../../../../core/services/program.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-page',
  templateUrl: './program-page.component.html',
  styleUrls: ['./program-page.component.scss'],
})
export class ProgramPageComponent implements OnInit {
  private _programId: string | null = null;
  program: Program | null = null;

  constructor(
    private _activatedroute: ActivatedRoute,
    private _programService: ProgramService
  ) {}

  async ngOnInit(): Promise<void> {
    this._programId = this._activatedroute.snapshot.paramMap.get('programId');
    if (this._programId) {
      this.program = await this._programService.getProgram(this._programId);
    }
    console.log(this.program);
  }
}
