import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartsComponent } from './carts.component';

import { ItemListComponent } from './item-list/item-list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CartsComponent, ItemListComponent],
  imports: [
    CommonModule,
    CartsRoutingModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CartsModule { }
