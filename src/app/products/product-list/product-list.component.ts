import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.products$;
  }

  onDelete(productId: number) {
    this.productService.deleteProduct(productId);
  }

}
