import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListProductsComponent,
    AddProductComponent,
    CardProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
