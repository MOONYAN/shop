import { Observable } from 'rxjs';
import { AccountService } from './account/account.service';
import { Account } from './account/model/account.vm';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GALA GALA';

  account$: Observable<Account>;

  constructor(
    private accountService: AccountService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.account$ = this.accountService.getAccount();
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/account']);
  }

  signin() {
    this.router.navigate(['/account']);
  }
}
