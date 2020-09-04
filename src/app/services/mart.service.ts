import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiProductService } from './api-product.service';
import { map } from 'rxjs/operators';
import { MartItem } from '../models/mart-item.model';
import { ProductDto } from '../interfaces/product-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class MartService {

  private subject = new BehaviorSubject<MartItem[]>([]);

  constructor(
    private api: ApiProductService) { }

  get martItems$(): Observable<MartItem[]> {
    return this.subject.asObservable();
  }

  init(): void {
    this.api.getProducts().pipe(
      map(dtos => dtos.map(dto => new MartItem(dto)))
    ).subscribe(
      items => this.subject.next(items)
    );
  }

  addToCart(itemId: number): void {
    const item = this.subject.getValue().find(e => e.id === itemId);
    item.isSelected = true;
  }
}
