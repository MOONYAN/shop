import { ReqAttachAutoDto } from './dto/req-attach-auto-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResPocketDto } from './dto/res-pocket-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PocketService {

  private readonly API_BASE_URL = `${environment.api_domain}/pocket`;

  private readonly API_ATTACH_URL = `${environment.api_domain}/pocket/auto`;

  private readonly API_DETACH_URL = `${environment.api_domain}/pocket/auto`;

  constructor(private http: HttpClient) { }

  getOnesPocket(): Observable<ResPocketDto> {
    return this.http.get<ResPocketDto>(this.API_BASE_URL);
  }

  attatchAuto(dto: ReqAttachAutoDto): Observable<ResPocketDto> {
    return this.http.post<ResPocketDto>(this.API_ATTACH_URL, dto);
  }

  detachAuto(autoId: number): Observable<ResPocketDto> {
    return this.http.delete<ResPocketDto>(`${this.API_DETACH_URL}/${autoId}`);
  }
}
