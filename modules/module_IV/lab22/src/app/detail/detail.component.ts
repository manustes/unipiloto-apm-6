import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../models/product";
import { ProductService } from "../service/product.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private productoService: ProductService) { }

  ngOnInit() {
  }

  update( ){

    this.productoService.update( this.product )
    .then( product => console.log(product) 

    
     
    )
    .catch(error => console.error(error))

  }

}
