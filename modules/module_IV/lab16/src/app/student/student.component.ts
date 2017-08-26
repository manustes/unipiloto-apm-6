import { Component, OnInit } from '@angular/core';
import { Student } from "../../model/Student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title: string = "Estudiantes";

  students: Student[] = [];

  selectedStudent: Student;

  constructor() {

    this.students.push(new Student(1, 15, "Pedrito", "Perez"));
    this.students.push(new Student(2, 14, "Maria", "Rojas"));
    this.students.push(new Student(3, 13, "Sandra", "Lopez"));


   }

  ngOnInit() {
  }

  onSelectStudent(student: Student){
    this.selectedStudent = student;
  }

  

}
