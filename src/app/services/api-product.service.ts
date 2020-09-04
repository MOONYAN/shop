import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../interfaces/product-dto.interface';
import { DtoForCreateProduct } from '../interfaces/dto-for-create-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  private readonly API_BASE_URL: string = 'http://localhost:3000/product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(this.API_BASE_URL);
  }

  createProduct(dto: DtoForCreateProduct): Observable<ProductDto> {
    return this.http.post<ProductDto>(this.API_BASE_URL, dto);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.API_BASE_URL}/${productId}`);
  }
}
