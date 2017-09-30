import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ModalStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-student',
  templateUrl: 'modal-student.html',
})
export class ModalStudentPage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public formBuilder: FormBuilder) {
    this.myForm = this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalStudentPage');
  }

  dismiss( valor: string) {
    if(valor!=null)
      this.viewCtrl.dismiss( {"student": this.myForm.value });
    else
      this.viewCtrl.dismiss();
  }

  saveForm(){
    this.dismiss('valor');
  }

  private createForm() {
    return this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lastname: ['', Validators.required],
      email: ['', Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')],
      age: ['', Validators.required]
    });
  }

}
