import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ApiProductService } from './api-product.service';
import { DtoForCreateProduct } from '../interfaces/dto-for-create-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private subject = new BehaviorSubject<Product[]>([])

  constructor(private api: ApiProductService) { }

  get products$(): Observable<Product[]> {
    return this.subject.asObservable();
  }

  init(): void {
    this.api.getProducts().pipe(
      map(dtos => dtos.map(dto => new Product(dto)))
    ).subscribe(
      products => this.subject.next(products)
    );
  }

  createProduct(dto: DtoForCreateProduct): void {
    this.api.createProduct(dto as DtoForCreateProduct).pipe(
      map(productDto => new Product(productDto))
    ).subscribe(
      product => {
        const products = [...this.subject.getValue(), product];
        this.subject.next(products);
      }
    );
  }

  deleteProduct(productId: number): void {
    const products = this.subject.getValue()
      .filter(product => product.id !== productId);
    this.subject.next(products);
    this.api.deleteProduct(productId).subscribe();
  }
}
