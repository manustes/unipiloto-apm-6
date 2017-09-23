import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-profile',
  templateUrl: 'modal-profile.html',
})
export class ModalProfilePage {

  public element: string;
  public name: string;


constructor(public viewCtrl: ViewController, public nav: NavParams) {
  this.element = nav.get('userId');
  this.name = nav.get('name');
};

/*
* La clase ViewController tiene varios metodos que tienen interacción
* con el componente activo
* */
dismiss() {
  this.viewCtrl.dismiss();
}

}
