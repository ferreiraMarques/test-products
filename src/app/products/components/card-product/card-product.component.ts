import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../models/products.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product: IProducts;

  constructor() {
  }

  ngOnInit(): void {

  }

}
