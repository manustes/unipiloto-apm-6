var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(id, age, name, lastname) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.lastname = lastname;
    }
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(id, age, name, lastname) {
        _super.call(this, id, age, name, lastname);
    }
    Student.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    Student.prototype.getClasses = function () {
        return this.classes;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.setGroup = function (group) {
        this.group = group;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, age, name, lastname) {
        _super.call(this, id, age, name, lastname);
        this.students = [];
    }
    Teacher.prototype.setGrades = function (grades) {
        this.grades = grades;
    };
    Teacher.prototype.getGrades = function () {
        return this.grades;
    };
    Teacher.prototype.setGroups = function (groups) {
        this.groups = groups;
    };
    Teacher.prototype.getGroups = function () {
        return this.groups;
    };
    Teacher.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Teacher.prototype.getProfession = function () {
        return this.profession;
    };
    Teacher.prototype.setStudents = function (students) {
        this.students.push(students);
    };
    Teacher.prototype.getStudents = function () {
        return this.students;
    };
    return Teacher;
}(Person));
var alumno1 = new Student(1, 10, "Ricardo", "guerra");
alumno1.setGrade(7);
alumno1.setGroup("702");
var clases = ["Matematica", "Gramatica", "Deportes"];
alumno1.setClasses(clases);
var alumno2 = new Student(2, 11, "Carlos", "Poveda");
alumno2.setGrade(8);
alumno2.setGroup("802");
var clases2 = ["Matematica", "Musica", "Proyecto"];
alumno2.setClasses(clases2);
var alumno3 = new Student(3, 12, "Laura", "Pinzon");
alumno3.setGrade(9);
alumno3.setGroup("904");
var clases3 = ["Deportes", "Gramatica", "Musica"];
alumno3.setClasses(clases3);
var teacher1 = new Teacher(4, 25, "Raul", "Daza");
teacher1.setProfession("Matematico");
var grades1 = [8, 9];
var groups1 = ["801", "902", "903"];
teacher1.setGrades(grades1);
teacher1.setGroups(groups1);
var teacher2 = new Teacher(5, 30, "Sandra", "Barreto");
teacher2.setProfession("Musico");
var grades2 = [8, 9, 1];
var groups2 = ["802", "904", "101"];
teacher2.setGrades(grades1);
teacher2.setGroups(groups1);
teacher1.setStudents(alumno1);
teacher2.setStudents(alumno2);
teacher2.setStudents(alumno3);
console.log(teacher1);
console.log(teacher2);
console.log(alumno1);
