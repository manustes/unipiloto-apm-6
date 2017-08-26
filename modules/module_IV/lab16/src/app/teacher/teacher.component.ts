import { Component, OnInit } from '@angular/core';
import { Teacher } from "../../model/Teacher";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  title = 'Profesores';
  teachers: Teacher[] = [];

  selectedTeacher: Teacher;

  constructor() { 

    this.teachers.push(new Teacher(4, 35, "Javier", "Celis"));
    this.teachers.push(new Teacher(5, 28, "Nataly", "Linero"));
    this.teachers.push(new Teacher(6, 40, "Roberto", "Sanchez"));

  }

  ngOnInit() {
  }

  onSelectTeacher(teacher: Teacher){
    this.selectedTeacher = teacher;
  }

}
