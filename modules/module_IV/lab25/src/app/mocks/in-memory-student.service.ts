import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Student} from "../models/student";

export class InMemoryStudentService implements InMemoryDbService {
  createDb() {
    let students: Array<Student> = [ 
        new Student(1, 15, "Pedrito", "Perez") ,
        new Student(2, 14, "Maria", "Rojas"),
        new Student(3, 13, "Sandra", "Lopez")   
    ];

    return {students};
  }

}