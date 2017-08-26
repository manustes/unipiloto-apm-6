import { Component } from '@angular/core';

import { Student } from "../model/Student";
import { Teacher } from "../model/Teacher";  



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Estudiantes y Profesores';

  students: Student[] = [];
  teachers: Teacher[] = [];

  selectedStudent: Student;
  selectedTeacher: Teacher;

  constructor(){

    this.students.push(new Student(1, 15, "Pedrito", "Perez"));
    this.students.push(new Student(2, 14, "Maria", "Rojas"));
    this.students.push(new Student(3, 13, "Sandra", "Lopez"));

    this.teachers.push(new Teacher(4, 35, "Javier", "Celis"));
    this.teachers.push(new Teacher(5, 28, "Nataly", "Linero"));
    this.teachers.push(new Teacher(6, 40, "Roberto", "Sanchez"));

  }
  
  onSelectStudent(student: Student){
    this.selectedStudent = student;
  }

  onSelectTeacher(teacher: Teacher){
    this.selectedTeacher = teacher;
  }
}
