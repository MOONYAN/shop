import { map } from 'rxjs/operators';
import { AutoService } from './../manage/auto.service';
import { Product } from './model/product.vm';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  $products: Observable<Product[]>;

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.$products = this.autoService.getMany().pipe(
      map(resAutoDtos => resAutoDtos.map(dto => new Product(dto)))
    );
  }

  attachAuto(autoId: number) {

  }

}
