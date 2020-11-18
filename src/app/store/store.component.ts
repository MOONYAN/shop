import { ReqAttachAutoDto } from './dto/req-attach-auto-dto';
import { PocketService } from './pocket.service';
import { PocketAuto } from './model/pocket-auto.vm';
import { map, take } from 'rxjs/operators';
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

  $pocketAutos: Observable<PocketAuto[]>;

  constructor(
    private autoService: AutoService,
    private pocketService: PocketService
  ) { }

  ngOnInit(): void {
    this.$products = this.autoService.getMany().pipe(
      map(resAutoDtos => resAutoDtos.map(dto => new Product(dto))),
      take(1)
    );
    this.$pocketAutos = this.pocketService.getOnesPocket().pipe(
      map(resPocketDto => resPocketDto.autos.map(dto => new PocketAuto(dto))),
      take(1)
    );
  }

  attachAuto(autoId: number) {
    const dto = {
      autoId: autoId
    } as ReqAttachAutoDto;

    this.$pocketAutos = this.pocketService.attatchAuto(dto).pipe(
      map(resPocketDto => resPocketDto.autos.map(resAutoDto => new PocketAuto(resAutoDto))),
      take(1)
    );
  }

  detachAuto(autoId: number) {
    this.$pocketAutos = this.pocketService.detachAuto(autoId).pipe(
      map(resPocketDto => resPocketDto.autos.map(dto => new PocketAuto(dto))),
      take(1)
    );
  }
}
