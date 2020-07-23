import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items$ = this.cartService.getItems();
  }

}
