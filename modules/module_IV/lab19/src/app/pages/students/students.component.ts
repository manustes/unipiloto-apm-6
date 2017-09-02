import { Component, OnInit } from '@angular/core';

import { StudentsService } from "../../service/students.service";
import { Student } from "../../../models/Student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  title: string = "Estudiantes";
  
  selected: Student;

  students: Student[];

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.getStudents();
  }


  getStudents(){
    this.studentService.getStudents().then(students => this.students = students);
  }

  onSelectStudent( student: Student){
    this.selected = student;

  }



}
