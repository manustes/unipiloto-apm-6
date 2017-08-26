import { Component, OnInit } from '@angular/core';
import { Driver } from "../../model/Driver";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  title: string = "Conductores";
  
  drivers: Driver[] = [];

  selectedDriver: Driver;

  constructor() {

    this.drivers.push(new Driver(1, 123456, "Leonardo", "Rojas", 37 ));
    this.drivers.push(new Driver(2, 987654, "Oscar", "Moreno", 29 ));
    this.drivers.push(new Driver(3, 258963, "Clara", "Lopez", 25 ));


    }

  ngOnInit() {
  }

  onSelectDriver(driver: Driver){
    this.selectedDriver = driver;
  }

}
