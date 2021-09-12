import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../models/products.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() products: IProducts[];

  constructor() {

  }

  ngOnInit(): void {

  }

}
