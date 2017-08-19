class Person {

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

class Student extends Person{

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

class Teacher extends Person{

    profession: string;
    grades: Array< number>;
    groups: Array< string >;
    students: Array< Student >;

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

    setStudents( students: Array< Student >): void{
        this.students = students;
    }
    
    getStudents(): Array< Student >{
        return this.students;
    }

}

var alumno1 =  new Student(1, 10, "Ricardo", "guerra");
alumno1.setGrade(7);
alumno1.setGroup("702");
let clases: Array< string > = ["Matematica", "Gramatica", "Deportes"];
alumno1.setClasses( clases );

var alumno2 =  new Student(2, 11, "Carlos", "Poveda");
alumno2.setGrade(8);
alumno2.setGroup("802");
let clases2: Array< string > = ["Matematica", "Musica", "Proyecto"];
alumno2.setClasses( clases2 );

var alumno3 =  new Student(3, 12, "Laura", "Pinzon");
alumno3.setGrade(9);
alumno3.setGroup("904");
let clases3: Array< string > = ["Deportes", "Gramatica", "Musica"];
alumno3.setClasses( clases3 );



var teacher1 = new Teacher( 4, 25, "Raul", "Daza" );
teacher1.setProfession( "Matematico" );
let grades1: Array< number > = [ 8, 9];
let groups1: Array< string > = [ "801", "902", "903"];

teacher1.setGrades( grades1 );
teacher1.setGroups( groups1 );


var teacher2 = new Teacher( 5, 30, "Sandra", "Barreto" );
teacher2.setProfession( "Musico" );
let grades2: Array< number > = [ 8, 9, 1];
let groups2: Array< string > = [ "802", "904", "101"];

teacher2.setGrades( grades1 );
teacher2.setGroups( groups1 );

let arraystudents: Array< Student > = [ alumno1, alumno2, alumno3 ];

teacher1.setStudents( arraystudents );
teacher2.setStudents( arraystudents );


console.log( teacher1 );
console.log( teacher2 );

console.log( alumno1 );


for( let key in arraystudents ){
	console.log(arraystudents[key]);
}







