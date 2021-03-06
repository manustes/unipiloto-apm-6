import { Component } from '@angular/core';
import { Product } from "./models/product";
import { ProductService } from "./service/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "los productos del Año";
  
    selected: Product;
  
    products: Product[];
  
    constructor(private productService: ProductService) {
  
    }
  
    getProducts() {
      this.productService.getProducts().then(products => this.products = products);
    }
  
    ngOnInit(): void {
      this.getProducts();
    }
  
    onSelect(product: Product){
      this.selected = product;
    }
  
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.productService.create(name)
        .then(product => {
          this.products.push(product);
          this.selected = null;
        })
        .catch(error => console.error(error));
    }
}
