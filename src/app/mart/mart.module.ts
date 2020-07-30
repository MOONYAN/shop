import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MartRoutingModule } from './mart-routing.module';
import { MartComponent } from './mart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MartItemsComponent } from './mart-items/mart-items.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MartComponent, MartItemsComponent],
  imports: [
    CommonModule,
    MartRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MartModule { }
