import { Component } from '@angular/core';

export class Vehicle {

  brand: string;
  model: string;
  color: string;
  plate: string;
  capcity: string;
  build_year: number;

}

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Vehiculos Registrados';
  vehicles: Vehicle[] = VEHICLE;
  driver: Driver = new Driver(1, 3216547, "Pedro", "Martinez", 28);

}

const VEHICLE: Vehicle[] = [
  {

    brand: "Renault",
    model: "Stepway",
    color: "Azul",
    plate: "AEI123",
    capcity: "5",
    build_year: 2015

  },
  {

    brand: "Chevrolet",
    model: "Corsa",
    color: "Negro",
    plate: "OUA456",
    capcity: "5",
    build_year: 2012

  },
  { 
    brand: "Kia",
    model: "Space",
    color: "Blanco",
    plate: "POI852",
    capcity: "5",
    build_year: 2017

  }



]


