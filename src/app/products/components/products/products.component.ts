import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from '../../models/products.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: IProducts[];

  private getProductSubscription = new Subscription();

  constructor(
    private productService: ProductService,
  ) { }

  ngOnDestroy(): void {
    this.getProductSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public addNewProduct(titleProduct: string) {    
    if (titleProduct) {
      this.products.push({
        id: this.products.length += 1,
        price: 0,
        image: '',
        title: titleProduct
      });
    }
  }

  private getProducts() {
    this.getProductSubscription = this.productService
      .getProducts()
      .subscribe(
        (res) => this.products = res,
        (error) => console.error(error)
      );
  }

}
