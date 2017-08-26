import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from "../../model/Teacher";

@Component({
  selector: 'app-teacherdetail',
  templateUrl: './teacherdetail.component.html',
  styleUrls: ['./teacherdetail.component.css']
})
export class TeacherdetailComponent implements OnInit {

  @Input()
  teacher: Teacher;


  constructor() { }

  ngOnInit() {
  }

}
