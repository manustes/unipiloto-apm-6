import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ProductDetailComponent} from '../pages/detail.component';

import { AppComponent } from './app.component';
import { PruebaComponent } from './src/prueba/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }