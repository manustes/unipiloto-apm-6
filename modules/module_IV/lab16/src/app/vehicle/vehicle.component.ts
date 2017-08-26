import { Component, OnInit } from '@angular/core';
import { Vehicle } from "../../model/Vehicle";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  title: string = "Vehiculos";
  
  vehicles: Vehicle[] = [];

  selectedVehicle: Vehicle;

  constructor() {

    this.vehicles.push(new Vehicle("Renault", "Logan", "Blanco", "ASD456", "5", 2017 ));
    this.vehicles.push(new Vehicle("Chevrolet", "Corsa", "Blanco", "PLO456", "5", 2013 ));
    this.vehicles.push(new Vehicle("Mazda", "323", "Blanco", "YHJ852", "5", 2015 ));

    }

  ngOnInit() {
  }

  onSelectVehicle(vehicle: Vehicle){
    this.selectedVehicle = vehicle;
  }

}
