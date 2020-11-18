import { Product } from './../model/product.vm';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];

  @Output() $autoId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPin(autoId: number) {
    this.$autoId.emit(autoId);
  }

}
