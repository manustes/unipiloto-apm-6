import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Customer} from "../models/customer";
import {CUSTOMERS} from "../mocks/customer-mock";

@Injectable()
export class CustomersService {

  private customersURI = 'http://localhost:3000/api/customers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get(this.customersURI)
    .map(response => response.json().data as Customer[])
    .catch(this.handleError);
  }

  getProduct(id: number): Observable<Customer> {
    return this.getCustomers()
      .map( customers => {
        return customers.find(obj => {
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
