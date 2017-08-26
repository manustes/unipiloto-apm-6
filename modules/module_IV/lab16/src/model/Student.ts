
import { Person } from "../model/Person";


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