import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { StudentsComponent } from "./pages/students/students.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component:  HomeComponent},
  { path: 'Students', component: StudentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
