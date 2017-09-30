import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs } from "@ionic-native/dialogs";

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public dialogs: Dialogs, public geolocation: Geolocation) {
  }

  public loadAlert(msg: string) {
    this.dialogs.alert(msg, 'titulo', 'Aceptar')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
  }

  public loadConfirmAlert(msg: string) {
    this.dialogs.confirm(msg, 'titulo', ['Aceptar', 'Cancelar'])
      .then((option: number) => console.log(option))
      .catch(e => console.log('Error displaying dialog', e));
  }

  public loadPromptAlert(msg: string) {
    this.dialogs.prompt(msg, 'titulo', ['Aceptar', 'Cancelar'], 'Mensaje por defecto')
      .then((obj: any) => console.log(obj))
      .catch(e => console.log('Error displaying dialog', e));
  }

  public obtenerPosicion() {

    let opciones = { enableHighAccuracy: false, timeout: 1000000, maximumAge: 10000 };


    console.log('obtenerPosicion');
    this.geolocation.getCurrentPosition(opciones).then((resp) => {
      console.log('obtuve posicion');
      let msg: string = "Posicion Lat:" + resp.coords.latitude + " Long:" + resp.coords.longitude;
      this.dialogs.alert(msg, 'titulo', 'Aceptar')
        .then(() => console.log('Dialog dismissed'))
        .catch(e => console.log('Error displaying dialog', e));
    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }

}
