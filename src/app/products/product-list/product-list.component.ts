import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }

}
