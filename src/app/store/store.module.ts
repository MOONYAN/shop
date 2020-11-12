import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [StoreComponent, ProductListComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
  ]
})
export class StoreModule { }
