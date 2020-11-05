import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MartRoutingModule } from './mart-routing.module';
import { MartComponent } from './mart.component';
import { MartItemsComponent } from './mart-items/mart-items.component';



@NgModule({
  declarations: [MartComponent, MartItemsComponent],
  imports: [
    CommonModule,
    MartRoutingModule,
    SharedModule
  ]
})
export class MartModule { }
