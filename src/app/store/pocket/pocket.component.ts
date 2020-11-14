import { PocketAuto } from './../model/pocket-auto.vm';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pocket',
  templateUrl: './pocket.component.html',
  styleUrls: ['./pocket.component.css']
})
export class PocketComponent implements OnInit {

  @Input() pocketAutos: PocketAuto[];

  @Output() $autoId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(autoId: number) {
    this.$autoId.emit(autoId);
  }

}
