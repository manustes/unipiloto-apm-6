import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Teacher } from "../../models/teacher";
import { Storage } from '@ionic/storage';
import { ModalTeacherPage } from "../modal-teacher/modal-teacher";

/**
 * Generated class for the TeachersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teachers',
  templateUrl: 'teachers.html',
})
export class TeachersPage {

  teachers: Array<Teacher> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController) {
    this.loadTeachers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
  }

  loadTeachers() {

    this.storage.get('teachers')
      .then(result => {
        if (result != null)
          this.teachers = result;
      })
      .catch(error => console.error(error));

  }


  createTeacher() {
    let studentModal = this.modalCtrl.create(ModalTeacherPage);
    studentModal.onDidDismiss(data => {
      console.log(data);
      if (data != null) {
        let teacher: Teacher = data['teacher'];
        this.teachers.push(teacher);
        this.storage.set('teachers', this.teachers);
      }
    });
    studentModal.present();
  }

}
