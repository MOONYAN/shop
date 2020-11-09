import { Auto } from './../model/auto.vm';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {

  @Input() autos: Auto[];

  constructor() { }

  ngOnInit(): void {
  }

}
