import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products-item';
import { Category } from '../categories';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  //product: Product | undefined;
  products = products;
  category: number | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.category = Number(routeParams.get('CategoryId'));
    //const productIdFromRoute = Number(routeParams.get('CategoryId'));
    /*this.product = products.find(
      (product) => product.id === productIdFromRoute
    );*/
  }
}
