import { Observable } from 'rxjs';
import { AccountService } from './account/account.service';
import { Account } from './account/model/account.vm';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  account$: Observable<Account>;

  constructor(private accountService: AccountService) {
    this.account$ = this.accountService.getAccount();
  }

  logout() {
    this.accountService.logout();
  }
}
