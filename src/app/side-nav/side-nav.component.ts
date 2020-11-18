import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() isOpened: boolean;

  @Output() $navClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onNavClicked() {
    this.$navClicked.emit();
  }

}
