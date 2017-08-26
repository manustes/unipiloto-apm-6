import { Component, OnInit, Input } from '@angular/core';
import { Student } from "../../model/Student";

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {

  @Input()
  student: Student;

  constructor() { }

  ngOnInit() {
  }

}
