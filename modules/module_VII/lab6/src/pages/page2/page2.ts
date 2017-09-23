import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalProfilePage } from "../modal-profile/modal-profile";

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(ModalProfilePage, { userId: 8675309, name: 'Alejandro' });
    profileModal.present();
  }

}
