import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalStudentPage } from './modal-student';

@NgModule({
  declarations: [
    ModalStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalStudentPage),
  ],
})
export class ModalStudentPageModule {}
