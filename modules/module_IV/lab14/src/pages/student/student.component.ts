import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'student-detail',
  templateUrl: './student.component.html'
})

export class StudentDetailComponent {
  @Input()
  student: Student;
}