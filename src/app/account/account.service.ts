import { ReqSignupDto } from './dto/req-signup-dto';
import { ResCredencialDto } from './dto/res-credencial-dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Account } from './model/account.vm';
import { ReqLoginDto } from './dto/req-login-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private subject = new BehaviorSubject<Account>(new Account(false, 'Anonymous', ''));

  constructor(private authService: AuthService) { }

  signup(dto: ReqSignupDto) {
    this.authService.signup(dto).subscribe((resDto: ResCredencialDto) => {
      const account = new Account(true, resDto.email, resDto.access_token);
      this.subject.next(account);
    });
  }

  login(dto: ReqLoginDto) {
    this.authService.login(dto).subscribe((resDto: ResCredencialDto) => {
      const account = new Account(true, resDto.email, resDto.access_token);
      this.subject.next(account);
    });
  }

  logout() {
    this.subject.next(new Account(false, 'Anonymous', ''));
  }

  getAccount(): Observable<Account> {
    return this.subject.asObservable();
  }

  getJwtToken(): string {
    const account = this.subject.value;
    return account.token;
  }
}
