import { SignupMOdel } from './model/signup-model.vm';
import { AccountService } from './account.service';
import { LoginModel } from './model/login-model.vm';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnDestroy {

  private accountSub: Subscription;

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountSub = this.accountService.getAccount().subscribe(account => {
      if (account.isLogin) {
        this.onLogined();
      }
    });
  }

  ngOnDestroy(): void {
    this.accountSub.unsubscribe();
  }

  login(loginModel: LoginModel) {
    const dto = loginModel.toReqDto();
    this.accountService.login(dto);
  }

  signup(signupModel: SignupMOdel) {
    const dto = signupModel.toReqDto();
    this.accountService.signup(dto);
  }

  onLogined() {
    this.router.navigate(['/manage']);
  }
}
