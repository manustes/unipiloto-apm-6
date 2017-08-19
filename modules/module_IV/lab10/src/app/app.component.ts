import { Component } from '@angular/core';

export interface Person {
  
      id: number;
      age: number;
      name: string;
      lastname: string;
  
      setId( id: number ):void;
      setAge( age: number ): void;
      setName( name: string ): void;
      setLastName( lastname: string ): void;
  
  }
  
  export class Student implements Person{
  
      classes: Array<String>;
      grade: number;
      group: string;

      //variables interface
      id: number;
      age: number;
      name: string;
      lastname: string;
  
      setId( id: number ):void{
        this.id = id;
      }
      setAge( age: number ): void{
        this.age = age;
      }
      setName( name: string ): void{
        this.name = name;
      }
      setLastName( lastname: string ): void{
        this.lastname = lastname;
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
  title = 'NgModel Ejemplo';
  estudiante: Student = new Student();

  constructor(){

    this.estudiante.setId(1);
    this.estudiante.setAge(20);
    this.estudiante.setName("Pedro");
    this.estudiante.setLastName("Picapiedra");
    this.estudiante.setGroup("11-01");

  }
}
