import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogNewProductComponent } from './dialog-new-product/dialog-new-product.component';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent, DialogNewProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ], entryComponents: [DialogNewProductComponent]
})
export class ProductsModule { }
