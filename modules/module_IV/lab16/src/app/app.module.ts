import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { TeacherdetailComponent } from './teacherdetail/teacherdetail.component';
import { DriverComponent } from './driver/driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DriverdetailComponent } from './driverdetail/driverdetail.component';
import { VehicledetailComponent } from './vehicledetail/vehicledetail.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from "./app.routing";

import {  APP_BASE_HREF } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    StudentdetailComponent,
    TeacherdetailComponent,
    DriverComponent,
    VehicleComponent,
    DriverdetailComponent,
    VehicledetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue : '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
