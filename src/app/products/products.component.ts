import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { DialogNewProductComponent } from './dialog-new-product/dialog-new-product.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.init();
  }

  openDialog() {
    this.dialog.open(DialogNewProductComponent);
  }
}
