import { Component, OnInit, Input } from '@angular/core';
import { Driver } from "../../model/Driver";

@Component({
  selector: 'app-driverdetail',
  templateUrl: './driverdetail.component.html',
  styleUrls: ['./driverdetail.component.css']
})
export class DriverdetailComponent implements OnInit {

  @Input()
  driver: Driver;

  constructor() { }

  ngOnInit() {
  }

}
