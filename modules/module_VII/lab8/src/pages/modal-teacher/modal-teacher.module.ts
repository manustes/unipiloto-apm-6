import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTeacherPage } from './modal-teacher';

@NgModule({
  declarations: [
    ModalTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTeacherPage),
  ],
})
export class ModalTeacherPageModule {}
