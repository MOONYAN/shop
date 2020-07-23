import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  items: Item[] = [];

  constructor() { }

  add(product: Product) {
    this.items.push({
      amount: 1,
      product
    } as Item);
  }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }
}
