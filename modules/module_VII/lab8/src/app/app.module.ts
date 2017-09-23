import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { StudentsPage } from "../pages/students/students";
import { TeachersPage } from "../pages/teachers/teachers";
import { ModalStudentPage } from "../pages/modal-student/modal-student";
import { ModalTeacherPage } from "../pages/modal-teacher/modal-teacher";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    StudentsPage,
    TeachersPage,
    ModalStudentPage,
    ModalTeacherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__my_form_db',
         driverOrder: ['websql','indexeddb', 'sqlite']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StudentsPage,
    TeachersPage,
    ModalStudentPage,
    ModalTeacherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
