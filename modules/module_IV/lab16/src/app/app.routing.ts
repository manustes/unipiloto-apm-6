import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { DriverComponent } from "./driver/driver.component";
import { StudentComponent } from "./student/student.component";
import { TeacherComponent } from "./teacher/teacher.component";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component:  HomeComponent},
  { path: 'teachers',  component:  TeacherComponent},
  { path: 'students', component: StudentComponent },
  { path: 'drivers', component: DriverComponent },
  { path: 'vehicles', component: VehicleComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}