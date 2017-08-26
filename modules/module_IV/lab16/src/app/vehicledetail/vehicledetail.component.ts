import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from "../../model/Vehicle";

@Component({
  selector: 'app-vehicledetail',
  templateUrl: './vehicledetail.component.html',
  styleUrls: ['./vehicledetail.component.css']
})
export class VehicledetailComponent implements OnInit {

  @Input()
  vehicle: Vehicle;

  constructor() { }

  ngOnInit() {
  }

}
