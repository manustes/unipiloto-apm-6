import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Student } from "../../models/student";
import { Storage } from '@ionic/storage';
import { ModalStudentPage } from "../modal-student/modal-student";

/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {

  students: Array<Student>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController) {
    this.loadStudents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
  }

  loadStudents() {

    this.storage.get('students')
      .then(result => {
        this.students = result;
      })
      .catch(error => console.error(error));

  }


  createStudent() {
    let studentModal = this.modalCtrl.create(ModalStudentPage);
    studentModal.onDidDismiss(data => {
      console.log(data);
      let student: Student = data;
      this.students.push(student);
    });
    studentModal.present();
  }

}
