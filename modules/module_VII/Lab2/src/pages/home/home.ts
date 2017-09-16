import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from "../../models/products";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Samsung galaxy 8",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  },
  {
    id: 2,
    name: "Samsung galaxy 10",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  },
  {
    id: 3,
    name: "Samsung galaxy 20",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  }
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  title: string = "los productos del Año";  
  selected: Product;
  products: Product[] = PRODUCTS;

  constructor(public navCtrl: NavController) {

  }  
  
  onSelect(product: Product){
    this.selected = product;
  }

}
