import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Customer} from "../models/customer";
import {CUSTOMERS} from "../mocks/customer-mock";

@Injectable()
export class CustomersService {

  private customersURI = 'http://localhost:3000/api/customers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCustomers(): Promise<Customer[]>{
    return this.http.get(this.customersURI)
    .toPromise()
    .then(response => response.json().data as Customer[])
    .catch(this.handleError);
  }

  getProduct(id: number): Promise<Customer> {
    return this.getCustomers()
      .then(customers => customers.find(customer => customer.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
