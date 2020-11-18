import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from './../account/model/account.vm';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() title: string;

  @Input() isBurgerOpened: boolean;

  @Input() account: Account;

  @Output() $burgerToggle = new EventEmitter();

  @Output() $logout = new EventEmitter();

  @Output() $signin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    this.$logout.emit();
  }

  signin() {
    this.$signin.emit();
  }

  toggle() {
    this.$burgerToggle.emit();
  }
}
