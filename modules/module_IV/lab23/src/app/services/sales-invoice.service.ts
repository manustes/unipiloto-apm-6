import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {SalesInvoice} from "../models/sales-invoice";

@Injectable()
export class SalesInvoiceService {

  private salesInvoicesURI = 'http://localhost:3000/api/sales_invoices';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }


  getSalesInvoices(): Promise<SalesInvoice[]>{
    return this.http.get(this.salesInvoicesURI)
    .toPromise()
    .then(response => response.json().data as SalesInvoice[])
    .catch(this.handleError);
  }

  getSalesInvoicesCustomerDetail(id: number): Promise<SalesInvoice[]>{
    return this.getSalesInvoices()
      .then(salesInvoices => {
        return salesInvoices.filter(obj => {
          if (obj.customer.id === id) {
            return true;
          }
        });
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
