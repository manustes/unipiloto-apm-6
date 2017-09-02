import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InMemoryWebApiModule } from "angular2-in-memory-web-api";
import { HttpModule } from "@angular/http";

//components
import { AppComponent } from './app.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SalesInvoiceComponent } from './pages/sales-invoice/sales-invoice.component';
import { SalesInvoiceDetailComponent } from './pages/sales-invoice-detail/sales-invoice-detail.component';

//services
import { CustomersService } from "./services/customers.service";
import { ProductsService } from "./services/products.service";
import { SalesInvoiceService } from "./services/sales-invoice.service";

//routing
import { AppRoutingModule } from "./app.routing";

//in-memory
import { InMemoryDataService } from "./mocks/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    SalesInvoiceComponent,
    SalesInvoiceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    {
    provide: APP_BASE_HREF, useValue : '/'
    },
    CustomersService,
    ProductsService,
    SalesInvoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
