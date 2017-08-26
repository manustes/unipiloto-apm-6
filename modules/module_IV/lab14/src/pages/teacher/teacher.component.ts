import { Component, Input } from '@angular/core';
import { Teacher } from '../../model/Teacher';

@Component({
  selector: 'teacher-detail',
  templateUrl: './teacher.component.html'
})

export class TeacherDetailComponent {
  @Input()
  teacher: Teacher;
}