import { Component } from '@angular/core';

export class Person {
  
      id: number;
      age: number;
      name: string;
      lastname: string;
  
      constructor( id: number, age: number, name: string, lastname: string ){
          this.id = id;
          this.age = age;
          this.name = name;
          this.lastname = lastname;
      }
  
  }
  
  export class Student extends Person{
  
      classes: Array<String>;
      grade: number;
      group: string;
  
      constructor( id: number, age: number, name: string, lastname: string ) {
          super(id, age, name, lastname );     
      }
  
      setClasses( classes: Array< string > ): void {
          this.classes = classes;
      }
  
      getClasses(): Array< String > {
          return this.classes;
      }
  
      setGrade( grade: number ): void {
          this.grade = grade;
      }
  
      getGrade(): number {
          return this.grade;
      }
  
      setGroup( group: string ): void {
          this.group = group;
      }
  
      getGroup(): string {
          return this.group;
      }
  
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Estudiante';
  estudiante: Student;

  constructor(){
    this.estudiante = new Student(1, 20, "Cristian", "Murillo");
    this.estudiante.setGrade(7);
    this.estudiante.setGroup("701");
  }

}
