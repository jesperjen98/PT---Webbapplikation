import {
  ExerciseService,
  Exercises,
} from './../../../services/exercise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrls: ['./exercises-page.component.scss'],
})
export class ExercisesPageComponent implements OnInit {
  constructor(private _exerciseService: ExerciseService) {}

  ngOnInit(): void {
    for (const exercise in Object.keys(Exercises)) {
      // this._exerciseService.getExercise(exercise);
      console.log(exercise);
    }
  }
}
