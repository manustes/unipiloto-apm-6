import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServiceProvider } from "../../providers/product-service/product-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  myForm: FormGroup;
  public product: { name: string, id: number } = { name: '', id: 0 };
  private id: number = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private productServiceProvider: ProductServiceProvider, public formBuilder: FormBuilder,) {
    this.id = parseInt(navParams.get('id'));
    if (this.id) {
      this.productServiceProvider.getProduct(this.id)
        .then(result => {
          console.debug(result);
          this.product = result;
        })
        .catch(err => console.error("error create product: ", err));
    }
    this.myForm = this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  private createForm() {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
    });
  }

  public saveForm() {
    this.productServiceProvider.updateProduct(this.id, this.myForm.value.name)
      .then(result => {
        this.navCtrl.pop();
      })
      .catch(err => console.error("error create product: ", err));
  }

}
