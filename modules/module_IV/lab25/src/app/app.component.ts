import { Component } from '@angular/core';
import { Student } from "./models/student";
import { StudentService } from "./service/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Estudiantes";
  
    selected: Student;
  
    students: Student[];
  
    constructor(private studentService: StudentService) {
  
    }
  
    getProducts() {
      this.studentService.getStudents().then(students => this.students = students);
    }
  
    ngOnInit(): void {
      this.getProducts();
    }
  
    onSelect(student: Student){
      this.selected = student;
    }
  
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.studentService.create(name)
        .then(student => {
          this.students.push(student);
          this.selected = null;
        })
        .catch(error => console.error(error));
    }
}
