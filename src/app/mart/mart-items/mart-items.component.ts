import { Component, OnInit } from '@angular/core';
import { MartService } from 'src/app/services/mart.service';
import { Observable } from 'rxjs';
import { MartItem } from 'src/app/models/mart-item.model';

@Component({
  selector: 'app-mart-items',
  templateUrl: './mart-items.component.html',
  styleUrls: ['./mart-items.component.css']
})
export class MartItemsComponent implements OnInit {

  martItems$: Observable<MartItem[]>;

  constructor(
    private martService: MartService
  ) { }

  ngOnInit(): void {
    this.martItems$ = this.martService.martItems$;
  }

  addToCart(itemId: number) {
    this.martService.addToCart(itemId);
  }

}
