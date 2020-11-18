import { Auto } from './../model/auto.vm';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {

  @Input() autos: Auto[];
  @Output() $autoId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.$autoId.emit(id);
  }

}
