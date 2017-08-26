export class Driver {
    
      id: number;
      license: number;
      first_name: string;
      last_name: string;
      age: number;
    
      constructor(id: number, license: number, first_name: string, last_name: string, age: number){
    
        this.id = id;
        this.license = license;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    
      }
}