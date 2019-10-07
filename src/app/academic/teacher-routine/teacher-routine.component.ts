import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-teacher-routine',
  templateUrl: './teacher-routine.component.html',
  styleUrls: ['./teacher-routine.component.css'],
})
export class TeacherRoutineComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');

    let result = this.route.paramMap.pipe(switchMap((params: ParamMap) => console.log(params.get('id'))));
  }
}
