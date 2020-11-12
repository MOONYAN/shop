import { Observable } from 'rxjs';
import { ReqSignupDto } from './dto/req-signup-dto';
import { ReqLoginDto } from './dto/req-login-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResCredencialDto } from './dto/res-credencial-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_SIGNUP_URL = 'http://localhost:3000/auth/signup';

  private API_LOGIN_URL = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) { }

  login(dto: ReqLoginDto): Observable<ResCredencialDto> {
    return this.http.post<ResCredencialDto>(this.API_LOGIN_URL, dto);
  }

  signup(dto: ReqSignupDto): Observable<ResCredencialDto> {
    return this.http.post<ResCredencialDto>(this.API_SIGNUP_URL, dto);
  }
}
