import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductsService} from "../../service/products.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private routeNav: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.productsService.getProduct(id)
        .then(product => this.product = product);
    });
  }


  gotoProducts(){
    this.routeNav.navigate(['products/']);
  }

}
