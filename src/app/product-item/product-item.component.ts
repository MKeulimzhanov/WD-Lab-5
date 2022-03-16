import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
/*
export interface Product {
  id: number;
  item: number;
  name: string;
  description: string;
  rating: string;
}

export const products = [
  {
    id: 1,
    item: 1,
    name: 'IPhone 13 Pro Max',
    description: 'A large phone with one of the best screens',
    rating: 10 / 10,
  },
  {
    id: 2,
    item: 2,
    name: 'IPhone 13 Pro',
    description: 'A great phone with one of the best cameras',
    rating: 9.5 / 10,
  },
  {
    id: 3,
    item: 3,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
];

Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
