import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { ResAutoDto } from './dto/res-auto-dto';
import { ReqCreateAutoDto } from './dto/req-create-auto-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private readonly API_BASE_URL = `${environment.api_domain}/auto`;

  constructor(private http: HttpClient) { }

  createOne(dto: ReqCreateAutoDto): Observable<ResAutoDto> {
    return this.http.post<ResAutoDto>(this.API_BASE_URL, dto);
  }

  getMany(): Observable<ResAutoDto[]> {
    return this.http.get<ResAutoDto[]>(this.API_BASE_URL);
  }

  getOne(id: number): Observable<ResAutoDto> {
    return this.http.get<ResAutoDto>(`${this.API_BASE_URL}/${id}`);
  }

  deleteOne(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_BASE_URL}/${id}`);
  }
}
