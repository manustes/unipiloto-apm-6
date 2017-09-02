import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { InMemoryWebApiModule } from "angular2-in-memory-web-api";

import { InMemoryProductService } from "./mock/in-memory-product.service";
import { ProductService } from "./service/product.service";

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot( InMemoryProductService )
  ],
  providers: [ProductService, 
              InMemoryProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
