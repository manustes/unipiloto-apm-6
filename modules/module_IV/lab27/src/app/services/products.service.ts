import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Product} from "../models/product";
import {PRODUCTS} from "../mocks/product-mock";

@Injectable()
export class ProductsService {

  private productsURI = 'http://localhost:3000/api/products';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.productsURI)
      .map(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts()
      .map( products => {
        return products.find(obj => {
          if (obj.id === id) {
            return true;
          }
        });
      } )
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }

  

}
