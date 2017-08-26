import { Person } from "../model/Person";
import { Student } from "../model/Student";

export class Teacher extends Person{
    
    profession: string;
    grades: Array< number>;
    groups: Array< string >;
    students: Array< Student > = [];

    constructor( id: number, age: number, name: string, lastname: string ) {
        super(id, age, name, lastname );     
    }

    setGrades( grades: Array< number > ): void {
        this.grades = grades;
    }

    getGrades(): Array< number > {
        return this.grades;
    }

    setGroups( groups: Array< string > ): void {
        this.groups = groups;
    }

    getGroups(): Array< string > {
        return this.groups;
    }

    setProfession( profession: string ): void {
        this.profession = profession;
    }

    getProfession(): string {
        return this.profession;
    }

    setStudents( students: Student): void{
        this.students.push( students );
    }
    
    getStudents(): Array< Student >{
        return this.students;
    }
    
}