import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {SalesInvoice} from "../models/sales-invoice";

@Injectable()
export class SalesInvoiceService {

  private salesInvoicesURI = 'http://localhost:3000/api/sales_invoices';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }


  getSalesInvoices(): Observable<SalesInvoice[]>{
    return this.http.get(this.salesInvoicesURI)
    .map(response => response.json().data as SalesInvoice[])
    .catch(this.handleError);
  }

  getSalesInvoicesCustomerDetail(id: number): Observable<SalesInvoice[]>{
    return this.getSalesInvoices()
      .map(salesInvoices => {
        return salesInvoices.filter(obj => {
          if (obj.customer.id === id) {
            return true;
          }
        });
      });
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }

}
