import { Component, OnInit } from '@angular/core';
import { MartService } from '../services/mart.service';

@Component({
  selector: 'app-mart',
  templateUrl: './mart.component.html',
  styleUrls: ['./mart.component.css']
})
export class MartComponent implements OnInit {

  constructor(
    private martService: MartService
  ) { }

  ngOnInit(): void {
    this.martService.init();
  }

}
