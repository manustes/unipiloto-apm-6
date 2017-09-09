import { Component, Input } from '@angular/core';
import { Student } from "../models/student";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input()
  student: Student;

}
